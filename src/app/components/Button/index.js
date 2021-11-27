/* eslint-disable react/button-has-type */
import { func, oneOf, string, bool, objectOf } from 'prop-types';
import React from 'react';
import cn from 'classnames';

import LoadingWrapper from '../LoadingWrapper';

import styles from './styles.module.scss';
import { LOADING_SIZE } from './constants';

function Button({
  children,
  onClick,
  type = 'button',
  className,
  loading,
  loadingClassName,
  loadingProps,
  loadingType,
  disabled
}) {
  return (
    <button
      type={type}
      className={cn(
        styles.button,
        {
          [styles.disabled]: loading || disabled
        },
        className
      )}
      onClick={onClick}
      disabled={loading || disabled}>
      <LoadingWrapper
        loading={loading}
        className={loadingClassName}
        loadingProps={loadingProps}
        type={loadingType || 'buttonLoading'}
        width={LOADING_SIZE}
        height={LOADING_SIZE}>
        {children}
      </LoadingWrapper>
    </button>
  );
}

Button.propTypes = {
  className: string,
  disabled: bool,
  loading: bool,
  loadingClassName: string,
  loadingProps: objectOf(string),
  loadingType: string,
  type: oneOf(['button', 'submit', 'reset']),
  onClick: func
};

export default Button;
