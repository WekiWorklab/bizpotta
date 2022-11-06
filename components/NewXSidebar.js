import React from "react";
import { useRouter } from "next/router";

export default function NewXSidebar({
  show,
  setShow,
  slideIn,
  setSlideIn,
  courseId,
}) {
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
      {/* shadow-xl */}
      <nav
        className={`${
          slideIn ? "SideBar" : "NoSideBar"
        } fixed md:hidden top-0 w-[300px] pt-14 px-6 bg-gray-50 rounded-r-[20px] shadow-md flex-wrap items-center justify-between h-full z-[9999]`}
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
          <ul className="flex flex-col gap-y-3 mt-10">
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
              <div className="text-sm text-gray-600 font-light">Overview</div>
            </li>

            {/* <li
              className={`flex  justify-start items-center h-[40px] ${
                router.asPath === "/students/grades"
                  ? "border-r-4 border-darkBlue"
                  : ""
              } cursor-pointer mb-2`}
              onClick={() => {
                router.push("/students/grades");
              }}
            >
              <div className="text-sm text-gray-600 font-light ">Grades</div>
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

            <li
              className={`flex  justify-start items-center h-[40px] ${
                route_path.includes("/students/quiz")
                  ? "border-r-4 border-darkBlue"
                  : ""
              } cursor-pointer mb-2`}
              onClick={() => {
                handleQuizClick();
              }}
            >
              <div className="text-sm text-gray-600 font-light ">Quiz</div>
            </li>

            <li
              className={`flex  justify-start items-center h-[40px] ${
                route_path.includes("/students/message")
                  ? "border-r-4 border-darkBlue"
                  : ""
              } cursor-pointer mb-2`}
              onClick={() => {
                handleClick("message");
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
                handleClick("resources");
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
        {/* </div> */}
      </nav>
    </>
  );
}
