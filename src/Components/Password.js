import React from "react";
import { ErrorMessage } from "formik";
const Password = (props) => {
  const { label, name, placeholder, ...rest } = props;
  return (
    <>
      <label htmlFor={name} class="label text">
        {label}
      </label>
      <input type="password" name={name} placeholder={placeholder} {...rest} />
      <span id="error-output">
        <ErrorMessage name={name} />
      </span>
    </>
  );
};

export default Password;
