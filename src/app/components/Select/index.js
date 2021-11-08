import { arrayOf, func, string } from 'prop-types';
import React, { useMemo } from 'react';
import SelectLib from 'react-select';
import cn from 'classnames';

import { option } from '~propTypes/select';
import { getSelectedOption, getSelectLabel } from '~utils/select';

import Error from '../Error';

import styles from './styles.module.scss';
import { ERROR_STYLES, SELECT_STYLES, THEME } from './styles';

function Select({
  name,
  options,
  onBlur,
  placeholder = '',
  error,
  errorClassName,
  value,
  selectLabel,
  label,
  labelClassName,
  className,
  setFieldValue
}) {
  const handleChange = e => {
    setFieldValue(name, e.value);
  };
  const selectedOption = useMemo(() => getSelectedOption(options, value), [options, value]);
  return (
    <div className={cn(styles.selectContainer, className)}>
      {label && <span className={`${styles.selectLabel} ${labelClassName}`}>{label}</span>}
      <SelectLib
        name={name}
        styles={{ ...SELECT_STYLES, ...(error && ERROR_STYLES) }}
        theme={THEME}
        options={[...getSelectLabel(selectLabel), ...options]}
        onChange={handleChange}
        onBlur={onBlur}
        value={selectedOption}
        defaultValue={selectedOption}
        isSearchable={false}
        isOptionDisabled={({ isDisabled }) => isDisabled}
        placeholder={placeholder}
      />
      <Error error={error} className={errorClassName} />
    </div>
  );
}

Select.propTypes = {
  options: arrayOf(option).isRequired,
  className: string,
  error: string,
  errorClassName: string,
  label: string,
  labelClassName: string,
  name: string,
  placeholder: string,
  selectLabel: string,
  setFieldValue: func,
  value: string,
  onBlur: func
};

export default Select;
