import keys from 'lodash/keys';
import { Dispatch } from 'redux';

// others
import { SET_TOUCHED_FIELD } from '../../../store/reduxHookForm/actionsType';
import { TField } from '../../../store/reduxHookForm/types';
import { TObject } from '../../../types';

// store
import { updateField } from '../../../store/reduxHookForm/actions';

export const markInputsAsTouched = (
  dispatch: Dispatch<any>,
  formName: string,
  fields: TObject<TField>
): void => {
  const names = keys(fields);

  names.forEach((name) => {
    dispatch(
      updateField(
        {
          field: { touched: true },
          formName,
          name,
        },
        SET_TOUCHED_FIELD
      )
    );
  });
};
