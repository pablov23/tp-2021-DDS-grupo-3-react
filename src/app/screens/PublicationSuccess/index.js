import i18next from 'i18next';
import React from 'react';

import SuccessScreen from '~app/screens/SuccessScreen';

function PublicationSuccess() {
  return <SuccessScreen title={i18next.t('PublicationSuccess:title')} />;
}

export default PublicationSuccess;
