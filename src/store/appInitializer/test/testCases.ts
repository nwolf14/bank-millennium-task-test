// others
import { SET_IS_APP_LOADED, SET_IS_TRANSLATION_LOADED } from '../actionsType';

/**
 *
 * @Saga
 */
export const appInitSagaTestCases = () => [
  {
    args: {
      mockStore: {},
      response: new Promise((resolve) =>
        resolve({ json: () => ({ languages: 'pl' }) })
      ),
    },
    description: 'should app be loaded after the success',
    expectedResult: {
      isAppLoaded: true,
      isTranslationLoaded: true,
    },
    someAction: SET_IS_APP_LOADED,
  },
  {
    args: {
      mockStore: {},
      response: new Promise((_, reject) => reject()),
    },
    description: 'should app be loaded after the error',
    expectedResult: {
      isAppLoaded: true,
      isTranslationLoaded: true,
    },
    someAction: SET_IS_APP_LOADED,
  },
];

export const initLanguageSagaTestCases = () => [
  {
    args: {
      mockStore: {},
      response: new Promise((resolve) =>
        resolve({ json: () => ({ languages: 'pl' }) })
      ),
    },
    description: 'should app be loaded after the success',
    expectedResult: {
      isAppLoaded: false,
      isTranslationLoaded: true,
    },
    someAction: SET_IS_TRANSLATION_LOADED,
  },
  {
    args: {
      mockStore: {},
      response: new Promise((_, reject) => reject()),
    },
    description: 'should app be loaded after error ',
    expectedResult: {
      isAppLoaded: false,
      isTranslationLoaded: true,
    },
    someAction: SET_IS_TRANSLATION_LOADED,
  },
];

/**
 *
 * @Selectors
 */
export const isAppLoadedSelectorTestCases = () => [
  {
    args: {
      mockStore: {
        isAppLoaded: false,
      },
    },
    description: 'should return false',
    expectedResult: false,
  },
  {
    args: {
      mockStore: {
        isAppLoaded: true,
      },
    },
    description: 'should return true',
    expectedResult: true,
  },
];

export const isTranslationLoadedSelectorTestCases = () => [
  {
    args: {
      mockStore: {
        isTranslationLoaded: false,
      },
    },
    description: 'should return false',
    expectedResult: false,
  },
  {
    args: {
      mockStore: {
        isTranslationLoaded: true,
      },
    },
    description: 'should return true',
    expectedResult: true,
  },
];
