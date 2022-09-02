import React from 'react'


///////
import { AiOutlineInbox } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"

const DashBoardCard = () => {
    return(
        <div className='w-[320px] h-[190] bg-bizpotta-gray-500 rounded-md p-8'>
            <div className='flex flex-row justify-between items-center mb-4'>
                <AiOutlineInbox size = {24} color='#787878'/>
                <BsChevronDown size = {14} color='#787878'/>
            </div>

            <p className='text-bizpotta-green mb-2'>Income</p>

            <div className='font-[600] text-bizpotta-gray-700'>&#36; 3,400,00 <span className='text-[12px]'>students</span></div>
            
        </div>
    )
} 

export default DashBoardCard