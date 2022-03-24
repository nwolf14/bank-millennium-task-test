import classnames from 'classnames';
import { createPortal } from 'react-dom';
import { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// components
import P from '../Typography/Typography';

// hooks
import { useTheme } from '../../../../hooks/useTheme/useTheme';

// others
import { className as classNameModal, classNames } from './classNames';
import { ReactComponent as Close } from '../../../../assets/icons/close.svg';

// store
import { closeModal } from '../../../../store/modal/actions';
import { getModalIdSelector } from '../../../../store/modal/selectors';

// styles
import './modal.scss';
import { ModalId } from './enums';
import { createHtmlElement } from '../../../../utils/dom/createHtmlElement';
import { KeyboardKeys } from '../../../../enums';

export type TProps = {
  children: ReactNode;
  className?: string;
  classNameContent?: string;
  classNameFooter?: string;
  classNameHeader?: string;
  disableClickOnBackdrop?: boolean;
  disableEscapeKeyDown?: boolean;
  footer?: ReactNode;
  modalId: ModalId;
  style?: { [key: string]: number | string };
  title?: ReactNode;
};

const Modal: FC<TProps> = ({
  children = null,
  className = '',
  classNameContent = '',
  classNameFooter = '',
  classNameHeader = '',
  disableClickOnBackdrop = false,
  disableEscapeKeyDown = false,
  footer = null,
  modalId,
  style = {},
  title = '',
}) => {
  const dispatch = useDispatch();
  const openedModalId = useSelector(getModalIdSelector);
  const { classNamesWithTheme } = useTheme(classNames);
  const isOpened = openedModalId === modalId;

  const onKeyDownHandler = (event: KeyboardEvent): void => {
    if (event.key === KeyboardKeys.escape) {
      dispatch(closeModal());
    }
  };

  useEffect(() => {
    if (isOpened && !disableEscapeKeyDown) {
      window.addEventListener('keydown', onKeyDownHandler);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDownHandler);
    };
  }, [isOpened]);

  return createPortal(
    <div
      className={classnames(
        className,
        classNamesWithTheme[classNameModal].name,
        {
          [classNamesWithTheme[classNameModal].modificators.opened]: isOpened,
        }
      )}
      onClick={() => !disableClickOnBackdrop && dispatch(closeModal())}
      style={style}
    >
      <div
        className={classnames(classNamesWithTheme.container.name, {
          [classNamesWithTheme.container.modificators.opened]: isOpened,
        })}
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className={classnames(classNameHeader, classNamesWithTheme.header)}
        >
          <P>{title}</P>
          <Close
            className={classNamesWithTheme.close}
            onClick={() => dispatch(closeModal())}
          />
        </div>
        <div
          className={classnames(classNameContent, classNamesWithTheme.content)}
        >
          {children}
        </div>
        {footer && (
          <div
            className={classnames(classNameFooter, classNamesWithTheme.footer)}
          >
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.getElementById('modals') ||
      document.body.appendChild(createHtmlElement('div', { id: 'modals' }))
  );
};

export default Modal;
