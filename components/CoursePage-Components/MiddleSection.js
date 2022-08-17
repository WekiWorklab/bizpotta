import React from 'react'
import BrowseCourse from './BrowseCourse'
import { instructorData } from '../Content-Components/Data'

const MiddleSection = () => {
  return (
    <div className=' pr-4 sm:pr-10 mt-8'>
        <div className='flex flex-row justify-between items-center '>
            <div>
                <p className='font-[600]'>Browse Courses</p>
                <p className='text-[12px]'>10,000 total results</p>
            </div>
            <p className='text-[12px]'>
                View more
            </p>
        </div>
        <div className='mt-6'>
       { instructorData.slice(0,4).map((el, index) => (
            <BrowseCourse key={index} bought = {false} data={el}/>
        ))}
        </div>
    </div>
  )
}

export default MiddleSection