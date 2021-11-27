import React from 'react';
import { Formik } from 'formik';
import { func, shape, string } from 'prop-types';
import cn from 'classnames';

const FormWrapper = ({
  initialValues,
  form: Children,
  onSubmit,
  validationSchema,
  formClassName,
  ...props
}) => (
  <Formik
    initialValues={initialValues}
    enableReinitialize
    onSubmit={onSubmit}
    validateOnMount={false}
    validationSchema={validationSchema}>
    {({ handleChange, handleSubmit, values, errors, setFieldValue, submitCount }) => (
      <form className={cn('column full-width', formClassName)} onSubmit={handleSubmit}>
        <Children
          values={values}
          onChange={handleChange}
          errors={submitCount > 0 && errors}
          setFieldValue={setFieldValue}
          submitCount={submitCount}
          {...props}
        />
      </form>
    )}
  </Formik>
);

FormWrapper.propTypes = {
  form: shape,
  formClassName: string,
  initialValues: shape,
  validationSchema: shape,
  onSubmit: func
};

export default FormWrapper;
