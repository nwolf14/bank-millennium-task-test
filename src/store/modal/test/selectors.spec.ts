// others
import { getModalIdSelectorTestCases } from './testCases';

// store
import { getModalIdSelector } from '../selectors';

describe('getModalIdSelector', () => {
  const selectorFunction = (getModalIdSelector as any).resultFunc;
  const testCases = getModalIdSelectorTestCases();

  testCases.forEach(({ args, description, expectedResult }) => {
    const { mockStore } = args;

    it(description, () => {
      expect(selectorFunction(mockStore)).toEqual(expectedResult);
    });
  });
});
