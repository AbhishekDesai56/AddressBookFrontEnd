import React from "react";
import { ErrorMessage } from "formik";
const Input = (props) => {
  const { label, name, placeholder, ...rest } = props;
  return (
    <>
      <label htmlFor={name} class="label text">
        {label}
      </label>
      <input type="text" name={name} placeholder={placeholder} {...rest} />
      <span id="error-output">
        <ErrorMessage name={name} />
      </span>
    </>
  );
};

export default Input;
