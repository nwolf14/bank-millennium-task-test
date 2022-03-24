import configureStore from 'redux-mock-store';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';

// components
import Modal from './Modal';

// others
import { ModalId } from './enums';
import { KeyboardKeys } from '../../../../enums';

const stateMock = {
  modal: {
    modalId: undefined,
  },
};
const mockCallBack = jest.fn();

jest.mock('react-dom', () => ({
  ...(jest.requireActual('react-dom') as Object),
  createPortal: (children: any) => <>{children}</>,
}));

jest.mock('react-redux', () => ({
  ...(jest.requireActual('react-redux') as Object),
  useDispatch: () => () => mockCallBack(),
}));

describe('Modal', () => {
  const mockStore = configureStore();

  beforeAll(() => {
    mockCallBack.mockClear();
  });

  it('should pass children', () => {
    const { container } = render(
      <Provider store={mockStore(stateMock)}>
        <Modal modalId={ModalId.storyBookModal}>content</Modal>
      </Provider>
    );

    expect(container.firstChild?.firstChild?.childNodes[1]).toHaveTextContent(
      'content'
    );
  });

  it('should pass className', () => {
    const { container } = render(
      <Provider store={mockStore(stateMock)}>
        <Modal className="className" modalId={ModalId.storyBookModal}>
          content
        </Modal>
      </Provider>
    );

    expect(container.firstChild).toHaveClass('className');
  });

  it('should pass className for content', () => {
    const { container } = render(
      <Provider store={mockStore(stateMock)}>
        <Modal
          classNameContent="classNameContent"
          modalId={ModalId.storyBookModal}
        >
          content
        </Modal>
      </Provider>
    );

    expect(container.firstChild?.firstChild?.childNodes[1]).toHaveClass(
      'classNameContent'
    );
  });
  it('should pass className for footer', () => {
    const { container } = render(
      <Provider store={mockStore(stateMock)}>
        <Modal
          classNameFooter="classNameFooter"
          footer={<>Footer</>}
          modalId={ModalId.storyBookModal}
        >
          content
        </Modal>
      </Provider>
    );

    expect(container.firstChild?.firstChild?.lastChild).toHaveClass(
      'classNameFooter'
    );
  });

  it('should pass className for header', () => {
    const { container } = render(
      <Provider store={mockStore(stateMock)}>
        <Modal
          classNameHeader="classNameHeader"
          modalId={ModalId.storyBookModal}
        >
          content
        </Modal>
      </Provider>
    );

    expect(container.firstChild?.firstChild?.firstChild).toHaveClass(
      'classNameHeader'
    );
  });

  it('should trigger click on icon exit', () => {
    render(
      <Provider store={mockStore(stateMock)}>
        <Modal modalId={ModalId.storyBookModal}>content</Modal>
      </Provider>
    );

    fireEvent.click(document.getElementsByClassName('Modal__close')[0]);
    expect(mockCallBack?.mock.calls.length).toBe(1);
  });

  it('should trigger click on backdrop', () => {
    render(
      <Provider store={mockStore(stateMock)}>
        <Modal modalId={ModalId.storyBookModal}>content</Modal>
      </Provider>
    );

    fireEvent.click(document.getElementsByClassName('Modal')[0]);
    expect(mockCallBack?.mock.calls.length).toBe(1);
  });

  it('should not trigger click on backdrop', () => {
    render(
      <Provider store={mockStore(stateMock)}>
        <Modal disableClickOnBackdrop modalId={ModalId.storyBookModal}>
          content
        </Modal>
      </Provider>
    );

    fireEvent.click(document.getElementsByClassName('Modal')[0]);
    expect(mockCallBack?.mock.calls.length).toBe(0);
  });

  it('should trigger escape', () => {
    render(
      <Provider
        store={mockStore({
          ...stateMock,
          modal: {
            modalId: ModalId.storyBookModal,
          },
        })}
      >
        <Modal modalId={ModalId.storyBookModal}>content</Modal>
      </Provider>
    );

    fireEvent.keyDown(document, { key: KeyboardKeys.escape });
    expect(mockCallBack?.mock.calls.length).toBe(1);
  });

  it('should not trigger escape when escape is disabled', () => {
    render(
      <Provider
        store={mockStore({
          ...stateMock,
          modal: {
            modalId: ModalId.storyBookModal,
          },
        })}
      >
        <Modal disableEscapeKeyDown modalId={ModalId.storyBookModal}>
          content
        </Modal>
      </Provider>
    );

    fireEvent.keyDown(document, { key: KeyboardKeys.escape });
    expect(mockCallBack?.mock.calls.length).toBe(0);
  });

  it('should not trigger escape when modal is closed', () => {
    render(
      <Provider
        store={mockStore({
          ...stateMock,
        })}
      >
        <Modal disableEscapeKeyDown modalId={ModalId.storyBookModal}>
          content
        </Modal>
      </Provider>
    );

    fireEvent.keyDown(document, { key: KeyboardKeys.escape });
    expect(mockCallBack?.mock.calls.length).toBe(0);
  });

  it('should pass footer', () => {
    const { container } = render(
      <Provider store={mockStore(stateMock)}>
        <Modal footer="footer" modalId={ModalId.storyBookModal}>
          content
        </Modal>
      </Provider>
    );

    expect(container.firstChild?.firstChild?.lastChild).toHaveTextContent(
      'footer'
    );
  });

  it('should be opened if modalId is equal with modalId in state', () => {
    const { container } = render(
      <Provider
        store={mockStore({
          ...stateMock,
          modal: {
            modalId: ModalId.storyBookModal,
          },
        })}
      >
        <Modal modalId={ModalId.storyBookModal}>content</Modal>
      </Provider>
    );

    expect(container.firstChild).toHaveClass('Modal--opened');
    expect(container.firstChild?.firstChild).toHaveClass(
      'Modal__container--opened'
    );
  });

  it('should pass custom styles', () => {
    const { container } = render(
      <Provider store={mockStore(stateMock)}>
        <Modal modalId={ModalId.storyBookModal} style={{ width: '100%' }}>
          content
        </Modal>
      </Provider>
    );

    expect(container.firstChild).toHaveAttribute('style');
  });

  it('should pass title', () => {
    const { container } = render(
      <Provider store={mockStore(stateMock)}>
        <Modal title="Title" modalId={ModalId.storyBookModal}>
          content
        </Modal>
      </Provider>
    );

    expect(
      container.firstChild?.firstChild?.firstChild?.firstChild
    ).toHaveTextContent('Title');
  });
});
