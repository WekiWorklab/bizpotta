import React from 'react'
import { logo } from '../public'
import {FiSearch} from 'react-icons/fi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {IoNotificationsOutline} from 'react-icons/io5'
import { card_image } from '../public'
import {BsChevronDown} from 'react-icons/bs'
import {IoMenuOutline} from 'react-icons/io5'
import {MdOutlineCancel} from 'react-icons/md'





const Header = ({show, setShow}) => {

   

  return (
    <div className='fixed w-full z-20 h-[120px] bg-white flex flex-row justify-between items-center sm:px-2 lg:px-8 '>
        <div className='flex flex-row justify-start items-center'>
            <img className='  h-8 w-auto sm:h-10' src={logo.src} alt='' />
            <BsChevronDown className='text-sm text-[#999999] font-light ml-2'/>
        </div>    
        <div className='flex flex-row h-[40px] justify-start '>
            <input className='w-[170px] ml-2 sm:w-[200px] md:w-[350px] outline-none pl-2 text-xs sm:text-sm md:text-base border-2 rounded-l-md border-r-0' placeholder='What do you want to learn'/>
            <div className=' w-[55px] h-full border  rounded-r-md bg-gradient-to-r from-[#121F4C] via-[#0E4858] via-[#0D585D] to-[#0B6C64] flex justify-center items-center'>
                <FiSearch  className='text-white text-2xl'/>
            </div>
        </div>
        <div className=' hidden sm:flex flex-row  w-[100px] sm:w-[280px] justify-evenly items-center'>
            <AiOutlineShoppingCart className='  text-darkBlue text-2xl' />
            <IoNotificationsOutline className=' text-darkBlue text-2xl' />
            <img src={card_image.src} className = ' h-9 w-9 rounded-full'/>
            <div className='hidden sm:flex flex-col'>
                <p className='text-sm'>Naomi Bell</p>
                <p className='text-xs'>Student</p>
            </div>
        </div>
        
        {!show ? 
            <IoMenuOutline size={22} color = '#121F4C' className='absolute top-24 left-4 hover:cursor-pointer md:hidden' onClick={() => setShow(true)} /> 
            : 
            <MdOutlineCancel size={22} color = '#121F4C' className='absolute top-24 left-4 hover:cursor-pointer md:hidden' onClick={() => setShow(false)} />}

        

    </div>
  )
}

export default Header

