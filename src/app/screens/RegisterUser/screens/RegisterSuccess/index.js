import i18next from 'i18next';
import React from 'react';
import { useHistory } from 'react-router';

import SuccessScreen from '~app/screens/SuccessScreen';
import { ROUTES } from '~constants/routes';

function RegisterSuccess() {
  const history = useHistory();
  const handleRedirectToLogin = () => history.push(ROUTES.LOGIN_USER.path);
  return (
    <SuccessScreen
      title={i18next.t('RegisterSuccess:title')}
      buttonText={i18next.t('RegisterSuccess:toLogin')}
      customHandleClick={handleRedirectToLogin}
    />
  );
}

export default RegisterSuccess;
