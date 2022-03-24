import classnames from 'classnames';
import { FC, ReactNode } from 'react';

// hooks
import { useTheme } from '../../../../../../hooks/useTheme/useTheme';

// others
import { className, classNames } from './classNames';
import { Size } from '../../enums';
import { TInputStates } from '../../../../types';

// styles
import './text-field-label.scss';

export type TProps = {
  asterisk: ReactNode;
  classNameLabel?: string;
  disabled: boolean;
  error: string;
  forcedFocus: boolean;
  hasAdornment: boolean;
  inputStates: TInputStates;
  label: string;
  size: Size;
  unmovableLabel: boolean;
  value: number | string;
};

export const TextFieldLabel: FC<TProps> = ({
  asterisk,
  classNameLabel = '',
  disabled,
  error,
  forcedFocus,
  hasAdornment,
  inputStates,
  label,
  size,
  unmovableLabel,
  value,
}) => {
  const { focus } = inputStates;
  const { classNamesWithTheme } = useTheme(classNames);

  return (
    <label
      className={classnames(
        classNamesWithTheme[className].name,
        {
          [classNamesWithTheme[className].modificators.error]: error,
        },
        {
          [classNamesWithTheme[className].modificators.placementTop]:
            focus || forcedFocus || hasAdornment || unmovableLabel || value,
        },
        classNamesWithTheme[className].modificators[size],
        {
          [classNamesWithTheme[className].modificators.disabled]: disabled,
        },
        {
          [classNamesWithTheme[className].modificators.focus]:
            (focus || forcedFocus) && !error,
        },
        classNameLabel
      )}
    >
      {label}
      {asterisk}
    </label>
  );
};
export default TextFieldLabel;
