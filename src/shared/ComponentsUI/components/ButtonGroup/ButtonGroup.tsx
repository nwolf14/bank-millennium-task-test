import classnames from 'classnames';
import { FC, ReactElement, useMemo } from 'react';

// others
import { className as classNameButtonGroup, classNames } from './classNames';
import { Color, Variant } from '../Button/enums';
import { Orientation } from './enums';
import { TProps as TButtonProps } from '../Button/Button';

// utils
import { getChildrenWithForwardedProps } from '../../../../utils/react-children/getChildrenWithForwardedProps';

// styles
import './button-group.scss';

export type TProps = Pick<
  TButtonProps,
  | 'className'
  | 'color'
  | 'disabled'
  | 'disableRippleEffect'
  | 'forcedHover'
  | 'size'
  | 'style'
  | 'type'
  | 'variant'
> & {
  children: ReactElement | Array<ReactElement>;
  orientation?: Orientation;
};

export const ButtonGroup: FC<TProps> = ({
  children,
  className = '',
  color = Color.primary,
  forcedHover,
  orientation = Orientation.horizontal,
  style = {},
  variant = Variant.contained,
  ...restProps
}) => {
  const modificator = classNames.button.modificators;
  const buttonClassNames = classnames(
    classNames.button.name[orientation],
    modificator[variant][orientation],
    modificator[color][variant][orientation],
    {
      [modificator.forcedHover[orientation][variant][color]]: forcedHover,
    }
  );

  const buttonProps: TButtonProps = {
    className: buttonClassNames,
    color,
    forcedHover,
    variant,
    ...restProps,
  };

  const childrenWithForwaredProps = useMemo(
    () => getChildrenWithForwardedProps(children, buttonProps, 'Button'),
    [children]
  );

  return (
    <div
      className={classnames(
        classNames[classNameButtonGroup].name,
        classNames[classNameButtonGroup].modificators[orientation],
        className
      )}
      style={style}
    >
      {childrenWithForwaredProps}
    </div>
  );
};

export default ButtonGroup;
