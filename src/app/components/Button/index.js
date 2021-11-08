/* eslint-disable react/button-has-type */
import { func, oneOf, string, boolean } from 'prop-types';
import React from 'react';
import cn from 'classnames';

import LoadingWrapper from '../LoadingWrapper';

import styles from './styles.module.scss';

function Button({ children, onClick, type = 'button', className, loading }) {
  // TODO: Add ButtonLoading
  return (
    <LoadingWrapper loading={loading}>
      <button type={type} className={cn(styles.button, className)} onClick={onClick}>
        {children}
      </button>
    </LoadingWrapper>
  );
}

Button.propTypes = {
  className: string,
  loading: boolean,
  type: oneOf(['button', 'submit', 'reset']),
  onClick: func
};

export default Button;
