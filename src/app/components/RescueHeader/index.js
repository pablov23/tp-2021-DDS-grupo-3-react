import i18next from 'i18next';
import React from 'react';

import { ReactComponent as Person } from '~assets/person.svg';
import { ReactComponent as Foot } from '~assets/foot.svg';

import styles from './styles.module.scss';

function RescueHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.upperRow}>
        <div className={styles.logoContainer}>
          <Foot className={styles.logo} alt="icon" />
          <div className={styles.title}>{i18next.t('RescueHeader:title')}</div>
        </div>
        <div className={styles.profileContainer}>
          <div className={styles.profilePictureContainer}>
            <Person className={styles.profilePicture} />
          </div>
          <div className={styles.profileTitle}>{i18next.t('RescueHeader:profile')}</div>
        </div>
      </div>
    </div>
  );
}

export default RescueHeader;
