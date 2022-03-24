import { ReactElement } from 'react';

// utils
import { findChildren } from '../findReactElement';

jest.mock('react', () => ({
  ...(jest.requireActual('react') as Object),
  isValidElement: () => true,
}));

describe('findChildren', () => {
  it('should return null', () => {
    const children = 'test';
    const element: any = findChildren(
      children as unknown as ReactElement,
      'Component'
    );

    expect(element).toBe(null);
  });

  it('should return component when children is single component', () => {
    const children = {
      type: { name: 'Wrapper' },
      props: { children: { type: { name: 'Component' } } },
    };
    const element: any = findChildren(children as ReactElement, 'Component');

    expect(element).toEqual({ type: { name: 'Component' } });
  });

  it('should return component when children consist of components', () => {
    const children = {
      type: { name: 'Wrapper' },
      props: {
        children: [
          { type: { name: 'TestComponent' } },
          {
            props: {
              children: [
                { type: { name: 'Wrapper' } },
                { type: { name: 'Component' } },
              ],
            },
            type: { name: 'Wrapper' },
          },
        ],
      },
    };
    const element: any = findChildren(children as ReactElement, 'Component');

    expect(element).toEqual({ type: { name: 'Component' } });
  });
});
