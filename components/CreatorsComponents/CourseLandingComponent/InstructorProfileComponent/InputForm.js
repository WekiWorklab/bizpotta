import React from "react";

const InputForm = ({ type, placeholder, width, name, register, InputName }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      {...register(InputName)}
      className={`h-[40px] w-[${width}] bg-[#FCFDFE] focus:ring-0 focus:outline-none border rounded-md text-gray-600 pl-4 text-[14px]`}
    />
  );
};

export default InputForm;
