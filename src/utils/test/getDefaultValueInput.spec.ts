// utils
import { getDefaultValueInput } from '../getDefaultValueInput';

describe('getDefaultValueInput', () => {
  it('Should return false', () => {
    expect(getDefaultValueInput('checkbox')).toBe(false);
  });

  it('Should return 0', () => {
    expect(getDefaultValueInput('number')).toBe(0);
  });

  it('Should return empty string', () => {
    expect(getDefaultValueInput('text')).toBe('');
  });
});
