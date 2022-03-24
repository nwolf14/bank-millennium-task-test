import get from 'lodash/get';
import isArray from 'lodash/isArray';
import isObject from 'lodash/isObject';
import { ReactElement } from 'react';

// utils
import { isReactElement } from './isReactElement';

export const findChildren = (
  children: ReactElement | Array<ReactElement>,
  component: any
): ReactElement | null => {
  switch (true) {
    case isArray(children):
      return findChildrenByArray(
        children as unknown as Array<ReactElement>,
        component
      );
    case isObject(children):
      return findChildrenByObject(
        children as unknown as ReactElement,
        component
      );
    default:
      return null;
  }
};

export const findChildrenByArray = (
  children: Array<ReactElement>,
  component: any
): ReactElement | null => {
  for (let i = 0; i < children.length; i++) {
    const child = findChildren(children[i], component);

    if (child) {
      return child;
    }
  }

  return null;
};

export const findChildrenByObject = (
  children: ReactElement,
  component: any
): ReactElement | null => {
  if (!isReactElement(children, component)) {
    const childrenFromProps = get(children, 'props.children');

    if (childrenFromProps) {
      return findChildren(childrenFromProps, component);
    }

    return null;
  }

  return children;
};

export const findReactElement = (
  children: ReactElement | Array<ReactElement>,
  component: any
): ReactElement | null => findChildren(children, component);
