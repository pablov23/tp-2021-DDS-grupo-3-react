import { string, bool } from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router';
import cn from 'classnames';

import { ReactComponent as Foot } from '~assets/foot.svg';
import { ROUTES } from '~constants/routes';

import styles from './styles.module.scss';

const Header = ({ className, title, titleClassName, iconClassName, redirectToHome }) => {
  const history = useHistory();
  const handleRedirectToHome = () => {
    // TODO: handle login
    history.push(ROUTES.HOME.path);
  };
  return (
    <div
      className={cn(styles.headerContainer, { [styles.headerClick]: redirectToHome }, className)}
      onClick={redirectToHome && handleRedirectToHome}>
      <Foot className={cn(styles.headerIcon, iconClassName)} alt="icon" />
      {title && <span className={cn(styles.headerTitle, titleClassName)}>{title}</span>}
    </div>
  );
};

Header.propTypes = {
  className: string,
  iconClassName: string,
  redirectToHome: bool,
  title: string,
  titleClassName: string
};

export default Header;
