import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {MdOutlineDashboard, MdOutlineSchool, MdOutlineCancel} from 'react-icons/md'
import {HiOutlineBookOpen} from 'react-icons/hi'
import {AiOutlineProject, AiOutlineSave} from 'react-icons/ai'

import {CgProfile} from 'react-icons/cg'
import {IoSettingsOutline, IoLogOutOutline} from 'react-icons/io5'
import {VscChevronRight} from 'react-icons/vsc'




export default function XSidebar({show, setShow}) {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();

  

  return (
    <>
  {/* shadow-xl */}
      <nav className="fixed md:hidden top-0 translate-x-0 w-[350px] pt-24 px-6 bg-gray-50 rounded-r-[20px] shadow-md flex-wrap items-center justify-between h-full z-[9999] ">

      <div className="absolute top-[40px] right-[20px]" onClick={() => setShow(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-[20px] w-[20px]" fill="none" viewBox="absolute" stroke="#999999" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
      </div>
      

      {/* <MdOutlineCancel size={22} color = '#121F4C' className='md:ml-[10px] hover:cursor-pointer md:hidden' onClick={() => setShow(false)} /> */}
          
          <div
            className='w-full ' 
          >

            <ul className="md:flex-col md:min-w-full flex flex-col list-none mb-8 mt-5 ">
              <li className="flex items-center h-[45px] mb-2">
                <div  className="flex flex-row justify-start items-center">
                  <MdOutlineDashboard color="#121F4C"/>
                  <div className="text-sm text-darkBlue font-semibold w-[230px] ml-5">
                    Dashboard
                  </div>
                  <VscChevronRight color="#999999" />
                  
                </div>
              </li>

              {/* "#E5E5E5" */}
              {/* text-[#999999] */}
              <li className="items-center  mb-2">
                <div  className="flex items-center h-[45px]">
                  <HiOutlineBookOpen color="gray"/>
                  <div className="text-sm text-gray-600 w-[230px] font-light ml-5">
                    Courses
                  </div>
                  <VscChevronRight color="#999999" />

                  
                </div>
              </li>

              <li className="items-center  mb-2">
                <div  className="flex items-center h-[45px]">
                  <MdOutlineSchool color="gray"/>
                  <div className="text-sm text-gray-600 w-[230px] font-light ml-5">
                    Classroom
                  </div>
                  <VscChevronRight color="#999999" />

                  
                </div>
              </li>

            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full border" />
            {/* Heading */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none mb-8 mt-5"> 
            <li className="items-center  mb-2">
                <div  className="flex items-center h-[45px]">
                  <AiOutlineProject color="gray"/>
                  <div className="text-sm text-gray-600 w-[230px] font-light ml-5">
                    Project
                  </div>
                  <VscChevronRight color="#999999" />

                  
                </div>
              </li>

              <li className="items-center  mb-2">
                <div  className="flex items-center h-[45px]">
                  <AiOutlineProject color="gray"/>
                  <div className="text-sm text-gray-600 w-[230px] font-light ml-5">
                    My Projects
                  </div>
                  <VscChevronRight color="#999999" />

                  
                </div>
              </li>

              <li className="items-center  mb-2">
                <div  className="flex items-center h-[45px]">
                  <AiOutlineSave color="gray"/>
                  <div className="text-sm text-gray-600 w-[230px] font-light ml-5">
                    Saved Projects
                  </div>
                  <VscChevronRight color="#999999" />

                  
                </div>
              </li>

            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full border" />
            <ul className="md:flex-col md:min-w-full flex flex-col list-none mb-10 mt-5 ">
              <li className="items-center  mb-2">
                  <div  className="flex items-center h-[45px]">
                    <CgProfile color="gray"/>
                    <div className="text-sm text-gray-600 w-[230px] font-light ml-5">
                      Profile
                    </div>
                    <VscChevronRight color="#999999" />

                    
                  </div>
                </li>

                <li className="items-center  mb-2">
                <div  className="flex items-center h-[45px]">
                  <IoSettingsOutline color="gray"/>
                  <div className="text-sm text-gray-600 w-[230px] font-light ml-5">
                    Settings
                  </div>
                  <VscChevronRight color="#999999" />

                  
                </div>
              </li>

              <li className="items-center  mb-2">
                <div  className="flex items-center h-[45px]">
                  <IoLogOutOutline color="gray"/>
                  <div className="text-sm text-gray-600 w-[230px] font-light ml-5">
                    LogOut
                  </div>
                  <VscChevronRight color="#999999" />

                  
                </div>
              </li>

            </ul>

                      
            </div>
        {/* </div> */}
      </nav>
    </>
  );
}




