import i18next from 'i18next';
import { arrayOf, func, shape, string } from 'prop-types';
import React from 'react';
import cn from 'classnames';

import Button from '../Button';

import styles from './styles.module.scss';

function PersonNavigator({ target, options, currentItem, handleItemChange }) {
  return (
    <div className={styles.container}>
      {options.map(({ id }) => (
        <Button
          key={id}
          className={cn(styles.navItem, { [styles.navItemSelected]: id === currentItem })}
          onClick={handleItemChange(id)}>
          - {i18next.t(`${target}:${id}`)}
        </Button>
      ))}
    </div>
  );
}

PersonNavigator.propTypes = {
  currentItem: string,
  handleItemChange: func,
  options: arrayOf(shape),
  target: string
};

export default PersonNavigator;
