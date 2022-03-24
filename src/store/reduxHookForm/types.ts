// store
import {
  BLUR,
  CHANGE,
  DESTROY_FORM,
  FOCUS,
  INIT_FIELD,
  MOUNT_FORM,
  SET_PENDING,
  SET_PENDING_FIELD,
  SET_TOUCHED_FIELD,
  SUBMIT,
  SUBMIT_ERROR,
  SUBMIT_SUCCESS,
  UPDATE_ASYNC_ERRORS,
  UPDATE_FORM_VALIDATOR,
  UPDATE_SYNC_ERRORS,
} from './actionsType';

export type TField = {
  active: boolean;
  afterSubmit?: () => void;
  asyncErrors: Array<string>;
  beforeSubmit?: () => void;
  data: { [key: string]: any };
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
  initialValue: boolean | number | string | Array<string>;
  isPending: boolean;
  modified?: boolean;
  modifiedSinceLastSubmit?: boolean;
  parse?: (
    value: boolean | number | string | Array<string>,
    name: string
  ) => boolean | number | string;
  syncErrors: Array<string>;
  touched: boolean;
  touchedAfterClick: boolean;
  value: boolean | number | string | Array<string>;
  valueSinceLastSubmit?: boolean | number | string | Array<string>;
  visited: boolean;
};

export type TForm = {
  asyncTimeDelay: number;
  error: string;
  fields: { [key: string]: TField };
  isPending: boolean;
  isValid: boolean;
};

export type TReduxHookFormState = {
  [key: string]: TForm;
};

export type TMountFormAction = {
  payload: { [key: string]: TForm };
  type: typeof MOUNT_FORM;
};

export type TDestroyFormAction = {
  payload: string;
  type: typeof DESTROY_FORM;
};

export type TSubmitAction = {
  payload: string;
  type: typeof SUBMIT;
};

export type TSubmitSuccessAction = {
  payload: string;
  type: typeof SUBMIT_SUCCESS;
};

export type TSubmitErrorAction = {
  payload: {
    error: string;
    formName: string;
  };
  type: typeof SUBMIT_ERROR;
};

export type TActionsForm = typeof SET_PENDING | typeof UPDATE_FORM_VALIDATOR;

export type TFormAction = {
  payload: { form: Partial<TForm>; formName: string };
  type: TActionsForm;
};

export type TActionsField =
  | typeof BLUR
  | typeof CHANGE
  | typeof FOCUS
  | typeof MOUNT_FORM
  | typeof SET_PENDING_FIELD
  | typeof SET_TOUCHED_FIELD
  | typeof UPDATE_ASYNC_ERRORS
  | typeof UPDATE_SYNC_ERRORS;

export type TFieldAction = {
  payload: {
    field: Partial<TField>;
    name: string;
    formName: string;
  };
  type: TActionsField;
};

export type TInitFieldAction = {
  payload: {
    field: Partial<TField>;
    name: string;
    formName: string;
  };
  type: typeof INIT_FIELD;
};
