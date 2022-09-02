import React from 'react'

///////
import {AiOutlineInbox} from 'react-icons/ai'
import {BsChevronDown, BsPlayCircle} from 'react-icons/bs'
import CoursesTable from '../CoursesComponent/CoursesTable'
import DashBoardCard from '../LayoutComponents/DashBoardCard'
import ResourcesCard from '../LayoutComponents/ResourcesCard'
import VideoCard from '../LayoutComponents/VideoCard'
 
////////


const Content = () => {

    const times = {
        total: 90,
        completed: 24
    }

    const value = (times.completed / times.total) * 100
    console.log(value)

  return (
    <div className='relative w-full h-full bg-white flex flex-col mt-[90px] md:mt-[120px] md:justify-center items-start md:translate-x-[250px] md:w-[calc(100%-250px)] px-12 py-10 text-darkGray '>
        
        <div className='flex flex-row justify-between w-full '>
            <p className='text-[13px] font-bold'>Introduction to fashion designing</p>
            <p className='text-[12px] text-dark-gray-100'>{Math.round(value)}%</p>
        </div>
        
        <div className='w-full h-[15px] mt-2 rounded-[20px] bg-[#FBFFF8] border border-bizpotta-green'>
            <div className='h-full rounded-[20px] bg-bizpotta-green' style={{width: `${((times.completed / times.total) * 100)}%`}}></div>
        </div>

        <div className='w-full flex flex-row justify-between mt-14 mb-10'>
            <DashBoardCard />
            <DashBoardCard />
            <DashBoardCard />
        </div>

        {/* <CoursesTable /> */}

        <div className='grid grid-cols-2 gap-x-20 mt-16 self-start'>
            <VideoCard />
            <VideoCard />
            <div className='text-[13px] text-bizpotta-gray-600  col-span-2 text-center mt-10'>View More</div>
        </div>

        <p className='mt-16 font-[600]'>Resourses to help you get started</p>
        <div className='border rounded-md mb-6 mt-6 border-gray-700'>
            <ResourcesCard />
            <ResourcesCard />
            <ResourcesCard />
            <ResourcesCard />
            <ResourcesCard />
            <ResourcesCard />
            <ResourcesCard />
            <ResourcesCard />

            <div className='text-[13px] text-bizpotta-gray-600 text-center mt-4'>View More</div>

        </div>

    </div>
  )
}

export default Content





