import i18next from 'i18next';
import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

import Button from '~app/components/Button';
import { ROUTES } from '~constants/routes';

import styles from './styles.module.scss';

const LoginAndRegisterButtons = () => {
  const history = useHistory();
  const handleRedirectToLogin = () => history.push(ROUTES.LOGIN_USER.path);
  return (
    <div className={styles.container}>
      <Button className={styles.button} onClick={handleRedirectToLogin}>
        {i18next.t('LoginAndRegisterButtons:login')}
      </Button>
      <div className={styles.registerContainer}>
        <span className={styles.withoutUser}>{i18next.t('LoginAndRegisterButtons:withoutUser')}</span>
        <Link className={styles.register} to={ROUTES.REGISTER_USER.path}>
          {i18next.t('LoginAndRegisterButtons:register')}
        </Link>
      </div>
    </div>
  );
};

export default LoginAndRegisterButtons;
