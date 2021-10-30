import React from "react";

const Input = (props) => {
  const { label, name, placeholder, ...rest } = props;
  return (
    <div className="form-control">
      <label for={name} class="label text">
        {label}
      </label>
      <input type="text" name={name} placeholder={placeholder} {...rest} />
    </div>
  );
};

export default Input;
