import classnames from 'classnames';
import isArray from 'lodash/isArray';
import { cloneElement, FC, MouseEvent, ReactElement } from 'react';

// hooks
import { useTheme } from '../../../../../../hooks/useTheme/useTheme';

// others
import { className, classNames } from './classNames';
import { Size } from '../../../TextField/enums';
import { TProps as TSelectItemProps } from '../SelectItem/SelectItem';

// styles
import './select-options.scss';

export type TProps = Pick<TSelectItemProps, 'classNameItem'> & {
  children: ReactElement | Array<ReactElement>;
  classNameOptions?: string;
  onClick: (event: MouseEvent<HTMLElement>) => void;
  selected: boolean;
  size: Size;
  value: string | Array<string>;
};

export const SelectOptions: FC<TProps> = ({
  children,
  classNameItem,
  classNameOptions = '',
  onClick,
  selected,
  size,
  value,
}) => {
  const { classNamesWithTheme } = useTheme(classNames);

  return (
    <div
      className={classnames(
        classNamesWithTheme[className].name,
        {
          [classNamesWithTheme[className].modificators.selected]: selected,
        },
        classNamesWithTheme[className].modificators[size],
        classNameOptions
      )}
    >
      <ul className={classNamesWithTheme.list} onClick={onClick}>
        {isArray(children)
          ? children.map((children, index) =>
              cloneElement(children as ReactElement, {
                ...(children as ReactElement).props,
                classNameItem,
                index,
                key: index,
                selectedValue: value,
              })
            )
          : cloneElement(children, {
              ...children.props,
              classNameItem,
              index: 1,
              selectedValue: value,
            })}
      </ul>
    </div>
  );
};

export default SelectOptions;
