import React from "react";
import { ErrorMessage, Field } from "formik";
const Password = (props) => {
  const { label, name, placeholder, ...rest } = props;
  return (
    <>
      <label htmlFor={name} class="label text">
        {label}
      </label>
      <Field type="password" name={name} placeholder={placeholder} {...rest} />
      <span id="error-output">
        <ErrorMessage name={name} />
      </span>
    </>
  );
};

export default Password;
