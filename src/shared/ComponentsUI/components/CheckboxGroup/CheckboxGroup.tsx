import classnames from 'classnames';
import { camelCase, defer, isArray } from 'lodash';
import {
  cloneElement,
  FC,
  ReactElement,
  SVGProps,
  useMemo,
  useRef,
  useState,
} from 'react';

// components
import Checkbox, { TProps as TCheckboxProps } from '../Checkbox/Checkbox';

// others
import { className as classNameCheckboxGroup, classNames } from './classNames';
import { Margin } from '../../enums';
import { ReactComponent as IndeterminateIconDefault } from '../../../../assets/icons/indeterminate.svg';
import { ReactComponent as UncheckIconDefault } from '../../../../assets/icons/uncheck.svg';

// styles
import './checkbox-group.scss';

// utils
import { getInitialValue } from './utils';

export type TProps = Pick<
  TCheckboxProps,
  | 'className'
  | 'classNameIconWrapper'
  | 'classNameInput'
  | 'classNameLabel'
  | 'CheckedIcon'
  | 'disabled'
  | 'disabledPulseEffect'
  | 'forcedFocus'
  | 'forcedHover'
  | 'label'
  | 'margin'
  | 'size'
  | 'style'
  | 'UncheckedIcon'
> & {
  valueGroup?: Array<boolean>;
  children: ReactElement<TCheckboxProps> | Array<ReactElement<TCheckboxProps>>;
  defaultValueGroup?: Array<boolean>;
  IndeterminateIcon?: FC<
    SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  onChange?: (checkedGroup: Array<boolean>) => void;
};

export const CheckboxGroup: FC<TProps> = ({
  valueGroup: controledValueGroup = null,
  CheckedIcon,
  children,
  className = '',
  defaultValueGroup = null,
  label = '',
  IndeterminateIcon,
  margin = Margin.marginBottom,
  onChange = null,
  style = {},
  UncheckedIcon,
  ...restProps
}) => {
  const [value, setValue] = useState(
    (defaultValueGroup || controledValueGroup)?.every((value) => value)
  );
  const [valueGroup, setValueGroup] = useState(
    getInitialValue(children, defaultValueGroup || controledValueGroup)
  );
  const checkboxsRefs = useRef<Array<HTMLInputElement>>([]);

  const getValueGroup = (): Array<boolean> =>
    controledValueGroup !== null ? controledValueGroup : valueGroup;

  const checkboxProps: TCheckboxProps = useMemo(
    () => ({
      CheckedIcon,
      setValueGroup: (value: boolean, index: number): void => {
        const updatedValueGroup = valueGroup.map((checked, i) =>
          i === index ? value : checked
        );
        const allChecked = updatedValueGroup.every((value) => value);

        if (allChecked) {
          setValue(true);
        } else {
          setValue(false);
        }

        if (onChange) {
          onChange(updatedValueGroup);
        }

        setValueGroup(updatedValueGroup);
      },
      UncheckedIcon,
      ...restProps,
    }),
    [getValueGroup()]
  );

  const isIndeterminate = (): boolean => valueGroup.some((checked) => checked);

  const getUncheckedIcon = () =>
    isIndeterminate()
      ? IndeterminateIcon || IndeterminateIconDefault
      : UncheckedIcon || UncheckIconDefault;

  const triggerCheckboxes = (flag: boolean): void =>
    checkboxsRefs.current.forEach((input) => {
      defer(() => {
        input.checked = flag;
        input.click();
      });
    });

  const onChangeHandler = (checked: boolean): void => {
    if (checked) {
      triggerCheckboxes(false);
    } else {
      triggerCheckboxes(true);
    }

    if (onChange) {
      onChange(valueGroup);
    }

    setValue(checked);
  };

  return (
    <div
      className={classnames(
        classNames[classNameCheckboxGroup].name,
        className,
        // @ts-ignore
        classNames[classNameCheckboxGroup].modificators[camelCase(margin)]
      )}
      style={style}
    >
      <Checkbox
        CheckedIcon={CheckedIcon}
        classNameIconWrapper={classnames({
          [classNames.iconWrapperIndeterminateIcon]: isIndeterminate(),
        })}
        label={label}
        margin={Margin.marginNone}
        onChange={onChangeHandler}
        UncheckedIcon={getUncheckedIcon()}
        value={value}
        {...restProps}
      />
      <div>
        {isArray(children)
          ? children.map((children, index) =>
              cloneElement(children as ReactElement, {
                ...(children as ReactElement).props,
                ...checkboxProps,
                index,
                defaultValue: getValueGroup()[index],
                key: index,
                margin: Margin.marginNone,
                ref: checkboxsRefs,
                value: getValueGroup()[index],
              })
            )
          : cloneElement(children, {
              ...children.props,
              ...checkboxProps,
              index: 0,
              defaultValue: getValueGroup()[0],
              margin: Margin.marginNone,
              ref: checkboxsRefs,
              value: getValueGroup()[0],
            })}
      </div>
    </div>
  );
};

export default CheckboxGroup;
