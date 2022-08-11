import React from 'react'

const Button = ({name}) => {
  return (
    <div className='w-[330px] h-[45px] flex justify-center items-center bg-darkBlue text-white text-sm rounded-md hover:bg-white hover:text-darkBlue hover:text-sm hover:border-[1px] hover:font-bold hover:border-darkBlue'>
        {name}
    </div>
  )
}

export default Button