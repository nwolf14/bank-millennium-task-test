import { renderHook } from '@testing-library/react-hooks';

// hooks
import { useInputProps } from '../useInputProps';

// tests
import { getProviderWrapper } from '../../../../../../tests/testHelpers';

const mockCallBack = jest.fn();
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

jest.mock('../../../../utils/dispatchFieldHandler', () => ({
  dispatchFieldHandler: () => mockCallBack,
}));

describe('useInputProps', () => {
  it('should return input props & trigger every events', () => {
    const { result } = renderHook(
      () => useInputProps('testForm', 'testField'),
      {
        wrapper: getProviderWrapper(stateMock),
      }
    );
    const { name, onBlur, onChange, onFocus, value } = result.current;

    onBlur('');
    onChange('');
    onFocus('');

    expect(name).toBe('testField');
    expect(value).toBe('');
    expect(mockCallBack.mock.calls.length).toBe(3);
  });
});
