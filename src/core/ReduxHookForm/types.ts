// others
import { TField } from '../../store/reduxHookForm/types';
import { TObject } from './../../types';

export type TAsyncValidator = (
  value: boolean | number | string | Array<string>,
  subscribedFields: TObject<TField> | undefined
) => Promise<string>;

export type TSyncValidator = (
  value: boolean | number | string | Array<string>,
  subscribedFields: TObject<TField> | undefined
) => string;
