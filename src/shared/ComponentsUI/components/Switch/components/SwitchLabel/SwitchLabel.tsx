import classnames from 'classnames';
import { forwardRef, MutableRefObject } from 'react';

// hooks
import { useTheme } from '../../../../../../hooks/useTheme/useTheme';

// others
import { className, classNames } from './classNames';

// styles
import './switch-label.scss';

export type TProps = {
  classNameLabel?: string;
  disabled: boolean;
  label: string;
  ref: MutableRefObject<HTMLInputElement>;
};

export const SwitchLabel = forwardRef<HTMLInputElement, TProps>(
  ({ classNameLabel = '', disabled, label }, ref) => {
    const { classNamesWithTheme } = useTheme(classNames);

    return (
      <label
        className={classnames(
          classNamesWithTheme[className].name,
          {
            [classNamesWithTheme[className].modificators.disabled]: disabled,
          },
          classNameLabel
        )}
        onClick={() =>
          !disabled &&
          (ref as MutableRefObject<HTMLInputElement>).current.click()
        }
      >
        {label}
      </label>
    );
  }
);

export default SwitchLabel;
