import React from "react";

const Textarea = (props) => {
  const { label, name, placeholder, ...rest } = props;
  return (
    <>
      <label for={name} class="label text">
        {label}
      </label>
      <textarea name={name} placeholder={placeholder} {...rest} />
    </>
  );
};

export default Textarea;
