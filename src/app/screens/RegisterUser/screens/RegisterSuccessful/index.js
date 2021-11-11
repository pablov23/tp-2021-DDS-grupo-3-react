import i18next from 'i18next';
import React from 'react';

import Success from '~app/screens/components/SuccessScreen';

function RegisterSuccessful() {
  return <Success title={i18next.t('RegisterUserSuccess:successfulRegister')} />;
}

export default RegisterSuccessful;
