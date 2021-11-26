import React from 'react';
import cn from 'classnames';
import { string, func, shape, bool } from 'prop-types';

import useMenuItem from '../useMenuItem';
import SubmenuTitle from '../SubmenuTitle';
import styles from '../styles.module.scss';

function MenuItem({ item, onClick, itemClassName = '', labelClassName = '' }) {
  const { openSubMenu, isSelected, subMenuOpen, ItemComponent, handleClick } = useMenuItem({
    item,
    onClick
  });

  return (
    <ItemComponent to={item.route?.path} className={styles.container} onClick={item?.onClick || handleClick}>
      <div
        className={cn(
          { [styles.menuItemSelected]: isSelected, [styles.menuItemNotSelected]: !isSelected },
          itemClassName
        )}>
        <SubmenuTitle
          item={item}
          labelClassName={labelClassName}
          isSelected={isSelected}
          subMenuOpen={subMenuOpen}
          openSubMenu={openSubMenu}
        />
        <div className={cn({ [styles.border]: isSelected })} />
      </div>
      {item.subMenus && subMenuOpen && (
        <div className={styles.subMenuContainer}>
          {item.subMenus?.map(sub => (
            <MenuItem
              key={sub.name}
              item={sub}
              itemClassName={styles.subItem}
              iconClassName={styles.subItemIcon}
            />
          ))}
        </div>
      )}
    </ItemComponent>
  );
}
MenuItem.propTypes = {
  item: shape({
    name: string.isRequired,
    iconOn: string.isRequired,
    iconOff: string.isRequired,
    secondary: bool
  }).isRequired,
  itemClassName: string,
  labelClassName: string,
  onClick: func
};
export default MenuItem;
