import { renderHook } from '@testing-library/react-hooks';

// hooks
import { useValidators } from '../useValidators';

// others
import { TAsyncValidator, TSyncValidator } from '../../../../types';

// tests
import { getProviderWrapper } from '../../../../../../tests/testHelpers';

const mockCallBack = jest.fn();
const stateMock = {
  reduxHookForm: {
    testForm: {
      asyncTimeDelay: 0,
      error: '',
      fields: {
        testField1: {
          active: false,
          asyncErrors: [],
          initialValue: '',
          isPending: false,
          syncErrors: [],
          touched: false,
          touchedAfterClick: false,
          value: '',
          visited: false,
        },
        testField2: {
          active: false,
          asyncErrors: [],
          initialValue: '',
          isPending: false,
          syncErrors: [],
          touched: false,
          touchedAfterClick: false,
          value: '',
          visited: false,
        },
      },
      isPending: false,
      isValid: false,
    },
  },
};

jest.mock('../../../../utils/dispatchFieldHandler', () => ({
  dispatchFieldHandler: () => mockCallBack,
}));

jest.mock('lodash', () => ({
  ...(jest.requireActual('lodash') as Object),
  debounce: async (callback: any) => await callback(),
}));

describe('useValidators', () => {
  const asyncValidator = (value: any) =>
    new Promise((resolve) => resolve(value ? 'Success' : 'Error'));
  const syncValidator = (value: any) => (value ? 'Success' : 'Error');
  const asyncValidators = [
    () => asyncValidator(''),
    () => asyncValidator('value'),
  ] as Array<TAsyncValidator>;
  const syncValidators = [
    () => syncValidator(''),
    () => syncValidator('value'),
  ] as Array<TSyncValidator>;

  it('should return async errors', async () => {
    const { result } = renderHook(
      () =>
        useValidators(
          asyncValidators,
          'testForm',
          'testField1',
          [],
          syncValidators
        ),
      {
        wrapper: getProviderWrapper(stateMock),
      }
    );
    const { getAsyncErrors } = result.current;
    const resultFromValidators = await getAsyncErrors('');

    expect(resultFromValidators).toStrictEqual(['Error', 'Success']);
  });

  it('should return sync errors', () => {
    const { result } = renderHook(
      () =>
        useValidators(
          asyncValidators,
          'testForm',
          'testField1',
          [],
          syncValidators
        ),
      {
        wrapper: getProviderWrapper(stateMock),
      }
    );
    const { getSyncErrors } = result.current;
    const resultFromValidators = getSyncErrors('');

    expect(resultFromValidators).toStrictEqual(['Error', 'Success']);
  });

  it('should trigger async validators', async () => {
    const { result } = renderHook(
      () =>
        useValidators(
          asyncValidators,
          'testForm',
          'testField1',
          [],
          syncValidators
        ),
      {
        wrapper: getProviderWrapper(stateMock),
      }
    );

    await result.current.updateAsyncValidators;
    expect(mockCallBack.mock.calls.length).toBe(2);
  });

  it('should trigger sync validators', () => {
    const { result } = renderHook(
      () =>
        useValidators(
          asyncValidators,
          'testForm',
          'testField1',
          [],
          syncValidators
        ),
      {
        wrapper: getProviderWrapper(stateMock),
      }
    );

    result.current.updateSyncValidators('');
    expect(mockCallBack.mock.calls.length).toBe(2);
  });

  it('should compare sync error with value from another field', () => {
    const compoareValidator: TSyncValidator = (value: any, fields: any) =>
      value === fields.testField2.value ? 'Equal' : 'Not Equal';

    const { result } = renderHook(
      () =>
        useValidators(
          asyncValidators,
          'testForm',
          'testField1',
          ['testField2'],
          [...syncValidators, compoareValidator]
        ),
      {
        wrapper: getProviderWrapper(stateMock),
      }
    );

    const { getSyncErrors } = result.current;
    const resultFromValidators = getSyncErrors('');

    expect(resultFromValidators).toStrictEqual(['Error', 'Success', 'Equal']);
  });
});
