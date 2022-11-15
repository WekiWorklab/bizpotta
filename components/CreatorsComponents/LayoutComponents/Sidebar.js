////////
import React, { memo, useEffect, useState } from "react";
import { useRouter } from "next/router";

////////
import {
  MdOutlineDashboard,
  MdOutlineLiveTv,
  MdOutlineSchool,
} from "react-icons/md";
import { HiOutlineBookOpen } from "react-icons/hi";
import { AiOutlineProject } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { AffiliateSVG, CreatorAffiliate, CreatorCommunity, CreatorCourses, CreatorDashboard, CreatorEngagement, CreatorMarketInsight, CreatorSettings } from "../../../public";
import { logout } from "../../../store/authSlice";

function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");

  const { user } = useSelector((state) => state.auth);

  const router = useRouter();
  const path = router.asPath;

  const dispatch = useDispatch();

  return (
    <>
      <nav className="fixed top-0 left-0 w-[250px] pt-[140px] px-6 bg-white hidden md:flex flex-row flex-wrap  justify-between h-full z-10 ">
        <div className="w-full ">
          <ul className="md:flex-col md:min-w-full flex flex-col list-none">
            <li
              className="items-center cursor-pointer  mb-5"
              onClick={() => router.push("/creators")}
            >
              <div className="flex flex-row justify-start items-center">
                <CreatorDashboard
                  color={path === "/creators" ? "#121F4C" : "#9CA3AF"}
                />
                <div
                  className={`${
                    path === "/creators"
                      ? "text-darkBlue font-semibold"
                      : "text-gray-400 font-light"
                  } text-sm  ml-5 hover:text-darkBlue`}
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
                <CreatorCourses
                  color={path === "/creators/courses" ?  "#121F4C" : "#9CA3AF"}
                />
                <div
                  className={`${
                    path === "/creators/courses"
                      ? "text-darkBlue font-semibold"
                      : "text-gray-400 font-light"
                  } text-sm ml-5 hover:text-darkBlue`}
                >
                  Courses
                </div>
              </div>
            </li>

            {user?.roles_id === 3 && (
                <li
                  className="items-center cursor-pointer mb-5"
                  onClick={() => router.push("/creators/live-session")}
                >
                  <div className="flex flex-row justify-start items-center">
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
                        path === "/creators/live-session" ||
                        path === "/creators/live-session/new"
                          ? "text-darkBlue font-semibold"
                          : "text-gray-400 font-light"
                      } text-sm ml-5 hover:text-darkBlue`}
                    >
                      Live-Session
                    </div>
                  </div>
                </li>
              )}

            <li
              className="items-center cursor-pointer mb-5"
              onClick={() => router.push("/creators/market-insight")}
            >
              <div className="flex flex-row justify-start items-center">
                {/* <MdOutlineSchool color='gray' /> */}
                <CreatorMarketInsight
                  color={
                    path === "/creators/market-insight" ? "#121F4C" : "#9CA3AF"
                  }
                />
                <div
                  className={`${
                    path === "/creators/market-insight"
                      ? "text-darkBlue font-semibold"
                      : "text-gray-400 font-light"
                  } text-sm ml-5 hover:text-darkBlue`}
                >
                  Market Insight
                </div>
              </div>
            </li>

            <li
              className="items-center cursor-pointer mb-5"
              onClick={() => router.push("/creators/community")}
            >
              <div className="flex flex-row justify-start items-center">
                <CreatorCommunity color={
                    path === "/creators/community" ? "#121F4C" : "#9CA3AF"
                  } />
                <div
                  className={`${
                    path === "/creators/community"
                      ? "text-darkBlue font-semibold"
                      : "text-gray-400 font-light"
                  } text-sm ml-5 hover:text-darkBlue`}
                >
                  Community
                </div>
              </div>
            </li>
          </ul>

          <ul className="md:flex-col md:min-w-full flex flex-col list-none  mt-5 ">
            <li
              className="items-center cursor-pointer mb-[10px]"
              onClick={() => router.push("/creators/messages")}
            >
              <div className="flex flex-row justify-start items-center">
                <CreatorEngagement
                  color={path === "/creators/messages" ? "#121F4C" : "#9CA3AF"}
                />
                <div
                  className={`${
                    path === "/creators/messages"
                      ? "text-darkBlue font-semibold"
                      : "text-gray-400 font-light"
                  } text-sm   ml-5 hover:text-darkBlue`}
                >
                  Course Engagement
                </div>
              </div>
            </li>

            <li
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
                <div className="">Message</div>
                <p className="">2</p>
              </div>
            </li>

            <li
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
            </li>
          </ul>

          <ul className="md:flex-col md:min-w-full flex flex-col list-none mb-10 mt-5 ">
            <li
              className="items-center cursor-pointer mb-5"
              onClick={() => router.push("/creators/affiliate")}
            >
              <div className="flex flex-row justify-start items-center">
                <CreatorAffiliate
                  color={path === "/creators/affiliate" ? "#121F4C" : "#9CA3AF"}
                />

                <div
                  className={`${
                    path === "/creators/affiliate"
                      ? "text-darkBlue font-semibold"
                      : "text-gray-400 font-light"
                  } text-sm   ml-5 hover:text-darkBlue`}
                >
                  Affiliate
                </div>
              </div>
            </li>

            <li
              className="items-center cursor-pointer mb-5"
              onClick={() => router.push("/creators/settings")}
            >
              <div className="flex flex-row justify-start items-center">
                <CreatorSettings
                  color={path === "/creators/settings" ? "#121F4C" : "gray"}
                />
                <div
                  className={`${
                    path === "/creators/settings"
                      ? "text-darkBlue font-semibold"
                      : "text-gray-400 font-light"
                  } text-sm   ml-5 hover:text-darkBlue`}
                >
                  Settings
                </div>
              </div>
            </li>

            <li
              className="items-center cursor-pointer"
              onClick={() => {
                dispatch(logout());
              }}
            >
              <div className="flex flex-row justify-start items-center">
                <IoLogOutOutline color="gray" />
                <div className="text-gray-400 font-light text-sm ml-5">
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

export default Sidebar;
