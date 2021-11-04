import { useSelector } from 'react-redux';
import cn from 'classnames';

import ModalActions from '~redux/Modal/actions';
import { MODALS } from '~redux/Modal/constants';

import styles from './styles.module.scss';
import { MODAL_CLOSE_TIMEOUT } from './constants';

export const useModalSidebar = () => {
  const openModal = () => ModalActions.openModal(MODALS.SIDE_BAR);
  const modalOpen = useSelector(state => state.modal.sideBar);

  const modalProps = {
    defaultClassName: false,
    closeTimeoutMS: MODAL_CLOSE_TIMEOUT,
    isOpen: modalOpen,
    modal: MODALS.SIDE_BAR,
    className: cn(styles.sideBar, {
      [styles.slideRight]: modalOpen,
      [styles.slideLeft]: !modalOpen
    })
  };

  return { openModal, modalOpen, modalProps };
};
