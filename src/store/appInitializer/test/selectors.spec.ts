// others
import {
  isAppLoadedSelectorTestCases,
  isTranslationLoadedSelectorTestCases,
} from './testCases';

// store
import { isAppLoadedSelector, isTranslationLoadedSelector } from '../selectors';

describe('isAppLoadedSelector', () => {
  const selectorFunction = (isAppLoadedSelector as any).resultFunc;
  const testCases = isAppLoadedSelectorTestCases();

  testCases.forEach(({ args, description, expectedResult }) => {
    const { mockStore } = args;

    it(description, () => {
      expect(selectorFunction(mockStore)).toEqual(expectedResult);
    });
  });
});

describe('isTranslationLoadedSelector', () => {
  const selectorFunction = (isTranslationLoadedSelector as any).resultFunc;
  const testCases = isTranslationLoadedSelectorTestCases();

  testCases.forEach(({ args, description, expectedResult }) => {
    const { mockStore } = args;

    it(description, () => {
      expect(selectorFunction(mockStore)).toEqual(expectedResult);
    });
  });
});
