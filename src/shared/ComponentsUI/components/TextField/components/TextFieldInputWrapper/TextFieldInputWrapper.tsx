import classnames from 'classnames';
import {
  forwardRef,
  MutableRefObject,
  ReactNode,
  RefObject,
  useRef,
} from 'react';

// others
import { className, classNames } from './classNames';
import { Size } from '../../enums';
import { TInputStates } from '../../../../types';

// components
import TextFieldFilling, {
  TProps as TTextFieldFillingProps,
} from '../TextFieldFilling/TextFieldFilling';
import TextFieldInput, {
  TProps as TTextFieldInputProps,
} from '../TextFieldInput/TextFieldInput';
import TextFieldLabel, {
  TProps as TTextFieldLabelProps,
} from '../TextFieldLabel/TextFieldLabel';

// styles
import './text-field-input-wrapper.scss';

export type TProps = Omit<
  TTextFieldInputProps,
  'error' | 'disabled' | 'label' | 'placeholder' | 'ref' | 'size' | 'value'
> &
  Pick<TTextFieldFillingProps, 'classNameFilling'> &
  Pick<TTextFieldLabelProps, 'classNameLabel'> & {
    classNameWrapper?: string;
    disabled?: boolean;
    endAdornment?: ReactNode;
    error?: string;
    forcedFocus?: boolean;
    forcedHover?: boolean;
    inputStates: TInputStates;
    label?: string;
    placeholder?: string;
    ref?: RefObject<HTMLInputElement>;
    required: boolean;
    setInputStates: (inputStates: TInputStates) => void;
    size: Size;
    startAdornment?: ReactNode;
    value: number | string;
  };

export const TextFieldInputWrapper = forwardRef<HTMLInputElement, TProps>(
  (
    {
      disabled = false,
      classNameFilling,
      classNameLabel,
      classNameWrapper = '',
      endAdornment = null,
      error = '',
      forcedFocus = false,
      forcedHover = false,
      inputStates,
      label = '',
      placeholder = '',
      required,
      setInputStates,
      size,
      startAdornment = null,
      type = 'text',
      value = '',
      ...restInputProps
    },
    ref
  ) => {
    const asterisk = required ? <span>&thinsp;*</span> : null;
    const hasAdornment = !!(endAdornment || startAdornment);
    const unmovableLabel = type === 'number';
    const inputRef = useRef<HTMLInputElement>(null);

    const onClickHandler = () => {
      if (ref) {
        (ref as MutableRefObject<HTMLInputElement>).current?.focus();
      } else if (inputRef) {
        inputRef.current?.focus();
      }
    };

    return (
      <div
        className={classnames(
          classNames[className].name,
          {
            [classNames[className].modificators.disabled]: disabled,
          },
          classNames[className].modificators[size],
          classNameWrapper
        )}
        onClick={onClickHandler}
        onMouseEnter={() => setInputStates({ ...inputStates, hover: true })}
        onMouseLeave={() => setInputStates({ ...inputStates, hover: false })}
      >
        {startAdornment}
        <TextFieldInput
          disabled={disabled}
          label={label}
          placeholder={placeholder}
          ref={ref || inputRef}
          size={size}
          type={type}
          value={value}
          {...restInputProps}
        />
        <TextFieldLabel
          asterisk={asterisk}
          classNameLabel={classNameLabel}
          disabled={disabled}
          error={error}
          forcedFocus={forcedFocus}
          hasAdornment={hasAdornment}
          inputStates={inputStates}
          label={label}
          size={size}
          unmovableLabel={unmovableLabel}
          value={value}
        />
        <TextFieldFilling
          asterisk={asterisk}
          classNameFilling={classNameFilling}
          disabled={disabled}
          error={error}
          forcedFocus={forcedFocus}
          forcedHover={forcedHover}
          hasAdornment={hasAdornment}
          inputStates={inputStates}
          label={label}
          placeholder={placeholder}
          unmovableLabel={unmovableLabel}
          value={value}
        />
        {endAdornment}
      </div>
    );
  }
);

export default TextFieldInputWrapper;
