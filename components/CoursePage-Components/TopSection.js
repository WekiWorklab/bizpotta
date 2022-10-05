import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ClassCards, { ClassCardsMobile } from '../ClassCards'
import CourseCard from './CourseCard'
import CourseCarousel from './CourseCarousel'
import { Data } from './Data'

const TopSection = () => {

  const router = useRouter()
  const [pathName, setPathName] = useState('') 

  useEffect(() => {
    setPathName(router.asPath)
  }, )

  console.log(pathName)

  return (
    <div className='pt-6'>
    <p className=' hidden sm:block sm:font-[600] sm:mb-[20px]'>Welcome back Naomi, continue from where you stopped</p>
    <div className='mb-[20px]'>
      <p className='block sm:hidden text-[12px]'>Welcome back Naomi</p>
      <p className='block sm:hidden text-[14px] font-[600]'>Continue from where you stopped</p>
    </div>
    
    {/* Big screens */}
    <div className='hidden xl:flex xl:w-full'>
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
    {/* #5FFC54 */}
    <h1 className='text-sm font-semibold mt-6 w-full'>Explore various programs</h1>

    <p className='text-gray-400 text-[13px] mt-2'>Learn from the best in the industry and take your business</p>

      <ClassCards />

    <div className='w-[370px] mx-auto md:hidden mt-10'>
        <ClassCardsMobile />  
    </div>



    </div>
  )
}

export default TopSection



// <div className='hidden md:flex flex-row items-center flex-wrap  md:w-[90%] lg:w-[70%] xl:w-[80%] justify-between pl-0 mt-4'>
//         <div className={`w-[260px] ${pathName === '/students/courses' ? "bg-[#5FFC54]" : "bg-[#2ABB1A]"}  h-[125px] rounded-lg flex items-center text-sm pl-5 mb-10 cursor-pointer`} onClick = {() => router.push('/students/courses')} >
//             VOCATIONAL EDUCATION
//             <svg viewBox="-37 55 110 150" xmlns="http://www.w3.org/2000/svg" >
//                 <path fill="#FDBC64" d="M41,-35.9C47.5,-24.6,43.1,-7.9,41.7,13.9C40.2,35.7,41.6,62.6,28.8,74.2C16.1,85.9,-10.9,82.3,-33.7,70.9C-56.4,59.6,-74.9,40.4,-71.1,25.3C-67.3,10.1,-41.4,-1.1,-25.8,-14.4C-10.3,-27.7,-5.1,-43.2,6.1,-48C17.3,-52.9,34.6,-47.1,41,-35.9Z" transform="translate(100 100)" />
//             </svg>
//         </div>
//         <div className='w-[260px] bg-[#2ABB1A] h-[125px] rounded-lg flex items-center text-sm pl-5 mb-10'>
//             CERTIFICATE PROGRAM
//             <svg viewBox="-13 39 139 139" xmlns="http://www.w3.org/2000/svg">
//                 <path fill="#AE5050" d="M33.4,-39C41.9,-32.6,46.7,-20.8,45.5,-10.5C44.4,-0.2,37.4,8.7,30.8,15.8C24.3,22.8,18.2,28.2,7.7,40.4C-2.9,52.7,-18.1,72,-21.2,67C-24.3,62,-15.3,32.8,-15.6,16.6C-15.9,0.4,-25.4,-2.9,-29.4,-9.5C-33.3,-16.1,-31.7,-26,-25.9,-32.8C-20.1,-39.7,-10,-43.4,1.2,-44.8C12.4,-46.2,24.8,-45.3,33.4,-39Z" transform="translate(100 100) rotate(-36)" />
//             </svg>
//         </div>
//         <div className='w-[260px] bg-[#2ABB1A] h-[125px] rounded-lg flex items-center text-sm pl-5 mb-10'  >MASTER CLASS</div>
//     </div>