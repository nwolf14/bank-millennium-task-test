import { ReactElement } from 'react';

// utils
import { getChildrenByObject } from '../getChildrenWithForwardedProps';

jest.mock('react', () => ({
  ...(jest.requireActual('react') as Object),
  isValidElement: () => true,
}));

describe('getChildrenByObject', () => {
  it('should return component with forwarded props', () => {
    const props = { test: 'test' };
    const children = { type: { name: 'Component' } };
    const context: any = getChildrenByObject(
      children as ReactElement,
      props,
      [],
      'Component',
      0
    );

    expect(context.props).toEqual({ test: 'test', index: 0 });
  });

  it('should return component without forwarded props', () => {
    const props = { test: 'test' };
    const children = { type: { name: 'Component1' } };
    const context: any = getChildrenByObject(
      children as ReactElement,
      props,
      [],
      'Component2',
      0
    );

    expect(context.props).toEqual({});
  });
});
