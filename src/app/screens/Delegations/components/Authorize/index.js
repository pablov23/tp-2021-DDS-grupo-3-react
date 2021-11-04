import React from 'react';
import i18next from 'i18next';
import { string } from 'prop-types';

import PersonSearcher from '~components/PersonSearcher';
import PersonCard from '~components/PersonCard';
import Button from '~components/Button';

import styles from './styles.module.scss';
import { show } from './utils';
import { PERSONS } from './constants';

function Authorize({ currentItem }) {
  return show(currentItem) ? (
    <>
      <PersonSearcher className={styles.personSearcherContainer} />
      {PERSONS.map(person => (
        <PersonCard key={person} person={person}>
          <Button className={styles.personButton}>{i18next.t('Delegations:request')}</Button>
        </PersonCard>
      ))}
    </>
  ) : null;
}

Authorize.propTypes = {
  currentItem: string
};

export default Authorize;
