import classnames from 'classnames';
import { forwardRef, RefObject } from 'react';

// hooks
import { useTheme } from '../../../../../../hooks/useTheme/useTheme';

// others
import { className, classNames } from './classNames';
import { Size } from '../../enums';

// styles
import './radio-button-label.scss';

export type TProps = {
  classNameLabel?: string;
  disabled: boolean;
  label: string;
  ref: RefObject<HTMLInputElement>;
  size: Size;
};

export const RadioButtonLabel = forwardRef<HTMLInputElement, TProps>(
  ({ classNameLabel = '', disabled, label, size }, ref) => {
    const { classNamesWithTheme } = useTheme(classNames);

    if (!label) {
      return null;
    }

    return (
      <label
        className={classnames(
          classNamesWithTheme[className].name,
          {
            [classNamesWithTheme[className].modificators.disabled]: disabled,
          },
          classNamesWithTheme[className].modificators[size],
          classNameLabel
        )}
        onClick={() =>
          !disabled && (ref as RefObject<HTMLInputElement>).current?.click()
        }
      >
        {label}
      </label>
    );
  }
);

export default RadioButtonLabel;
