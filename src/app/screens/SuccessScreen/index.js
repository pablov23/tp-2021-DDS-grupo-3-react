import i18next from 'i18next';
import { string } from 'prop-types';
import React from 'react';

import Button from '~app/components/Button';
import RescueViewWrapper from '~app/components/RescueViewWrapper';

import styles from './styles.module.scss';

function SuccessScreen({ title }) {
  // TODO: handleRedirectToHome
  // const handleRedirectToHome = () => history.push(ROUTES.HOME.path);
  return (
    <RescueViewWrapper>
      <span className={styles.successTitle}>{title}</span>
      <Button className={styles.button}>{i18next.t('SuccessScreen:homeButton')}</Button>
    </RescueViewWrapper>
  );
}

SuccessScreen.propTypes = {
  title: string
};

export default SuccessScreen;
