import classnames from 'classnames';
import { createElement, FC } from 'react';

// hooks
import { useTheme } from '../../../../../../hooks/useTheme/useTheme';

// others
import { TInputStates } from '../../../../types';
import { className, classNames } from './classNames';

// styles
import './text-field-filling.scss';

export type TProps = {
  asterisk: JSX.Element | null;
  classNameFilling?: string;
  disabled: boolean;
  error: string;
  forcedFocus: boolean;
  forcedHover: boolean;
  hasAdornment: boolean;
  inputStates: TInputStates;
  label: string;
  placeholder: string;
  unmovableLabel: boolean;
  value: number | string;
};

export const TextFieldFilling: FC<TProps> = ({
  asterisk,
  classNameFilling = '',
  disabled,
  error,
  forcedFocus,
  forcedHover,
  hasAdornment,
  inputStates,
  label = '',
  placeholder,
  unmovableLabel,
  value,
}) => {
  const { focus, hover } = inputStates;
  const { classNamesWithTheme } = useTheme(classNames);

  return createElement(
    label ? 'fieldset' : 'div',
    {
      className: classnames(
        classNamesWithTheme[className].name,
        {
          [classNamesWithTheme[className].modificators.disabled]: disabled,
        },
        {
          [classNamesWithTheme[className].modificators.error]: error,
        },
        {
          [classNamesWithTheme[className].modificators.errorFocus]:
            error && (focus || forcedFocus),
        },
        {
          [classNamesWithTheme[className].modificators.hover]:
            (hover || forcedHover) && !error,
        },
        {
          [classNamesWithTheme[className].modificators.focus]:
            (focus || forcedFocus) && !error,
        },
        classNameFilling
      ),
    },
    <legend
      className={classnames(classNamesWithTheme.legend.name, {
        [classNamesWithTheme.legend.modificators.focus]:
          focus ||
          forcedFocus ||
          hasAdornment ||
          placeholder ||
          unmovableLabel ||
          value,
      })}
    >
      {label} {asterisk}
    </legend>
  );
};

export default TextFieldFilling;
