import React, { memo, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {MdOutlineDashboard, MdOutlineSchool} from 'react-icons/md'
import {HiOutlineBookOpen} from 'react-icons/hi'
import {AiOutlineProject} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {IoSettingsOutline, IoLogOutOutline} from 'react-icons/io5'
import { useDispatch, useSelector } from "react-redux";




 function NewSidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  

  const router = useRouter();
  const path = router.asPath

  return (
    <>
      <nav className="fixed top-0 left-0 w-[200px] pt-[140px] px-6 bg-white hidden md:flex flex-row flex-wrap  justify-between h-full z-10 ">
          
          <div className='w-full ' >
            <ul>

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
      </nav>
    </>
  
  );
}



export default NewSidebar















