import React from 'react'
import {card_image} from '../../public/images/card_image.png'
import {BsPerson, BsBag, BsClock} from 'react-icons/bs'


const InstructorCard = () => {
  return (
    <div className='w-[300px] h-[360px] rounded-md '>
        <img src='https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' className = 'w-auto h-[240px] object-cover rounded-t-md' />
        <div className='h-[calc(100%-240px)] bg-[#94f236] bg-opacity-10 flex flex-col items-start justify-evenly pl-[20px] '>
            <div className='flex flex-row '>
                <BsPerson size={20} className='mr-[20px]' />
                <div className='text-md'>Ayokunle Peters</div>
            </div>
            <div className='flex flex-row justify-center'>
                <BsBag size={14} className='mr-[20px] ml-1' />
                <div className='text-[12px]'>Product manager at Google</div>
            </div>
            <div className='flex flex-row justify-center'>
                <BsClock size={14} className='mr-[20px] ml-1' />
                <div className='text-[12px]'>5 years experience</div>
            </div>
        </div>
    </div>
  )
}

export default InstructorCard