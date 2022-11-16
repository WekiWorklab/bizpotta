import React, { useState } from 'react'
import { AiOutlineHeart, AiOutlineUpload } from 'react-icons/ai'
import { IoIosPeople } from 'react-icons/io5'
import Notes from './Notes'
import Transcript from './Transcript'


const MiddleSection = ({data, others}) => {

    const [section, setSection] = useState('overview')

    const handleClick = (clicked) => {
        setSection(clicked)
    }

  return (
    <div className='w-full mt-6 min-h-[300px] '>
        <div className='flex flex-row justify-between '>
            <div onClick={() => handleClick('overview')} className={`${section === "overview" ? "text-darkBlue font-[600]" : "text-gray-500 font-[300]" } cursor-pointer`} >Overview</div>
            <div onClick={() => handleClick('transcript')} className={`${section === "transcript" ? "text-darkBlue font-[600]" : "text-gray-500 font-[300]" } cursor-pointer`}>Transcript</div>
            <div onClick={() => handleClick('notes')} className={`${section === "notes" ? "text-darkBlue font-[600]" : "text-gray-500 font-[300]" } cursor-pointer`}>Notes</div>
            <div onClick={() => handleClick('download')} className={`${section === "download" ? "text-darkBlue font-[600]" : "text-gray-500 font-[300] cursor-not-allowed" } `}>Download</div>
        </div>
        <div className='mt-6'>
            {(section === 'overview') ? <Overview data={data} others = {others} /> : null}
            {(section === 'transcript') ? <Transcript /> : null}
            { (section === 'notes') ? <Notes /> : null}
        </div>
    </div>
  )
}

export default MiddleSection




const Overview = ({data, others}) => {

    return (
        <div className='w-full lg:w-[550px] mx-auto flex flex-col items-center'>
            {/* <div> */}
                <h1 className="text-[18px] font-[600] mt-4">{data?.title}</h1>
                    <div className="flex flex-row items-center mt-2">
                    <img src={others?.image} className="w-[40px] h-[40px] rounded-full mr-4 " />
                    <p className="text-[12px] sm:text-[14px] ">
                        by {others?.instructor}
                    </p>
                    </div>
                    
                <div className="flex flex-col items-center">
                    <li className="font-[600] text-[14px] mt-4 list-disc ">Course description:</li>
                    <p className="text-[13px] leading-[24px] text-center">
                        {others?.description}
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <li className="font-[600] text-[14px] mt-4 list-disc ">Lecture description:</li>
                    <p className="text-[13px] leading-[24px] text-center">
                        {data?.week_lectures?.description}
                    </p>
                </div>
            {/* </div> */}

        </div>
    )
}