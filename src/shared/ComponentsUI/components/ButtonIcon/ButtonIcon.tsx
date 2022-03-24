import classnames from 'classnames';
import { FC, MouseEvent, ReactNode, useState } from 'react';

// components
import CirclePulse from '../../../CirclePulse/CirclePulse';

// hooks
import { useTheme } from '../../../../hooks/useTheme/useTheme';

// others
import { className as classNameButtonIcon, classNames } from './classNames';
import { Size } from '../Button/enums';

// styles
import './button-icon.scss';

// utils
import { getRandomKey } from '../../../../utils/getRandomKey';

export type TProps = {
  children?: ReactNode | string;
  className?: string;
  disabled?: boolean;
  disablePulseEffect?: boolean;
  forcedHover?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  size?: Size;
  style?: { [key: string]: number | string };
  type?: 'button' | 'reset' | 'submit';
};

export const ButtonIcon: FC<TProps> = ({
  children,
  className = '',
  disabled = false,
  disablePulseEffect = false,
  forcedHover = false,
  onClick,
  size = Size.medium,
  style = {},
  type = 'button',
}) => {
  const [pulseElements, setPulseElements] = useState<Array<string>>([]);
  const { classNamesWithTheme } = useTheme(classNames);

  const onClickHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    if (!disablePulseEffect) {
      setPulseElements([...pulseElements, getRandomKey(pulseElements)]);
    }

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      className={classnames(
        classNamesWithTheme[classNameButtonIcon].name,
        {
          [classNamesWithTheme[classNameButtonIcon].modificators.forcedHover]:
            forcedHover,
        },
        classNamesWithTheme[classNameButtonIcon].modificators[size],
        className
      )}
      disabled={disabled}
      onClick={onClickHandler}
      style={style}
      type={type}
    >
      {children}
      {pulseElements.map((key) => (
        <CirclePulse
          animationDuration={1000}
          className={classnames(
            classNamesWithTheme.circlePulse.name,
            classNamesWithTheme.circlePulse.modificators[size]
          )}
          pulseElements={pulseElements}
          setPulseElements={setPulseElements}
          key={key}
        />
      ))}
    </button>
  );
};

export default ButtonIcon;
