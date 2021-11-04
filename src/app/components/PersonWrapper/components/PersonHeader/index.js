import i18next from 'i18next';
import { string } from 'prop-types';
import React from 'react';

import { ReactComponent as Person } from '~assets/person.svg';

import styles from './styles.module.scss';

function PersonHeader({ subtitle }) {
  return (
    <div className={styles.container}>
      <div className={styles.upperRow}>
        <div className={styles.title}>{i18next.t('PersonHeader:title')}</div>
        <div className={styles.profileContainer}>
          <div className={styles.profilePictureContainer}>
            <Person className={styles.profilePicture} />
          </div>
          <div className={styles.profileTitle}>{i18next.t('PersonHeader:profile')}</div>
        </div>
      </div>
      <div className={styles.lowerRow}>{subtitle}</div>
    </div>
  );
}

PersonHeader.propTypes = {
  subtitle: string
};

export default PersonHeader;
