import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  MdOutlineDashboard,
  MdOutlineSchool,
  MdOutlineCancel,
  MdOutlineLiveTv,
} from "react-icons/md";
import { HiOutlineBookOpen } from "react-icons/hi";
import { AiOutlineProject, AiOutlineSave } from "react-icons/ai";

import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { VscChevronRight } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { logout, reset } from "../store/authSlice";

export default function XSidebar({ show, setShow, slideIn, setSlideIn }) {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const dispatch = useDispatch();

  const router = useRouter();

  const path = router.asPath;

  const handleClick = (path) => {
    setShow(false);
    router.push(path);
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    router.push("/auth/login");
  };

  return (
    <>
      {/* shadow-xl */}
      <nav
        className={`${
          slideIn ? "SideBar" : "NoSideBar"
        }  fixed md:hidden top-0  w-[350px] pt-6 px-6 bg-gray-50 rounded-r-[20px] shadow-md flex-wrap items-center justify-between h-screen max-h-screen z-[9999] overflow-y-scroll no-scrollbar`}
      >
        <div className="relative min-h-screen w-full">
          <div
            className="absolute top-[0px] right-[0px] cursor-pointer"
            onClick={() => {
              setShow(false);
              setSlideIn(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[20px] w-[20px]"
              fill="none"
              viewBox="0 0 20 20"
              stroke="#999999"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          <div className="w-full ">
            <ul className="md:flex-col md:min-w-full flex flex-col list-none mb-8 mt-5 ">
              <li
                className="flex items-center cursor-pointer h-[45px] mb-2"
                onClick={() => handleClick("/students")}
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
                    }text-sm  w-[230px] ml-5`}
                  >
                    Dashboard
                  </div>
                  <VscChevronRight color="#999999" />
                </div>
              </li>

              <li
                className="items-center cursor-pointer mb-2"
                onClick={() => handleClick("/students/courses/vocational")}
              >
                <div className="flex items-center h-[45px]">
                  <HiOutlineBookOpen
                    color={
                      path === "/students/courses/vocational"
                        ? "#121F4C"
                        : "gray"
                    }
                  />
                  <div
                    className={`${
                      path === "/students/courses/vocational"
                        ? "text-darkBlue font-semibold"
                        : "text-gray-400 font-light"
                    }text-sm w-[230px] ml-5`}
                  >
                    Courses
                  </div>
                  <VscChevronRight color="#999999" />
                </div>
              </li>

              <li
                className="items-center cursor-pointer mb-2"
                onClick={() => router.push("/students/live-session")}
              >
                <div
                  className={` ${
                    path.includes("/students/live-session")
                      ? "text-darkBlue font-semibold"
                      : "text-gray-600 font-light"
                  } flex items-center h-[45px]`}
                >
                  <MdOutlineLiveTv />
                  <div className="text-sm w-[230px]  ml-5">Live Session</div>
                  <VscChevronRight />
                </div>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full border" />
            {/* Heading */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none mb-8 mt-5">
              <li
                className="items-center cursor-pointer mb-2"
                onClick={() => router.push("/students/all-projects")}
              >
                <div className="flex items-center h-[45px]">
                  <AiOutlineProject
                    color={
                      path === "/students/all-projects" ? "#121F4C" : "gray"
                    }
                  />
                  <div
                    className={`${
                      path === "/students/all-projects"
                        ? "text-darkBlue font-semibold"
                        : "text-gray-400 font-light"
                    }text-sm  w-[230px] ml-5`}
                  >
                    Project
                  </div>
                  <VscChevronRight color="#999999" />
                </div>
              </li>

              <li
                className="items-center cursor-pointer mb-2"
                onClick={() => router.push("/students/student")}
              >
                <div className="flex items-center h-[45px]">
                  <AiOutlineProject
                    color={path === "/students/student" ? "#121F4C" : "gray"}
                  />
                  <div
                    className={`${
                      path === "/students/student"
                        ? "text-darkBlue font-semibold"
                        : "text-gray-400 font-light"
                    } text-sm w-[230px] ml-5`}
                  >
                    My Projects
                  </div>
                  <VscChevronRight color="#999999" />
                </div>
              </li>

              <li
                className="items-center cursor-pointer mb-2"
                onClick={() => router.push("/students/student/projects")}
              >
                <div className="flex items-center h-[45px]">
                  <AiOutlineSave
                    color={
                      path === "/students/student/projects" ? "#121F4C" : "gray"
                    }
                  />
                  <div
                    className={`${
                      path === "/students/student/projects"
                        ? "text-darkBlue font-semibold"
                        : "text-gray-400 font-light"
                    } text-sm w-[230px] ml-5`}
                  >
                    Browse
                  </div>
                  <VscChevronRight color="#999999" />
                </div>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full border" />
            <ul className="md:flex-col md:min-w-full flex flex-col list-none mb-10 mt-5 ">
              <li
                className={` ${
                  path === "/students/profile"
                    ? "text-darkBlue font-semibold"
                    : "text-gray-600 font-light"
                } items-center cursor-pointer mb-2`}
                onClick={() => router.push("/students/profile")}
              >
                <div className="flex items-center h-[45px]">
                  <CgProfile />
                  <div className="text-sm w-[230px] ml-5">Profile</div>
                  <VscChevronRight />
                </div>
              </li>

              <li
                className={` ${
                  path === "/students/settings"
                    ? "text-darkBlue font-semibold"
                    : "text-gray-600 font-light"
                } items-center cursor-pointer mb-2`}
                onClick={() => router.push("/students/settings")}
              >
                <div className="flex items-center h-[45px]">
                  <IoSettingsOutline />
                  <div className="text-sm w-[230px] ml-5">Settings</div>
                  <VscChevronRight />
                </div>
              </li>

              <li className="items-center cursor-pointer mb-2">
                <div className="flex items-center h-[45px]" onClick={handleLogout}>
                  <IoLogOutOutline color="gray" />
                  <div className="text-sm text-gray-600 w-[230px] font-light ml-5">
                    LogOut
                  </div>
                  <VscChevronRight color="#999999" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
