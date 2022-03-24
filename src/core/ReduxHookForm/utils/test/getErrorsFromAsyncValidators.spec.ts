// others
import { TAsyncValidator } from './../../types';

// utils
import { getErrorsFromAsyncValidators } from '../validators';

describe('getErrorsFromAsyncValidators', () => {
  const asyncValidator = (value: any) =>
    new Promise((resolve) => resolve(value ? 'Success' : 'Error'));

  it('should trigger validators & return errors', async () => {
    const validators = [
      () => asyncValidator(''),
      () => asyncValidator('value'),
    ] as Array<TAsyncValidator>;
    const result = await getErrorsFromAsyncValidators(
      validators,
      '',
      undefined
    );

    expect(result).toStrictEqual(['Error', 'Success']);
  });
});
