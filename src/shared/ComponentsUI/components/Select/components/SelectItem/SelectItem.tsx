import isArray from 'lodash/isArray';
import classnames from 'classnames';
import { FC, ReactNode } from 'react';

// hooks
import { useTheme } from '../../../../../../hooks/useTheme/useTheme';
import { useRippleEffect } from '../../../../../../hooks/useRippleEffect/useRippleEffect';

// others
import { className, classNames } from './classNames';

// styles
import './select-item.scss';

export type TProps = {
  children: ReactNode;
  classNameItem?: string;
  disabled?: boolean;
  index?: number;
  selectedValue?: string | Array<string>;
  value: string;
};

export const SelectItem: FC<TProps> = ({
  children,
  classNameItem = '',
  disabled = false,
  index = -1,
  selectedValue,
  value,
}) => {
  const { classNamesWithTheme } = useTheme(classNames);
  const { rippleEffect, triggerRippleEffect } = useRippleEffect(
    classNamesWithTheme[className].modificators.rippleEffect
  );

  const isSelected = (): boolean =>
    isArray(selectedValue)
      ? selectedValue.includes(value)
      : selectedValue === value;

  return (
    <li
      className={classnames(
        classNamesWithTheme[className].name,
        {
          [classNamesWithTheme[className].modificators.disabled]: disabled,
        },
        {
          [classNamesWithTheme[className].modificators.selected]: isSelected(),
        },
        classNameItem
      )}
      data-testid={`select-item-${index}`}
      data-value={value}
      onClick={triggerRippleEffect}
      role="option"
    >
      {children}
      {rippleEffect}
    </li>
  );
};

export default SelectItem;
