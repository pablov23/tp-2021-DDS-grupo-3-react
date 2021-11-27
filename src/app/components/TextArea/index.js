import React from 'react';
import { bool, func, string } from 'prop-types';
import cn from 'classnames';

import Error from '../Error';

import styles from './styles.module.scss';

function TextArea({
  name,
  label,
  hideLabel,
  handleChange,
  error,
  className,
  textAreaClassName,
  labelClassName,
  errorClassName,
  value,
  ...inputProps
}) {
  return (
    <div className={cn(styles.container, className)}>
      {!hideLabel && (
        <label htmlFor={name} className={cn(styles.fieldLabel, labelClassName)}>
          {label}
        </label>
      )}
      <textarea
        name={name}
        className={cn(styles.textArea, textAreaClassName, {
          [styles.textAreaError]: !!error
        })}
        onChange={handleChange}
        value={value}
        {...inputProps}
      />
      <Error error={error} className={errorClassName} />
    </div>
  );
}

TextArea.propTypes = {
  label: string.isRequired,
  name: string.isRequired,
  className: string,
  error: string,
  errorClassName: string,
  handleChange: func,
  hideLabel: bool,
  labelClassName: string,
  textAreaClassName: string,
  value: string
};

TextArea.defaultProps = {
  className: 'column'
};

export default TextArea;
