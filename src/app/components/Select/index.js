import { arrayOf, bool, func, string } from 'prop-types';
import React from 'react';
import SelectLib from 'react-select';

import { option } from '~propTypes/select';

import Error from '../Error';

import { ERROR_STYLES, FOCUS_STYLES, SELECT_STYLES, THEME } from './styles';

function Select({ name, options, onBlur, onChange, defaultValue, placeholder = '', error, value }) {
  return (
    <>
      <SelectLib
        name={name}
        styles={{ ...SELECT_STYLES, ...(error && ERROR_STYLES), ...(value && FOCUS_STYLES) }}
        theme={THEME}
        options={options}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        defaultValue={defaultValue}
        isSearchable={false}
        isOptionDisabled={({ isDisabled }) => isDisabled}
        placeholder={placeholder}
      />
      <Error error={error} touched errorClassName="m-top-1" />
    </>
  );
}

Select.propTypes = {
  options: arrayOf(option).isRequired,
  defaultValue: option,
  error: bool,
  name: string,
  placeholder: string,
  value: string,
  onBlur: func,
  onChange: func
};

export default Select;
