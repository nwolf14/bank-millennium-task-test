import { renderHook } from '@testing-library/react-hooks';

// hooks
import { useForm } from '../useForm';

// tests
import { getProviderWrapper } from '../../../../tests/testHelpers';

const stateMock = {
  reduxHookForm: {
    testForm: {
      asyncTimeDelay: 0,
      error: '',
      isPending: false,
      isValid: false,
    },
  },
};

describe('useForm', () => {
  const formName = 'testForm';

  it('should return form props', () => {
    const { result } = renderHook(() => useForm(formName), {
      wrapper: getProviderWrapper(stateMock),
    });
    const expectedResult = {
      asyncTimeDelay: 0,
      error: '',
      isPending: false,
      isValid: false,
    };

    expect(result.current).toStrictEqual(expectedResult);
  });
});
