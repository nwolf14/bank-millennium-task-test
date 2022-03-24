import isEmpty from 'lodash/isEmpty';
import { useSelector } from 'react-redux';

// store
import {
  getFieldSelectorCreator,
  getFormAttributesSelectorCreator,
} from '../../../../../store/reduxHookForm/selectors';

export type THookType = {
  active: boolean;
  data: { [key: string]: any } | undefined;
  dirty: boolean;
  dirtyLastSinceLastSubmit: boolean | undefined;
  errors: Array<string>;
  initialValue: boolean | number | string | Array<string>;
  invalid: boolean;
  modified: boolean | undefined;
  modifiedSinceLastSubmit: boolean | undefined;
  pristine: boolean;
  submitting: boolean;
  touched: boolean;
  valid: boolean;
  validating: boolean;
  visited: boolean;
};

export const useMetaProps = (
  formName: string,
  name: string
): Partial<THookType> => {
  const field = useSelector(getFieldSelectorCreator(formName, name));
  const {
    active,
    asyncErrors,
    data,
    initialValue,
    isPending,
    modified,
    modifiedSinceLastSubmit,
    syncErrors,
    touched,
    value,
    valueSinceLastSubmit,
    visited,
  } = field || {};
  const isDirtyLastSinceLastSubmit =
    valueSinceLastSubmit !== undefined
      ? { dirtyLastSinceLastSubmit: value !== valueSinceLastSubmit }
      : {};
  const isPendingForm = useSelector(
    getFormAttributesSelectorCreator('isPending', formName)
  ) as boolean;

  if (isEmpty(field)) {
    return {};
  }

  return {
    active,
    ...(data ? { data: data } : {}),
    dirty: initialValue !== value,
    ...isDirtyLastSinceLastSubmit,
    errors: [...asyncErrors, ...syncErrors],
    initialValue,
    invalid: !isEmpty([...asyncErrors, ...syncErrors]),
    modified,
    ...(modifiedSinceLastSubmit !== undefined
      ? { modifiedSinceLastSubmit: modifiedSinceLastSubmit }
      : {}),
    pristine: value === initialValue,
    submitting: isPendingForm,
    touched,
    valid: isEmpty([...asyncErrors, ...syncErrors]),
    validating: isPending,
    visited,
  };
};
