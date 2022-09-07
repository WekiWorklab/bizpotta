/////
import React from 'react'

//////
import ScheduleCard from './ScheduleCard'

const MiddleSection = () => {
  return (
    <div className=' w-full mt-10 pt-4 pr-2 lg:pr-24 text-[darkBlue]'>
        <div className='flex flex-row'>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-[20px] h-[20px] rounded-full bg-darkBlue'></div>
                <p className='min-w-[50px] text-center text-[11px] mt-2'>Week 1</p>
            </div>
            <div className='w-36 mt-[10px] border-t-2 border-dashed border-darkBlue '></div>

            <div className='flex flex-col justify-center items-center'>
                <div className='w-[20px] h-[20px] rounded-full bg-darkBlue'></div>
                <p className='min-w-[50px] text-center text-[11px] mt-2'>Week 2</p>
            </div>
            <div className='w-36 mt-[10px] border-t-2 border-dashed border-darkBlue '></div>

            <div className='flex flex-col justify-center items-center'>
                <div className='w-[20px] h-[20px] rounded-full bg-white'></div>
                <p className='min-w-[50px] text-center text-[11px] mt-2'>Week 3</p>
            </div>
            <div className='w-36 mt-[10px] border-t-2 border-dashed border-darkBlue '></div>

            <div className='flex flex-col justify-center items-center'>
                <div className='w-[20px] h-[20px] rounded-full bg-white'></div>
                <p className='min-w-[50px] text-center text-[11px] mt-2'>Week 4</p>
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