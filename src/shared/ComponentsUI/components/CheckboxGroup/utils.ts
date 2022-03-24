import isArray from 'lodash/isArray';
import { ReactElement } from 'react';

import Checkbox, { TProps as TCheckboxProps } from '../Checkbox/Checkbox';

// utils
import { findReactElement } from '../../../../utils/react-children/findReactElement';

export const getValue = (
  children: ReactElement<TCheckboxProps>,
  defaultValue: boolean | null
): boolean => {
  if (defaultValue !== null) {
    return defaultValue;
  }

  const element = (findReactElement(children, Checkbox) as {
    props: { defaultValue: boolean };
  }) || {
    props: { defaultValue: false },
  };

  return element.props.defaultValue || false;
};

export const getInitialValue = (
  children: ReactElement<TCheckboxProps> | Array<ReactElement<TCheckboxProps>>,
  defaultValue: Array<boolean> | null
): Array<boolean> => {
  if (isArray(children)) {
    return children.map((child, index) =>
      getValue(child, (defaultValue && defaultValue[index]) || null)
    );
  }

  return [getValue(children, (defaultValue && defaultValue[0]) || null)];
};
