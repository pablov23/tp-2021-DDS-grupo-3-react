import { bool, shape, string } from 'prop-types';
import React, { Fragment } from 'react';
import i18next from 'i18next';
import cn from 'classnames';

import styles from '../styles.module.scss';

const IconItem = ({
  isSelected,
  isHovering,
  item,
  iconClassName,
  isSelectedOrHovering,
  imgComponent: Component
}) => (
  <div className={cn({ [styles.menuIconSelected]: isSelected })}>
    <Component
      className={cn(styles.menuIcon, iconClassName, {
        [styles.menuIconImgSelected]: isSelectedOrHovering,
        [styles.secondary]: isHovering && !!item?.secondary
      })}
      alt={i18next.t(`Menu:${item.name}`)}
    />
  </div>
);

IconItem.propTypes = {
  iconClassName: string,
  imgComponent: Fragment,
  isHovering: bool,
  isSelected: bool,
  isSelectedOrHovering: bool,
  item: shape({ secondary: bool, name: string })
};

export default IconItem;
