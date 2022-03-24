// utils
import { getRandomKey } from '../getRandomKey';

describe('getRandomKey', () => {
  it('Should return unique keys', () => {
    const keys: Array<string> = [];

    keys.push(getRandomKey(keys));
    keys.push(getRandomKey(keys));

    expect(keys[0]).not.toBe(keys[1]);
  });
});
