import React from 'react'
import {card_image} from '../../public/images/card_image.png'
import {BsPerson, BsBag, BsClock} from 'react-icons/bs'
import {BsStarFill} from 'react-icons/bs'


const InstructorCard = ({data}) => {
    const imageSrc = 'https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    
    

  return (
   
    <div className='w-[220px] h-[220px] md:w-[180px] md:h-[180px] xl:h-[220px] xl:w-[220px] rounded-md bg-no-repeat bg-cover bg-center pt-[80px]' style={{backgroundImage: `url(${imageSrc})`}}>
        <div className='clip-card-path2 bg-[#121F4C] text-[white]  h-full flex flex-col justify-end px-2 pb-2 rounded-b-md'>
            <div className='text-[14px] mt-[3px] xl:text-[14px] md:text-[10px] box-overflow'>{data.name}</div>

            <div className='flex flex-row justify-between'>
                <div className='flex flex-col  max-w-[60%]'>
                    <p className='text-[11px] xl:text-[11px] md:text-[10px] box-overflow'>{data.title}</p>
                    <p className='text-[11px] xl:text-[11px] md:text-[10px] mt-[2px]'>{data.courseNo} courses</p>
                </div>

                <div className='flex flex-col'>
                <div className='flex flex-row mt-[3px] xl:mt-[3px] md:mt-[3px]'>
                    <BsStarFill size={14} color='#FFC700'/>
                    <BsStarFill size={14} color='#FFC700'/>
                    <BsStarFill size={14} color='#FFC700'/>
                    <BsStarFill size={14} color='#FFC700'/>
                    <BsStarFill size={14} color='#FFC700'/>
                </div>
                <p className='text-xs xl:text-xs md:text-[10px] mt-[3px]'>{data.studentNo} students</p>
                </div>
            </div>

            
            
        </div>

    </div>
  )
}

export default InstructorCard






/*
import React from 'react'
import {card_image} from '../../public/images/card_image.png'
import {BsPerson, BsBag, BsClock} from 'react-icons/bs'
import {BsStarFill} from 'react-icons/bs'


const InstructorCard = ({data}) => {
    const imageSrc = 'https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    
    

  return (
   
    <div className='w-[220px] h-[220px] md:w-[180px] md:h-[180px] xl:h-[220px] xl:w-[220px] rounded-md bg-no-repeat bg-cover bg-center pt-[80px]' style={{backgroundImage: `url(${imageSrc})`}}>
        <div className='clip-card-path2 bg-[#121F4C] text-[white]  h-full flex flex-row justify-between pl-2 pr-2 rounded-b-md'>
            <div className='flex flex-col '>
                <p className='text-[14px] mt-[70px] xl:text-[14px] xl:mt-[70px] md:text-[10px] md:mt-[50px]'>{data.name}</p> 
                <p className='text-[11px] xl:text-[11px] md:text-[10px]'>{data.title}</p>
                <p className='text-[11px] xl:text-[11px] md:text-[10px]'>{data.courseNo}</p>

            </div>
            <div className='flex flex-col'>
                <div className='flex flex-row mt-[90px] xl:mt-[90px] md:mt-[55px]'>
                    <BsStarFill size={14} color='#FFC700'/>
                    <BsStarFill size={14} color='#FFC700'/>
                    <BsStarFill size={14} color='#FFC700'/>
                    <BsStarFill size={14} color='#FFC700'/>
                    <BsStarFill size={14} color='#FFC700'/>
                </div>
                <p className='text-xs xl:text-xs md:text-[10px] '>{data.studentNo} students</p>
            </div>
        </div>

    </div>
  )
}

export default InstructorCard
*/