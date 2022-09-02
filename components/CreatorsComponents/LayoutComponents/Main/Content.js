import React from 'react'

////////////
import DashBoardCard from '../DashBoardCard'
import ResourcesCard from '../ResourcesCard'
import VideoCard from '../VideoCard'

////////////////
import {AiOutlineInbox} from 'react-icons/ai'
import {BsChevronDown, BsPlayCircle} from 'react-icons/bs'



const Content = () => {

    

  return (
    <div className='relative w-full h-full bg-white flex flex-col mt-[90px] md:mt-[120px] md:justify-center items-start md:translate-x-[250px] md:w-[calc(100%-250px)] px-12 py-10 text-darkGray redBorder'>
        <p className='redBorder mb-8'>Dashboard</p>

        <div className='w-full flex flex-row justify-between redBorder'>
            <DashBoardCard />
            <DashBoardCard />
            <DashBoardCard />
        </div>

        <p className='mt-10 font-[600]'>Resources</p>
        <p className='mt-2'>Just creating your first class, we got you covered</p>

        <div className='grid grid-cols-2 gap-x-20 mt-10 self-start'>
            <VideoCard />
            <VideoCard />
            <div className='text-[13px] text-bizpotta-gray-600  col-span-2 text-center mt-4'>View More</div>
        </div>

        <p className='mt-10 font-[600]'>Resourses to help you get started</p>
        <div className='border rounded-md mb-6 border-gray-700'>
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






