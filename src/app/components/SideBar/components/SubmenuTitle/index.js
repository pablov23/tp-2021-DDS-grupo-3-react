import i18next from 'i18next';
import React from 'react';
import cn from 'classnames';
import { bool, shape, string } from 'prop-types';

import ArrowDown from '~assets/arrow-down.svg';

import styles from '../styles.module.scss';

const SubmenuTitle = ({ item, labelClassName, isSelected, subMenuOpen, openSubMenu }) => (
  <div className={styles.subMenu}>
    <h2
      className={cn(labelClassName, {
        [styles.subMenuTitle]: !isSelected,
        [styles.subMenuTitleClicked]: isSelected,
        [styles.secondary]: !!item?.secondary
      })}>
      {i18next.t(`Menu:${item.name}`)}
    </h2>
    {item.subMenus && (
      <img
        src={ArrowDown}
        className={cn(styles.arrow, { [styles.rotate]: subMenuOpen })}
        onClick={openSubMenu}
      />
    )}
  </div>
);

SubmenuTitle.propTypes = {
  isSelected: bool,
  item: shape({
    secondary: bool
  }),
  labelClassName: string,
  openSubMenu: bool,
  subMenuOpen: bool
};

export default SubmenuTitle;
