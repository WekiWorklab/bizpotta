import React, { memo, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdOutlineDashboard, MdOutlineSchool } from "react-icons/md";
import { HiOutlineBookOpen } from "react-icons/hi";
import { AiOutlineProject } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

function NewSidebar({ courseId }) {
  const [select, setSelect] = useState("");

  const router = useRouter();
  const route_path = router.asPath;

  const handleClick = (section) => {
    router.push({
      pathname: `/students/${section}/[id]`,
      query: { id: courseId },
    });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-[200px] pt-[140px] px-6 bg-white hidden md:flex flex-row flex-wrap  justify-between h-full z-10 ">
        <div className="w-full ">
          <ul className="flex flex-col gap-y-3">
            <li
              className={`flex  justify-start items-center h-[40px] ${
                route_path.includes("/students/courses")
                  ? "border-r-4 border-darkBlue"
                  : ""
              } cursor-pointer mb-2`}
              onClick={() => {
                handleClick("courses");
              }}
            >
              <div className="text-sm text-gray-600 font-light ">Overview</div>
            </li>

            {/* <li className={`flex  justify-start items-center h-[40px] ${router.asPath === '/students/grades' ? "border-r-4 border-darkBlue" : ""} cursor-pointer mb-2`} onClick = {() => {router.push('/students/grades')}}>
                <div className="text-sm text-gray-600 font-light ">
                Grades
                </div>
            </li> */}

            <li
              className={`flex  justify-start items-center h-[40px] ${
                route_path.includes("/students/notes")
                  ? "border-r-4 border-darkBlue"
                  : ""
              } cursor-pointer mb-2`}
              onClick={() => {
                handleClick("notes");
              }}
            >
              <div className="text-sm text-gray-600 font-light ">Notes</div>
            </li>

            {/* <li className={`flex  justify-start items-center h-[40px] ${router.asPath === '/students/discussion' ? "border-r-4 border-darkBlue" : ""} cursor-pointer mb-2`} onClick = {() => { router.push('/students/discussion')}}>
                <div className="text-sm text-gray-600 font-light ">
                Discussion Forums
                </div>
            </li> */}

            {/* <li className={`flex  justify-start items-center h-[40px] ${router.asPath === '/students/live-session' ? "border-r-4 border-darkBlue" : ""} cursor-pointer mb-2`} onClick = {() => { router.push('/students/live-session')}}>
                <div  className="flex flex-row justify-start items-center">
                <div className="text-sm text-gray-600 font-light ">
                    Live sessions
                </div>
                </div>
            </li> */}

            <li
              className={`flex  justify-start items-center h-[40px] ${
                route_path.includes("/students/quiz")
                  ? "border-r-4 border-darkBlue"
                  : ""
              } cursor-pointer mb-2`}
              onClick={() => {
                handleClick("quiz");
              }}
            >
              <div className="flex flex-row justify-start items-center">
                <div className="text-sm text-gray-600 font-light ">Quiz</div>
              </div>
            </li>

            <li
              className={`flex  justify-start items-center h-[40px] ${
                route_path.includes("/students/message")
                  ? "border-r-4 border-darkBlue"
                  : ""
              } cursor-pointer mb-2`}
              onClick={() => {
                router.push("/students/message");
              }}
            >
              <div className="flex flex-row justify-start items-center">
                <div className="text-sm text-gray-600 font-light ">
                  Messages
                </div>
              </div>
            </li>

            <li
              className={`flex  justify-start items-center h-[40px] ${
                route_path.includes("/students/resources")
                  ? "border-r-4 border-darkBlue"
                  : ""
              } cursor-pointer mb-2`}
              onClick={() => {
                router.push("/students/resources");
              }}
            >
              <div className="flex flex-row justify-start items-center">
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

export default NewSidebar;
