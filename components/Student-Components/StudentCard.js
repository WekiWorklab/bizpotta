import React from 'react'
import {AiOutlineHeart} from 'react-icons/ai'

const StudentCard = ({data}) => {
    // console.log('first')
  return (
    <div className='min-w-[220px] min-h-[220px]  rounded-md bg-no-repeat bg-cover bg-center pt-[160px] shadow-xl' style={{backgroundImage: `url(${data.image})`}}>
        <div className='bg-[#121F4C] text-[white]  h-full flex flex-row justify-between  pl-2 pr-2 rounded-b-md'>
            <div className='flex flex-col justify-center'>
                <p className='text-[14px] '>{data.name}</p> 
                <p className='text-[11px] '>{data.title}</p>
            </div>

            <AiOutlineHeart size={20} className='mt-4 mr-4' />
        </div>

    </div>
  )
}

export default StudentCard