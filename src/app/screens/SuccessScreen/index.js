import i18next from 'i18next';
import { string, func } from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router';

import Button from '~app/components/Button';
import RescueViewWrapper from '~app/components/RescueViewWrapper';
import { ROUTES } from '~constants/routes';

import styles from './styles.module.scss';

function SuccessScreen({ title, buttonText = i18next.t('SuccessScreen:homeButton'), customHandleClick }) {
  const history = useHistory();
  const handleRedirectToHome = () => history.push(ROUTES.HOME.basePath);
  return (
    <RescueViewWrapper>
      <span className={styles.successTitle}>{title}</span>
      <Button onClick={customHandleClick || handleRedirectToHome}>{buttonText}</Button>
    </RescueViewWrapper>
  );
}

SuccessScreen.propTypes = {
  buttonText: string,
  customHandleClick: func,
  title: string
};

export default SuccessScreen;
