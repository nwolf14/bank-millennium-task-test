// others
import { TSyncValidator } from './../../types';

// utils
import { getErrorsFromSyncValidators } from '../validators';

describe('getErrorsFromSyncValidators', () => {
  const syncValidator = (value: any) => (value ? 'Success' : 'Error');

  it('should trigger validators & return errors', () => {
    const validators = [
      () => syncValidator(''),
      () => syncValidator('value'),
    ] as Array<TSyncValidator>;
    const result = getErrorsFromSyncValidators(validators, '', undefined);

    expect(result).toStrictEqual(['Error', 'Success']);
  });
});
