import classnames from 'classnames';
import { FC } from 'react';

// components
import CirclePulse from '../../../../../CirclePulse/CirclePulse';

// hooks
import { useTheme } from '../../../../../../hooks/useTheme/useTheme';

// others
import { className, classNames } from './classNames';
import { Size } from '../../enums';
import { TInputStates } from '../../../../types';

// styles
import './radio-button-circle-wrapper.scss';

export type TProps = {
  checked: boolean;
  classNameCircleWrapper?: string;
  disabled: boolean;
  error: string;
  forcedFocus: boolean;
  forcedHover: boolean;
  inputStates: TInputStates;
  pulseElements: Array<string>;
  setPulseElements: (pulseElements: Array<string>) => void;
  size: Size;
};

export const RadioButtonCircleWrapper: FC<TProps> = ({
  checked,
  classNameCircleWrapper = '',
  disabled,
  error,
  forcedFocus,
  forcedHover,
  inputStates,
  pulseElements,
  setPulseElements,
  size = Size.medium,
}) => {
  const { focus, hover } = inputStates;
  const { classNamesWithTheme } = useTheme(classNames);

  return (
    <div
      className={classnames(
        classNamesWithTheme[className].name,
        {
          [classNamesWithTheme[className].modificators.disabled]: disabled,
        },
        {
          [classNamesWithTheme[className].modificators.hover]:
            hover || forcedHover,
        },
        {
          [classNamesWithTheme[className].modificators.hoverChecked]:
            checked && (hover || forcedHover),
        },
        {
          [classNamesWithTheme[className].modificators.focus]:
            focus || forcedFocus,
        },
        {
          [classNamesWithTheme[className].modificators.focusChecked]:
            checked && (focus || forcedFocus),
        },
        classNamesWithTheme[className].modificators[size],
        classNameCircleWrapper
      )}
    >
      <div
        className={classnames(
          classNamesWithTheme.circleOutline.name,
          {
            [classNamesWithTheme.circleOutline.modificators.checked]: checked,
          },
          {
            [classNamesWithTheme.circleOutline.modificators.error]: error,
          },
          classNamesWithTheme.circleOutline.modificators[size]
        )}
      >
        <div
          className={classnames(
            classNamesWithTheme.circle.name,
            {
              [classNamesWithTheme.circle.modificators.checked]: checked,
            },
            {
              [classNamesWithTheme.circle.modificators[size]]: checked,
            }
          )}
        />
      </div>
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

export default RadioButtonCircleWrapper;
