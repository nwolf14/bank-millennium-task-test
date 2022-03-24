// others
import { initialStateMock } from './mocks';
import { TAnyAction } from '../../../types';
import { TAppInitializerState } from '../types';

// store
import appInitializerReducer from '../reducer';
import { appInit, setIsAppLoaded, setIsTranslationLoaded } from '../actions';

describe('AppInitializerReducer', () => {
  const reducer = (
    action: TAnyAction,
    initialState = {}
  ): TAppInitializerState =>
    appInitializerReducer(initialState as TAppInitializerState, action);

  it('should handle APP_INIT', () => {
    const state = reducer(appInit(), initialStateMock);

    expect(state).toEqual({
      ...initialStateMock,
    });
  });

  it('should handle SET_IS_APP_LOADED', () => {
    const state = reducer(setIsAppLoaded(true), initialStateMock);

    expect(state).toEqual({
      ...initialStateMock,
      isAppLoaded: true,
    });
  });

  it('should handle SET_IS_TRANSLATION_LOADED', () => {
    const state = reducer(setIsTranslationLoaded(true), initialStateMock);

    expect(state).toEqual({
      ...initialStateMock,
      isTranslationLoaded: true,
    });
  });
});
