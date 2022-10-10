import React, { useState } from 'react'
import { AiOutlineInbox, AiOutlineLeft } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import ActiveCourses from './ActiveCourses'
import DeactivateCourses from './DeactivateCourses'
import PublishedCourses from './PublishedCourses'

const Content = () => {

    const [clickedCourse, setClickedCourse] = useState(true)
    /**If a course is clicked, a table will show that lists the properties of that course.*/

    const [select, setSelected] = useState()

  return (
    <div className='w-full'>
        <MainContent select = {select} setSelected = {setSelected} setClickedCourse = {setClickedCourse} />
         {/* : <ClickedCourseContent select = {select} setSelected = {setSelected} /> */}
    </div>
  )
}

export default Content




const MainContent = ({select, setSelected, setClickedCourse}) => {

    return (
        <div className='relative w-full h-full bg-white flex flex-col mt-[90px] md:mt-[120px] md:justify-center items-start md:translate-x-[250px] md:w-[calc(100%-250px)] px-1 py-10  text-darkGray redBorder '>


            <div className=''></div>

            <div className='w-full flex flex-row flex-wrap justify-center gap-3 md:pr-3 sm:gap-8 xl:gap-0 xl:justify-between '>
                <NewDashBoardCard select={select} title='Published courses' setSelected={setSelected} />
                <NewDashBoardCard select={select} title='Active courses' setSelected={setSelected} />
                <NewDashBoardCard select={select} title='Deactivated courses' setSelected={setSelected} />
            </div>

            <div className='mt-6 lg:mt-8 w-full'>
                <RenderTable select={select} setClickedCourse = {setClickedCourse}/>
            </div>
      
    </div>
    )
}


const ClickedCourseContent = ({setClickedCourse}) => {

    return (
        <div className='relative w-full h-full bg-white flex flex-col mt-[90px] md:mt-[120px] md:justify-center items-start md:translate-x-[250px] md:w-[calc(100%-250px)] px-1 py-10  text-darkGray redBorder '>
            
            <div className='flex items-center gap-x-1'>
                <AiOutlineLeft />
                <p>Back</p>
            </div>

        </div>
    )
}



const NewDashBoardCard = ({select, title, setSelected}) => {


    return(
        <div className={`w-[150px] sm:w-[200px] lg:w-[320px] ${(select === title) ? "bg-bizpotta-gray-500" : "bg-gray-100"} rounded-md p-2 lg:p-8`} onClick={() => setSelected(title)}>
            <div className='flex flex-row justify-between items-center mb-4 font-bold'>
                <AiOutlineInbox size = {24} color='#787878'/>
                <BsChevronDown size = {14} color='#787878'/>
            </div>

            <p className='text-bizpotta-green mb-2 font-bold'>{title}</p>

            <div className='font-[600] text-[14px] lg:text-base  text-bizpotta-gray-700'>23</div>
            
        </div>
    )
}


const RenderTable = ({ select, setClickedCourse }) => {

    switch (select) {
        case "Published courses":
            return <PublishedCourses setClickedCourse = {setClickedCourse} />
        case "Active courses":
            return <ActiveCourses setClickedCourse = {setClickedCourse}/>
        case "Deactivated courses":
            return <DeactivateCourses setClickedCourse = {setClickedCourse}/>
        default:
            return <PublishedCourses setClickedCourse = {setClickedCourse}/>
    }
}