import React from "react";
// import "../Pages/AddressForm/addEditAddressForm.scss";
import { ErrorMessage } from "formik";

const Select = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <>
      <label for={name} className="label text">
        {label}
      </label>
      <select id={name} name={name} {...rest}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </select>
      <span id="error-output">
        <ErrorMessage name={name} />
      </span>
    </>
  );
};

export default Select;
