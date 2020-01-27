import { useState, useCallback } from 'react';

const useForm = initialValues => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const onChangeText = (name, value) => {
    setValues(prevState => ({ ...prevState, [name]: value || null }));
    setErrors({ ...errors, [name]: null });
  };

  const onError = error => {
    const failed = {};
    error.inner.forEach(err => {
      failed[err.path] = err.message;
    });

    setErrors(failed);
    return failed;
  };

  const onReset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
  }, [initialValues]);

  const onValidate = async schema => {
    setErrors({});
    await schema.validate(values, {
      abortEarly: false,
      stripUnknown: true,
    });

    return schema;
  };

  const setError = (name, value) => {
    setErrors({ ...errors, [name]: value || null });
  };

  const setValue = (name, value) => {
    setValues({ ...values, [name]: value || null });
  };

  return {
    errors,
    onChangeText,
    onError,
    onReset,
    onValidate,
    setError,
    setValue,
    values,
  };
};

export default useForm;
