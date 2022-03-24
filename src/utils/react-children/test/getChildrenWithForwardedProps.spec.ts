import { ReactElement } from 'react';

// utils
import { getChildrenWithForwardedProps } from '../getChildrenWithForwardedProps';

jest.mock('react', () => ({
  ...(jest.requireActual('react') as Object),
  isValidElement: () => true,
}));

describe('getChildrenWithForwardedProps', () => {
  it('should return text', () => {
    const props = { test: 'test' };
    const children = 'test';
    const context: any = getChildrenWithForwardedProps(
      children as unknown as ReactElement,
      props,
      'Component'
    );

    expect(context).toBe('test');
  });

  it('should return single component with forwarded props', () => {
    const props = { test: 'test' };
    const children = { type: { name: 'Component' } };
    const context: any = getChildrenWithForwardedProps(
      children as ReactElement,
      props,
      'Component'
    );

    expect(context.props).toEqual({ test: 'test', index: 0 });
  });

  it('should return component inside wrapper with forwarded props', () => {
    const props = { test: 'test' };
    const children = {
      props: { children: { type: { name: 'Component' } } },
      type: { name: 'Wrapper' },
    };
    const context: any = getChildrenWithForwardedProps(
      children as ReactElement,
      props,
      'Component'
    );

    expect(context.props).not.toEqual({ test: 'test', index: 0 });
    expect(context.props.children.props).toEqual({ test: 'test', index: 0 });
  });

  it('should return components inside wrapper with forwarded props', () => {
    const props = { test: 'test' };
    const children = {
      props: {
        children: [
          { type: { name: 'Component' } },
          { type: { name: 'Component' } },
        ],
      },
      type: { name: 'Wrapper' },
    };
    const context: any = getChildrenWithForwardedProps(
      children as ReactElement,
      props,
      'Component'
    );

    expect(context.props).not.toEqual({ test: 'test', index: 0 });
    expect(context.props.children[0].props).toEqual({ test: 'test', index: 0 });
    expect(context.props.children[1].props).toEqual({ test: 'test', index: 1 });
  });
});
