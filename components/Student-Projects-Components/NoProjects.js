import React from 'react'
import {VscFiles} from 'react-icons/vsc'

const NoProjects = () => {
  return (
    <div className='w-full pt-10 px-10 h-full'>
        <p className='font-[600]'>My Projects</p>
        <p className='mt-4'>Hi Naomi, you have no project at the moment kindly complete a course to upload your projects.</p>

        <div className='mt-[100px] ml-[40%] w-[300px] relative '>
            {/* <VscFiles size={76}/> */}
                <div className='h-[70px] w-[45px] border border-black absolute z-40 bg-[#E5E5E5]'> </div>
                <div className='h-[70px] w-[45px] border border-black absolute bg-[#E5E5E5] -rotate-12 z-30 translate-x-[-10px] translate-y-[-4px]'> </div>
                <div className='h-[70px] w-[45px] border border-black absolute bg-[#E5E5E5] -rotate-45 z-20 translate-x-[-20px] translate-y-[-5.5px]'> </div>
            <p className='absolute mt-20  w-[100px] right-[220px]'>Start Course</p>
        </div>


    </div>
  )
}

export default NoProjects