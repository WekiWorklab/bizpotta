import React from 'react'
import {card_image} from '../../public/images/card_image.png'
import {BsPerson, BsBag, BsClock} from 'react-icons/bs'
import {BsStarFill} from 'react-icons/bs'


const InstructorCard = ({data}) => {
    const imageSrc = 'https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    
  return (
    <div className='w-[220px] h-[220px] rounded-md bg-no-repeat bg-cover bg-center pt-[80px]' style={{backgroundImage: `url(${imageSrc})`}}>
        <div className='clip-card-path2 bg-[#121F4C] text-[white]  h-full flex flex-row justify-between pl-2 pr-2 rounded-b-md'>
            <div className='flex flex-col '>
                <p className='text-[14px] mt-[70px]'>{data.name}</p>
                <p className='text-[11px]'>{data.title}</p>
                <p className='text-[11px]'>{data.courseNo}</p>

            </div>
            <div className='flex flex-col'>
                <div className='flex flex-row mt-[90px]'>
                    <BsStarFill size={14} color='#FFC700'/>
                    <BsStarFill size={14} color='#FFC700'/>
                    <BsStarFill size={14} color='#FFC700'/>
                    <BsStarFill size={14} color='#FFC700'/>
                    <BsStarFill size={14} color='#FFC700'/>
                </div>
                <p className='text-xs'>{data.studentNo} students</p>
            </div>
        </div>

    </div>
  )
}

export default InstructorCard



/**
 * <div className='w-[220px] h-[220px] bg-no-repeat bg-cover bg-center border border-red-200' style={{backgroundImage: `url(${imageSrc})`}}>
kgfghj
    </div>
 */

// const InstructorCard = ({data}) => {
//   return (
//     <div className='w-[220px] h-[220px] rounded-md'>
//         <div className='w-full h-[180px]'>
//             <img src={data.image} className = 'object-cover rounded-t-md' />
//         </div>
//         <div className=' bg-[#94f236] bg-opacity-10 flex flex-col items-start justify-evenly pl-[20px] py-4 '>
//             <div className='flex flex-row '>
//                 <BsPerson size={20} className='mr-[20px]' />
//                 <div className='text-md'>{data.name}</div>
//             </div>
//             <div className='flex flex-row justify-center'>
//                 <BsBag size={14} className='mr-[20px] ml-1' />
//                 <div className='text-[12px]'>{data.title}</div>
//             </div>
//             <div className='flex flex-row justify-center'>
//                 <BsClock size={14} className='mr-[20px] ml-1' />
//                 <div className='text-[12px]'>{data.experience}</div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default InstructorCard


// h-[calc(100%-240px)]