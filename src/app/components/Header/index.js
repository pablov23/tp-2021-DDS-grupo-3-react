import { string } from 'prop-types';
import React from 'react';
import cn from 'classnames';

import { ReactComponent as Foot } from '~assets/foot.svg';

import styles from './styles.module.scss';

const Header = ({ className, title, titleClassName, iconClassName }) => (
  <div className={cn(styles.headerContainer, className)}>
    <Foot className={cn(styles.headerIcon, iconClassName)} alt="icon" />
    {title && <span className={cn(styles.headerTitle, titleClassName)}>{title}</span>}
  </div>
);

Header.propTypes = {
  className: string,
  iconClassName: string,
  title: string,
  titleClassName: string
};

export default Header;
