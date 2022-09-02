import React from 'react'

///////
import {AiOutlineCaretLeft, AiOutlineCaretRight, AiOutlineInbox, AiOutlineLineChart, AiOutlineMenu} from 'react-icons/ai'
import {BsChevronDown, BsPlayCircle} from 'react-icons/bs'
import CoursesTable from '../CoursesComponent/CoursesTable'
import DashBoardCard from '../LayoutComponents/DashBoardCard'
import LChart from '../LayoutComponents/Line-Chart'
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

        {/*Line Chart */}
        <div className='mt-10 px-10 py-6 border shadow-sm'>
            <div className='w-full flex justify-between items-center mb-6'>
                <p>2021</p>
                <p className='w-[120px] flex justify-center py-[1.5px] border rounded-md shadow-sm text-darkBlue'>Monthly</p>
            </div>
            <LChart />
            <div className='w-full  flex flex-row justify-between items-center mt-4 px-4'>
                <div className='flex flex-row gap-x-4 '>
                    <div className='w-[40px] h-[40px] flex justify-center items-center bg-darkBlue rounded-sm'>
                        <AiOutlineMenu size={20} color = 'white'/>
                    </div>
                    <div className='w-[40px] h-[40px] flex justify-center items-center border border-gray-500 rounded-sm'>
                        <AiOutlineLineChart size={20} color = '#121F4C'/> 
                    </div>
                </div>

                <div className = 'flex flex-row justify-start items-center'>
                    <p className='text-[13px] mr-4'>Page 1</p>
                    <div className='w-[40px] h-[40px] bg-gray-500 rounded-sm border flex justify-center items-center'>
                        <AiOutlineCaretLeft color='#121F4C'/>
                    </div>
                    <div className='w-[40px] h-[40px] bg-gray-500 rounded-sm border flex justify-center items-center'>
                        <AiOutlineCaretRight color='#121F4C'/>
                    </div>
                    
                </div>
            </div>
        </div>
       

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





