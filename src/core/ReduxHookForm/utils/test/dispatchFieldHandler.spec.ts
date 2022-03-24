// utils
import { dispatchFieldHandler } from '../dispatchFieldHandler';

describe('dispatchFieldHandler', () => {
  const mockCallBack = jest.fn();
  const dispatch = dispatchFieldHandler(mockCallBack, 'testForm', 'testField');

  it('should trigger dispatch', () => {
    dispatch({}, '');
    expect(mockCallBack.mock.calls.length).toBe(1);
  });
});
