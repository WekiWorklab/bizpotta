import React from 'react'
import {BsStarFill} from 'react-icons/bs'


const ContentCard = ({data}) => {
    const imageSrc = 'https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    
  return (
    <div className='w-[220px] h-[220px] rounded-md bg-no-repeat bg-cover bg-center pt-[80px]' style={{backgroundImage: `url(${imageSrc})`}}>
        <div className='clip-card-path2 bg-[#121F4C] text-[white]  h-full flex flex-row justify-between pl-4 pr-2 rounded-b-md'>
            <div className='flex flex-col '>
                <p className='text-[14px] mt-[80px]'>{data.name}</p>
                <p className='text-[11px]'>{data.category}</p>
            </div>
            <div className='flex flex-col'>
                <div className='text-[13px] mt-[35px] h-[30px] rounded-[5px] flex justify-center items-center bg-[#94F236] text-[13px]'>Enroll</div>
                <div className='flex flex-row mt-[40px]'>
                    <BsStarFill size={14} color='#FFC700'/>
                    <BsStarFill size={14} color='#FFC700'/>
                    <BsStarFill size={14} color='#FFC700'/>
                    <BsStarFill size={14} color='#FFC700'/>
                    <BsStarFill size={14} color='#FFC700'/>
                </div>
                <p className='text-xs'>{data.total_students} students</p>
            </div>
        </div>

    </div>
  )
}

export default ContentCard



/**
 * <div className='w-[220px] h-[220px] bg-no-repeat bg-cover bg-center border border-red-200' style={{backgroundImage: `url(${imageSrc})`}}>
kgfghj
    </div>
 */