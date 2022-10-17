////////
import React, { memo, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

////////
import {MdOutlineDashboard, MdOutlineSchool} from 'react-icons/md'
import {HiOutlineBookOpen} from 'react-icons/hi'
import {AiOutlineProject} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {IoSettingsOutline, IoLogOutOutline} from 'react-icons/io5'
import { useDispatch, useSelector } from "react-redux";




 function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");

  const router = useRouter();
  const path = router.asPath

  return (
    <>
      <nav className="fixed top-0 left-0 w-[250px] pt-[140px] px-6 bg-white hidden md:flex flex-row flex-wrap  justify-between h-full z-10 ">
          
          <div className='w-full ' >

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center cursor-pointer  mb-5" onClick={() => router.push('/creators')}>
                <div  className="flex flex-row justify-start items-center">
                  <MdOutlineDashboard color={(path === "/creators" ) ? "#121F4C" : 'gray'}/>
                  <div className= {`${(path === "/creators" ? "text-darkBlue font-semibold" : "text-gray-400 font-light")} text-sm  ml-5`}>
                    Manage account
                  </div>
                  
                </div>
              </li>

              <li className="items-center cursor-pointer  mb-5" onClick={() => router.push('/creators/courses')}>
                <div  className="flex flex-row justify-start items-center" >
                  <HiOutlineBookOpen color={(path === '/creators/courses' ) ? "#121F4C" : 'gray'}/>
                  <div className={`${(path === '/students/courses' ? "text-darkBlue font-semibold" : 'text-gray-400 font-light')} text-sm   ml-5`}>
                    Courses
                  </div>
                </div>
              </li>


              <li className="items-center cursor-pointer mb-5">
                <div  className="flex flex-row justify-start items-center">
                  <MdOutlineSchool color="gray"/>
                  <div className="text-sm text-gray-600 font-light ml-5">
                    Market Insight
                  </div>
                </div>
              </li>

              <li className="items-center cursor-pointer mb-5">
                <div  className="flex flex-row justify-start items-center">
                  <MdOutlineSchool color="gray"/>
                  <div className="text-sm text-gray-600 font-light ml-5">
                    Community
                  </div>
                </div>
              </li>
            </ul>

            
            <ul className="md:flex-col md:min-w-full flex flex-col list-none  mt-5 ">
              <li className="items-center cursor-pointer mb-[10px]" onClick={() => router.push('/students/all-projects')}>
                <div  className="flex flex-row justify-start items-center">
                  <AiOutlineProject color={(path === '/students/all-projects' ) ? "#121F4C" : 'gray'} />
                  <div className={`${(path === '/students/all-projects' ? "text-darkBlue font-semibold" : 'text-gray-400 font-light')} text-sm   ml-5`}>
                    Course Engagement
                  </div>
                </div>
              </li>

              <li className="items-center cursor-pointer mb-[10px] " onClick={() => router.push('/students/all-projects')}>
                  <div className={`${(path === '/students/all-projects' ? "text-darkBlue font-semibold" : 'text-gray-400 font-light')} text-sm flex flex-row justify-between items-center px-[35px] `}>
                    <div className="">Message</div>
                    <p className="">2</p>
                  </div>
              </li>

              <li className="items-center cursor-pointer mb-[10px] " onClick={() => router.push('/students/all-projects')}>
                  <div className={`${(path === '/students/all-projects' ? "text-darkBlue font-semibold" : 'text-gray-400 font-light')} text-sm flex flex-row justify-between items-center px-[35px] `}>
                    <div className="">Message</div>
                    <p className="">2</p>
                  </div>
              </li>

              <li className="items-center cursor-pointer mb-[10px] " onClick={() => router.push('/students/all-projects')}>
                  <div className={`${(path === '/students/all-projects' ? "text-darkBlue font-semibold" : 'text-gray-400 font-light')} text-sm flex flex-row justify-between items-center px-[35px] `}>
                    <div className="">Message</div>
                    <p className="">2</p>
                  </div>
              </li>

              <li className="items-center cursor-pointer mb-5 " onClick={() => router.push('/students/all-projects')}>
                  <div className={`${(path === '/students/all-projects' ? "text-darkBlue font-semibold" : 'text-gray-400 font-light')} text-sm flex flex-row justify-between items-center px-[35px] `}>
                    <div className="">Message</div>
                    <p className="">2</p>
                  </div>
              </li>

            </ul>

            <ul className="md:flex-col md:min-w-full flex flex-col list-none mb-10 mt-5 ">
            <li className="items-center cursor-pointer mb-5">
                <div  className="flex flex-row justify-start items-center">
                  <CgProfile color="gray"/>
                  <div className="text-sm text-gray-600 font-light ml-5">
                    Profile
                  </div>
                </div>
              </li>

              <li className="items-center cursor-pointer mb-5" onClick={() => router.push('/creators/settings')}>
                <div  className="flex flex-row justify-start items-center">
                  <IoSettingsOutline color="gray"/>
                  <div className="text-sm text-gray-600 font-light ml-5">
                    Settings
                  </div>
                  
                </div>
              </li>

              <li className="items-center cursor-pointer">
                <div  className="flex flex-row justify-start items-center">
                  <IoLogOutOutline color="gray"/>
                  <div className="text-sm text-gray-600 font-light ml-5">
                    Log-out
                  </div>
                  
                </div>
              </li>

            </ul>

                      
            </div>
      </nav>
    </>
  );
}



export default Sidebar








