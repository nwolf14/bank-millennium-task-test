// others
import { initialStateMock } from './mocks';
import { ModalId } from '../../../shared/ComponentsUI/components/Modal/enums';
import { TAnyAction } from '../../../types';
import { TModalState } from '../types';

// store
import modalReducer from '../reducer';
import { openModal, closeModal } from '../actions';

describe('ModalReducer', () => {
  const reducer = (action: TAnyAction, initialState = {}): TModalState =>
    modalReducer(initialState as TModalState, action);

  it('should handle OPEN_MODAL', () => {
    const state = reducer(openModal(ModalId.storyBookModal), initialStateMock);

    expect(state).toEqual({
      ...initialStateMock,
      modalId: ModalId.storyBookModal,
    });
  });

  it('should handle CLOSE_MODAL', () => {
    const state = reducer(closeModal(), {
      ...initialStateMock,
      modalId: ModalId.storyBookModal,
    });

    expect(state).toEqual({
      ...initialStateMock,
      modalId: undefined,
    });
  });
});
