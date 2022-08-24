import React from 'react'
//////////////
import { useDispatch } from 'react-redux'
////////////////
import { showProfileModal } from '../../store/courseSlice'

const ProjCard = ({data}) => {
    console.log('first')
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(showProfileModal(true))
    }

  return (
    <div className='min-w-[220px] min-h-[220px]  rounded-md bg-no-repeat bg-cover bg-center pt-[160px] shadow-xl' style={{backgroundImage: `url(${data.image})`}}>
        <div className='bg-[#121F4C] text-[white]  h-full flex flex-row justify-between  pl-2 pr-2 rounded-b-md'>
            <div className='flex flex-col justify-center'>
                <p className='text-[14px] '>{data.name}</p> 
                <p className='text-[11px] '>{data.title}</p>
            </div>
            <div className='flex flex-col justify-center items-center rounded-[4px] h-[25px] w-[60px] mt-4 bg-bizpotta-green cursor-pointer' onClick={handleClick}>
                <p className='text-xs text-black'>view</p>
            </div>
        </div>

    </div>
  )
}

export default ProjCard