// others
import { TAnyAction } from '../../types';
import { TModalState } from './types';

// store
import { OPEN_MODAL, CLOSE_MODAL } from './actionsType';

const initialState: TModalState = {
  modalId: undefined,
};

const openModal = (
  state: TModalState,
  { payload: modalId }: TAnyAction
): TModalState => ({
  ...state,
  modalId,
});

const closeModal = (state: TModalState): TModalState => ({
  ...state,
  modalId: undefined,
});

const modal = (
  state: TModalState = initialState,
  action: TAnyAction
): TModalState => {
  switch (action.type) {
    case OPEN_MODAL:
      return openModal(state, action);
    case CLOSE_MODAL:
      return closeModal(state);
    /* istanbul ignore next */
    default:
      /* istanbul ignore next */
      return state;
  }
};

export default modal;
