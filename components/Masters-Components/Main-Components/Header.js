import React, { useState } from 'react'

import { card_image, logo } from '../../../public'

import {AiOutlineDown, AiOutlineShoppingCart} from 'react-icons/ai'
import {FiSearch} from 'react-icons/fi'
import { IoNotificationsOutline } from 'react-icons/io5'

const Header = () => {

    const [showCat, setShowCat] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    
    const handleCat = () => {
        setShowCat(prev => !prev)
    }

    const handleSearch = () => {
        setShowSearch(prev => !prev)
    }

  return (
    <div className='w-full h-[130px] flex flex-row items-center justify-between px-10'>
        {/* Logo Section */}
        <div className='flex items-center'>
            <img src={logo.src} className = 'w-[200px] mr-1' alt=''/>
            <AiOutlineDown />
        </div>

        {/* Search Categories section */}
        <div className='flex items-center font-bold text-darkBlue'>
            <div className='flex items-center relative' >
                <p>All categories</p>
                <AiOutlineDown className='ml-1 mr-4 cursor-pointer' size={14} onClick={handleCat}/>
                {showCat && <CategoryDropdown />}
            </div>

            <div className='flex items-center relative' >
                <p>Search</p>
                <FiSearch className='ml-1 cursor-pointer' size={14} onClick={handleSearch}/>
                {showSearch && <SearchDropdown />}
            </div>
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



const CategoryDropdown = () => {

    const categories = [
        {tag: "arts", title: 'Arts & Entertainment'},
        {tag: "usiness", title: 'Business'},
        {tag: "community", title: 'Community & Government'},
        {tag: "design", title: 'Design and Style'},
        {tag: "food", title: 'Food'},
        {tag: "home", title: 'Home & Lifestyle'},
        {tag: "music", title: 'Music'},
        {tag: "tech", title: 'Science and Technology'},
        {tag: "sports", title: 'Sports and Gaming'},
        {tag: "fitness", title: 'Wellness and Fitness'},
        {tag: "writing", title: 'Writing'},
    ]

    return (
        <div className='w-[250px] py-4 px-4 bg-white shadow-lg absolute top-8 left-0 z-10 font-normal rounded-md'>
            {categories.map((el, index) => (
                <p key = {index} className='w-full h-[40px] text-[15px] font-semibold flex items-center'>{el.title}</p>
            ))}
        </div>
    )
}


const SearchDropdown = () => {

    return(
        <div className='absolute top-8 left-0 w-[250px] bg-gray-300 flex-col py-2 px-3 rounded-md z-20'>
            <p className='text-[11px] text-gray-700 '>Search course, instructor, category</p>
            <div className='flex flex-row items-center justify-between '>
                <input className='outline-none w-[200px] bg-transparent h-[30px] text-[13px]' />
                <FiSearch className='ml-1' size={10}/>
            </div>
        </div>
    )
}