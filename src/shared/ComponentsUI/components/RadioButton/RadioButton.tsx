import classnames from 'classnames';
import { ChangeEvent, FC, useRef, useState } from 'react';

// components
import RadioButtonCircleWrapper, {
  TProps as TRadioButtonCircleWrapperProps,
} from './components/RadioButtonCircleWrapper/RadioButtonCircleWrapper';
import RadioButtonInput, {
  TProps as TRadioButtonInputProps,
} from './components/RadioButtonInput/RadioButtonInput';
import RadioButtonLabel, {
  TProps as TRadioButtonLabelProps,
} from './components/RadioButtonLabel/RadioButtonLabel';

// hooks
import { useTheme } from '../../../../hooks/useTheme/useTheme';

// others
import { className as classNameRadioButton, classNames } from './classNames';
import { INPUT_STATES_INITIAL } from '../../constants';
import { Size } from './enums';

// styles
import './radio-button.scss';

// utils
import { getRandomKey } from '../../../../utils/getRandomKey';

export type TProps = Pick<
  TRadioButtonCircleWrapperProps,
  'classNameCircleWrapper'
> &
  Pick<TRadioButtonInputProps, 'classNameInput'> &
  Pick<TRadioButtonLabelProps, 'classNameLabel'> & {
    checked?: boolean;
    className?: string;
    disabled?: boolean;
    disabledPulseEffect?: boolean;
    errorMessage?: string;
    forcedFocus?: boolean;
    forcedHover?: boolean;
    label?: string;
    name?: string;
    onChange?: (value: string) => void;
    size?: Size;
    style?: { [key: string]: number | string };
    value: string;
  };

export const RadioButton: FC<TProps> = ({
  checked = false,
  className = '',
  classNameCircleWrapper,
  classNameInput,
  classNameLabel,
  disabled = false,
  disabledPulseEffect = false,
  errorMessage = '',
  forcedFocus = false,
  forcedHover = false,
  label = '',
  name = '',
  onChange = null,
  size = Size.medium,
  style = {},
  value,
}) => {
  const { classNamesWithTheme } = useTheme(classNames);
  const [inputStates, setInputStates] = useState(INPUT_STATES_INITIAL);
  const [pulseElements, setPulseElements] = useState<Array<string>>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickHandler = (): void => {
    if (!disabledPulseEffect) {
      setPulseElements([...pulseElements, getRandomKey(pulseElements)]);
    }
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    if (onChange) {
      onChange(event.currentTarget.value);
    }
  };

  return (
    <div
      className={classnames(
        classNamesWithTheme[classNameRadioButton],
        className
      )}
      style={style}
    >
      <RadioButtonInput
        checked={checked}
        classNameInput={classNameInput}
        disabled={disabled}
        inputStates={inputStates}
        name={name}
        onChange={onChangeHandler}
        onClick={onClickHandler}
        ref={inputRef}
        setInputStates={setInputStates}
        size={size}
        value={value}
      />
      <RadioButtonCircleWrapper
        checked={checked}
        classNameCircleWrapper={classNameCircleWrapper}
        disabled={disabled}
        error={errorMessage}
        forcedFocus={forcedFocus}
        forcedHover={forcedHover}
        inputStates={inputStates}
        pulseElements={pulseElements}
        setPulseElements={setPulseElements}
        size={size}
      />
      <RadioButtonLabel
        classNameLabel={classNameLabel}
        disabled={disabled}
        label={label}
        ref={inputRef}
        size={size}
      />
    </div>
  );
};

export default RadioButton;
