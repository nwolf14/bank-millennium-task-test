import { renderHook } from '@testing-library/react-hooks';

// hooks
import { useMetaProps } from '../useMetaProps';

// tests
import { getProviderWrapper } from '../../../../../../tests/testHelpers';

const stateMock = {
  reduxHookForm: {
    testForm: {
      asyncTimeDelay: 0,
      error: '',
      fields: {
        testField: {
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

describe('useMetaProps', () => {
  it('should return meta props', () => {
    const { result } = renderHook(() => useMetaProps('testForm', 'testField'), {
      wrapper: getProviderWrapper(stateMock),
    });
    const expectedResult = {
      active: false,
      dirty: false,
      errors: [],
      initialValue: '',
      invalid: false,
      modified: undefined,
      pristine: true,
      submitting: false,
      touched: false,
      valid: true,
      validating: false,
      visited: false,
    };

    expect(result.current).toStrictEqual(expectedResult);
  });

  it('should return empty object when field is not exist', () => {
    const { result } = renderHook(() => useMetaProps('testForm', 'unknown'), {
      wrapper: getProviderWrapper(stateMock),
    });
    const expectedResult = {};

    expect(result.current).toStrictEqual(expectedResult);
  });
});
