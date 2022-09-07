import React from 'react'
import { useState } from 'react'
import { AiFillCaretDown, AiOutlinePicture } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import InputForm from './InstructorProfileComponent/InputForm'
import CourseLanding from './CourseLanding'
import InstructorProfile from './InstructorProfileComponent/InstructorProfile'
import CourseStructure from './CourseStructureComponent/CourseStructure'

const OldContent = () => {

    const [select, setSelect] = useState('instructor')

    const dispatch = useDispatch()


    const handleSubmit = () => {
        dispatch(showUploadModal(true))
    }


  return (
    <div className='relative w-full h-full bg-white flex flex-col mt-[90px] md:mt-[120px] md:justify-center items-start md:translate-x-[250px] md:w-[calc(100%-250px)] px-16 py-10 text-darkGray'>
        <div className='flex flex-row gap-x-6 text-[15px] font-bold pl-10'>
                <p className={`${(select === "instructor") ? "border-b-4" : ""} border-bizpotta-green px-2`} onClick = {() => setSelect('instructor')}>Instructor&#39;s Profile</p>
                <p className={` ${(select === "landing") ? "border-b-4" : ""} border-bizpotta-green px-2`} onClick = {() => setSelect('landing')}>Course Landing Page</p>
                <p className={`${(select === "structure") ? "border-b-4" : ""} border-bizpotta-green px-2`} onClick = {() => setSelect('structure')}>Course Structure</p>
                <p className={`${(select === "pricing") ? "border-b-4" : ""} border-bizpotta-green px-2`} onClick = {() => setSelect('pricing')}>Pricing</p>
            </div>

            {( select === "instructor" ) && <InstructorProfile />}

            {( select === "landing" ) && <CourseLanding />}

            {(select === "structure") && <CourseStructure />}

    </div>
  )
}

export default OldContent