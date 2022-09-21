import React from 'react'
import ContentCarousel from '../Content-Components/ContentCarousel'
import { Data as data, instructorData } from '../Content-Components/Data'
import { Data } from './Data'
import InstructorCarousel from '../Content-Components/InstructorCarousel'
import ProgramCarousel from './ProgramCarousel'

const NoContent = () => {
  return (
    <div className='relative w-full h-full bg-white sm:bg-gray-50 flex flex-col pt-[90px] md:pt-[120px] md:justify-start md:translate-x-[200px] md:w-[calc(100%-200px)] px-10 pb-10'>
      
    {/* <TopSection /> */}

    <div className='pt-6'>
    <p className=' hidden sm:block sm:font-[600] sm:mb-[20px]'>Hi Naomi, you are currently not enrolled at the moment</p>
    <div className='mb-[20px]'>
    <p className='text-gray-400 text-[13px] mt-2'>Explore our various courses</p>
    </div>


    <div className='hidden md:flex flex-row items-center flex-wrap  md:w-[90%] lg:w-[70%] xl:w-[80%] justify-between pl-0 mt-4'>
        <div className='w-[260px] bg-[#5FFC54] h-[125px] rounded-lg flex items-center text-sm pl-5 mb-10 '>
            VOCATIONAL EDUCATION
            <svg viewBox="-37 55 110 150" xmlns="http://www.w3.org/2000/svg" >
                <path fill="#FDBC64" d="M41,-35.9C47.5,-24.6,43.1,-7.9,41.7,13.9C40.2,35.7,41.6,62.6,28.8,74.2C16.1,85.9,-10.9,82.3,-33.7,70.9C-56.4,59.6,-74.9,40.4,-71.1,25.3C-67.3,10.1,-41.4,-1.1,-25.8,-14.4C-10.3,-27.7,-5.1,-43.2,6.1,-48C17.3,-52.9,34.6,-47.1,41,-35.9Z" transform="translate(100 100)" />
            </svg>
        </div>
        <div className='w-[260px] bg-[#2ABB1A] h-[125px] rounded-lg flex items-center text-sm pl-5 mb-10'>
            CERTIFICATE PROGRAM
            <svg viewBox="-13 39 139 139" xmlns="http://www.w3.org/2000/svg">
                <path fill="#AE5050" d="M33.4,-39C41.9,-32.6,46.7,-20.8,45.5,-10.5C44.4,-0.2,37.4,8.7,30.8,15.8C24.3,22.8,18.2,28.2,7.7,40.4C-2.9,52.7,-18.1,72,-21.2,67C-24.3,62,-15.3,32.8,-15.6,16.6C-15.9,0.4,-25.4,-2.9,-29.4,-9.5C-33.3,-16.1,-31.7,-26,-25.9,-32.8C-20.1,-39.7,-10,-43.4,1.2,-44.8C12.4,-46.2,24.8,-45.3,33.4,-39Z" transform="translate(100 100) rotate(-36)" />
            </svg>
        </div>
        <div className='w-[260px] bg-[#2ABB1A] h-[125px] rounded-lg flex items-center text-sm pl-5 mb-10'>MASTER CLASS</div>
    </div>

    <div className='w-[360px] ml-[-10px] md:hidden'>
        <ProgramCarousel />  
    </div>
    </div>

    
    
        <div className='bg-transparent w-full xl:w-[85%] lg:mx-auto lg:mx-0 '>
            <div className='pt-[50px] flex flex-col'>
                <p className="text-[14px] text-center lg:text-left lg:pl-4  mb-4 md:text-md font-semibold md:font-bold md:mb-8  ">Recommended Courses on Vocational Education</p>
                <div className='block w-[360px] m-auto md:hidden w-full'>
                    <ContentCarousel data = {data} screen = {[1.5, 10]} />
                </div>
                <div className='hidden m-auto md:block lg:hidden w-full'>
                    <ContentCarousel data = {data} screen = {[2, 20]} />
                </div>
                <div className='hidden lg:block w-full'>
                    <ContentCarousel data = {data} screen = {[3, 40]} />
                </div> 
            </div>
            <div className='pt-[50px] flex flex-col'>
                <p className="text-[14px] text-center lg:text-left lg:pl-4  mb-4 md:text-md font-semibold md:font-bold md:mb-8  ">Popular courses on vocational program</p>
                <div className='block w-[360px] m-auto md:hidden w-full'>
                    <ContentCarousel data = {data} screen = {[1.5, 10]} />
                </div>
                <div className='hidden m-auto md:block lg:hidden w-full'>
                    <ContentCarousel data = {data} screen = {[2, 20]} />
                </div>
                <div className='hidden lg:block w-full'>
                    <ContentCarousel data = {data} screen = {[3, 40]} />
                </div> 
            </div>
            <div className='pt-[50px] flex flex-col'>
                <p className="text-[14px] text-center lg:text-left lg:pl-4  mb-4 md:text-md font-semibold md:font-bold md:mb-8">Take your business to the next level by exploring any of these courses</p>
                <div className='block w-[360px] m-auto md:hidden w-full'>
                    <ContentCarousel data = {data} screen = {[1.5, 10]} />
                </div>
                <div className='hidden m-auto md:block lg:hidden w-full'>
                    <ContentCarousel data = {data} screen = {[2, 20]} />
                </div>
                <div className='hidden lg:block w-full'>
                    <ContentCarousel data = {data} screen = {[3, 40]} />
                </div> 
            </div>
            <div className='pt-[50px] flex flex-col'>
                <p className="text-[14px] text-center lg:text-left lg:pl-4  mb-4 md:text-md font-semibold md:font-bold md:mb-8">Instructors</p>
                <div className='block w-[360px] m-auto md:hidden w-full'>
                    <InstructorCarousel data = {instructorData} screen = {[1.5, 10]} />
                </div>
                <div className='hidden m-auto md:block lg:hidden w-full'>
                    <InstructorCarousel data = {instructorData} screen = {[2, 20]} />
                </div>
                <div className='hidden lg:block w-full'>
                    <InstructorCarousel data = {instructorData} screen = {[3, 40]} />
                </div>  
            </div>                   
        </div>

    
    </div>
  )
}

export default NoContent










{/* Big screens */}
    {/* <div className='hidden xl:flex xl:w-full '>
      <CourseCarousel screen='big' data={Data} />
    </div> */}
    
    {/* Medium screens */}
    {/* <div className='hidden lg:flex lg:w-full xl:hidden'>
      <CourseCarousel screen='medium' data={Data} />
    </div> */}
    
    {/* Small screens */}

    {/* <div className='hidden sm:flex sm:flex-nowrap sm:w-full lg:hidden'>
      <CourseCarousel screen='small' data={Data} />
    </div> */}

    {/* Mobile */}
    {/* <div className='flex w-full sm:hidden'>
      <CourseCarousel screen='mobile' data={Data} />
    </div> */}

    {/* <h1 className='text-sm font-semibold mt-6  w-full '>Explore various programs</h1> */}