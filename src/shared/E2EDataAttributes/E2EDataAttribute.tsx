import React, { Children, FC, ReactChild, ReactElement } from 'react';

// others
import { DATA_TEST_PREFIX } from './constants';
import { E2EAttribute } from './enums';

type TProps = {
  children: ReactElement<ReactChild>;
  type?: E2EAttribute;
  value?: number | string;
};

const E2EDataAttribute: FC<TProps> = ({ children, type = '', value = '' }) => {
  const childrenOnly = Children.only(children);

  if (!type && !value) {
    return childrenOnly;
  }

  return React.cloneElement(childrenOnly, {
    [`${DATA_TEST_PREFIX}-${type}`]: value,
  });
};

export default E2EDataAttribute;
