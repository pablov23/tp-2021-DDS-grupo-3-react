import React from 'react';
import { func, string, bool, oneOf } from 'prop-types';
import cn from 'classnames';

import CustomModal from '~components/CustomModal';
import { SIDES } from '~constants/sides';

import styles from './styles.module.scss';
import { LATERAL_STYLES, OUT_STYLES, OVERLAY_STYLES } from './constants';

function SideModal({
  side,
  modal,
  children,
  className,
  isOpen,
  overlayClassName,
  shouldCloseOnOverlayClick,
  shouldReturnFocusAfterClose,
  onClose,
  ...props
}) {
  return (
    <CustomModal
      modal={modal}
      className={cn(
        { [styles.modal]: !className },
        { [LATERAL_STYLES[side]]: isOpen },
        { [OUT_STYLES[side]]: !isOpen },
        className
      )}
      isOpen={isOpen}
      overlayClassName={cn(overlayClassName, OVERLAY_STYLES[side])}
      defaultAnimation={false}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      shouldReturnFocusAfterClose={shouldReturnFocusAfterClose}
      onClose={onClose}
      {...props}>
      {children}
    </CustomModal>
  );
}

SideModal.propTypes = {
  modal: string.isRequired,
  className: string,
  isOpen: bool,
  overlayClassName: string,
  shouldCloseOnOverlayClick: bool,
  shouldReturnFocusAfterClose: bool,
  side: oneOf(SIDES),
  onClose: func
};

SideModal.defaultProps = {
  shouldCloseOnOverlayClick: true,
  shouldReturnFocusAfterClose: false,
  side: SIDES.RIGHT
};

export default SideModal;
