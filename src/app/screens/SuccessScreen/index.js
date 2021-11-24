import i18next from 'i18next';
import { string } from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router';

import Button from '~app/components/Button';
import RescueViewWrapper from '~app/components/RescueViewWrapper';
import { ROUTES } from '~constants/routes';

import styles from './styles.module.scss';

function SuccessScreen({ title }) {
  const history = useHistory();
  const handleRedirectToHome = () => history.push(ROUTES.HOME.basePath);
  return (
    <RescueViewWrapper>
      <span className={styles.successTitle}>{title}</span>
      <Button onClick={handleRedirectToHome}>{i18next.t('SuccessScreen:homeButton')}</Button>
    </RescueViewWrapper>
  );
}

SuccessScreen.propTypes = {
  title: string
};

export default SuccessScreen;
