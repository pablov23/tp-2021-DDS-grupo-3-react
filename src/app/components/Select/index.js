import { arrayOf, bool, func, string } from 'prop-types';
import React from 'react';
import SelectLib from 'react-select';
import cn from 'classnames';

import { option } from '~propTypes/select';
import { getSelectLabel } from '~utils/select';

import styles from './styles.module.scss';
import { ERROR_STYLES, SELECT_STYLES, THEME } from './styles';

function Select({
  name,
  options,
  onBlur,
  onChange,
  defaultValue,
  placeholder = '',
  error,
  value,
  selectLabel,
  label,
  labelClassName,
  className
}) {
  return (
    <div className={cn(styles.selectContainer, className)}>
      {label && <span className={`${styles.selectLabel} ${labelClassName}`}>{label}</span>}
      <SelectLib
        name={name}
        styles={{ ...SELECT_STYLES, ...(error && ERROR_STYLES) }}
        theme={THEME}
        options={[...getSelectLabel(selectLabel), ...options]}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        defaultValue={defaultValue}
        isSearchable={false}
        isOptionDisabled={({ isDisabled }) => isDisabled}
        placeholder={placeholder}
      />
    </div>
  );
}

Select.propTypes = {
  options: arrayOf(option).isRequired,
  className: string,
  defaultValue: option,
  error: bool,
  label: string,
  labelClassName: string,
  name: string,
  placeholder: string,
  selectLabel: string,
  value: string,
  onBlur: func,
  onChange: func
};

export default Select;
