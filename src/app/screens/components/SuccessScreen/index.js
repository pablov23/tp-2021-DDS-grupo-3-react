import i18next from 'i18next';
import { string } from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router';

import Button from '~app/components/Button';
import RescueWrapper from '~app/components/RescueWrapper';
import { ROUTES } from '~constants/routes';

import styles from './styles.module.scss';

function Success({ title }) {
  const history = useHistory();
  // TODO: change route when ready
  const handleClick = () => history.push(ROUTES.HOME_ADMIN);
  return (
    <RescueWrapper className={styles.container} contentClassName={styles.container}>
      <div className={styles.buttonsContainer}>
        <div className={styles.title}>{title}</div>
        <Button className={styles.button} onClick={handleClick}>
          {i18next.t('Home:title')}
        </Button>
      </div>
    </RescueWrapper>
  );
}

Success.propTypes = {
  title: string
};

export default Success;
