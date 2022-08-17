import React from 'react'
import CourseCard from './CourseCard'
import CourseCarousel from './CourseCarousel'
import { Data } from './Data'

const TopSection = () => {
  return (
    <div className='pt-6'>
    <p className=' hidden sm:block sm:font-[600] sm:mb-[20px]'>Welcome back Naomi, continue form where you stopped</p>
    <div className='mb-[20px]'>
      <p className='block sm:hidden text-[12px]'>Welcome back Naomi</p>
      <p className='block sm:hidden txt-[14px] font-[600]'>Continue from where you stopped</p>
    </div>
    
    {/* Big screens */}
    <div className='hidden xl:flex xl:w-full '>
      <CourseCarousel screen='big' data={Data} />
    </div>
    

    {/* Medium screens */}
    <div className='hidden lg:flex lg:w-full xl:hidden'>
      <CourseCarousel screen='medium' data={Data} />
    </div>
    

    {/* Small screens */}

    <div className='hidden sm:flex sm:flex-nowrap sm:w-full lg:hidden'>
      <CourseCarousel screen='small' data={Data} />
    </div>

    {/* Mobile */}

    <div className='flex w-full sm:hidden'>
      <CourseCarousel screen='mobile' data={Data} />
    </div>
    

    </div>
  )
}

export default TopSection