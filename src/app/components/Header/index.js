import { string } from 'prop-types';
import React from 'react';

import { ReactComponent as User } from '~assets/person.svg';

const Header = ({ title, titleClassName, iconClassName }) => (
  <>
    <User className={iconClassName} alt="icon" />
    <span className={titleClassName}>{title}</span>
  </>
);

Header.propTypes = {
  iconClassName: string,
  title: string,
  titleClassName: string
};

export default Header;
