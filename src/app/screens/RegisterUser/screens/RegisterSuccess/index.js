import i18next from 'i18next';
import React from 'react';

import SuccessScreen from '~app/screens/SuccessScreen';

function RegisterSuccess() {
  return <SuccessScreen title={i18next.t('RegisterSuccess:title')} />;
}

export default RegisterSuccess;
