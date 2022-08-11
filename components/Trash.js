/******Header Component 2*******/
/***
 * import React, {useRef, useState} from 'react'
import { logo } from '../public'
import {FiSearch} from 'react-icons/fi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {IoNotificationsOutline} from 'react-icons/io5'
import { card_image } from '../public'
import {BsChevronDown} from 'react-icons/bs'
import {IoMenuOutline} from 'react-icons/io5'
import {MdOutlineCancel} from 'react-icons/md'
import SearchMenu from './Header-Components/SearchMenu'





const Header = ({show, setShow}) => {

    const [showHover, setShowHover] = useState(false)
    const [showSearch, setShowSearch] = useState(false)

    const handleBlur = () => {
        setShowSearch(false)
        setShowHover(false)
    }

    const handleFocus = () => {
        setShowSearch(true)
        setShowHover(false)
    }

    const handleMouseOver = () => {
        if (showSearch === true){
            return
        }
        else{
            setShowHover(true)
        }
        
        // setShowSearch(false)
    }

    const handleMouseOut = () => {
        setShowHover(false)
        // setShowSearch(false)
    }


   

  return (
    <div className='fixed w-full z-20 h-[120px] bg-white flex flex-row justify-between items-center px-2 lg:px-8 '>
        <div className='flex flex-row justify-start items-center'>
            <img className='  h-8 w-[120px] md:w-auto sm:h-10' src={logo.src} alt='' />
            <BsChevronDown className='hidden md:block text-sm text-[#999999] font-light ml-2'/>
        </div>    
        <div className='flex flex-row h-[40px] justify-start '>
            <input className='w-[160px] ml-2 sm:w-[200px] md:w-[350px] outline-none pl-2 text-xs sm:text-sm md:text-base border-2 rounded-l-md border-r-0' placeholder='What do you want to learn' onBlur = {handleBlur} onFocus = {handleFocus} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
            <div className=' w-[55px] h-full border  rounded-r-md bg-gradient-to-r from-[#121F4C] via-[#0E4858] via-[#0D585D] to-[#0B6C64] flex justify-center items-center'>
                <FiSearch  className='text-white text-2xl'/>
            </div>
            <SearchMenu showHover = {showHover} showSearch = {showSearch} handleMouseOver={handleMouseOver} handleMouseOut = {handleMouseOut}/>
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
            <IoMenuOutline size={22} color = '#121F4C' className='ml-[10px] hover:cursor-pointer md:hidden' onClick={() => setShow(true)} /> 
            : 
            <MdOutlineCancel size={22} color = '#121F4C' className=' ml-[10px] hover:cursor-pointer md:hidden' onClick={() => setShow(false)} />}

        

    </div>
  )
}

export default Header


 * * */








/****Header Component 1*********/
/****
 * import React from 'react'
import { logo } from '../public'
import {FiSearch} from 'react-icons/fi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {IoNotificationsOutline} from 'react-icons/io5'
import { card_image } from '../public'
import {BsChevronDown} from 'react-icons/bs'
import {IoMenuOutline} from 'react-icons/io5'
import {MdOutlineCancel} from 'react-icons/md'
import HoverSearch from './Header-Components/HoverSearch'





const Header = ({show, setShow}) => {

   

  return (
    <div className='fixed w-full z-20 h-[120px] bg-white flex flex-row justify-between items-center px-2 lg:px-8 '>
        <div className='flex flex-row justify-start items-center'>
            <img className='  h-8 w-[120px] md:w-auto sm:h-10' src={logo.src} alt='' />
            <BsChevronDown className='hidden md:block text-sm text-[#999999] font-light ml-2'/>
        </div>    
        <div className='flex flex-row h-[40px] justify-start '>
            <input className='w-[160px] ml-2 sm:w-[200px] md:w-[350px] outline-none pl-2 text-xs sm:text-sm md:text-base border-2 rounded-l-md border-r-0' placeholder='What do you want to learn'/>
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
            <IoMenuOutline size={22} color = '#121F4C' className='ml-[10px] hover:cursor-pointer md:hidden' onClick={() => setShow(true)} /> 
            : 
            <MdOutlineCancel size={22} color = '#121F4C' className=' ml-[10px] hover:cursor-pointer md:hidden' onClick={() => setShow(false)} />}

        

    </div>
  )
}

export default Header


 * ** */




