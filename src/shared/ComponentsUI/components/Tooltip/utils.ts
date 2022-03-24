import { MouseEvent } from 'react';

// others
import { MousePosition } from '../../../../enums';
import { TArrowPlacement } from './types';
import { TooltipPosition } from './enums';

// utils
import { getMousePositionRelativeToScreen } from '../../../../utils/events/getMousePositionRelativeToScreen';

export const getPositionHorizontally = (
  event: MouseEvent,
  arrowPlacement?: TArrowPlacement
): TooltipPosition => {
  const mousePosition = getMousePositionRelativeToScreen(event);

  switch (mousePosition) {
    case MousePosition.northWest:
      return TooltipPosition[`right${arrowPlacement || 'Start'}`];
    case MousePosition.southWest:
      return TooltipPosition[`right${arrowPlacement || 'End'}`];
    case MousePosition.northEast:
      return TooltipPosition[`left${arrowPlacement || 'Start'}`];
    default:
      return TooltipPosition[`left${arrowPlacement || 'End'}`];
  }
};

export const getPositionVertically = (
  event: MouseEvent,
  arrowPlacement?: TArrowPlacement
): TooltipPosition => {
  const mousePosition = getMousePositionRelativeToScreen(event);

  switch (mousePosition) {
    case MousePosition.northWest:
      return TooltipPosition[`bottom${arrowPlacement || 'Start'}`];
    case MousePosition.southWest:
      return TooltipPosition[`top${arrowPlacement || 'Start'}`];
    case MousePosition.northEast:
      return TooltipPosition[`bottom${arrowPlacement || 'End'}`];
    default:
      return TooltipPosition[`top${arrowPlacement || 'End'}`];
  }
};
