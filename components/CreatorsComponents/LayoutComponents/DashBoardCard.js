import { useRouter } from 'next/router'
import React from 'react'


///////
import { AiOutlineInbox } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import { CoursesIcon, EnrollmentIcon, IncomeIcon } from '../../../public'

const DashBoardCard = ({select, title, setSelected}) => {

    return(
        <div className={`w-[150px] sm:w-[200px] lg:w-[320px] border-[1px] border-[#858585] border-opacity-[0.25] dashboard-card-shadow cursor-pointer ${(select === title) ? "bg-[#F3F4F6]" : "bg-[#FDFDFD]"} rounded-md p-2 lg:p-8`} onClick={() => setSelected(title)}>
            <div className='flex flex-row justify-between items-center mb-4'>
                {/* <AiOutlineInbox size = {24} color='#787878'/> */}
                {title === 'income' ? <IncomeIcon /> : ( title === "courses" ? <CoursesIcon /> : <EnrollmentIcon />)}
                <BsChevronDown size = {14} color='#787878'/>
            </div>

            <p className='text-bizpotta-green mb-2 capitalize font-bold'>{title}</p>

            <div className='font-[600] text-[14px] lg:text-base  text-bizpotta-gray-700'>&#36; 3,400,00 <span className='text-[12px]'>students</span></div>
            
        </div>
    )
} 

export default DashBoardCard