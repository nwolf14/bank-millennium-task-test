import { THookType as TMetaProps } from '../../core/ReduxHookForm/components/Field/hooks/useMetaProps';

export const isInvalidState = (
  errors: Array<string>,
  touched: boolean
): boolean => touched && errors.length > 0;

export const getErrorMessage = (meta: TMetaProps): string => {
  const { errors, touched } = meta;

  if (isInvalidState(errors, touched)) {
    return errors[0];
  }

  return '';
};
