import React from 'react';
import cn from 'classnames';

import { MENU_ITEMS } from './constants';
import styles from './styles.module.scss';
import MenuItem from './components/MenuItem';

function SideBar() {
  return (
    <div className={cn(styles.sideBar, styles.sticky)}>
      <div className={cn(styles.menuItemsContainer)}>
        {MENU_ITEMS.map(item => (
          <MenuItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
