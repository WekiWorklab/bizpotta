/////
import React from 'react'

//////
import ScheduleCard from './ScheduleCard'

const MiddleSection = () => {
  return (
    <div className='redBorder hidden  md:block w-full pt-4 pr-24 text-[darkBlue]'>
        <div className='flex flex-row'>
            <div className='flex flex-col items-center'>
                <div className='w-8 h-8 rounded-full bg-darkBlue'></div>
                <p className='text-[12px] mt-4'>Week 1</p>
            </div>
            <div className='w-36 mt-4 border-t-2 border-dashed border-darkBlue '></div>

            <div className='flex flex-col items-center'>
                <div className='w-8 h-8 rounded-full bg-darkBlue'></div>
                <p className='text-[12px] mt-4'>Week 2</p>
            </div>
            <div className='w-36 mt-4 border-t-2 border-dashed border-darkBlue '></div>

            <div className='flex flex-col items-center'>
                <div className='w-8 h-8 rounded-full bg-white border border-darkBlue'></div>
                <p className='text-[12px] mt-4'>Week 3</p>
            </div>
            <div className='w-36 mt-4 border-t-2 border-dashed border-darkBlue '></div>

            <div className='flex flex-col items-center'>
                <div className='w-8 h-8 rounded-full bg-white border border-darkBlue'></div>
                <p className='text-[12px] mt-4'>Week 4</p>
            </div>
            {/* <div className='w-36 mt-4 border-t-2 border-dashed border-darkBlue '></div> */}
        </div>

        <div className='mt-10'>
            <ScheduleCard />
            <ScheduleCard />
            <ScheduleCard />
            <ScheduleCard />
        </div>
        
    </div>
  )
}

export default MiddleSection