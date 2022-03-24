import forOwn from 'lodash/forOwn';
import {
  FunctionComponent,
  memo,
  ReactElement,
  ReactNode,
  useEffect,
  useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

// components
import Field from '../Field/Field';

// others
import { TField } from '../../../../store/reduxHookForm/types';
import { TObject } from '../../../../types';

// store
import {
  destroyForm,
  mountForm,
  submit,
  updateForm,
} from '../../../../store/reduxHookForm/actions';
import { getFieldsSelectorCreator } from '../../../../store/reduxHookForm/selectors';
import { UPDATE_FORM_VALIDATOR } from '../../../../store/reduxHookForm/actionsType';

// utils
import { getChildrenWithForwardedProps } from '../../../../utils/react-children/getChildrenWithForwardedProps';
import { markInputsAsTouched } from '../../utils/markInputsAsTouched';

export type TProps = {
  asyncTimeDelay?: number;
  children: ReactNode;
  formName: string;
  isValid?: boolean;
  onSubmit: (formData: {
    [key: string]: boolean | number | string | Array<string>;
  }) => void;
  validate?: (fields: { [key: string]: TField }) => boolean;
};
const Form: FunctionComponent<TProps> = ({
  asyncTimeDelay = 0,
  children,
  formName,
  isValid: isValidInitial = false,
  onSubmit,
  validate = () => true,
}) => {
  const dispatch = useDispatch();
  const content = useMemo(
    () =>
      getChildrenWithForwardedProps(
        children as ReactElement,
        { formName },
        Field
      ),
    [children, formName]
  );
  const fields = useSelector(getFieldsSelectorCreator(formName));

  const onValidateHandler = (): void => {
    const isValid = validate(fields as TObject<TField>);

    dispatch(
      updateForm({ form: { isValid }, formName }, UPDATE_FORM_VALIDATOR)
    );
  };

  const onSubmitHandler = (event: any): void => {
    event.preventDefault();

    dispatch(submit(formName));
    onSubmit(getFieldsValues());
    markInputsAsTouched(dispatch, formName, fields as TObject<TField>);
    onValidateHandler();
  };

  const getFieldsValues = () => {
    const formData: {
      [key: string]: boolean | number | string | Array<string>;
    } = {};

    forOwn(fields, (field: TField, name: string) => {
      const { parse, value } = field;
      formData[name] = parse ? parse(value, name) : value;
    });

    return formData;
  };

  useEffect(() => {
    dispatch(
      mountForm({
        [formName]: {
          asyncTimeDelay,
          error: '',
          fields: {},
          isPending: false,
          isValid: isValidInitial,
        },
      })
    );

    return () => {
      dispatch(destroyForm(formName));
    };
  }, []);

  return <form onSubmit={onSubmitHandler}>{content}</form>;
};

const memoizedForm = memo(Form, (prevProps: TProps, props: TProps): boolean => {
  /* istanbul ignore next */
  if (prevProps !== props) {
    /* istanbul ignore next */
    return true;
  }
  /* istanbul ignore next */
  return false;
});

export default memoizedForm;
