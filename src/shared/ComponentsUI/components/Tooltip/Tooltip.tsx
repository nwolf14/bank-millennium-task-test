import classnames from 'classnames';
import { camelCase } from 'lodash';
import { FC, MouseEvent, ReactNode, useState } from 'react';

// others
import { className as classNameTooltip, classNames } from './classNames';
import { ReactComponent as TooltipArrow } from '../../../../assets/icons/tooltip-arrow.svg';
import { TArrowPlacement } from './types';
import { TooltipPosition } from './enums';

// styles
import './tooltip.scss';

// utils
import { getPositionHorizontally, getPositionVertically } from './utils';

export type TProps = {
  autoPositioning?: boolean;
  autoPositioningHorizontal?: boolean;
  autoPositioningArrowPlacement?: TArrowPlacement;
  children: ReactNode;
  className?: string;
  content: ReactNode | string;
  position?: TooltipPosition;
  style?: { [key: string]: number | string };
  visible?: boolean;
};

const Tooltip: FC<TProps> = ({
  autoPositioning = false,
  autoPositioningHorizontal = false,
  autoPositioningArrowPlacement = undefined,
  children,
  className = '',
  content,
  position: initialPosition = TooltipPosition.topCenter,
  style = {},
  visible: initialVisible = false,
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [visible, setVisible] = useState(initialVisible);

  const onMouseEnterHandler = (event: MouseEvent) => {
    if (autoPositioning) {
      const position = autoPositioningHorizontal
        ? getPositionHorizontally(event, autoPositioningArrowPlacement)
        : getPositionVertically(event, autoPositioningArrowPlacement);
      setPosition(position);
    }

    setVisible(true);
  };

  return (
    <div
      className={classnames(classNames[classNameTooltip], className)}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={() => setVisible(false)}
      style={style}
    >
      {children}
      <div
        className={classnames(
          classNames.wrapper.name,
          {
            [classNames.wrapper.modificators.visible]: visible,
          },
          // @ts-ignore
          classNames.wrapper.modificators[camelCase(position)]
        )}
      >
        <div className={classnames(classNames.content)}>
          {content}
          <TooltipArrow
            className={classnames(
              classNames.arrow.name, // @ts-ignore
              classNames.arrow.modificators[camelCase(position)]
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
