import getFp from 'lodash/fp/get';
import getOrFp from 'lodash/fp/getOr';
import { createSelector, Selector } from 'reselect';

// others
import { ModalId } from '../../shared/ComponentsUI/components/Modal/enums';

// store
import { REDUCER_KEY } from './actionsType';
import { TMainState } from '../../types';
import { TModalState } from './types';

export const modalSelector: Selector<TMainState, TModalState> =
  getFp(REDUCER_KEY);

export const getModalIdSelector: Selector<TMainState, ModalId | undefined> =
  createSelector(modalSelector, getOrFp(undefined, 'modalId'));
