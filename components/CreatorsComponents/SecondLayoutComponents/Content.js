import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineInbox, AiOutlineLeft, AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdOutlineArrowUpward } from "react-icons/md";
import { CoursesIcon, EnrollmentIcon, Filter, IncomeIcon, NoActivities } from "../../../public";
import ActiveCourses from "./ActiveCourses";
import DeactivateCourses from "./DeactivateCourses";
import PublishedCourses from "./PublishedCourses";
import creatorService from "../../../services/CreatorService";

const Content = () => {
  const [clickedCourse, setClickedCourse] = useState(true);
  const [select, setSelected] = useState("Published courses");

  return <MainContent select={select} setSelected={setSelected} setClickedCourse={setClickedCourse} />;
};

export default Content;

const MainContent = ({ select, setSelected, setClickedCourse }) => {
  const router = useRouter();

  const fetchCourses = async () => {
    const data = await creatorService.getCourses();
    return data?.data;
  };

  const { data } = useQuery(["courses"], fetchCourses);

  return (
    <div className='relative w-full h-full bg-[#FEFEFE] flex flex-col mt-[90px] md:mt-[120px] md:justify-center items-start md:translate-x-[250px] md:w-[calc(100%-250px)] px-2 xl:px-8 py-6 text-darkGray'>
      <div
        className='w-[165px] h-[40px] rounded-md shadow-md flex justify-center items-center gap-x-2 self-end cursor-pointer'
        onClick={() => {
          router.push("/creators/courses/create");
        }}
      >
        <IoAddCircleOutline className='text-[22px]' />
        <p className='text-[13px]'>Create a new course</p>
      </div>

      <div className='w-full flex flex-row flex-wrap justify-center gap-3 mt-10 sm:gap-8 xl:gap-0 xl:justify-between '>
        <NewDashBoardCard select={select} title='Published courses' setSelected={setSelected} count={data?.courses_count} />
        <NewDashBoardCard select={select} title='Active courses' setSelected={setSelected} count={data?.activeCourses_count} />
        <NewDashBoardCard select={select} title='Deactivated courses' setSelected={setSelected} count={data?.inactivateCourses_count} />
      </div>

      <div className='mt-6 lg:mt-8 w-full'>
        <RenderTable
          select={select}
          setClickedCourse={setClickedCourse}
          allCourses={data?.courses}
          activeCourses={data?.activeCourses}
          deactivateCourses={data?.inactivateCourses}
        />
      </div>
    </div>
  );
};

const NewDashBoardCard = ({ select, title, setSelected, count }) => {
  return (
    <div
      className={`w-[150px] sm:w-[200px] lg:w-[320px] border-[1px] border-[#858585] border-opacity-[0.25] ${
        select === title ? "bg-[#F3F4F6]" : "bg-[#FDFDFD]"
      } dashboard-card-shadow cursor-pointer rounded-md p-2 lg:p-8`}
      onClick={() => setSelected(title)}
    >
      <div className='flex flex-row justify-between items-center mb-4 font-bold'>
        {/* <AiOutlineInbox size = {24} color='#787878'/> */}
        {title === "Published courses" ? <IncomeIcon /> : title === "Active courses" ? <CoursesIcon /> : <EnrollmentIcon />}
        <BsChevronDown size={14} color='#787878' />
      </div>

      <p className='text-bizpotta-green mb-2 font-bold'>{title}</p>

      <div className='font-[600] text-[14px] lg:text-base text-bizpotta-gray-700'>{count}</div>
    </div>
  );
};

