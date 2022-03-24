// others
import { fieldMock, formMock } from './mocks';
import { TAnyAction } from '../../../types';
import { TReduxHookFormState } from '../types';

// store
import reduxHookFormReducer from '../reducer';
import {
  BLUR,
  CHANGE,
  FOCUS,
  SET_PENDING,
  SET_PENDING_FIELD,
  SET_TOUCHED_FIELD,
  UPDATE_ASYNC_ERRORS,
  UPDATE_FORM_VALIDATOR,
  UPDATE_SYNC_ERRORS,
} from './../actionsType';
import {
  destroyForm,
  initField,
  mountForm,
  submit,
  submitError,
  submitSuccess,
  updateField,
  updateForm,
} from '../actions';

describe('TeduxHookFormReducer', () => {
  const reducer = (
    action: TAnyAction,
    initialState = {}
  ): TReduxHookFormState =>
    reduxHookFormReducer(initialState as TReduxHookFormState, action);

  it('should handle BLUR', () => {
    const updateFieldPayload = {
      field: { active: false, touched: true, value: '' },
      formName: 'testForm',
      name: 'testField',
    };
    const state = reducer(updateField(updateFieldPayload, BLUR), {
      testForm: {
        ...formMock,
        fields: { testField: { ...fieldMock, active: true } },
      },
    });

    expect(state).toEqual({
      testForm: {
        ...formMock,
        fields: {
          ...formMock.fields,
          testField: {
            ...fieldMock,
            active: false,
            touched: true,
            value: '',
          },
        },
      },
    });
  });

  it('should handle CHANGE', () => {
    const updateFieldPayload = {
      field: { modified: true, value: '' },
      formName: 'testForm',
      name: 'testField',
    };
    const state = reducer(updateField(updateFieldPayload, CHANGE), {
      testForm: { ...formMock, fields: { testField: fieldMock } },
    });

    expect(state).toEqual({
      testForm: {
        ...formMock,
        fields: {
          ...formMock.fields,
          testField: {
            ...fieldMock,
            modified: true,
            value: '',
          },
        },
      },
    });
  });

  it('should handle FOCUS', () => {
    const updateFieldPayload = {
      field: { modified: true, value: '' },
      formName: 'testForm',
      name: 'testField',
    };
    const state = reducer(updateField(updateFieldPayload, FOCUS), {
      testForm: { ...formMock, fields: { testField: fieldMock } },
    });

    expect(state).toEqual({
      testForm: {
        ...formMock,
        fields: {
          ...formMock.fields,
          testField: {
            ...fieldMock,
            modified: true,
            value: '',
          },
        },
      },
    });
  });

  it('should handle DESTROY_FORM', () => {
    const destroyFormPayload = 'testForm';
    const state = reducer(destroyForm(destroyFormPayload), {
      testForm: formMock,
    });

    expect(state).toEqual({});
  });

  it('should handle INIT_FIELD', () => {
    const initFieldPayload = {
      field: fieldMock,
      formName: 'testForm',
      name: 'testField',
    };
    const state = reducer(initField(initFieldPayload), { testForm: formMock });

    expect(state).toEqual({
      testForm: {
        ...formMock,
        fields: {
          testField: fieldMock,
        },
      },
    });
  });

  it('should handle MOUNT_FORM', () => {
    const mountFormPayload = { testForm: formMock };
    const state = reducer(mountForm(mountFormPayload), {});

    expect(state).toEqual({
      testForm: formMock,
    });
  });

  it('should handle SET_PENDING', () => {
    const updateFormPayload = {
      form: { isPending: true },
      formName: 'testForm',
    };
    const state = reducer(updateForm(updateFormPayload, SET_PENDING), {
      testForm: formMock,
    });

    expect(state).toEqual({
      testForm: {
        ...formMock,
        isPending: true,
      },
    });
  });

  it('should handle SET_PENDING_FIELD', () => {
    const updateFieldPayload = {
      field: { isPending: true },
      formName: 'testForm',
      name: 'testField',
    };
    const state = reducer(updateField(updateFieldPayload, SET_PENDING_FIELD), {
      testForm: { ...formMock, fields: { testField: fieldMock } },
    });

    expect(state).toEqual({
      testForm: {
        ...formMock,
        fields: {
          ...formMock.fields,
          testField: {
            ...fieldMock,
            isPending: true,
          },
        },
      },
    });
  });

  it('should handle SET_TOUCHED_FIELD', () => {
    const updateFieldPayload = {
      field: { touched: true },
      formName: 'testForm',
      name: 'testField',
    };
    const state = reducer(updateField(updateFieldPayload, SET_TOUCHED_FIELD), {
      testForm: { ...formMock, fields: { testField: fieldMock } },
    });

    expect(state).toEqual({
      testForm: {
        ...formMock,
        fields: {
          ...formMock.fields,
          testField: {
            ...fieldMock,
            touched: true,
          },
        },
      },
    });
  });

  it('should handle SUBMIT', () => {
    const submitPayload = 'testForm';
    const state = reducer(submit(submitPayload), {
      testForm: { ...formMock, fields: { testField: fieldMock } },
    });

    expect(state).toEqual({
      testForm: {
        ...formMock,
        fields: {
          ...formMock.fields,
          testField: {
            ...fieldMock,
            modifiedSinceLastSubmit: false,
            valueSinceLastSubmit: '',
          },
        },
        isPending: true,
      },
    });
  });

  it('should handle SUBMIT_ERROR', () => {
    const submitErrorPayload = { error: 'testError', formName: 'testForm' };
    const state = reducer(submitError(submitErrorPayload), {
      testForm: { ...formMock },
    });

    expect(state).toEqual({
      testForm: {
        ...formMock,
        error: 'testError',
        isPending: false,
      },
    });
  });

  it('should handle SUBMIT_SUCCESS', () => {
    const submitSuccessPayload = 'testForm';
    const state = reducer(submitSuccess(submitSuccessPayload), {
      testForm: { ...formMock },
    });

    expect(state).toEqual({
      testForm: {
        ...formMock,
        isPending: false,
      },
    });
  });

  it('should handle SUBMIT_SUCCESS', () => {
    const submitSuccessPayload = 'testForm';
    const state = reducer(submitSuccess(submitSuccessPayload), {
      testForm: { ...formMock },
    });

    expect(state).toEqual({
      testForm: {
        ...formMock,
        isPending: false,
      },
    });
  });

  it('should handle UPDATE_ASYNC_ERRORS', () => {
    const updateFieldPayload = {
      field: { asyncErrors: ['testError'], isPending: false },
      formName: 'testForm',
      name: 'testField',
    };
    const state = reducer(
      updateField(updateFieldPayload, UPDATE_ASYNC_ERRORS),
      {
        testForm: {
          ...formMock,
          fields: {
            testField: { ...fieldMock, isPending: true },
          },
        },
      }
    );

    expect(state).toEqual({
      testForm: {
        ...formMock,
        fields: {
          ...formMock.fields,
          testField: {
            ...fieldMock,
            asyncErrors: ['testError'],
            isPending: false,
          },
        },
      },
    });
  });

  it('should handle UPDATE_FORM_VALIDATOR', () => {
    const updateFormPayload = {
      form: { isValid: true },
      formName: 'testForm',
    };
    const state = reducer(
      updateForm(updateFormPayload, UPDATE_FORM_VALIDATOR),
      {
        testForm: formMock,
      }
    );

    expect(state).toEqual({
      testForm: {
        ...formMock,
        isValid: true,
      },
    });
  });

  it('should handle UPDATE_SYNC_ERRORS', () => {
    const updateFieldPayload = {
      field: { syncErrors: ['testError'] },
      formName: 'testForm',
      name: 'testField',
    };
    const state = reducer(updateField(updateFieldPayload, UPDATE_SYNC_ERRORS), {
      testForm: {
        ...formMock,
        fields: {
          testField: fieldMock,
        },
      },
    });

    expect(state).toEqual({
      testForm: {
        ...formMock,
        fields: {
          ...formMock.fields,
          testField: {
            ...fieldMock,
            syncErrors: ['testError'],
          },
        },
      },
    });
  });
});
