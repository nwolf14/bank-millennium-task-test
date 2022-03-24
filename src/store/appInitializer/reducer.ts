// others
import { SET_IS_APP_LOADED, SET_IS_TRANSLATION_LOADED } from './actionsType';
import { TAnyAction } from '../../types';
import { TAppInitializerState } from './types';

const initialState: TAppInitializerState = {
  isAppLoaded: false,
  isTranslationLoaded: false,
};

const setIsAppLoaded = (
  state: TAppInitializerState,
  { payload: isAppLoaded }: TAnyAction
): TAppInitializerState => ({
  ...state,
  isAppLoaded,
});

const setIsTranslationLoaded = (
  state: TAppInitializerState,
  { payload: isTranslationLoaded }: TAnyAction
): TAppInitializerState => ({
  ...state,
  isTranslationLoaded,
});

const appInitializer = (
  state: TAppInitializerState = initialState,
  action: TAnyAction
): TAppInitializerState => {
  switch (action.type) {
    case SET_IS_APP_LOADED:
      return setIsAppLoaded(state, action);
    case SET_IS_TRANSLATION_LOADED:
      return setIsTranslationLoaded(state, action);
    default:
      return state;
  }
};

export default appInitializer;
