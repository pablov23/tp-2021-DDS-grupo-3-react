import i18next from 'i18next';
import { arrayOf, shape, string } from 'prop-types';
import React from 'react';

const GenericFieldList = ({ data, values, errors, target, ...props }) => (
  <>
    {data.map(({ field: Field, name, type, ...fieldProps }) => (
      <Field
        key={name}
        value={values[name]}
        name={name}
        label={i18next.t(`${target}:${name}`)}
        error={errors[name]}
        type={type}
        {...fieldProps}
        {...props}
      />
    ))}
  </>
);

GenericFieldList.propTypes = {
  data: arrayOf(shape),
  errors: shape,
  target: string,
  values: shape
};

export default GenericFieldList;
