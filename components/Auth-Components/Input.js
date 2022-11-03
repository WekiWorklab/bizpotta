import React from "react";

const FormInput = ({ register, name, placeholder, value, type, required, handleChange, ...props }) => {
  return (
    <input
      {...register(name)}
      name={name}
      placeholder={placeholder}
      type={type}
      required={required}
      {...props}
      className='w-[330px] h-[45px] text-[12px] outline-none border-0 border-[#cccccc] sm:border-[0.2px] rounded-md focus:ring-0 font-sans'
    />
  );
};

export default FormInput;
