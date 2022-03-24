// utils
import { isInvalidState } from '../inputStates';

const testCases = [
  {
    args: {
      errors: [],
      touched: false,
    },
    description: 'Should return false if input is not touched',
    expectedResult: false,
  },
  {
    args: {
      errors: ['Error'],
      touched: false,
    },
    description: 'Should return false if input is not touched with errors',
    expectedResult: false,
  },
  {
    args: {
      errors: [],
      touched: true,
    },
    description: 'Should return false if input is touched',
    expectedResult: false,
  },
  {
    args: {
      errors: ['Error'],
      touched: true,
    },
    description: 'Should return true if input is touched with errors',
    expectedResult: true,
  },
];

describe('isInvalidState', () => {
  testCases.forEach(({ args, description, expectedResult }) => {
    it(description, () => {
      const { errors, touched } = args;
      const result = isInvalidState(errors, touched);

      expect(result).toBe(expectedResult);
    });
  });
});
