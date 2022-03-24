import { ReactElement } from 'react';

// utils
import { findChildrenByObject } from '../findReactElement';

jest.mock('react', () => ({
  ...(jest.requireActual('react') as Object),
  isValidElement: () => true,
}));

describe('findChildrenByObject', () => {
  it('should return null', () => {
    const children = { type: { name: '' } };
    const element: any = findChildrenByObject(
      children as unknown as ReactElement,
      'Component'
    );

    expect(element).toBe(null);
  });

  it('should return component when children is single component', () => {
    const children = {
      type: { name: 'Wrapper' },
      props: {
        children: {
          props: { children: { type: { name: 'Component' } } },
          type: { name: 'Wrapper' },
        },
      },
    };
    const element: any = findChildrenByObject(
      children as ReactElement,
      'Component'
    );

    expect(element).toEqual({ type: { name: 'Component' } });
  });
});
