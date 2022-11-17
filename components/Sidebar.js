import React, { memo, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdOutlineDashboard, MdOutlineLiveTv, MdOutlineSchool } from "react-icons/md";
import { HiOutlineBookOpen } from "react-icons/hi";
import { AiOutlineProject } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { logout, reset } from "../store/authSlice";

function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const dispatch = useDispatch();


  const router = useRouter();
  const path = router.asPath;

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    router.push("/auth/login");
  };
  return (
    <>
      {/* shadow-xl */}
      <nav className="fixed top-0 left-0 w-[200px] py-4 px-6  bg-white hidden md:flex flex-wrap items-center justify-between h-full z-10">
        <div className="w-full mt-20">
          <ul className="md:flex-col md:min-w-full flex flex-col list-none mb-20 mt-5 ">
            <li
              className="items-center cursor-pointer mb-5"
              onClick={() => router.push("/students")}
            >
              <div className="flex flex-row justify-start items-center">
                <MdOutlineDashboard
                  color={path === "/students" ? "#121F4C" : "gray"}
                />
                <div
                  className={`${
                    path === "/students"
                      ? "text-darkBlue font-semibold"
                      : "text-gray-400 font-light"
                  } text-sm  ml-5`}
                >
                  {/* <div className="text-sm text-darkBlue font-semibold ml-5"></div> */}
                  Dashboard
                </div>
              </div>
            </li>

            {/* "#E5E5E5" */}
            {/* text-[#999999] */}
            <li
              className="items-center cursor-pointer mb-5"
              onClick={() => router.push("/students/courses/vocational")}
            >
              <div className="flex flex-row justify-start items-center">
                <HiOutlineBookOpen
                  color={
                    (path === "/students/courses/vocational" || path === "/students/courses/masterclass") ? "#121F4C" : "gray"
                  }
                />
                <div
                  className={`${
                    (path === "/students/courses/vocational" || path === "/students/courses/masterclass")
                      ? "text-darkBlue font-semibold"
                      : "text-gray-400 font-light"
                  } text-sm ml-5`}
                >
                  Courses
                </div>
              </div>
            </li>

            
            <li
              className="items-center cursor-pointer"
              onClick={() => router.push("/students/live-session")}
            >
              <div className={`${path.includes("/students/live-session") ? "text-darkBlue font-semibold" : "text-gray-400 font-light"} flex flex-row justify-start items-center`}>
                <MdOutlineLiveTv />
                <div className={`text-sm ml-5`}>
                  Live Session
                </div>
              </div>
            </li>

          </ul>

          {/* Divider */}
          <hr className="my-4 md:min-w-full border" />
          {/* Heading */}
          <ul className="md:flex-col md:min-w-full flex flex-col list-none mb-20 mt-5 ">
            <li
              className="items-center cursor-pointer mb-5"
              onClick={() => router.push("/students/all-projects")}
            >
              <div className="flex flex-row justify-start items-center">
                <AiOutlineProject
                  color={path === "/students/all-projects" ? "#121F4C" : "gray"}
                />
                <div
                  className={`${
                    path === "/students/all-projects"
                      ? "text-darkBlue font-semibold"
                      : "text-gray-400 font-light"
                  } text-sm ml-5`}
                >
                  Projects
                </div>
              </div>
            </li>

            <li
              className="items-center cursor-pointer mb-5"
              onClick={() => router.push("/students/student")}
            >
              <div
                className={`flex flex-row justify-start text-sm  ${
                  path === "/students/student"
                    ? "text-darkBlue font-semibold"
                    : "text-gray-600 font-light"
                }   `}
              >
                <div className=" ml-8">My projects</div>
                <span className=" ml-5"> 15 </span>
              </div>
            </li>

            <li
              className="items-center cursor-pointer"
              onClick={() => router.push("/students/student/projects")}
            >
              <div className="flex flex-row justify-start ">
                <div
                  className={`text-sm ml-8 ${
                    path === "/students/student/projects"
                      ? "text-darkBlue font-semibold"
                      : "text-gray-600 font-light"
                  }`}
                >
                  Browse
                </div>
              </div>
            </li>
          </ul>

          {/* Divider */}
          <hr className="my-4 md:min-w-full border" />
          <ul className="md:flex-col md:min-w-full flex flex-col list-none mb-10 mt-5 ">
            <li className={`${path === '/students/profile' ? "text-darkBlue font-semibold" : "text-gray-400 font-light"} items-center cursor-pointer mb-5`} onClick = {() => router.push("/students/profile")}>
              <div className="flex flex-row justify-start items-center">
                <CgProfile  />
                <div className="text-sm  ml-5">
                  Profile
                </div>
              </div>
            </li>


            <li className={`${path === '/students/settings' ? "text-darkBlue font-semibold" : "text-gray-400 font-light"} items-center cursor-pointer mb-5`} onClick={() => router.push('/students/settings') }>
              <div className="flex flex-row justify-start items-center">
                <IoSettingsOutline  />
                <div className="text-sm  ml-5">
                Settings
                </div>
              </div>
            </li>

            {/* <li className="items-center cursor-pointer mb-5" onClick={() => router.push('/students/settings') }>
              <div className="flex flex-row justify-start items-center">
                <IoSettingsOutline color="gray" />
                <div className="text-sm text-gray-600 font-light ml-5">
                  Settings
                </div>
              </div>
            </li> */}

            <li className="items-center cursor-pointer">
              <div
                className="flex flex-row justify-start items-center"
                onClick={handleLogout}
              >
                <IoLogOutOutline color="gray" />
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

export default Sidebar;
