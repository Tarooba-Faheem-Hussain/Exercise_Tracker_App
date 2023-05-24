import React from "react";

export const CustomInputActivity = ({heading, type, placeholder, name}) => {
  return (
    // <div>CustomInputActivity</div>
    <div class="sm:col-span-2">
      <label
        for={name}
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        <b>{heading}</b>
      </label>
      <input
        type={type}
        name="name"      
        id="name"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        placeholder={placeholder}
        required
      />
    </div>
    // <div class="mb-2 text-lg flex flex-col text-teal-200 py-2">
    //   <label for={name} className="  text-white">
    //     <b>{heading}</b>
    //   </label>
    //   <input
    //     type={type}
    //     placeholder={placeholder}
    //     name={name}
    //     className="rounded-3xl border-none  bg-teal-900 bg-opacity-70 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
    //     required
    //   />
    // </div>
  );
};
export default CustomInputActivity;