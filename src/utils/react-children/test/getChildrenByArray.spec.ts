import { ReactElement } from 'react';

// utils
import { getChildrenByArray } from '../getChildrenWithForwardedProps';

jest.mock('react', () => ({
  ...(jest.requireActual('react') as Object),
  isValidElement: () => true,
}));

describe('getChildrenByArray', () => {
  it('should return components with forwarded props', () => {
    const props = { test: 'test' };
    const children = [
      { type: { name: 'Component' } },
      { type: { name: 'Component' } },
    ];

    const context: any = getChildrenByArray(
      children as Array<ReactElement>,
      props,
      [],
      'Component'
    );

    expect(context[0].props).toEqual({ test: 'test', index: 0 });
    expect(context[1].props).toEqual({ test: 'test', index: 1 });
  });

  it('should return components without forwarded props', () => {
    const props = { test: 'test' };
    const children = [
      { type: { name: 'Component1' } },
      { type: { name: 'Component1' } },
    ];

    const context: any = getChildrenByArray(
      children as Array<ReactElement>,
      props,
      [],
      'Component2'
    );

    expect(context[0].props).toEqual({});
    expect(context[1].props).toEqual({});
  });
});
