////////
import React, { memo, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

////////
import { MdOutlineDashboard, MdOutlineLiveTv, MdOutlineSchool } from "react-icons/md";
import { HiOutlineBookOpen } from "react-icons/hi";
import { AiOutlineProject } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

function XSidebar({ show, setShow, slideIn, setSlideIn }) {
  const [collapseShow, setCollapseShow] = React.useState("hidden");

  const { user } = useSelector((state) => state.auth);

  const router = useRouter();
  const path = router.asPath;

  return (
    <>
      <nav
        className={`${
          slideIn ? "SideBar" : "NoSideBar"
        } fixed md:hidden top-0  w-[350px] pt-14 px-6 bg-gray-50 rounded-r-[20px] shadow-md flex-wrap items-center justify-between h-full z-[9999]`}
      >
        <div
          className="absolute top-[40px] right-[20px] cursor-pointer"
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
          <ul className="md:flex-col md:min-w-full flex flex-col list-none  mt-10 ">
            <li
              className="items-center cursor-pointer  mb-5"
              onClick={() => router.push("/creators")}
            >
              <div className="flex flex-row justify-start items-center">
                <MdOutlineDashboard
                  color={path === "/creators" ? "#121F4C" : "gray"}
                />
                <div
                  className={`${
                    path === "/creators"
                      ? "text-darkBlue font-semibold"
                      : "text-gray-400 font-light"
                  } text-sm  ml-5`}
                >
                  Manage account
                </div>
              </div>
            </li>

            <li
              className="items-center cursor-pointer  mb-5"
              onClick={() => router.push("/creators/courses")}
            >
              <div className="flex flex-row justify-start items-center">
                <HiOutlineBookOpen
                  color={path === "/students/courses" ? "#121F4C" : "gray"}
                />
                <div
                  className={`${
                    path === "/students/courses"
                      ? "text-darkBlue font-semibold"
                      : "text-gray-400 font-light"
                  } text-sm   ml-5`}
                >
                  Courses
                </div>
              </div>
            </li>

           { user?.data.id === 1 && <li
              className="items-center cursor-pointer  mb-5"
              onClick={() => router.push("/creators/live-session")}
            >
              <div className="flex flex-row justify-start items-center">
                <MdOutlineLiveTv
                  color={path === "/creators/live-session" ? "#121F4C" : "gray"}
                />
                <div
                  className={`${
                    path === "/creators/live-session"
                      ? "text-darkBlue font-semibold"
                      : "text-gray-400 font-light"
                  } text-sm ml-5 hover:text-darkBlue`}
                >
                  Live-Session
                </div>
              </div>
            </li>}

            <li className="items-center cursor-pointer mb-5">
              <div className="flex flex-row justify-start items-center">
                <MdOutlineSchool color="gray" />
                <div className="text-sm text-gray-600 font-light ml-5">
                  Market Insight
                </div>
              </div>
            </li>

            <li className="items-center cursor-pointer mb-5">
              <div className="flex flex-row justify-start items-center">
                <MdOutlineSchool color="gray" />
                <div className="text-sm text-gray-600 font-light ml-5">
                  Community
                </div>
              </div>
            </li>
          </ul>

          <ul className="md:flex-col md:min-w-full flex flex-col list-none  mt-5 ">
            <li
              className="items-center cursor-pointer mb-[10px]"
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
                  } text-sm   ml-5`}
                >
                  Course Engagement
                </div>
              </div>
            </li>

            <li
              className="items-center cursor-pointer mb-[10px] "
              onClick={() => router.push("/students/all-projects")}
            >
              <div
                className={`${
                  path === "/students/all-projects"
                    ? "text-darkBlue font-semibold"
                    : "text-gray-400 font-light"
                } text-sm flex flex-row justify-between items-center px-[35px] `}
              >
                <div className="">Message</div>
                <p className="">2</p>
              </div>
            </li>

            <li
              className="items-center cursor-pointer mb-[10px] "
              onClick={() => router.push("/students/all-projects")}
            >
              <div
                className={`${
                  path === "/students/all-projects"
                    ? "text-darkBlue font-semibold"
                    : "text-gray-400 font-light"
                } text-sm flex flex-row justify-between items-center px-[35px] `}
              >
                <div className="">Message</div>
                <p className="">2</p>
              </div>
            </li>

            <li
              className="items-center cursor-pointer mb-[10px] "
              onClick={() => router.push("/students/all-projects")}
            >
              <div
                className={`${
                  path === "/students/all-projects"
                    ? "text-darkBlue font-semibold"
                    : "text-gray-400 font-light"
                } text-sm flex flex-row justify-between items-center px-[35px] `}
              >
                <div className="">Message</div>
                <p className="">2</p>
              </div>
            </li>

            <li
              className="items-center cursor-pointer mb-5 "
              onClick={() => router.push("/students/all-projects")}
            >
              <div
                className={`${
                  path === "/students/all-projects"
                    ? "text-darkBlue font-semibold"
                    : "text-gray-400 font-light"
                } text-sm flex flex-row justify-between items-center px-[35px] `}
              >
                <div className="">Message</div>
                <p className="">2</p>
              </div>
            </li>
          </ul>

          <ul className="md:flex-col md:min-w-full flex flex-col list-none mb-10 mt-5 ">
            <li className="items-center cursor-pointer mb-5">
              <div className="flex flex-row justify-start items-center">
                <CgProfile color="gray" />
                <div className="text-sm text-gray-600 font-light ml-5">
                  Profile
                </div>
              </div>
            </li>

            <li
              className="items-center cursor-pointer mb-5"
              onClick={() => router.push("/creators/settings")}
            >
              <div className="flex flex-row justify-start items-center">
                <IoSettingsOutline color="gray" />
                <div className="text-sm text-gray-600 font-light ml-5">
                  Settings
                </div>
              </div>
            </li>

            <li className="items-center cursor-pointer">
              <div className="flex flex-row justify-start items-center">
                <IoLogOutOutline color="gray" />
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

export default XSidebar;
