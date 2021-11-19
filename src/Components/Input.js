import React from "react";
import { ErrorMessage, Field } from "formik";
const Input = (props) => {
  const { type, label, name, placeholder, ...rest } = props;
  return (
    <>
      <label htmlFor={name} className="label text">
        {label}
      </label>
      <Field type={type} name={name} placeholder={placeholder} {...rest} />
      <span id="error-output">
        <ErrorMessage name={name} />
      </span>
    </>
  );
};

export default Input;
