import React from 'react'

const Content = () => {
  return (
    <div className='relative w-full h-full bg-[#E5E5E5] sm:bg-gray-50 flex flex-col mt-[90px] md:mt-[120px]  md:translate-x-[200px] md:w-[calc(100%-200px)] pl-8 py-10 redBorder'>
        
        <div className='text-md font-bold'>Shopping Cart</div>

        <div className='flex flex-row'>
            <div>
                <CourseCard />
            </div>
        </div>



    </div>
  )
}

export default Content


const CourseCard = () => {

    return (
        <div className='w-[500px] h-[140px] bg-white shadowxl'>
            
        </div>
    )
}