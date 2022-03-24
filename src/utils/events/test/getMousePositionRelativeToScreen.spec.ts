import { MouseEvent } from 'react';

// others
import { MousePosition } from '../../../enums';

// utils
import { getMousePositionRelativeToScreen } from '../getMousePositionRelativeToScreen';

const testCases = [
  {
    args: {
      mouseCoordinates: { clientX: 1024, clientY: 1024 },
    },
    description: 'Should return south east',
    expectedResult: MousePosition.southEast,
  },
  {
    args: {
      mouseCoordinates: { clientX: 1024, clientY: 0 },
    },
    description: 'Should return north east',
    expectedResult: MousePosition.northEast,
  },
  {
    args: {
      mouseCoordinates: { clientX: 0, clientY: 1024 },
    },
    description: 'Should return south west',
    expectedResult: MousePosition.southWest,
  },
  {
    args: {
      mouseCoordinates: { clientX: 0, clientY: 0 },
    },
    description: 'Should return north west',
    expectedResult: MousePosition.northWest,
  },
];

describe('getMousePositionRelativeToScreen', () => {
  testCases.forEach(({ args, description, expectedResult }) => {
    it(description, () => {
      const { mouseCoordinates } = args;
      const result = getMousePositionRelativeToScreen(
        mouseCoordinates as MouseEvent
      );

      expect(result).toBe(expectedResult);
    });
  });
});
