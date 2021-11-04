import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { func, string, bool } from 'prop-types';
import Modal from 'react-modal';
import cn from 'classnames';

import { noScroll } from '~utils/scroll';
import ModalActions from '~redux/Modal/actions';

import styles from './styles.module.scss';

function CustomModal({
  children,
  hideCloseButton,
  className,
  overlayClassName,
  shouldReturnFocusAfterClose,
  shouldCloseOnOverlayClick,
  disableCloseButton,
  onClose,
  modal,
  isOpen,
  defaultClassName,
  defaultAnimation,
  ...props
}) {
  const dispatch = useDispatch();
  const closeModal = () => dispatch(ModalActions.closeModal(modal));
  const clearAllModals = () => dispatch(ModalActions.clearModals());

  const clearModals = () => {
    if (onClose) {
      onClose();
    }
    clearAllModals();
  };

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    closeModal(modal);
  };

  const prevIsOpen = useRef(isOpen);

  useEffect(() => {
    window.addEventListener('popstate', clearModals, false);
    if (isOpen && !prevIsOpen.current) {
      noScroll.on();
    }
    if (!isOpen && prevIsOpen.current) {
      noScroll.off();
    }
    prevIsOpen.current = isOpen;
    return () => {
      noScroll.off();
      window.removeEventListener('popstate', clearModals);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prevIsOpen, isOpen]);

  return (
    <Modal
      {...props}
      closeTimeoutMS={350}
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      className={cn(
        {
          [styles.modalContainer]: defaultClassName,
          [styles.openAnimation]: defaultAnimation && isOpen,
          [styles.closeAnimation]: defaultAnimation && !isOpen
        },
        className
      )}
      overlayClassName={cn(
        styles.modalOverlay,
        overlayClassName,
        isOpen ? styles.overlayIn : styles.overlayOut
      )}
      shouldReturnFocusAfterClose={shouldReturnFocusAfterClose}
      bodyOpenClassName={styles.body}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}>
      <>
        {!hideCloseButton && (
          <button
            type="button"
            className={styles.closeButton}
            onClick={handleCloseModal}
            disabled={disableCloseButton}>
            <i className={`icon-close ${styles.iconClose}`} />
          </button>
        )}
        {children}
      </>
    </Modal>
  );
}

CustomModal.propTypes = {
  modal: string.isRequired,
  className: string,
  defaultAnimation: bool,
  defaultClassName: bool,
  disableCloseButton: bool,
  hideCloseButton: bool,
  isOpen: bool,
  overlayClassName: string,
  shouldCloseOnOverlayClick: bool,
  shouldReturnFocusAfterClose: bool,
  onClose: func
};

CustomModal.defaultProps = {
  defaultAnimation: true,
  defaultClassName: true,
  shouldCloseOnOverlayClick: true,
  shouldReturnFocusAfterClose: false
};

export default CustomModal;
