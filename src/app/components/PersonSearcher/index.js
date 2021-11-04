import i18next from 'i18next';
import { string } from 'prop-types';
import React, { useState } from 'react';
import cn from 'classnames';

import Input from '../Input';

import styles from './styles.module.scss';

function PersonSearcher({ className }) {
  const [dni, setDni] = useState('');
  const handleChange = e => {
    setDni(e.target.value);
  };
  return (
    <div className={cn(styles.container, className)}>
      <span className={styles.personTitle}>{i18next.t('PersonSearcher:title')}</span>
      <Input value={dni} placeholder={i18next.t('PersonSearcher:dni')} handleChange={handleChange} />
    </div>
  );
}

PersonSearcher.propTypes = {
  className: string
};

export default PersonSearcher;
