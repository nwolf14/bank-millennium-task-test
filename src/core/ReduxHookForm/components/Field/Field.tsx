import { defer } from 'lodash';
import {
  FC,
  forwardRef,
  ForwardRefExoticComponent,
  ReactNode,
  RefObject,
  useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

// hooks
import { useInputProps } from './hooks/useInputProps';
import {
  THookType as TFieldMetaProps,
  useMetaProps,
} from './hooks/useMetaProps';
import { useValidators } from './hooks/useValidators';

// others
import { TAsyncValidator, TSyncValidator } from '../../types';
import { TProps as TTextFieldProps } from '../../../../shared/ComponentsUI/components/TextField/TextField';
import { TProps as TCheckboxProps } from '../../../../shared/ComponentsUI/components/Checkbox/Checkbox';
import { TProps as TRadioButtonProps } from '../../../../shared/ComponentsUI/components/RadioButton/RadioButton';
import { TProps as TSwitchProps } from '../../../../shared/ComponentsUI/components/Switch/Switch';

// store
import { getFieldSelectorCreator } from '../../../../store/reduxHookForm/selectors';
import { initField } from '../../../../store/reduxHookForm/actions';
import { InputValueType } from './enums';

export type TProps = Partial<TCheckboxProps> &
  Partial<TRadioButtonProps> &
  Partial<TSwitchProps> &
  Partial<TTextFieldProps> & {
    afterSubmit?: () => void;
    asyncValidators?: Array<TAsyncValidator>;
    beforeSubmit?: () => void;
    children?: (
      metaProps: Partial<TFieldMetaProps>,
      restProps?: any
    ) => ReactNode;
    Component?: FC<any> | ForwardRefExoticComponent<any>;
    data?: { [key: string]: any };
    formatOnBlur?: (
      value: boolean | number | string | Array<string>,
      name: string
    ) => boolean | number | string;
    formatOnChange?: (
      value: boolean | number | string | Array<string>,
      name: string
    ) => boolean | number | string;
    formatOnFocus?: (
      value: boolean | number | string | Array<string>,
      name: string
    ) => boolean | number | string;
    formatOnInit?: (
      value: boolean | number | string | Array<string>
    ) => boolean | number | string;
    formName?: string;
    inputValueType?: InputValueType;
    name: string;
    parse?: (
      value: boolean | number | string | Array<string>,
      name: string
    ) => boolean | number | string;
    ref?: RefObject<HTMLInputElement>;
    subscriptionFields?: Array<string>;
    syncValidators?: Array<TSyncValidator>;
    touched?: boolean;
    touchedAfterClick?: boolean;
    visited?: boolean;
  };

const Field = forwardRef<HTMLInputElement, TProps>(
  (
    {
      afterSubmit,
      asyncValidators = [],
      beforeSubmit,
      children,
      Component,
      data,
      defaultValue,
      formatOnBlur,
      formatOnChange,
      formatOnFocus,
      formatOnInit,
      formName = '',
      inputValueType = InputValueType.string,
      name = '',
      parse,
      subscriptionFields = [],
      syncValidators = [],
      touched: initialTouched = false,
      touchedAfterClick = false,
      visited: initialVisited = false,
      ...restProps
    },
    ref
  ) => {
    const field = useSelector(getFieldSelectorCreator(formName, name));
    const { touched, value = '', visited } = field || {};
    const dispatch = useDispatch();
    const inputProps = useInputProps(formName, name);
    const metaProps = useMetaProps(formName, name);
    const { getSyncErrors, updateAsyncValidators, updateSyncValidators } =
      useValidators(
        asyncValidators,
        formName,
        name,
        subscriptionFields,
        syncValidators
      );
    const wrapperRestProps = {
      ...inputProps,
      ...restProps,
      ...(ref ? { ref: ref } : {}),
    };

    const getInitialValue = (): boolean | number | string | Array<string> => {
      const initValue = formatOnInit
        ? formatOnInit(defaultValue || '')
        : defaultValue;

      switch (inputValueType) {
        case InputValueType.boolean:
          return initValue || false;
        case InputValueType.number:
          return initValue || 0;
        default:
          return initValue || '';
      }
    };

    useEffect(() => {
      if (formName) {
        const initialValue = getInitialValue();

        defer(() => {
          dispatch(
            initField({
              field: {
                afterSubmit,
                active: false,
                asyncErrors: [],
                beforeSubmit,
                data,
                formatOnBlur,
                formatOnChange,
                formatOnFocus,
                initialValue: value,
                isPending: false,
                parse,
                syncErrors: getSyncErrors(initialValue),
                touched: initialTouched,
                touchedAfterClick,
                value: initialValue,
                visited: initialVisited,
              },
              formName,
              name,
            })
          );
        });
      }
    }, [formName]);

    useEffect(() => {
      if (field) {
        updateAsyncValidators(value);
        updateSyncValidators(value);
      }
    }, [touched, value, visited]);

    if (children) {
      return <>{children(metaProps, wrapperRestProps)}</>;
    }

    if (Component) {
      return <Component meta={metaProps} {...wrapperRestProps} />;
    }

    return null;
  }
);

export default Field;
