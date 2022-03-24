import classnames from 'classnames';
import { ChangeEvent, forwardRef, RefObject } from 'react';

// others
import { className, classNames } from './classNames';

// styles
import './switch-input.scss';

export type TProps = {
  classNameInput?: string;
  disabled: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  ref?: RefObject<HTMLInputElement>;
  value: boolean;
};

export const SwitchInput = forwardRef<HTMLInputElement, TProps>(
  ({ classNameInput = '', disabled, onChange, value: checked }, ref) => (
    <input
      checked={checked}
      className={classnames(classNames[className], classNameInput)}
      data-testid="input"
      disabled={disabled}
      onChange={onChange}
      ref={ref}
      type="checkbox"
    />
  )
);

export default SwitchInput;
