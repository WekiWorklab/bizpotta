import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {MdOutlineDashboard, MdOutlineSchool, MdOutlineCancel} from 'react-icons/md'
import {HiOutlineBookOpen} from 'react-icons/hi'
import {AiOutlineProject, AiOutlineSave} from 'react-icons/ai'

import {CgProfile} from 'react-icons/cg'
import {IoSettingsOutline, IoLogOutOutline} from 'react-icons/io5'
import {VscChevronRight} from 'react-icons/vsc'




export default function NewXSidebar({show, setShow, slideIn, setSlideIn}) {
  const [collapseShow, setCollapseShow] = React.useState("hidden");

  const router = useRouter();
  
  const path = router.asPath

  const handleClick = (path) => {
    setShow(false)
    router.push(path)
    
  }

  

  return (
    <>
  {/* shadow-xl */}
      <nav className={`${slideIn ? "SideBar" : "NoSideBar"}  fixed md:hidden top-0  w-[350px] pt-14 px-6 bg-gray-50 rounded-r-[20px] shadow-md flex-wrap items-center justify-between h-full z-[9999]`}>

      <div className="absolute top-[40px] right-[20px] cursor-pointer" onClick={() => {setShow(false); setSlideIn(false)}}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-[20px] w-[20px]" fill="none" viewBox="0 0 20 20" stroke="#999999" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
      </div>
    
      <div className='w-full ' >
            <ul className="mt-20">

            <li className=" flex  justify-start items-center h-[50px] redBorder cursor-pointer mb-2">
                <div className="text-sm text-gray-600 font-light">
                Overview
                </div>
            </li>

            <li className="flex justify-start items-center h-[50px] redBorder cursor-pointer mb-2">
                <div className="text-sm text-gray-600 font-light ">
                Grades
                </div>
            </li>


            <li className="flex justify-start items-center h-[50px] redBorder cursor-pointer mb-2">
                <div className="text-sm text-gray-600 font-light ">
                Notes
                </div>
            </li>

            <li className="flex justify-start items-center h-[50px] redBorder cursor-pointer mb-2">
                <div className="text-sm text-gray-600 font-light ">
                Discussion Forums
                </div>
            </li>

            
            <li className="flex justify-start items-center h-[50px] redBorder cursor-pointer mb-2">
                <div  className="flex flex-row justify-start items-center">
                <div className="text-sm text-gray-600 font-light ">
                    Live sessions
                </div>
                </div>
            </li>

            <li className="flex justify-start items-center h-[50px] redBorder cursor-pointer mb-2">
                <div  className="flex flex-row justify-start items-center">
                    <div className="text-sm text-gray-600 font-light ">
                    Messages
                    </div>
                </div>
            </li>

            <li className="flex justify-start items-center h-[50px] redBorder cursor-pointer mb-2">
                <div  className="flex flex-row justify-start items-center">
                    <div className="text-sm text-gray-600 font-light ">
                    Resources
                    </div>
                </div>
            </li>

            </ul>                      
        </div>
        {/* </div> */}
      </nav>
    </>
  );
}




