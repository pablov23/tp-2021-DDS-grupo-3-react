import React from 'react';
import cn from 'classnames';
import { string, func, shape, bool } from 'prop-types';

import useMenuItem from '../useMenuItem';
import SubmenuTitle from '../SubmenuTitle';
import styles from '../styles.module.scss';
import IconItem from '../IconItem';

function MenuItem({ item, onClick, itemClassName = '', iconClassName = '', labelClassName = '' }) {
  const {
    setHover,
    ImgComponent,
    ItemComponent,
    isSelectedOrHovering,
    openSubMenu,
    isSelected,
    subMenuOpen,
    isHovering,
    handleClick
  } = useMenuItem({ item, onClick });

  return (
    <ItemComponent to={item.route?.path} className={styles.container} onClick={item?.onClick || handleClick}>
      <div
        onMouseEnter={setHover(true)}
        onMouseLeave={setHover(false)}
        className={cn(
          {
            [styles.menuItemSelected]: isSelected,
            [styles.menuItemNotSelected]: !isSelected,
            [styles.menuItemHovered]: isHovering,
            [styles.secondary]: isHovering && !!item?.secondary
          },
          itemClassName
        )}>
        <IconItem
          imgComponent={ImgComponent}
          isSelected={isSelected}
          isHovering={isHovering}
          isSelectedOrHovering={isSelectedOrHovering}
          item={item}
          iconClassName={iconClassName}
        />
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
              labelClassName="smaller-text"
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
  iconClassName: string,
  itemClassName: string,
  labelClassName: string,
  onClick: func
};
export default MenuItem;
