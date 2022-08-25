import React, { useState } from 'react'
import Notes from './Notes'
import Transcript from './Transcript'


const MiddleSection = () => {

    const [section, setSection] = useState('overview')

    const handleClick = (clicked) => {
        setSection(clicked)
    }

  return (
    <div className='w-full mt-6 sm:w-[500px] sm:h-[300px] xl:w-[850px] xl:h-[370px]'>
        <div className='flex flex-row justify-between '>
            <div onClick={() => handleClick('overview')} className={`${section === "overview" ? "text-darkBlue font-[600]" : "text-gray-500 font-[300]" } `} >Overview</div>
            <div onClick={() => handleClick('transcript')} className={`${section === "transcript" ? "text-darkBlue font-[600]" : "text-gray-500 font-[300]" } `}>Transcript</div>
            <div onClick={() => handleClick('notes')} className={`${section === "notes" ? "text-darkBlue font-[600]" : "text-gray-500 font-[300]" } `}>Notes</div>
            <div onClick={() => handleClick('download')} className={`${section === "download" ? "text-darkBlue font-[600]" : "text-gray-500 font-[300]" } `}>Download</div>
        </div>
        <div>
            {(section === 'transcript') && <Transcript />}
            { (section === 'notes') && <Notes />}
        </div>
    </div>
  )
}

export default MiddleSection