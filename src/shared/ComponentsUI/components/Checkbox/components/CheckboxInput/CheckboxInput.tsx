import classnames from 'classnames';
import { ChangeEvent, forwardRef, RefObject } from 'react';

// others
import { className, classNames } from './classNames';
import { Size } from '../../enums';
import { TInputStates } from '../../../../types';

// styles
import './checkbox-input.scss';

export type TProps = {
  classNameInput?: string;
  disabled: boolean;
  inputStates: TInputStates;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  ref?: RefObject<HTMLInputElement>;
  setInputStates: (inputStates: TInputStates) => void;
  size: Size;
  value: boolean;
};

export const CheckboxInput = forwardRef<HTMLInputElement, TProps>(
  (
    {
      classNameInput = '',
      disabled,
      inputStates,
      onChange,
      setInputStates,
      size,
      value: checked,
    },
    ref
  ) => (
    <input
      checked={checked}
      className={classnames(
        classNames[className].name,
        classNames[className].modificators[size],
        classNameInput
      )}
      data-testid="input"
      disabled={disabled}
      onBlur={() => setInputStates({ ...inputStates, focus: false })}
      onChange={onChange}
      onFocus={() => setInputStates({ ...inputStates, focus: true })}
      onMouseEnter={() => setInputStates({ ...inputStates, hover: true })}
      onMouseLeave={() => setInputStates({ ...inputStates, hover: false })}
      ref={ref}
      type="checkbox"
    />
  )
);

export default CheckboxInput;
