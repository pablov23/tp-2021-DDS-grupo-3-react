import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { bool } from 'prop-types';
import { useSelector } from 'react-redux';

import { ROUTES } from '~constants/routes';
import person from '~assets/person.svg';
import { isSmallDevice } from '~utils/screenSize';
import { SIDES } from '~constants/sides';
import { MODALS } from '~redux/Modal/constants';

import SideModal from '../SideModal';

import { MENU_ITEMS } from './constants';
import styles from './styles.module.scss';
import MenuItem from './components/MenuItem';

function SideBar({ canBeHided = true }) {
  const open = useSelector(state => state.modal[MODALS.SIDE_BAR]);
  const isModal = canBeHided || isSmallDevice();
  const Container = isModal ? SideModal : 'div';

  return (
    <Container
      {...(isModal
        ? { side: SIDES.LEFT, modal: MODALS.SIDE_BAR, isOpen: open, className: styles.sideBar }
        : { className: cn(styles.sideBar, styles.sticky) })}>
      <Link className={styles.logoContainer} to={ROUTES.HOME.path}>
        <img alt="logo" src={person} className={styles.logo} />
      </Link>
      <div className={cn(styles.menuItemsContainer)}>
        {MENU_ITEMS.map(item => (
          <MenuItem key={item} item={item} />
        ))}
      </div>
    </Container>
  );
}

SideBar.propTypes = {
  canBeHided: bool
};
export default SideBar;
