import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {MdOutlineDashboard, MdOutlineSchool} from 'react-icons/md'
import {HiOutlineBookOpen} from 'react-icons/hi'
import {AiOutlineProject} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {IoSettingsOutline, IoLogOutOutline} from 'react-icons/io5'




export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();

  

  return (
    <>

      <nav className="fixed top-0 left-0 w-[200px] py-4 px-6 shadow-xl bg-white hidden md:flex flex-wrap items-center justify-between h-full z-10">
          
          <div
            className='w-full mt-20'
            
          >

            <ul className="md:flex-col md:min-w-full flex flex-col list-none mb-20 mt-5 ">
              <li className="items-center  mb-5">
                <div  className="flex flex-row justify-start items-center">
                  <MdOutlineDashboard color="#121F4C"/>
                  <div className="text-sm text-darkBlue font-semibold ml-5">
                    Dashboard
                  </div>
                  
                </div>
              </li>

              {/* "#E5E5E5" */}
              {/* text-[#999999] */}
              <li className="items-center  mb-5">
                <div  className="flex flex-row justify-start items-center">
                  <HiOutlineBookOpen color="gray"/>
                  <div className="text-sm text-gray-600 font-light ml-5">
                    Courses
                  </div>
                  
                </div>
              </li>

              <li className="items-center ">
                <div  className="flex flex-row justify-start items-center">
                  <MdOutlineSchool color="gray"/>
                  <div className="text-sm text-gray-600 font-light ml-5">
                    Classroom
                  </div>
                  
                </div>
              </li>

            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full border" />
            {/* Heading */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none mb-20 mt-5 ">
              <li className="items-center  mb-5">
                <div  className="flex flex-row justify-start items-center">
                  <AiOutlineProject color="gray" />
                  <div className="text-sm text-gray-600 font-light ml-5">
                    Projects
                  </div>
                  
                </div>
              </li>

              <li className="items-center  mb-5">
                <div  className="flex flex-row justify-start ">
                  <div className="text-sm text-gray-600 font-light ml-8">
                    My projects
                  </div>
                  <span className="text-sm text-gray-600 font-light ml-5"> 15 </span>
                  
                </div>
              </li>

              <li className="items-center ">
                <div  className="flex flex-row justify-start ">
                  <div className="text-sm text-gray-699 font-light ml-8">
                    Browse
                  </div>
                  
                </div>
              </li>

            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full border" />
            <ul className="md:flex-col md:min-w-full flex flex-col list-none mb-10 mt-5 ">
            <li className="items-center  mb-5">
                <div  className="flex flex-row justify-start items-center">
                  <CgProfile color="gray"/>
                  <div className="text-sm text-gray-600 font-light ml-5">
                    Profile
                  </div>
                  
                </div>
              </li>

              <li className="items-center  mb-5">
                <div  className="flex flex-row justify-start items-center">
                  <IoSettingsOutline color="gray"/>
                  <div className="text-sm text-gray-600 font-light ml-5">
                    Settings
                  </div>
                  
                </div>
              </li>

              <li className="items-center ">
                <div  className="flex flex-row justify-start items-center">
                  <IoLogOutOutline color="gray"/>
                  <div className="text-sm text-gray-600 font-light ml-5">
                    Log-out
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












