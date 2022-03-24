import { renderHook } from '@testing-library/react-hooks';

// hooks
import { useField } from '../useField';

// tests
import { getProviderWrapper } from '../../../../tests/testHelpers';

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

describe('useField', () => {
  const formName = 'testForm';
  const name = 'testField';

  it('should return input & meta props', () => {
    const { result } = renderHook(() => useField(formName, name), {
      wrapper: getProviderWrapper(stateMock),
    });
    const expectedResult = {
      name: 'testField',
      onBlur: result.current.onBlur,
      onChange: result.current.onChange,
      onFocus: result.current.onFocus,
      value: '',
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
});
