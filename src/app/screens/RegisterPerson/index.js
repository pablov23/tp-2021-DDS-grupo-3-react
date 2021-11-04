import i18next from 'i18next';
import React from 'react';

import Button from '~app/components/Button';
import PersonCard from '~app/components/PersonCard';
import PersonContentWrapper from '~app/components/PersonContentWrapper';
import PersonSearcher from '~components/PersonSearcher';
import PersonWrapper from '~components/PersonWrapper';

import { PERSONS } from './constants';
import styles from './styles.module.scss';

function RegisterPerson() {
  return (
    <PersonWrapper subtitle={i18next.t('RegisterPerson:subtitle')}>
      <div className={styles.container}>
        <div className={styles.searcherContainer}>
          <PersonSearcher />
        </div>
        <PersonContentWrapper title={i18next.t('RegisterPerson:results')}>
          <div className={styles.resultsContainer}>
            {PERSONS.map(person => (
              <PersonCard key={person} person={person}>
                <Button className={styles.personButton}>{i18next.t('RegisterPerson:request')}</Button>
              </PersonCard>
            ))}
          </div>
        </PersonContentWrapper>
      </div>
    </PersonWrapper>
  );
}

export default RegisterPerson;
