import i18next from 'i18next';
import React from 'react';

import Header from '~components/Header';

import styles from './styles.module.scss';

const RescueViewWrapper = ({ children }) => (
  <div className={styles.container}>
    <Header
      title={i18next.t('RescueViewWrapper:title')}
      iconClassName={styles.rescueIcon}
      titleClassName={styles.rescueTitle}
    />
    {children}
  </div>
);

export default RescueViewWrapper;
