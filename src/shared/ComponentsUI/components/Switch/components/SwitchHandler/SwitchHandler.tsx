import classnames from 'classnames';
import { FC } from 'react';
import { Size } from '../../../Button/enums';

// others
import { className, classNames } from './classNames';

// styles
import './switch-handler.scss';

export type TProps = {
  classNameHandler?: string;
  disabled: boolean;
  size: Size;
  value: boolean;
};

export const SwitchHandler: FC<TProps> = ({
  classNameHandler = '',
  disabled,
  size,
  value,
}) => (
  <div
    className={classnames(
      classNames[className].name,
      classNameHandler,
      { [classNames[className].modificators.disabled]: disabled },
      { [classNames[className].modificators.checked]: value },
      // @ts-ignore
      classNames[className].modificators[size]
    )}
  />
);

export default SwitchHandler;
