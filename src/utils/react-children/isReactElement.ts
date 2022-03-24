import { isString } from 'lodash';
import { isValidElement, ReactElement } from 'react';

export const isReactElement = (
  child: ReactElement,
  component: any
): boolean => {
  if (!isValidElement(child)) {
    /* istanbul ignore next */
    return false;
  }

  if (isString(component)) {
    return (child.type as { name: string }).name === component;
  }

  return child.type === component;
};
