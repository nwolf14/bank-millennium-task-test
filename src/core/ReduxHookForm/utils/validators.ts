// others
import { TAsyncValidator, TSyncValidator } from '../types';
import { TField } from '../../../store/reduxHookForm/types';
import { TObject } from './../../../types';

export const getErrorsFromAsyncValidators = async (
  validators: Array<TAsyncValidator>,
  value: boolean | number | string | Array<string>,
  subscribedFields: TObject<TField> | undefined
): Promise<Array<string>> => {
  const errors = [];

  for (const validator of validators) {
    errors.push(await validator(value, subscribedFields));
  }

  return errors.filter((error) => error);
};

export const getErrorsFromSyncValidators = (
  validators: Array<TSyncValidator>,
  value: boolean | number | string | Array<string>,
  subscribedFields: TObject<TField> | undefined
): Array<string> =>
  validators
    .map((validator) => validator(value, subscribedFields))
    .filter((error) => error);
