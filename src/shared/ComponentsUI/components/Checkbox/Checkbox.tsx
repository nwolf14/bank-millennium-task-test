import camelCase from 'lodash/camelCase';
import classnames from 'classnames';
import isArray from 'lodash/isArray';
import {
  ChangeEvent,
  forwardRef,
  MutableRefObject,
  useRef,
  useState,
} from 'react';

// components
import CheckboxIconWrapper, {
  TProps as TCheckboxIconWrapperProps,
} from './components/CheckboxIconWrapper/CheckboxIconWrapper';
import CheckboxInput, {
  TProps as TCheckboxInputProps,
} from './components/CheckboxInput/CheckboxInput';
import CheckboxLabel, {
  TProps as TCheckboxLabelProps,
} from './components/CheckboxLabel/CheckboxLabel';
import ValidationMessage from '../../../ValidationMessage/ValidationMessage';

// hooks
import { useTheme } from '../../../../hooks/useTheme/useTheme';

// others
import { className as classNameCheckbox, classNames } from './classNames';
import { INPUT_STATES_INITIAL } from '../../constants';
import { Margin } from '../../enums';
import { Size } from './enums';
import { THookType as TMetaProps } from '../../../../core/ReduxHookForm/components/Field/hooks/useMetaProps';

// utils
import { getErrorMessage } from '../../../../utils/form/inputStates';
import { getRandomKey } from '../../../../utils/getRandomKey';

// styles
import './checkbox.scss';

export type TProps = Pick<
  TCheckboxIconWrapperProps,
  'CheckedIcon' | 'classNameIconWrapper' | 'UncheckedIcon'
> &
  Pick<TCheckboxInputProps, 'classNameInput'> &
  Pick<TCheckboxLabelProps, 'classNameLabel'> & {
    className?: string;
    defaultValue?: boolean;
    disabled?: boolean;
    disabledPulseEffect?: boolean;
    errorMessage?: string;
    forcedFocus?: boolean;
    forcedHover?: boolean;
    index?: number;
    label?: string;
    margin?: Margin;
    meta?: TMetaProps;
    onChange?: (checked: boolean) => void;
    setValueGroup?: (value: boolean, index: number) => void;
    size?: Size;
    style?: { [key: string]: number | string };
    value?: boolean;
  };

export const Checkbox = forwardRef<HTMLInputElement, TProps>(
  (
    {
      CheckedIcon,
      className = '',
      classNameIconWrapper,
      classNameInput,
      classNameLabel,
      defaultValue = false,
      disabled = false,
      disabledPulseEffect = false,
      errorMessage = '',
      forcedFocus = false,
      forcedHover = false,
      index = 0,
      label = '',
      margin = Margin.marginBottom,
      meta = {},
      onChange = null,
      setValueGroup = null,
      size = Size.medium,
      style = {},
      UncheckedIcon,
      value: controlledValue = null,
    },
    ref
  ) => {
    const { classNamesWithTheme } = useTheme(classNames);
    const [inputStates, setInputStates] = useState(INPUT_STATES_INITIAL);
    const [pulseElements, setPulseElements] = useState<Array<string>>([]);
    const [value, setValue] = useState<boolean>(defaultValue);
    const inputRef = useRef<HTMLInputElement>(
      null
    ) as MutableRefObject<HTMLInputElement>;
    const error = getErrorMessage(meta as TMetaProps) || errorMessage;

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
      const {
        target: { checked: value },
      } = event;

      if (!disabledPulseEffect) {
        setPulseElements([...pulseElements, getRandomKey(pulseElements)]);
      }

      if (onChange) {
        onChange(value);
      }

      if (setValueGroup) {
        setValueGroup(value, index);
      }

      setValue(value);
    };

    const assignRef = (input: HTMLInputElement): void => {
      if (ref) {
        const definedRef = ref as MutableRefObject<HTMLInputElement>;

        if (isArray(definedRef.current)) {
          definedRef.current[index] = input;
        } else {
          definedRef.current = input;
        }
      } else {
        inputRef.current = input;
      }
    };

    const getValue = (): boolean =>
      controlledValue !== null ? controlledValue : value;

    return (
      <div
        className={classnames(
          classNamesWithTheme[classNameCheckbox].name,
          className,
          classNamesWithTheme[classNameCheckbox].modificators[camelCase(margin)]
        )}
        style={style}
      >
        <div className={classNamesWithTheme.wrapper}>
          <CheckboxInput
            value={getValue()}
            classNameInput={classNameInput}
            disabled={disabled}
            inputStates={inputStates}
            onChange={onChangeHandler}
            ref={(input) => assignRef(input as HTMLInputElement)}
            setInputStates={setInputStates}
            size={size}
          />
          <CheckboxIconWrapper
            value={getValue()}
            CheckedIcon={CheckedIcon}
            classNameIconWrapper={classNameIconWrapper}
            disabled={disabled}
            error={error}
            forcedFocus={forcedFocus}
            forcedHover={forcedHover}
            inputStates={inputStates}
            pulseElements={pulseElements}
            setPulseElements={setPulseElements}
            size={size}
            UncheckedIcon={UncheckedIcon}
          />
          <CheckboxLabel
            classNameLabel={classNameLabel}
            disabled={disabled}
            index={index}
            label={label}
            ref={ref || inputRef}
          />
        </div>
        <ValidationMessage error={error} />
      </div>
    );
  }
);

export default Checkbox;
