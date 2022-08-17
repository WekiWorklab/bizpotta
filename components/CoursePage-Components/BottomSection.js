import React from 'react'
import BrowseCourse from './BrowseCourse'
import { instructorData } from '../Content-Components/Data'


const BottomSection = () => {
    return (
        <div className=' pr-4 sm:pr-10 mt-[45px] sm:mt-[30px] sm:mt-8'>
            <div className='flex flex-row justify-between items-center '>
                <div>
                    <p className='font-[600]'>Wishlist</p>
                    <p className='text-[12px]'>4 couses added to wishlist</p>
                </div>
                <p className='text-[12px]'>
                    View more
                </p>
            </div>
            <div className='mt-0 sm:mt-6'>
           { instructorData.slice(0,4).map((el, index) => (
                <BrowseCourse key={index} select = {true} data={el}/>
            ))}
            </div>
        </div>
      )
}

export default BottomSection