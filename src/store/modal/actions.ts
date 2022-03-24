// others
import { ModalId } from '../../shared/ComponentsUI/components/Modal/enums';
import { TOpenModalAction, TCloseModalAction } from './types';

// store
import { OPEN_MODAL, CLOSE_MODAL } from './actionsType';

export const openModal = (modalId: ModalId): TOpenModalAction => ({
  payload: modalId,
  type: OPEN_MODAL,
});

export const closeModal = (): TCloseModalAction => ({
  type: CLOSE_MODAL,
});
