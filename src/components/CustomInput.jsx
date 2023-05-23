import React from "react";

const CustomInput = ({ heading, type, placeholder, name }) => {
  return (
    <div class="mb-2 text-lg flex flex-col text-teal-200 py-2">
      <label for={name} className="  text-white">
        <b>{heading}</b>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="rounded-3xl border-none  bg-teal-900 bg-opacity-70 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
        required
      />
    </div>
  );
};

export default CustomInput;