// others
import { TField } from './../../../../store/reduxHookForm/types';
import { TObject } from './../../../../types';

// utils
import { markInputsAsTouched } from '../markInputsAsTouched';

describe('markInputsAsTouched', () => {
  const mockCallBack = jest.fn();

  it('should mark all inputs as touched', () => {
    const fiels = {
      testField1: { touched: false },
      testField2: { touched: false },
    } as unknown as TObject<TField>;
    const dispatch = mockCallBack;

    markInputsAsTouched(dispatch, 'testForm', fiels);
    expect(mockCallBack.mock.calls.length).toBe(2);
  });
});
