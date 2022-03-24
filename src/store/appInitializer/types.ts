// others
import {
  APP_INIT,
  SET_IS_APP_LOADED,
  SET_IS_TRANSLATION_LOADED,
} from './actionsType';

export type TAppInitializerState = {
  isAppLoaded: boolean;
  isTranslationLoaded: boolean;
};

export type TAppInitAction = {
  type: typeof APP_INIT;
};

export type TSetIsAppLoadedAction = {
  type: typeof SET_IS_APP_LOADED;
  payload: boolean;
};

export type TSetIsTransaltionLoadedAction = {
  type: typeof SET_IS_TRANSLATION_LOADED;
  payload: boolean;
};
