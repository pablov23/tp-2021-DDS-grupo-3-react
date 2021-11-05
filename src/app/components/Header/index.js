import { string } from 'prop-types';
import React from 'react';

import { ReactComponent as Foot } from '~assets/foot.svg';

const Header = ({ title, titleClassName, iconClassName }) => (
  <>
    <Foot className={iconClassName} alt="icon" />
    <span className={titleClassName}>{title}</span>
  </>
);

Header.propTypes = {
  iconClassName: string,
  title: string,
  titleClassName: string
};

export default Header;
