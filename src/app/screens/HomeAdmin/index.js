import i18next from 'i18next';
import React from 'react';
import { useHistory } from 'react-router';

import Button from '~app/components/Button';
import RescueWrapper from '~app/components/RescueWrapper';
import { ROUTES } from '~constants/routes';

import styles from './styles.module.scss';

function HomeAdmin() {
  const history = useHistory();
  const handleCreateAdmin = () => history.push(ROUTES.CREATE_ADMIN.path);
  // TODO: handleAddCharacteristic
  return (
    <RescueWrapper className={styles.container} contentClassName={styles.container}>
      <div className={styles.buttonsContainer}>
        <Button className={styles.button} onClick={handleCreateAdmin}>
          {i18next.t('HomeAdmin:createAdmin')}
        </Button>
        <Button className={styles.button}>{i18next.t('HomeAdmin:addCharacteristic')}</Button>
      </div>
    </RescueWrapper>
  );
}

export default HomeAdmin;
