////////
import { useRouter } from "next/router";
import React from "react";

////////
import { IoLogOutOutline } from "react-icons/io5";
import { MdOutlineLiveTv } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  CreatorAffiliate,
  CreatorCommunity,
  CreatorCourses,
  CreatorDashboard,
  CreatorEngagement,
  CreatorMarketInsight,
  CreatorSettings,
} from "../../../public";
import { logout, reset } from "../../../store/authSlice";

function XSidebar({ show, setShow, slideIn, setSlideIn }) {
  const [collapseShow, setCollapseShow] = React.useState("hidden");

  const { user } = useSelector((state) => state.auth);

  const router = useRouter();
  const path = router.asPath;

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    router.push("/auth/login");
  };

  return (
    <>
      <nav
        className={`${
          slideIn ? "SideBar" : "NoSideBar"
        } fixed md:hidden top-0  w-[350px] pt-6 px-6 bg-gray-50 rounded-r-[20px] shadow-md flex-wrap items-center justify-between h-screen max-h-screen z-[9999] overflow-y-scroll no-scrollbar`}>
        <div className='relative min-h-screen w-full'>
          <div
            className='absolute top-[0px] right-[0px] cursor-pointer'
            onClick={() => {
              setShow(false);
              setSlideIn(false);
            }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-[20px] w-[20px]'
              fill='none'
              viewBox='0 0 20 20'
              stroke='#999999'
              strokeWidth={2}>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </div>

          <div className='w-full '>
            <ul className='md:flex-col md:min-w-full flex flex-col list-none  mt-10 '>
              <li
                className='items-center cursor-pointer  mb-5'
                onClick={() => router.push("/creators")}>
                <div className='flex flex-row justify-start items-center'>
                  <CreatorDashboard
                    color={path === "/creators" ? "#121F4C" : "#9CA3AF"}
                  />
                  <div
                    className={`${
                      path === "/creators"
                        ? "text-darkBlue font-semibold"
                        : "text-gray-400 font-light"
                    } text-sm  ml-5`}>
                    Manage account
                  </div>
                </div>
              </li>

              <li
                className='items-center cursor-pointer  mb-5'
                onClick={() => router.push("/creators/courses")}>
                <div className='flex flex-row justify-start items-center'>
                  <CreatorCourses
                    color={path === "/creators/courses" ? "#121F4C" : "#9CA3AF"}
                  />
                  <div
                    className={`${
                      path === "/creators/courses"
                        ? "text-darkBlue font-semibold"
                        : "text-gray-400 font-light"
                    } text-sm hover:text-darkBlue ml-5`}>
                    Courses
                  </div>
                </div>
              </li>

              {user?.roles_id === 3 && (
                <li
                  className='items-center cursor-pointer  mb-5'
                  onClick={() => router.push("/creators/live-session")}>
                  <div className='flex flex-row justify-start items-center'>
                    <MdOutlineLiveTv
                      color={
                        path === "/creators/live-session" ||
                        path === "/creators/live-session/new"
                          ? "#121F4C"
                          : "#9CA3AF"
                      }
                    />
                    <div
                      className={`${
                        path === "/creators/live-session"
                          ? "text-darkBlue font-semibold"
                          : "text-gray-400 font-light"
                      } text-sm ml-5 hover:text-darkBlue`}>
                      Live-Session
                    </div>
                  </div>
                </li>
              )}

              <li
                className='items-center cursor-pointer mb-5'
                onClick={() => router.push("/creators/market-insight")}>
                <div className='flex flex-row justify-start items-center'>
                  <CreatorMarketInsight
                    color={
                      path === "/creators/market-insight"
                        ? "#121F4C"
                        : "#9CA3AF"
                    }
                  />
                  <div
                    className={`${
                      path === "/creators/market-insight"
                        ? "text-darkBlue font-semibold"
                        : "text-gray-400 font-light"
                    } text-sm ml-5 hover:text-darkBlue`}>
                    Market Insight
                  </div>
                </div>
              </li>

              <li
                className='items-center cursor-pointer mb-5'
                onClick={() => router.push("/creators/community")}>
                <div className='flex flex-row justify-start items-center'>
                  <CreatorCommunity
                    color={
                      path === "/creators/community" ? "#121F4C" : "#9CA3AF"
                    }
                  />
                  <div
                    className={`${
                      path === "/creators/community"
                        ? "text-darkBlue font-semibold"
                        : "text-gray-400 font-light"
                    } text-sm ml-5 hover:text-darkBlue`}>
                    Community
                  </div>
                </div>
              </li>
            </ul>

            <ul className='md:flex-col md:min-w-full flex flex-col list-none  mt-5 '>
              <li
                className='items-center cursor-pointer mb-[10px]'
                onClick={() => router.push("/creators/messages")}>
                <div className='flex flex-row justify-start items-center'>
                  <CreatorEngagement
                    color={
                      path === "/creators/messages" ? "#121F4C" : "#9CA3AF"
                    }
                  />
                  <div
                    className={`${
                      path === "/creators/messages"
                        ? "text-darkBlue font-semibold"
                        : "text-gray-400 font-light"
                    } text-sm   ml-5 hover:text-darkBlue`}>
                    Course Engagement
                  </div>
                </div>
              </li>

              <li
                className='items-center cursor-pointer mb-[10px] '
                onClick={() => router.push("/creators/messages")}>
                <div
                  className={`${
                    path === "/creators/messages"
                      ? "text-darkBlue font-semibold"
                      : "text-gray-400 font-light"
                  } text-sm flex flex-row justify-between items-center px-[35px] `}>
                  <div className=''>Message</div>
                  <p className=''>{0}</p>
                </div>
              </li>

              {/* <li
                className="items-center cursor-pointer mb-[10px] "
                onClick={() => router.push("/creators/messages")}
              >
                <div
                  className={`${
                    path === "/creators/messages"
                      ? "text-darkBlue font-semibold"
                      : "text-gray-400 font-light"
                  } text-sm flex flex-row justify-between items-center px-[35px] `}
                >
                  <div className="">Annoucement</div>
                  <p className="">2</p>
                </div>
              </li> */}

              {/* <li
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
              </li> */}

              {/* <li
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
              </li> */}
            </ul>

            <ul className='md:flex-col md:min-w-full flex flex-col list-none mb-10 mt-5 '>
              <li
                className='items-center cursor-pointer mb-5'
                onClick={() => router.push("/creators/affiliate")}>
                <div className='flex flex-row justify-start items-center'>
                  <CreatorAffiliate
                    color={
                      path === "/creators/affiliate" ? "#121F4C" : "#9CA3AF"
                    }
                  />
                  <div
                    className={`${
                      path === "/creators/affiliate"
                        ? "text-darkBlue font-semibold"
                        : "text-gray-400 font-light"
                    } text-sm   ml-5 hover:text-darkBlue`}>
                    Affiliate
                  </div>
                </div>
              </li>

              <li
                className='items-center cursor-pointer mb-5'
                onClick={() => router.push("/creators/settings")}>
                <div className='flex flex-row justify-start items-center'>
                  <CreatorSettings
                    color={path === "/creators/settings" ? "#121F4C" : "gray"}
                  />
                  <div
                    className={`${
                      path === "/creators/settings"
                        ? "text-darkBlue font-semibold"
                        : "text-gray-400 font-light"
                    } text-sm   ml-5 hover:text-darkBlue`}>
                    Settings
                  </div>
                </div>
              </li>

              <li className='items-center cursor-pointer'>
                <div
                  className='flex flex-row justify-start items-center'
                  onClick={handleLogout}>
                  <IoLogOutOutline color='gray' />
                  <div className='text-sm text-gray-600 font-light ml-5'>
                    Log-out
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default XSidebar;
