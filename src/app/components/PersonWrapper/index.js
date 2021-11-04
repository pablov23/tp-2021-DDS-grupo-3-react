import { string } from 'prop-types';
import React from 'react';

import PersonHeader from './components/PersonHeader';
import styles from './styles.module.scss';

function PersonWrapper({ children, subtitle }) {
  return (
    <div className={styles.container}>
      <PersonHeader subtitle={subtitle} />
      <div className={styles.contentContainer}>{children}</div>
    </div>
  );
}

PersonWrapper.propTypes = { subtitle: string };

export default PersonWrapper;
