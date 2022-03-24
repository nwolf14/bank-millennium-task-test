import camelCase from 'lodash/camelCase';
import classnames from 'classnames';
import isArray from 'lodash/isArray';
import { cloneElement, FC, ReactElement, useState } from 'react';

// components
import ValidationMessage from '../../../ValidationMessage/ValidationMessage';
import { TProps as TRadioButtonProps } from '../RadioButton/RadioButton';

// hooks
import { useTheme } from '../../../../hooks/useTheme/useTheme';

// others
import {
  className as classNameRadioButtonGroup,
  classNames,
} from './classNames';
import { THookType as TMetaProps } from '../../../../core/ReduxHookForm/components/Field/hooks/useMetaProps';

// styles
import './radio-button-group.scss';

// others
import { Margin } from '../../enums';

// utils
import { findReactElement } from '../../../../utils/react-children/findReactElement';
import { getErrorMessage } from '../../../../utils/form/inputStates';

export type TProps = Pick<
  TRadioButtonProps,
  | 'className'
  | 'classNameCircleWrapper'
  | 'classNameInput'
  | 'classNameLabel'
  | 'disabled'
  | 'disabledPulseEffect'
  | 'forcedFocus'
  | 'forcedHover'
  | 'onChange'
  | 'name'
  | 'size'
  | 'style'
> & {
  children:
    | ReactElement<TRadioButtonProps>
    | Array<ReactElement<TRadioButtonProps>>;
  defaultValue?: string;
  errorMessage?: string;
  label?: string;
  margin?: Margin;
  meta?: TMetaProps;
  value?: string;
};

export const RadioButtonGroup: FC<TProps> = ({
  children,
  className = '',
  defaultValue = '',
  errorMessage = '',
  label,
  margin = Margin.marginBottom,
  meta = {},
  onChange = null,
  style = {},
  value: controlledValue = null,
  ...restProps
}) => {
  const [value, setValue] = useState(defaultValue);
  const { classNamesWithTheme } = useTheme(classNames);
  const error = getErrorMessage(meta as TMetaProps) || errorMessage;

  const getValue = (): string =>
    controlledValue !== null ? controlledValue : value;

  const getChecked = (children: ReactElement): boolean => {
    if ((children.type as { name: string }).name !== 'RadioButton') {
      const radioButton = findReactElement(children, 'RadioButton');
      return radioButton!.props.value === getValue();
    }

    return children.props.value === getValue();
  };

  const onChangeHandler = (value: string): void => {
    if (onChange) {
      onChange(value);
    }

    setValue(value);
  };

  return (
    <div
      className={classnames(
        classNamesWithTheme[classNameRadioButtonGroup].name,
        className,
        // @ts-ignore
        classNames[classNameRadioButtonGroup].modificators[camelCase(margin)]
      )}
      style={style}
    >
      {label && <label className={classNamesWithTheme.label}>{label}</label>}
      {isArray(children)
        ? children.map((children, index) =>
            cloneElement(children as ReactElement, {
              ...(children as ReactElement).props,
              ...restProps,
              checked: getChecked(children),
              errorMessage: error,
              onChange: onChangeHandler,
              key: index,
            })
          )
        : cloneElement(children, {
            ...children.props,
            ...restProps,
            checked: getChecked(children),
            errorMessage: error,
            onChange: onChangeHandler,
          })}
      <ValidationMessage error={error} />
    </div>
  );
};

export default RadioButtonGroup;
