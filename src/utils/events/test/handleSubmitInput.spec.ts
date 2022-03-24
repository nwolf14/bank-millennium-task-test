import { KeyboardEvent } from 'react';

// others
import { KeyboardKeys } from '../../../enums';

// utils
import { handleSubmitInput } from '../handleSubmitInput';

describe('handleSubmitInput', () => {
  const mockCallBack = jest.fn();

  it('should trigger blur if key is correct & object exists', () => {
    handleSubmitInput(KeyboardKeys.enter, { blur: mockCallBack })({
      key: KeyboardKeys.enter,
    } as KeyboardEvent<HTMLInputElement>);

    expect(mockCallBack.mock.calls.length).toBe(1);
  });

  it('should not trigger blur if key is not correct', () => {
    handleSubmitInput(KeyboardKeys.enter, { blur: mockCallBack })({
      key: KeyboardKeys.delete,
    } as KeyboardEvent<HTMLInputElement>);

    expect(mockCallBack.mock.calls.length).toBe(0);
  });

  it('should not trigger blur if ref is null', () => {
    handleSubmitInput(
      KeyboardKeys.enter,
      null
    )({
      key: KeyboardKeys.delete,
    } as KeyboardEvent<HTMLInputElement>);

    expect(mockCallBack.mock.calls.length).toBe(0);
  });
});