const RenderTable = ({ select, allCourses, activeCourses, deactivateCourses }) => {
  switch (select) {
    case "Published courses":
      return allCourses?.length > 0 ? (
        <PublishedCourses allCourses={allCourses} />
      ) : (
        <div className='flex flex-col mx-auto'>
          <div className='flex flex-col mx-auto'>
            <div className='w-full h-[450px] flex flex-col justify-center items-center'>
              <NoActivities />
              <p className='text-[#787878] text-[14px] font-bold mt-4'>No courses yet</p>
            </div>
          </div>
        </div>
      );
    case "Active courses":
      return activeCourses?.length > 0 ? (
        <ActiveCourses activeCourses={activeCourses} />
      ) : (
        <div className='flex flex-col mx-auto'>
          <div className='flex flex-col mx-auto'>
            <div className='w-full h-[450px] flex flex-col justify-center items-center'>
              <NoActivities />
              <p className='text-[#787878] text-[14px] font-bold mt-4'>No courses yet</p>
            </div>
          </div>
        </div>
      );
    case "Deactivated courses":
      return deactivateCourses?.length > 0 ? (
        <DeactivateCourses deactivateCourses={deactivateCourses} />
      ) : (
        <div className='flex flex-col mx-auto'>
          <div className='flex flex-col mx-auto'>
            <div className='w-full h-[450px] flex flex-col justify-center items-center'>
              <NoActivities />
              <p className='text-[#787878] text-[14px] font-bold mt-4'>No courses yet</p>
            </div>
          </div>
        </div>
      );
    default:
      return allCourses?.length > 0 ? (
        <PublishedCourses />
      ) : (
        <div className='flex flex-col mx-auto'>
          <div className='flex flex-col mx-auto'>
            <div className='w-full h-[450px] flex flex-col justify-center items-center'>
              <NoActivities />
              <p className='text-[#787878] text-[14px] font-bold mt-4'>No courses yet</p>
            </div>
          </div>
        </div>
      );
  }
};

export const TableHeader = ({ placeholder }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [showExport, setShowExport] = useState(false);

  return (
    <div className='min-w-[1050px] xl:w-full h-[55px] mt-6 mb-2 bg-[#9B9FC6] bg-opacity-[0.12] rounded-md flex items-center justify-between px-8'>
      <input className='w-[500px] text-[13px] text-[#191919] rounded-sm h-[35px] pl-4 outline-none focus:ring-0' placeholder={placeholder} />

      <div className='flex items-center gap-x-4'>
        <div
          className='h-[35px] relative centerFlex  w-[120px] text-[#191919] text-[14px] gap-x-3 bg-white rounded-md dropdown-shadow cursor-pointer'
          onClick={() => {
            setShowFilter((prev) => !prev);
            setShowExport(false);
          }}
        >
          <Filter />
          <p className=''>Filter</p>
          {/* filter dropdown */}
          {showFilter && (
            <div className='absolute top-[40px] w-[180px] py-4 gap-y-2 flex flex-col justify-center items-center dropdown-shadow bg-white rounded-md'>
              <p className='w-full text-center py-2 cursor-pointer text-[13px] hover:bg-[#858585]'>This Week</p>
              <p className='w-full text-center py-2 cursor-pointer text-[13px] hover:bg-[#858585]'>This Year</p>
            </div>
          )}
        </div>

        <div
          className='h-[35px] centerFlex relative w-[120px] text-[#191919] text-[14px] gap-x-3 bg-white rounded-md dropdown-shadow cursor-pointer'
          onClick={() => {
            setShowFilter(false);
            setShowExport((prev) => !prev);
          }}
        >
          <div className='w-[17px] h-[17px] centerFlex rounded-full border border-[#191919]'>
            <MdOutlineArrowUpward color='#191919' />
          </div>
          <p className=''>Export</p>
          {/* export dropdown */}
          {showExport && (
            <div className='absolute top-[40px] w-[180px] py-4 gap-y-2 flex flex-col justify-center dropdown-shadow items-center bg-white rounded-md'>
              <p className='w-full text-center py-2 cursor-pointer text-[13px] hover:bg-[#858585]'>Export as CSV</p>
              <p className='w-full text-center py-2 cursor-pointer text-[13px] hover:bg-[#858585]'>Export as .xlsx</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const TableFooter = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className='min-w-[1050px] xl:w-full h-[50px] mt-6 mb-2 bg-[#9B9FC6] bg-opacity-[0.12] rounded-md flex items-center justify-between px-8 text-[13px] text-[#191919] '>
      <div className=' opacity-[0.5]'>1 - 10 of 7,814</div>

      <div className='flex justify-center items-center gap-x-10'>
        <p className=' opacity-[0.5]'>You are currently on Page</p>

        <div className='w-[60px] h-[25px] rounded-md bg-white'></div>

        <div className='h-[25px] border-r-1 border'></div>

        <div className='centerFlex gap-x-3'>
          <button
            className
            disabled={currentPage === 1}
            onClick={() => {
              console.log(1);
            }}
          >
            <AiOutlineLeftCircle size={19} />
          </button>
          <button
            className
            onClick={() => {
              console.log(2);
            }}
          >
            <AiOutlineRightCircle size={19} />
          </button>
        </div>
      </div>
    </div>
  );
};
