import camelCase from 'lodash/camelCase';
import classnames from 'classnames';
import isArray from 'lodash/isArray';
import { forwardRef, MouseEvent, ReactElement, useRef, useState } from 'react';

// components
import TextField, { TProps as TTextFieldProps } from '../TextField/TextField';
import SelectOptions, {
  TProps as TSelectOptionsProps,
} from './components/SelectOptions/SelectOptions';

// hooks
import { useOutsideClick } from '../../../../hooks/useOutsideClick/useOutsideClick';
import { useTheme } from '../../../../hooks/useTheme/useTheme';

// others
import { className as classNameSelect, classNames } from './classNames';
import { Margin } from '../../enums';
import { ReactComponent as Chevron } from '../../../../assets/icons/chevron.svg';
import { Size } from '../TextField/enums';
import { THookType as TMetaProps } from '../../../../core/ReduxHookForm/components/Field/hooks/useMetaProps';
import { TObject } from '../../../../types';
import { TProps as TSelectItemProps } from './components/SelectItem/SelectItem';

// styles
import './select.scss';

// utils
import { getErrorMessage } from '../../../../utils/form/inputStates';
import { getInitialValue } from './utils';

export type TProps = Pick<TSelectOptionsProps, 'classNameOptions'> &
  Pick<TSelectItemProps, 'classNameItem'> &
  Pick<
    TTextFieldProps,
    | 'autoFocus'
    | 'errorMessage'
    | 'forcedHover'
    | 'fullWidth'
    | 'helperText'
    | 'id'
    | 'label'
    | 'margin'
    | 'meta'
    | 'name'
    | 'placeholder'
    | 'required'
    | 'ref'
  > & {
    children: ReactElement | Array<ReactElement>;
    className?: string;
    defaultValue?: string | Array<string>;
    disabled?: boolean;
    forcedSelected?: boolean;
    multiple?: boolean;
    onChange?: (value: string | Array<string>) => void;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
    readOnly?: boolean;
    size?: Size;
    style?: TObject<number | string>;
    value?: string | Array<string>;
  };

export const Select = forwardRef<HTMLInputElement, TProps>(
  (
    {
      children,
      className = '',
      classNameItem,
      classNameOptions,
      defaultValue = null,
      disabled = false,
      errorMessage = '',
      forcedSelected = false,
      margin = Margin.marginBottom,
      meta = {},
      multiple = false,
      onChange,
      onClick,
      readOnly = false,
      size = Size.medium,
      style = {},
      value: controlledValue = null,
      ...inputProps
    },
    ref
  ) => {
    const [value, setValue] = useState(getInitialValue(multiple, defaultValue));
    const selectRef = useRef<HTMLDivElement>(null);
    const { onBlur, ...restInputProps } = inputProps as any;
    const { selected, setSelected } = useOutsideClick(
      selectRef,
      () => onBlur && onBlur(value)
    );

    const { classNamesWithTheme } = useTheme(classNames);
    const error = getErrorMessage(meta as TMetaProps) || errorMessage;

    const getSelected = (): boolean => forcedSelected || selected;

    const getValue = (): string | Array<string> =>
      controlledValue !== null ? controlledValue : value;

    const getValueAsString = (): string => {
      const value = getValue();
      return isArray(value) ? value.join(', ') : value;
    };

    const chevron = (): JSX.Element => (
      <Chevron
        className={classnames(
          classNamesWithTheme.chevron.name,
          {
            [classNamesWithTheme.chevron.modificators.disabled]: disabled,
          },
          {
            [classNamesWithTheme.chevron.modificators.error]: error,
          },
          {
            [classNamesWithTheme.chevron.modificators.selected]: selected,
          },
          classNamesWithTheme.chevron.modificators[size]
        )}
      />
    );

    const onClickSelectHandler = (event: MouseEvent<HTMLDivElement>): void => {
      if (!disabled && !readOnly) {
        setSelected(true);

        if (onClick) {
          onClick(event);
        }
      }
    };

    const onClickOptionHandler = (event: MouseEvent<HTMLElement>): void => {
      const target = event.target as HTMLElement;
      event.stopPropagation();

      if (target.tagName === 'LI') {
        let valueFromOption: string | Array<string> = target.getAttribute(
          'data-value'
        ) as string;

        if (multiple) {
          const value = getValue() as Array<string>;
          valueFromOption = value.includes(valueFromOption)
            ? value.filter((value) => value !== valueFromOption)
            : [...value, valueFromOption];
        } else {
          setSelected(false);
        }

        if (onChange) {
          onChange(valueFromOption);
        }

        setValue(valueFromOption);
      }
    };

    return (
      <div
        className={classnames(
          classNamesWithTheme[classNameSelect].name,
          className,
          classNamesWithTheme[classNameSelect].modificators[camelCase(margin)]
        )}
        data-testid="select"
        onClick={onClickSelectHandler}
        ref={selectRef}
        style={style}
      >
        <TextField
          className={classNamesWithTheme.textField}
          classNameInput={classnames(classNamesWithTheme.textFieldInput.name, {
            [classNamesWithTheme.textFieldInput.modificators.error]: error,
          })}
          classNameWrapper={classNamesWithTheme.textFieldWrapper}
          disabled={disabled}
          endAdornment={chevron()}
          errorMessage={error}
          forcedFocus={getSelected()}
          margin={Margin.marginNone}
          readOnly={true}
          ref={ref}
          size={size}
          value={getValueAsString()}
          {...restInputProps}
        />
        <SelectOptions
          classNameItem={classNameItem}
          classNameOptions={classNameOptions}
          onClick={onClickOptionHandler}
          selected={getSelected()}
          size={size}
          value={getValue()}
        >
          {children}
        </SelectOptions>
      </div>
    );
  }
);

export default Select;
