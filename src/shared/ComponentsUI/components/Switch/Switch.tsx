import classnames from 'classnames';
import { camelCase } from 'lodash';
import { ChangeEvent, forwardRef, useRef, useState } from 'react';

// components
import SwitchHandler, {
  TProps as TSwitchHandlerProps,
} from './components/SwitchHandler/SwitchHandler';
import SwitchInput, {
  TProps as TSwitchInputProps,
} from './components/SwitchInput/SwitchInput';
import ValidationMessage from '../../../ValidationMessage/ValidationMessage';
import SwitchLabel, {
  TProps as TSwitchLabelProps,
} from './components/SwitchLabel/SwitchLabel';

// others
import { className as classNameSwitch, classNames } from './classNames';
import { Margin } from '../../enums';
import { Size } from './enums';
import { THookType as TMetaProps } from '../../../../core/ReduxHookForm/components/Field/hooks/useMetaProps';

// utils
import { getErrorMessage } from '../../../../utils/form/inputStates';

// styles
import './switch.scss';

export type TProps = Pick<TSwitchHandlerProps, 'classNameHandler'> &
  Pick<TSwitchInputProps, 'classNameInput'> &
  Pick<TSwitchLabelProps, 'classNameLabel'> & {
    className?: string;
    defaultValue?: boolean;
    disabled?: boolean;
    errorMessage?: string;
    label?: string;
    margin?: Margin;
    meta?: TMetaProps;
    onChange?: (checked: boolean) => void;
    size?: Size;
    style?: { [key: string]: number | string };
    value?: boolean;
  };

export const Switch = forwardRef<HTMLInputElement, TProps>(
  (
    {
      className = '',
      classNameInput = '',
      classNameHandler = '',
      classNameLabel = '',
      defaultValue = false,
      disabled = false,
      errorMessage = '',
      label = '',
      margin = Margin.marginBottom,
      meta = {},
      onChange = null,
      size = Size.medium,
      style = {},
      value: controledValue = null,
    },
    ref
  ) => {
    const [value, setValue] = useState<boolean>(defaultValue);
    const inputRef = ref || useRef<HTMLInputElement>(null);
    const error = getErrorMessage(meta as TMetaProps) || errorMessage;

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
      const {
        target: { checked: value },
      } = event;

      if (onChange) {
        onChange(value);
      }

      setValue(value);
    };

    const getValue = (): boolean =>
      controledValue !== null ? controledValue : value;

    return (
      <div
        className={classnames(
          className,
          classNames[classNameSwitch].name,
          // @ts-ignore
          classNames[classNameSwitch].modificators[camelCase(margin)]
        )}
        style={style}
      >
        <div className={classNames.wrapper}>
          <SwitchLabel
            classNameLabel={classNameLabel}
            disabled={disabled}
            label={label}
            ref={inputRef}
          />
          <div
            className={classnames(
              classNames.inputWrapper.name,
              { [classNames.inputWrapper.modificators.checked]: getValue() },
              { [classNames.inputWrapper.modificators.disabled]: disabled },
              { [classNames.inputWrapper.modificators.error]: error },
              classNames.inputWrapper.modificators[size]
            )}
          >
            <SwitchInput
              classNameInput={classNameInput}
              disabled={disabled}
              onChange={onChangeHandler}
              ref={inputRef}
              value={getValue()}
            />
            <SwitchHandler
              classNameHandler={classNameHandler}
              disabled={disabled}
              size={size}
              value={getValue()}
            />
          </div>
        </div>
        <ValidationMessage error={error} />
      </div>
    );
  }
);

export default Switch;
