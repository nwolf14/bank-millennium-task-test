import camelCase from 'lodash/camelCase';
import classnames from 'classnames';
import { ChangeEvent, forwardRef, useEffect, useState } from 'react';

// components
import ValidationMessage from '../../../ValidationMessage/ValidationMessage';
import TextFieldInputWrapper, {
  TProps as TTextFieldInputWrapperProps,
} from './components/TextFieldInputWrapper/TextFieldInputWrapper';

// hooks
import { useTheme } from '../../../../hooks/useTheme/useTheme';

// others
import { className as classNameTextField, classNames } from './classNames';
import { HEIGHTS } from './constants';
import { Margin } from '../../enums';
import { Size } from './enums';
import { INPUT_STATES_INITIAL } from '../../constants';
import { THookType as TMetaProps } from '../../../../core/ReduxHookForm/components/Field/hooks/useMetaProps';
import { TObject } from '../../../../types';

// styles
import './text-field.scss';

// utils
import { getErrorMessage } from '../../../../utils/form/inputStates';

export type TProps = Omit<
  TTextFieldInputWrapperProps,
  | 'error'
  | 'height'
  | 'inputStates'
  | 'multiline'
  | 'onBlur'
  | 'onChange'
  | 'onFocus'
  | 'required'
  | 'rows'
  | 'setInputStates'
  | 'size'
  | 'value'
> & {
  className?: string;
  errorMessage?: string;
  defaultValue?: boolean | number | string | Array<string>;
  fullWidth?: boolean;
  helperText?: string;
  margin?: Margin;
  maxRows?: number;
  meta?: TMetaProps;
  minRows?: number;
  multiline?: boolean;
  onBlur?: (value: number | string) => void;
  onChange?: (value: number | string) => void;
  onFocus?: (value: number | string) => void;
  required?: boolean;
  size?: Size;
  style?: TObject<number | string>;
  value?: number | string;
};

export const TextField = forwardRef<HTMLInputElement, TProps>(
  (
    {
      className = '',
      defaultValue = '',
      errorMessage = '',
      fullWidth = false,
      helperText,
      margin = Margin.marginBottom,
      meta = {},
      multiline = false,
      required = false,
      maxRows = 0,
      minRows = 0,
      onBlur = null,
      onChange = null,
      onFocus = null,
      size = Size.medium,
      style = {},
      value: controlledValue = null,
      ...restProps
    },
    ref
  ) => {
    const [height, setHeight] = useState(`${HEIGHTS[size] * (minRows || 1)}px`);
    const [inputStates, setInputStates] = useState(INPUT_STATES_INITIAL);
    const [rows, setRows] = useState(minRows || 1);
    const [value, setValue] = useState(defaultValue);
    const { classNamesWithTheme } = useTheme(classNames);
    const error = getErrorMessage(meta as TMetaProps) || errorMessage;

    const setInputHeight = (value: string): void => {
      const amountLines = value.split(/\r?\n|\r/).length;

      if (!minRows && !maxRows) {
        setRows(amountLines);
        setHeight(`${HEIGHTS[size] * amountLines}px`);
      } else if (amountLines <= maxRows) {
        if (amountLines <= minRows) {
          setHeight(`${HEIGHTS[size] * minRows}px`);
        } else {
          setHeight(`${HEIGHTS[size] * amountLines}px`);
        }
      }
    };

    const onBlurHandler = (event: ChangeEvent<HTMLInputElement>): void => {
      const { value } = event.target;

      setInputStates({ ...inputStates, focus: false });

      if (onBlur) {
        onBlur(value);
      }
    };

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
      const { value } = event.target;

      setValue(value);

      if (multiline) {
        setInputHeight(value);
      }

      if (onChange) {
        onChange(value);
      }
    };

    const onFocusHandler = (event: ChangeEvent<HTMLInputElement>): void => {
      const { value } = event.target;

      setInputStates({ ...inputStates, focus: true });

      if (onFocus) {
        onFocus(value);
      }
    };

    const getValue = (): string | number | boolean | Array<string> =>
      controlledValue !== null ? controlledValue : value;

    useEffect(() => {
      if (getValue() && multiline) {
        setInputHeight(defaultValue as string);
      }
    }, []);

    return (
      <div
        className={classnames(
          classNamesWithTheme[classNameTextField].name,
          {
            [classNamesWithTheme[classNameTextField].modificators.fullWidth]:
              fullWidth,
          },
          classNamesWithTheme[classNameTextField].modificators[
            camelCase(margin)
          ],
          className
        )}
        style={style}
      >
        <TextFieldInputWrapper
          error={error}
          height={height}
          inputStates={inputStates}
          multiline={multiline}
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
          onFocus={onFocusHandler}
          ref={ref}
          required={required}
          rows={rows}
          setInputStates={setInputStates}
          size={size}
          value={getValue() as string | number}
          {...restProps}
        />
        <ValidationMessage error={error} helperText={helperText} />
      </div>
    );
  }
);

export default TextField;
