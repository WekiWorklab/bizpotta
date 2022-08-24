/////
import React from 'react'

//////
import {BsArrowRight} from 'react-icons/bs'
import {FaCircleNotch} from 'react-icons/fa'

const ScheduleCard = () => {
  return (
    <div className='w-full mt-4'>
        <div className='h-14 bg-darkBlue text-white flex flex-row justify-between pl-16 pr-20 items-center'>
            <div>
                <span className='inline font-[600] text-[14px] mr-4'> Week 1</span>
                <span className='inline text-[13px]'>Estimated time 3hrs 30mins</span>
            </div>
            <div>
                <span className='inline  text-[13px] mr-4'>Go to lesson</span>
                <BsArrowRight className='inline' size={18}/>
            </div>
        </div>

        <div className='bg-white gap-y-[20px] redBorder grid grid-cols-2 px-10 py-6'>
            <div className=' redBorder flex flex-row items-center'>
                <div className='w-8 h-8 rounded-full border-2 border-darkBlue'></div>
                <p className='ml-8'>Video Lessons</p>
            </div>
            <div className=' redBorder flex flex-row items-center'>
                <div className='w-8 h-8 rounded-full border-2 border-darkBlue'></div>
                <p className='ml-8'>Notes +</p>
            </div>
            <div className=' redBorder flex flex-row items-center'>
                <div className='w-8 h-8 rounded-full border-2 border-darkBlue bg-gray-100'></div>
                <p className='ml-8'>Tasks</p>
            </div>
            <div className=' redBorder flex flex-row items-center'>
                <div className='w-8 h-8 rounded-full border-2 border-darkBlue '></div>
                <p className='ml-8'>Description</p>
            </div>
            <div className=' redBorder flex flex-row items-center'>
                <div className='w-8 h-8 rounded-full border-2 border-darkBlue bg-gray-100'></div>
                <p className='ml-8'>Readings</p>
            </div>

        </div>
        
    </div>
  )
}

export default ScheduleCard