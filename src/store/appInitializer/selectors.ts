import getFp from 'lodash/fp/get';
import getOrFp from 'lodash/fp/getOr';
import { createSelector, Selector } from 'reselect';

// store
import { REDUCER_KEY } from './actionsType';
import { TMainState } from '../../types';
import { TAppInitializerState } from './types';

export const appInitializerSelector: Selector<
  TMainState,
  TAppInitializerState
> = getFp(REDUCER_KEY);

export const isAppLoadedSelector: Selector<TMainState, boolean> =
  createSelector(appInitializerSelector, getOrFp(false, 'isAppLoaded'));

export const isTranslationLoadedSelector: Selector<TMainState, boolean> =
  createSelector(appInitializerSelector, getOrFp(false, 'isTranslationLoaded'));
