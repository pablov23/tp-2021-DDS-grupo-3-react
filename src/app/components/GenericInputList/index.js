import { arrayOf, shape } from 'prop-types';
import React from 'react';

import Input from '~app/components/Input';

const GenericInputList = ({ data, values, errors, ...props }) => (
  <>
    {data.map(({ name, label, type }) => (
      <Input
        key={name}
        value={values[name]}
        name={name}
        label={label}
        error={errors[name]}
        type={type}
        {...props}
      />
    ))}
  </>
);

GenericInputList.propTypes = {
  data: arrayOf(),
  errors: shape,
  values: shape
};

export default GenericInputList;
