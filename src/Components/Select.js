import React from "react";
import "../Pages/AddressForm/addressForm.scss";

const Select = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <label for={name} class="label text">
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
    </div>
  );
};

export default Select;
