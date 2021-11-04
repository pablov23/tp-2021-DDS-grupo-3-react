import { arrayOf, shape } from 'prop-types';
import React from 'react';

import styles from './styles.module.scss';

function PersonCard({ person, children }) {
  return (
    <div className={styles.container}>
      <div className={styles.personInfoContainer}>
        {person.map(({ title, info }) => (
          <div key={info} className={styles.personInfoRow}>
            <div className={styles.personInfoTitle}>{title}:</div>
            <div className={styles.personInfo}>{info}</div>
          </div>
        ))}
      </div>
      <div>{children}</div>
    </div>
  );
}

PersonCard.propTypes = {
  person: arrayOf(shape)
};

export default PersonCard;
