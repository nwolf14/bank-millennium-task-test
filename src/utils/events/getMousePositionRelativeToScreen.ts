import { MouseEvent } from 'react';

// others
import { MousePosition } from '../../enums';

export const getMousePositionRelativeToScreen = (
  event: MouseEvent
): MousePosition => {
  const { clientX, clientY } = event;
  const { innerHeight, innerWidth } = window;
  const halfHeight = innerHeight / 2;
  const halfWidth = innerWidth / 2;

  switch (true) {
    case clientX <= halfWidth && clientY <= halfHeight:
      return MousePosition.northWest;
    case clientX <= halfWidth && clientY > halfHeight:
      return MousePosition.southWest;
    case clientX > halfWidth && clientY <= halfHeight:
      return MousePosition.northEast;
    default:
      return MousePosition.southEast;
  }
};
