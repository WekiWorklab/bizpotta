import React from 'react'
import ProgressBar from './ProgressBar'


const CourseCard = ({data: {title, name, ID, time:{total, completed}}, length}) => {

    const imageSrc = 'https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

    // const time = {total: 100, completed: 60}

  return (
    <div className='border sm:border-0 min-w-[325px] h-[185px] rounded-md bg-white relative flex flex-col pl-4 pr-2 pt-4'>
        <p className='absolute top-[5px] right-[10px] text-[11px]'>Lesson {ID} out of {length}</p>
        <div className='w-[100px] h-[55px]'>
          <img src={imageSrc} alt = '' className='w-full h-full object-cover rounded-md'/>  
        </div>
        
        <p className='mt-4 text-[15px]'>{title}</p>
        <p className='text-[12px] mt-1'>{name}</p>
        <div className='flex flex-row items-center justify-between'>
            <ProgressBar time={{completed, total}}/>
            <span className='text-xs'>{total-completed} mins left</span>
        </div>
        
    </div>
  )
}

export default CourseCard