import React from 'react'

////////////
import {FiCircle} from 'react-icons/fi'

const Grade = () => {
    return(
        <div className='mx-16 mt-8'>
            <p className='mb-2'>Week 1</p>
            <div className=' grid grid-cols-4 gap-x-8'>
                <div className=' flex flex-row justify-between items-center py-2'>
                    <div className=''>Exam</div>
                    <FiCircle size={20} className=''/>
                </div>

                <div className=' flex flex-row justify-evenly items-center  py-2'>
                    <div className='text-red-400 text-sm'>Try again</div>
                    <div>80%</div>
                </div>

                <div className=' flex flex-row justify-evenly items-center  py-2'>
                    Completed
                </div>

                <div className=' flex flex-row justify-evenly items-center  py-2'>
                    Due 24th Jan 2023
                </div>
            </div>

            <div className=' grid grid-cols-4 gap-x-8 mt-0'>
                <div className=' flex flex-row justify-between items-center py-2'>
                    <div className=''>Exam</div>
                    <FiCircle size={20} className=''/>
                </div>

                <div className=' flex flex-row justify-evenly items-center  py-2'>
                    <div className='text-red-400 text-sm'>Try again</div>
                    <div>80%</div>
                </div>

                <div className=' flex flex-row justify-evenly items-center  py-2'>
                    Completed
                </div>

                <div className=' flex flex-row justify-evenly items-center  py-2'>
                    Due 24th Jan 2023
                </div>
            </div>

        </div>
    )
}


const Content = () => {
  return (
    <div className='relative w-full h-full bg-white sm:bg-gray-100 flex flex-col pt-[90px] md:pt-[120px] md:justify-center items-center md:translate-x-[200px] md:w-[calc(100%-200px)] px-10 pt-4 pb-10'>
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