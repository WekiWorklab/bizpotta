import React from 'react'

const BrowseCourse = ({select, data:{name, title, image}}) => {
  return (
    <div className='w-full h-[120px] bg-white flex flex-row justify-between items-center border-b sm:pr-2'>
        <div className='sm:ml-6'> 
            <p className='mb-1 text-[13px] sm:text-base'>{title}</p>
            <p className='text-[12px] sm:text-[14px] mb-2'>{name}</p>
            <div className='w-[115px] sm:w-[125px] h-[28px] sm:h-[35px] text-[14px] sm:text-base bg-darkBlue text-white flex justify-center items-center rounded-[4px]'>
                {!select ? "Enroll" : "Purchase"}
            </div>
        </div>
        <div className='w-[54px] h-[38px] sm:w-[85px] sm:h-[60px] rounded-sm'>
            <img src={image} alt="" className="object-cover rounded-sm" />
        </div>
    </div>
  )
}

export default BrowseCourse