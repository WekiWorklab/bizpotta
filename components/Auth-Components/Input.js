import React from "react";

const FormInput = ({ register, name, placeholder, value, type, required, handleChange, ...props }) => {
  return (
    <input
      {...register(name)}
      name={name}
      placeholder={placeholder}
      type={type}
      required={required}
      className='w-[330px] h-[45px] text-[14px] outline-none border-0 sm:border-[0.2px] rounded-sm focus:ring-0 '
    />
  );
};

export default FormInput;
