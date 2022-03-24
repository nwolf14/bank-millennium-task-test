import { ReactElement } from 'react';

// utils
import { isReactElement } from '../isReactElement';

jest.mock('react', () => ({
  ...(jest.requireActual('react') as Object),
  isValidElement: () => true,
}));

describe('isReactElement', () => {
  it('should return true when component name is correct', () => {
    const child = { type: { name: 'Component' } };

    expect(isReactElement(child as ReactElement, 'Component')).toBe(true);
  });

  it('should return false when component name is incorrect', () => {
    const child = { type: { name: 'Component1' } };

    expect(isReactElement(child as ReactElement, 'Component2')).toBe(false);
  });
});
