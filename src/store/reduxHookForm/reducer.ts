import omit from 'lodash/omit';

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
import { TReduxHookFormState } from './types';

// utils
import {
  getUpdatedFieldsState,
  getFieldsWithModifiedAttributes,
  notifyFields,
} from './utils';

type TAnyAction = {
  type: string;
  payload?: any;
};

const initialState: TReduxHookFormState = {};

const destroyForm = (
  state: TReduxHookFormState,
  { payload: formName }: TAnyAction
): TReduxHookFormState => omit(state, [formName]);

const initField = (
  state: TReduxHookFormState,
  { payload: { formName, field, name } }: TAnyAction
): TReduxHookFormState => ({
  ...state,
  [formName]: {
    ...state[formName],
    fields: getUpdatedFieldsState(field, formName, name, state),
  },
});

const mountForm = (
  state: TReduxHookFormState,
  { payload }: TAnyAction
): TReduxHookFormState => ({ ...state, ...payload });

const submit = (
  state: TReduxHookFormState,
  { payload: formName }: TAnyAction
): TReduxHookFormState => {
  notifyFields(formName, state, 'before');

  return {
    ...state,
    [formName]: {
      ...state[formName],
      error: '',
      fields: getFieldsWithModifiedAttributes(formName, state),
      isPending: true,
    },
  };
};

const submitError = (
  state: TReduxHookFormState,
  { payload: { error, formName } }: TAnyAction
): TReduxHookFormState => {
  notifyFields(formName, state, 'after');
  return {
    ...state,
    [formName]: {
      ...state[formName],
      error,
      isPending: false,
    },
  };
};

const submitSuccess = (
  state: TReduxHookFormState,
  { payload: formName }: TAnyAction
): TReduxHookFormState => {
  notifyFields(formName, state, 'after');
  return {
    ...state,
    [formName]: {
      ...state[formName],
      isPending: false,
    },
  };
};

const updateField = (
  state: TReduxHookFormState,
  { payload: { formName, field, name } }: TAnyAction
): TReduxHookFormState => ({
  ...state,
  [formName]: {
    ...state[formName],
    fields: getUpdatedFieldsState(field, formName, name, state),
  },
});

const updateForm = (
  state: TReduxHookFormState,
  { payload: { form, formName } }: TAnyAction
): TReduxHookFormState => ({
  ...state,
  [formName]: {
    ...state[formName],
    ...form,
  },
});

const reduxHookForm = (
  state: TReduxHookFormState = initialState,
  action: TAnyAction
): TReduxHookFormState => {
  switch (action.type) {
    case DESTROY_FORM:
      return destroyForm(state, action);
    case INIT_FIELD:
      return initField(state, action);
    case MOUNT_FORM:
      return mountForm(state, action);
    case SUBMIT:
      return submit(state, action);
    case SUBMIT_ERROR:
      return submitError(state, action);
    case SUBMIT_SUCCESS:
      return submitSuccess(state, action);
    case BLUR:
    case CHANGE:
    case FOCUS:
    case SET_PENDING_FIELD:
    case SET_TOUCHED_FIELD:
    case UPDATE_ASYNC_ERRORS:
    case UPDATE_SYNC_ERRORS:
      return updateField(state, action);
    case SET_PENDING:
    case UPDATE_FORM_VALIDATOR:
      return updateForm(state, action);
    /* istanbul ignore next */
    default:
      /* istanbul ignore next */
      return state;
  }
};

export default reduxHookForm;
