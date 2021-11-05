import i18next from 'i18next';
import { bool } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '~constants/routes';

import styles from './styles.module.scss';

const Links = ({ signUp }) => (
  <>
    {signUp && (
      <div className={`row m-bottom-2 ${styles.signUpContainer}`}>
        <span className="m-right-1 white">{i18next.t('Login:noUser')}</span>
        <Link to={ROUTES.REGISTER_USER.path} className={styles.signUp}>
          {i18next.t('Login:signUp')}
        </Link>
      </div>
    )}
  </>
);

Links.propTypes = {
  signUp: bool
};

export default Links;
