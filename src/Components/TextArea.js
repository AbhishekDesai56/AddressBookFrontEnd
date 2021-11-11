import React from "react";
import { ErrorMessage } from "formik";
const Textarea = (props) => {
  const { label, name, placeholder, ...rest } = props;
  return (
    <>
      <label for={name} class="label text">
        {label}
      </label>
      <textarea name={name} placeholder={placeholder} {...rest} />
      <span id="error-output">
        <ErrorMessage name={name} />
      </span>
    </>
  );
};

export default Textarea;
