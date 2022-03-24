// others
import { CLOSE_MODAL, OPEN_MODAL } from './actionsType';
import { ModalId } from '../../shared/ComponentsUI/components/Modal/enums';

export type TModalState = {
  modalId?: ModalId;
};

export type TOpenModalAction = {
  payload: ModalId;
  type: typeof OPEN_MODAL;
};

export type TCloseModalAction = {
  type: typeof CLOSE_MODAL;
};
