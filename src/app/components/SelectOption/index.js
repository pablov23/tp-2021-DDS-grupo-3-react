import React from 'react';
import { string } from 'prop-types';

import styles from './styles.module.scss';

function SelectOption({ message }) {
  return <div className={`column charcoal ${styles.option}`}>{message}</div>;
}

SelectOption.propTypes = {
  message: string
};

export default SelectOption;
