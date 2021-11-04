import { string } from 'prop-types';
import React from 'react';

import styles from './styles.module.scss';

function PersonContentWrapper({ children, title }) {
  return (
    <div className={styles.container}>
      {title && <div className={styles.contentTitle}>{title}</div>}
      {children}
    </div>
  );
}

PersonContentWrapper.propTypes = {
  title: string
};

export default PersonContentWrapper;
