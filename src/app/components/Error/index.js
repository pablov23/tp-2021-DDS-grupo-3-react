import React from 'react';
import { string } from 'prop-types';
import cn from 'classnames';

import styles from './styles.module.scss';

const Error = ({ error, className }) => (
  <div>{error && <div className={cn(styles.error, className)}>{error}</div>}</div>
);

Error.propTypes = {
  className: string,
  error: string
};

export default Error;