/*********Sidebar Component******* */

// import React from "react";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import {MdOutlineDashboard, MdOutlineSchool} from 'react-icons/md'
// import {HiOutlineBookOpen} from 'react-icons/hi'
// import {AiOutlineProject} from 'react-icons/ai'
// import {CgProfile} from 'react-icons/cg'
// import {IoSettingsOutline, IoLogOutOutline} from 'react-icons/io5'


// export default function Sidebar() {
//   const [collapseShow, setCollapseShow] = React.useState("hidden");
//   const router = useRouter();
//   return (
//     <>
//       <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
//         <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
         
//           <Link href="/">
//             <a
//               href="#pablo"
//               className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
//             >
//               Bizpotta
//             </a>
//           </Link>
          
//           <div
//             className={
//               " mt-20 md:flex md:flex-col md:items-stretch md:opacity-100 md:relative  md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
//               collapseShow
//             }
//           >

            

//             <ul className="md:flex-col md:min-w-full flex flex-col list-none mb-10 mt-5 ">
//               <li className="items-center  mb-5">
//                 <div  className="flex flex-row justify-start">
//                   <MdOutlineDashboard color="#121F4C"/>
//                   <div className="text-sm text-darkBlue font-semibold ml-5">
//                     Dashboard
//                   </div>
                  
//                 </div>
//               </li>

//               <li className="items-center  mb-5">
//                 <div  className="flex flex-row justify-start">
//                   <HiOutlineBookOpen color="#E5E5E5"/>
//                   <div className="text-sm text-[#999999] font-light ml-5">
//                     Courses
//                   </div>
                  
//                 </div>
//               </li>

//               <li className="items-center ">
//                 <div  className="flex flex-row justify-start">
//                   <MdOutlineSchool color="#E5E5E5"/>
//                   <div className="text-sm text-[#999999] font-light ml-5">
//                     Classroom
//                   </div>
                  
//                 </div>
//               </li>

//             </ul>

//             <hr className="my-4 md:min-w-full" />
//             <ul className="md:flex-col md:min-w-full flex flex-col list-none mb-10 mt-5 ">
//               <li className="items-center  mb-5">
//                 <div  className="flex flex-row justify-start ">
//                   <AiOutlineProject color="#999999" className="mt-[2px]"/>
//                   <div className="text-sm text-[#999999] font-light ml-5">
//                     Projects
//                   </div>
                  
//                 </div>
//               </li>

//               <li className="items-center  mb-5">
//                 <div  className="flex flex-row justify-start ">
//                   <div className="text-sm text-[#999999] font-light ml-8">
//                     My projects
//                   </div>
//                   <span className="text-sm text-[#999999] font-light ml-5"> 15 </span>
                  
//                 </div>
//               </li>

//               <li className="items-center ">
//                 <div  className="flex flex-row justify-start ">
//                   <div className="text-sm text-[#999999] font-light ml-8">
//                     Browse
//                   </div>
                  
//                 </div>
//               </li>

//             </ul>

//             <hr className="my-4 md:min-w-full" />
//             <ul className="md:flex-col md:min-w-full flex flex-col list-none mb-10 mt-5 ">
//             <li className="items-center  mb-5">
//                 <div  className="flex flex-row justify-start">
//                   <CgProfile color="#E5E5E5"/>
//                   <div className="text-sm text-[#999999] font-light ml-5">
//                     Profile
//                   </div>
                  
//                 </div>
//               </li>

//               <li className="items-center  mb-5">
//                 <div  className="flex flex-row justify-start">
//                   <IoSettingsOutline color="#E5E5E5"/>
//                   <div className="text-sm text-[#999999] font-light ml-5">
//                     Settings
//                   </div>
                  
//                 </div>
//               </li>

//               <li className="items-center ">
//                 <div  className="flex flex-row justify-start">
//                   <IoLogOutOutline color="#E5E5E5"/>
//                   <div className="text-sm text-[#999999] font-light ml-5">
//                     Log-out
//                   </div>
                  
//                 </div>
//               </li>

//             </ul>

                      
//             </div>
//         </div>
//       </nav>
//     </>
//   );
// }

/******************** */