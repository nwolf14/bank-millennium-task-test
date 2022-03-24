import classnames from 'classnames';
import { ChangeEvent, forwardRef, MouseEvent, RefObject } from 'react';

// others
import { className, classNames } from './classNames';
import { TInputStates } from '../../../../types';
import { Size } from '../../enums';

// styles
import './radio-button-input.scss';

export type TProps = {
  checked: boolean;
  classNameInput?: string;
  disabled: boolean;
  inputStates: TInputStates;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick: (event: MouseEvent<HTMLInputElement>) => void;
  ref: RefObject<HTMLInputElement>;
  setInputStates: (inputStates: TInputStates) => void;
  size: Size;
  value: string;
};

export const RadioButtonInput = forwardRef<HTMLInputElement, TProps>(
  (
    {
      checked,
      classNameInput = '',
      disabled = false,
      inputStates,
      name = '',
      onChange,
      onClick,
      setInputStates,
      size,
      value = '',
    },
    ref
  ) => (
    <input
      checked={checked}
      className={classnames(
        classNames[className].name,
        classNames[className].mofificators[size],
        classNameInput
      )}
      data-testid="input"
      disabled={disabled}
      name={name}
      onBlur={() => setInputStates({ ...inputStates, focus: false })}
      onChange={onChange}
      onClick={onClick}
      onFocus={() => setInputStates({ ...inputStates, focus: true })}
      onMouseEnter={() => setInputStates({ ...inputStates, hover: true })}
      onMouseLeave={() => setInputStates({ ...inputStates, hover: false })}
      ref={ref}
      type="radio"
      value={value}
    />
  )
);

export default RadioButtonInput;
