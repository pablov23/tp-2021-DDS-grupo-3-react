import i18next from 'i18next';
import React from 'react';

import Button from '~app/components/Button';
import RescueViewWrapper from '~app/components/RescueViewWrapper';

import styles from './styles.module.scss';

function ContactOwner() {
  return (
    <RescueViewWrapper contentClassName={styles.container} headerClassName={styles.headerContainer}>
      <div className={styles.contentContainer}>
        <Button className={styles.button}>{i18next.t('ContactOwner:contact')}</Button>
      </div>
    </RescueViewWrapper>
  );
}

export default ContactOwner;
