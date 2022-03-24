import get from 'lodash/get';
import isArray from 'lodash/isArray';
import isObject from 'lodash/isObject';
import { cloneElement, ReactElement, ReactNode } from 'react';

// utils
import { getRandomKey } from '../getRandomKey';
import { isReactElement } from './isReactElement';

export const getChildren = (
  children: ReactElement | Array<ReactElement>,
  props: { [key: string]: any },
  keys: Array<string>,
  component: any,
  index: number
): ReactNode | string => {
  switch (true) {
    case isArray(children):
      return getChildrenByArray(
        children as unknown as Array<ReactElement>,
        props,
        keys,
        component
      );
    case isObject(children):
      return getChildrenByObject(
        children as unknown as ReactElement,
        props,
        keys,
        component,
        index
      );
    default:
      return children;
  }
};

export const getChildrenByArray = (
  children: Array<ReactElement>,
  props: { [key: string]: any },
  keys: Array<string>,
  component: any
): ReactNode[] =>
  children.map((children: ReactElement, index) =>
    getChildren(children, props, keys, component, index)
  );

export const getChildrenByObject = (
  children: ReactElement,
  props: { [key: string]: any },
  keys: Array<string>,
  component: any,
  index: number
): {} => {
  if (!isReactElement(children, component)) {
    const childrenFromProps = get(children, 'props.children');

    if (childrenFromProps) {
      return cloneElement(children, {
        ...children.props,
        children: getChildren(childrenFromProps, props, keys, component, 0),
        key: getRandomKey(keys),
      });
    }

    return cloneElement(children, {
      ...children.props,
      key: getRandomKey(keys),
    });
  }

  return cloneElement(children, {
    ...children.props,
    ...props,
    index,
    key: getRandomKey(keys),
  });
};

export const getChildrenWithForwardedProps = (
  children: ReactElement | Array<ReactElement>,
  props: { [key: string]: any },
  component: any
): ReactNode => getChildren(children, props, [], component, 0);
