import React from 'react'

const InputForm = ({type, placeholder, width, name}) => {
  return (
    <input 
        type={type}
        placeholder={placeholder}
        name={name}
        className={`h-[40px] w-[${width}] bg-[#FCFDFE] focus:ring-0 focus:outline-none border rounded-md text-[#C4C4C4] pl-4 text-[14px]`}

    />
  )
}

export default InputForm