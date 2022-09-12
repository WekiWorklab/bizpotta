import React from 'react'

import { card_image, logo } from '../../../public'

import {AiOutlineDown, AiOutlineShoppingCart} from 'react-icons/ai'
import {FiSearch} from 'react-icons/fi'
import { IoNotificationsOutline } from 'react-icons/io5'

const Header = () => {
  return (
    <div className='w-full h-[130px] flex flex-row items-center justify-between px-10'>
        {/* Logo Section */}
        <div className='flex items-center'>
            <img src={logo.src} className = 'w-[200px] mr-1' alt=''/>
            <AiOutlineDown />
        </div>

        {/* Search Categories section */}
        <div className='flex items-center font-bold text-darkBlue'>
            <p>All categories</p>
            <AiOutlineDown className='ml-1 mr-4' size={14}/>
            <p>Search</p>
            <FiSearch className='ml-1' size={14}/>
        </div>

        {/* Accounts details */}
        <div className='flex items-center text-darkBlue gap-x-4'>
            <AiOutlineShoppingCart size={20} className='text-darkBlue' />
            <IoNotificationsOutline size={20} className='text-darkBlue' />
            <img src={card_image.src} alt='' className='w-[36px] h-[36px] rounded-full' />
            <div className='flex flex-col'>
                <p className='text-sm'>Naomi Bell</p>
                <p className='text-xs'>Student</p>

            </div>
        </div>

    </div>
  )
}

export default Header