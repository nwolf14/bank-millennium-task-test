import { ReactElement } from 'react';

// utils
import { getValue } from '../utils';

jest.mock('react', () => ({
  ...(jest.requireActual('react') as Object),
  isValidElement: () => true,
}));

describe('getValue', () => {
  it('should be unchecked', () => {
    const children = 'test';
    const result: any = getValue(children as unknown as ReactElement, null);

    expect(result).toBe(false);
  });

  it('should be checked', () => {
    const children = { props: { value: true }, type: { name: 'Checkbox' } };
    const result: any = getValue(children as unknown as ReactElement, true);

    expect(result).toBe(true);
  });

  it('should be checked when controlledChecked is true', () => {
    const children = { props: { value: false }, type: { name: 'Checkbox' } };
    const result: any = getValue(children as unknown as ReactElement, true);

    expect(result).toBe(true);
  });

  it('should be unchecked when controlledChecked is false', () => {
    const children = { props: { value: true }, type: { name: 'Checkbox' } };
    const result: any = getValue(children as unknown as ReactElement, false);

    expect(result).toBe(false);
  });
});
