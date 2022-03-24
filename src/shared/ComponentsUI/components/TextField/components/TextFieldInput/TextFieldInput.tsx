import classnames from 'classnames';
import {
  ChangeEvent,
  createElement,
  forwardRef,
  HTMLInputTypeAttribute,
  RefObject,
} from 'react';

// hooks
import { useTheme } from '../../../../../../hooks/useTheme/useTheme';

// others
import { className, classNames } from './classNames';
import { Size } from '../../enums';

// styles
import './text-field-input.scss';

export type TProps = {
  autoFocus?: boolean;
  classNameInput?: string;
  disabled: boolean;
  height: string;
  id?: string;
  label: string;
  multiline: boolean;
  name?: string;
  onBlur: (event: ChangeEvent<HTMLInputElement>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  readOnly?: boolean;
  ref?: RefObject<HTMLInputElement>;
  rows: number;
  size: Size;
  type?: HTMLInputTypeAttribute;
  value: number | string;
};

export const TextFieldInput = forwardRef<HTMLInputElement, TProps>(
  (
    {
      autoFocus = false,
      classNameInput = '',
      disabled,
      height,
      id = '',
      label,
      multiline = false,
      name = '',
      onBlur = null,
      onChange = null,
      onFocus = null,
      placeholder,
      readOnly = false,
      rows,
      size,
      type = 'text',
      value,
    },
    ref
  ) => {
    const { classNamesWithTheme } = useTheme(classNames);

    return createElement(multiline ? 'textarea' : 'input', {
      autoFocus,
      className: classnames(
        classNamesWithTheme[className].name,
        classNamesWithTheme[className].modificators[size],
        {
          [classNamesWithTheme.multiline.name]: multiline,
        },
        {
          [classNamesWithTheme.multiline.modificators[size]]: multiline,
        },
        classNameInput
      ),
      ['data-testid']: 'input',
      disabled,
      name,
      onBlur,
      onChange,
      onFocus,
      readOnly,
      ref,
      style: { height },
      value,
      ...(id ? { id } : {}),
      ...(!label ? { placeholder } : {}),
      ...(!multiline ? { type } : { rows }),
    });
  }
);

export default TextFieldInput;
