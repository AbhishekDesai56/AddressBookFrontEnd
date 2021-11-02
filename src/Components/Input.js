import React from "react";

const Input = (props) => {
  const { label, name, placeholder, ...rest } = props;
  return (
    <>
      <label for={name} class="label text">
        {label}
      </label>
      <input type="text" name={name} placeholder={placeholder} {...rest} />
    </>
  );
};

export default Input;
