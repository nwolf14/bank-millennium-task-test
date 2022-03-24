// store
import { updateField } from '../../../store/reduxHookForm/actions';
import { TActionsField } from '../../../store/reduxHookForm/types';

export const dispatchFieldHandler =
  (dispatch: Function, formName: string, name: string) =>
  (objectField: { [key: string]: any }, actionType: TActionsField) =>
    dispatch(
      updateField(
        {
          field: {
            ...objectField,
          },
          formName,
          name,
        },
        actionType
      )
    );
