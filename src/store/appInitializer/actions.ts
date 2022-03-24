// others
import {
  APP_INIT,
  SET_IS_APP_LOADED,
  SET_IS_TRANSLATION_LOADED,
} from './actionsType';
import {
  TAppInitAction,
  TSetIsAppLoadedAction,
  TSetIsTransaltionLoadedAction,
} from './types';

export const appInit = (): TAppInitAction => ({
  type: APP_INIT,
});

export const setIsAppLoaded = (payload: boolean): TSetIsAppLoadedAction => ({
  type: SET_IS_APP_LOADED,
  payload,
});

export const setIsTranslationLoaded = (
  payload: boolean
): TSetIsTransaltionLoadedAction => ({
  type: SET_IS_TRANSLATION_LOADED,
  payload,
});
