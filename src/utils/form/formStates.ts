// others
import { TField } from '../../store/reduxHookForm/types';
import { TObject } from '../../types';

export const validateForm = (fields: TObject<TField>) => {
  if (fields) {
    for (const [, { asyncErrors, syncErrors }] of Object.entries(fields)) {
      if (asyncErrors.length || syncErrors.length) {
        return false;
      }
    }
  }

  return true;
};
