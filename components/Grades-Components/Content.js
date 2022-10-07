import React from 'react'

////////////
import {FiCircle} from 'react-icons/fi'

const Grade = () => {
    return(
        <div className='mx-0 sm:mx-2 lg:mx-16 sm:mt-8'>
            <p className='mb-0 sm:mb-2 text-[14px] sm:text-base'>Week 1</p>
            <div className=' grid grid-cols-4 sm:gap-x-8'>
                <div className=' flex flex-row justify-start gap-x-2 sm:justify-between items-center py-2'>
                    <div className='text-[15px] sm:text-base'>Exam</div>
                    <FiCircle  className=' text-[14px] sm:text-[20px]'/>
                </div>

                <div className=' flex flex-row justify-start gap-x-2 sm:justify-evenly items-center  py-2'>
                    <div className='text-red-400 text-[11px] sm:text-sm'>Try again</div>
                    <div className='text-[12px] sm:text-base'>80%</div>
                </div>

                <div className=' flex flex-row justify-evenly items-center text-[13px] sm:text-base py-2'>
                    Completed
                </div>

                <div className=' flex flex-row justify-evenly items-center text-[13px] sm:text-base py-2'>
                    Due 24th Jan 2023
                </div>
            </div>

            <div className=' grid grid-cols-4 sm:gap-x-8'>
                <div className=' flex flex-row justify-start gap-x-2 sm:justify-between items-center py-2'>
                    <div className='text-[15px] sm:text-base'>Exam</div>
                    <FiCircle  className=' text-[14px] sm:text-[20px]'/>
                </div>

                <div className=' flex flex-row justify-start gap-x-2 sm:justify-evenly items-center  py-2'>
                    <div className='text-red-400 text-[11px] sm:text-sm'>Try again</div>
                    <div className='text-[12px] sm:text-base'>80%</div>
                </div>

                <div className=' flex flex-row justify-evenly items-center text-[13px] sm:text-base py-2'>
                    Completed
                </div>

                <div className=' flex flex-row justify-evenly items-center text-[13px] sm:text-base py-2'>
                    Due 24th Jan 2023
                </div>
            </div>

        </div>
    )
}


const Content = () => {
  return (
    <div className='relative w-full h-full bg-white sm:bg-gray-100 flex flex-col pt-[90px] md:pt-[120px] md:justify-center items-center md:translate-x-[200px] md:w-[calc(100%-200px)] px-2 lg:px-10 pt-4 pb-10'>
           <div className='w-full bg-white mt-8 py-10 rounded-[6px]'>
            <p className='ml-6 font-bold'>Grades</p>
                <Grade />
                <Grade />
                <Grade />
                <Grade />
                <Grade />
           </div>
    </div>
  )
}


export default Content