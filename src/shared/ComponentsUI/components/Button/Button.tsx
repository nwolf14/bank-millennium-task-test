import classnames from 'classnames';
import { FC, MouseEvent, ReactNode } from 'react';

// hooks
import { useRippleEffect } from '../../../../hooks/useRippleEffect/useRippleEffect';

// others
import { className as classNameButton, classNames } from './classNames';
import { Color, Size, Variant } from './enums';

// styles
import './button.scss';

export type TProps = {
  children?: ReactNode | string;
  className?: string;
  color?: Color;
  disabled?: boolean;
  disableRippleEffect?: boolean;
  endIcon?: string;
  forcedHover?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  size?: Size;
  startIcon?: string;
  style?: { [key: string]: number | string };
  type?: 'button' | 'reset' | 'submit';
  variant?: Variant;
};

export const Button: FC<TProps> = ({
  children,
  className = '',
  color = Color.primary,
  disabled = false,
  disableRippleEffect = false,
  endIcon,
  forcedHover = false,
  fullWidth = false,
  onClick,
  size = Size.medium,
  startIcon,
  style = {},
  type = 'button',
  variant = Variant.contained,
}) => {
  const { rippleEffect, triggerRippleEffect } = useRippleEffect(
    classNames[classNameButton].modificators[color][variant]
  );

  const Icon = ({
    placement,
    src,
  }: {
    placement: 'start' | 'end';
    src: string;
  }): JSX.Element => (
    <img
      alt="icon"
      className={classnames(
        classNames.icon.name,
        classNames.icon.modificators[placement],
        classNames.icon.modificators[size]
      )}
      src={src}
    />
  );

  const onClickHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    if (!disableRippleEffect) {
      triggerRippleEffect(event);
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={classnames(
        classNames[classNameButton].name,
        { [classNames[classNameButton].modificators.fullwidth]: fullWidth },
        {
          [classNames[classNameButton].modificators.forcedHover[variant][
            color
          ]]: forcedHover,
        },
        classNames[classNameButton].modificators[size],
        classNames[classNameButton].modificators[variant],
        classNames[classNameButton].modificators[color][variant],
        className
      )}
      disabled={disabled}
      onClick={onClickHandler}
      style={style}
      type={type}
    >
      {startIcon && <Icon placement="start" src={startIcon} />}
      {children}
      {endIcon && <Icon placement="end" src={endIcon} />}
      {rippleEffect}
    </button>
  );
};

export default Button;
