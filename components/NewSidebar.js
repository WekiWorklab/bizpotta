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

  const handleQuizClick = () => {
    if (route_path.includes("/students/quiz")) {
      // if the student is on the quiz/[id]/week/[weekid] page Bring up a modal that asks the student if he or she wants to go to the quiz/[id] page
      //however if the student is on the quiz/[id] page do nothing
    } else {
      router.push({
        pathname: "/students/quiz/[id]",
        query: { id: courseId },
      });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-[200px] pt-[140px] px-6 bg-white hidden md:flex flex-row flex-wrap  justify-between h-full z-10 ">
        <div className="w-full ">
          <ul className="flex flex-col gap-y-3">
            <Link href={`/students/courses/${courseId}`}>
              <li   className={`flex  justify-start items-center h-[40px] ${
                route_path.includes("/students/courses")
                  ? "border-r-4 border-darkBlue"
                  : ""
              } cursor-pointer mb-2`}>
              <div className="text-sm text-gray-600 font-light ">Overview</div>
              </li>
            </Link>


            <Link href={`/students/quiz/${courseId}`}>
              <li className={`flex  justify-start items-center h-[40px] ${
                route_path.includes("/students/quiz")
                  ? "border-r-4 border-darkBlue"
                  : ""
              } cursor-pointer mb-2`}>
                <div className="flex flex-row justify-start items-center">
                  <div className="text-sm text-gray-600 font-light ">Quiz</div>
                </div>
              </li>
            </Link>

            <Link href={`/students/assignments/${courseId}`}>
              <li className={`flex justify-start items-center h-[40px] ${
                route_path.includes("/students/assignments")
                  ? "border-r-4 border-darkBlue"
                  : ""
              } cursor-pointer mb-2`}>
                <div className="flex flex-row justify-start items-center">
                  <div className="text-sm text-gray-600 font-light ">Assignments</div>
                </div>
              </li>
            </Link>

            <Link href={`/students/notes/${courseId}`}>
              <li className={`flex  justify-start items-center h-[40px] ${
                route_path.includes("/students/notes")
                  ? "border-r-4 border-darkBlue"
                  : ""
              } cursor-pointer mb-2`}>
                <div className="flex flex-row justify-start items-center">
                  <div className="text-sm text-gray-600 font-light ">Notes</div>
                </div>
              </li>
            </Link>



            <Link href={`/students/message/${courseId}`}
            >
              <li  className={`flex  justify-start items-center h-[40px] ${
                route_path.includes("/students/message")
                  ? "border-r-4 border-darkBlue"
                  : ""
              } cursor-pointer mb-2`}>
              <div className="flex flex-row justify-start items-center">
                <div className="text-sm text-gray-600 font-light ">
                  Messages
                </div>
              </div>

              </li>
            </Link>

              
            <Link href={`/students/resources/${courseId}`}
            >
              <li  className={`flex  justify-start items-center h-[40px] ${
                route_path.includes("/students/resources")
                  ? "border-r-4 border-darkBlue"
                  : ""
              } cursor-pointer mb-2`}>
              <div className="flex flex-row justify-start items-center">
                <div className="text-sm text-gray-600 font-light ">
                  Resources
                </div>
              </div>

              </li>
            </Link>

          </ul>
        </div>
      </nav>
    </>
  );
}

export default NewSidebar;
