import i18next from 'i18next';
import React from 'react';

import SuccessScreen from '~app/screens/SuccessScreen';

function RegisterSuccessful() {
  return <SuccessScreen title={i18next.t('RegisterSuccessful:title')} />;
}

export default RegisterSuccessful;
