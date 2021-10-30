import React from "react";

const Textarea = (props) => {
  const { label, name, placeholder, ...rest } = props;
  return (
    <div className="form-control">
      <label for={name} class="label text">
        {label}
      </label>
      <textarea name={name} placeholder={placeholder} {...rest} />
    </div>
  );
};

export default Textarea;
