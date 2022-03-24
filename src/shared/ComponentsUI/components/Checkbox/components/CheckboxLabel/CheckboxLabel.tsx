import classnames from 'classnames';
import isArray from 'lodash/isArray';
import { forwardRef, MutableRefObject } from 'react';

// hooks
import { useTheme } from '../../../../../../hooks/useTheme/useTheme';

// others
import { className, classNames } from './classNames';

// styles
import './checkbox-label.scss';

export type TProps = {
  classNameLabel?: string;
  disabled: boolean;
  index: number;
  label: string;
  ref?: MutableRefObject<HTMLInputElement>;
};

export const CheckboxLabel = forwardRef<HTMLInputElement, TProps>(
  ({ classNameLabel = '', disabled, index, label }, ref) => {
    const { classNamesWithTheme } = useTheme(classNames);

    const getRef = (): HTMLInputElement => {
      const definedRef = ref as MutableRefObject<HTMLInputElement>;

      if (isArray(definedRef.current)) {
        return definedRef.current[index];
      }

      return definedRef.current;
    };

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
          classNameLabel
        )}
        onClick={() => !disabled && getRef().click()}
      >
        {label}
      </label>
    );
  }
);

export default CheckboxLabel;
