import { ReactElement } from 'react';

// utils
import { findChildrenByArray } from '../findReactElement';

jest.mock('react', () => ({
  ...(jest.requireActual('react') as Object),
  isValidElement: () => true,
}));

describe('findChildrenByArray', () => {
  it('should return null when children is array but component being find not exists', () => {
    const children = [
      {
        type: { name: 'Wrapper' },
        props: {
          children: [
            { type: { name: 'TestComponent' } },
            {
              props: {
                children: [
                  { type: { name: 'Wrapper' } },
                  { type: { name: 'Wrapper' } },
                ],
              },
              type: { name: 'Wrapper' },
            },
          ],
        },
      },
    ];
    const element: any = findChildrenByArray(
      children as Array<ReactElement>,
      'Component'
    );

    expect(element).toEqual(null);
  });

  it('should return component when children is array', () => {
    const children = [
      {
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
      },
    ];
    const element: any = findChildrenByArray(
      children as Array<ReactElement>,
      'Component'
    );

    expect(element).toEqual({ type: { name: 'Component' } });
  });
});
