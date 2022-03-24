// store
import {
  DESTROY_FORM,
  INIT_FIELD,
  MOUNT_FORM,
  SUBMIT,
  SUBMIT_SUCCESS,
  SUBMIT_ERROR,
} from './actionsType';
import {
  TActionsField,
  TDestroyFormAction,
  TField,
  TForm,
  TMountFormAction,
  TFieldAction,
  TFormAction,
  TInitFieldAction,
  TSubmitAction,
  TSubmitSuccessAction,
  TSubmitErrorAction,
  TActionsForm,
} from './types';

export const destroyForm = (formName: string): TDestroyFormAction => ({
  payload: formName,
  type: DESTROY_FORM,
});

export const initField = (payload: {
  field: Partial<TField>;
  formName: string;
  name: string;
}): TInitFieldAction => ({
  payload,
  type: INIT_FIELD,
});

export const mountForm = (payload: {
  [key: string]: TForm;
}): TMountFormAction => ({
  payload,
  type: MOUNT_FORM,
});

export const submit = (formName: string): TSubmitAction => ({
  payload: formName,
  type: SUBMIT,
});

export const submitError = (payload: {
  error: string;
  formName: string;
}): TSubmitErrorAction => ({
  payload,
  type: SUBMIT_ERROR,
});

export const submitSuccess = (formName: string): TSubmitSuccessAction => ({
  payload: formName,
  type: SUBMIT_SUCCESS,
});

export const updateField = (
  payload: {
    field: Partial<TField>;
    formName: string;
    name: string;
  },
  type: TActionsField
): TFieldAction => ({
  payload,
  type,
});

export const updateForm = (
  payload: {
    form: Partial<TForm>;
    formName: string;
  },
  type: TActionsForm
): TFormAction => ({
  payload,
  type,
});
