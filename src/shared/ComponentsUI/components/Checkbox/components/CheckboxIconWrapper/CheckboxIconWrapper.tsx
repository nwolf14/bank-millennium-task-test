import classnames from 'classnames';
import { FC, SVGProps } from 'react';

// components
import CirclePulse from '../../../../../CirclePulse/CirclePulse';

// hooks
import { useTheme } from '../../../../../../hooks/useTheme/useTheme';

// others
import { className, classNames } from './classNames';
import { ReactComponent as Check } from '../../../../../../assets/icons/check.svg';
import { ReactComponent as Uncheck } from '../../../../../../assets/icons/uncheck.svg';
import { Size } from '../../enums';
import { TInputStates } from '../../../../types';
import { TObject } from '../../../../../../types';

// styles
import './checkbox-icon-wrapper.scss';

export type TProps = {
  CheckedIcon?: FC<
    SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  classNameIconWrapper?: string;
  disabled: boolean;
  error: string;
  forcedFocus: boolean;
  forcedHover: boolean;
  inputStates: TInputStates;
  pulseElements: Array<string>;
  setPulseElements: (pulseElements: Array<string>) => void;
  size: Size;
  UncheckedIcon?: FC<
    SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  value: boolean;
};

export const CheckboxIconWrapper: FC<TProps> = ({
  CheckedIcon,
  classNameIconWrapper = '',
  disabled,
  error,
  forcedFocus,
  forcedHover,
  inputStates,
  pulseElements,
  setPulseElements,
  size,
  UncheckedIcon,
  value: checked,
}) => {
  const { focus, hover } = inputStates;
  const { classNamesWithTheme } = useTheme(classNames);

  const Box = ({
    Icon,
    IconDefault,
    flag,
    state,
  }: TObject<any>): JSX.Element | null => {
    const className = classnames(
      classNamesWithTheme[`${state}Icon`].name,
      {
        [classNamesWithTheme[`${state}Icon`].modificators.disabled]: disabled,
      },
      {
        [classNamesWithTheme[`${state}Icon`].modificators.error]: error,
      }
    );

    if (flag) {
      return Icon ? (
        <Icon className={className} />
      ) : (
        <IconDefault className={className} />
      );
    }

    return null;
  };

  return (
    <div
      className={classnames(
        classNamesWithTheme[className].name,
        {
          [classNamesWithTheme[className].modificators.hover]:
            forcedHover || hover,
        },
        {
          [classNamesWithTheme[className].modificators.hoverChecked]:
            checked && (forcedHover || hover),
        },
        {
          [classNamesWithTheme[className].modificators.focus]:
            forcedFocus || focus,
        },
        {
          [classNamesWithTheme[className].modificators.focusChecked]:
            checked && (forcedFocus || focus),
        },
        classNamesWithTheme[className].modificators[size],
        classNameIconWrapper
      )}
    >
      <Box
        Icon={UncheckedIcon}
        IconDefault={Uncheck}
        flag={!checked}
        state="unchecked"
      />
      <Box
        IconDefault={Check}
        Icon={CheckedIcon}
        flag={checked}
        state="checked"
      />
      {pulseElements.map((key) => (
        <CirclePulse
          animationDuration={1000}
          className={classnames(classNamesWithTheme.circlePulse.name, {
            [classNamesWithTheme.circlePulse.modificators.checked]: checked,
          })}
          pulseElements={pulseElements}
          setPulseElements={setPulseElements}
          key={key}
        />
      ))}
    </div>
  );
};

export default CheckboxIconWrapper;
