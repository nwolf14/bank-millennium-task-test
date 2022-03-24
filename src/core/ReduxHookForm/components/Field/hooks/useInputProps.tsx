import { useDispatch, useSelector } from 'react-redux';

// others
import { TField } from '../../../../../store/reduxHookForm/types';

// store
import {
  BLUR,
  CHANGE,
  FOCUS,
} from '../../../../../store/reduxHookForm/actionsType';
import {
  getFieldAttributesSelectorCreator,
  getFieldSelectorCreator,
} from '../../../../../store/reduxHookForm/selectors';

// utils
import { dispatchFieldHandler } from '../../../utils/dispatchFieldHandler';

export type THookType = {
  name: string;
  onBlur: (value: boolean | number | string) => void;
  onChange: (value: boolean | number | string) => void;
  onFocus: (value: boolean | number | string) => void;
  value: boolean | number | string;
};

export const useInputProps = (formName: string, name: string): THookType => {
  const dispatchField = dispatchFieldHandler(useDispatch(), formName, name);
  const value = useSelector(
    getFieldAttributesSelectorCreator('value', formName, name)
  ) as keyof TField;
  const isValueSinceLastSubmit =
    useSelector(
      getFieldAttributesSelectorCreator('valueSinceLastSubmit', formName, name)
    ) !== undefined;
  const touchedAfterClick = useSelector(
    getFieldAttributesSelectorCreator('touchedAfterClick', formName, name)
  ) as keyof TField;

  const { formatOnBlur, formatOnChange, formatOnFocus } =
    useSelector(getFieldSelectorCreator(formName, name)) || {};

  const onBlurHandler = (
    value: boolean | number | string | Array<string>
  ): void => {
    dispatchField(
      {
        active: false,
        touched: true,
        ...(formatOnBlur ? { value: formatOnBlur(value, name) } : {}),
      },
      BLUR
    );
  };

  const onChangeHandler = (
    value: boolean | number | string | Array<string>
  ): void =>
    dispatchField(
      {
        ...(isValueSinceLastSubmit ? { modifiedSinceLastSubmit: true } : {}),
        modified: true,
        ...(touchedAfterClick ? { touched: true } : {}),
        value: formatOnChange ? formatOnChange(value, name) : value,
      },
      CHANGE
    );

  const onFocusHandler = (
    value: boolean | number | string | Array<string>
  ): void =>
    dispatchField(
      {
        active: true,
        value: formatOnFocus ? formatOnFocus(value, name) : value,
        visited: true,
      },
      FOCUS
    );

  return {
    name,
    onBlur: onBlurHandler,
    onChange: onChangeHandler,
    onFocus: onFocusHandler,
    value,
  };
};
