import React from "react";

////////////
import DashBoardCard from "../DashBoardCard";
import ResourcesCard from "../ResourcesCard";
import VideoCard from "../VideoCard";

////////////////
import CoursesTable from "../CoursesTable";
import { useState } from "react";
import EnrollmentTable from "../EnrollmentTable";
import IncomeTableChart from "../IncomeTableChart";
import { MdOutlineArrowUpward } from "react-icons/md";
import { Facebook, Filter, Group, Instagram, Suprise, Telegram, Twitter} from "../../../../public/vectors/Svgs";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io5";

const Content = () => {
  const [select, setSelected] = useState("enrollment");

  const ongoing = true;

  const times = {
    total: 90,
    completed: 24,
  };

  const value = (times.completed / times.total) * 100;
  console.log(value);

  return (
    <div className='relative w-full h-full bg-white flex flex-col mt-[90px] md:mt-[120px] md:justify-center items-start md:translate-x-[250px] md:w-[calc(100%-250px)] px-1 py-10  text-darkGray '>
      <p className='mb-8'>Hello, Ahmed</p>

      

      <div className='w-full flex flex-row flex-wrap justify-center md:pr-3 gap-3 sm:gap-8 xl:gap-0 xl:justify-between '>
        <DashBoardCard select={select} title='income' setSelected={setSelected} />
        <DashBoardCard select={select} title='enrollment' setSelected={setSelected} />
        <DashBoardCard select={select} title='courses' setSelected={setSelected} />
      </div>

      {(ongoing && select === "courses") && (
        <div className='mt-14 w-full'>
          <div className='flex flex-row justify-between w-full '>
            <p className='text-[17px] font-bold'>Introduction to fashion designing</p>
            <p className='text-[12px] text-dark-gray-100'>{Math.round(value)}%</p>
          </div>

          <div className='w-full h-[15px] mt-2 rounded-[20px] bg-[#FBFFF8] border border-gray-100'>
            <div className='h-full rounded-[20px] bg-bizpotta-green' style={{ width: `${(times.completed / times.total) * 100}%` }}></div>
          </div>
        </div>
      )}

      {select === 'income' && <WithdrawSection />}


      <div className='mt-6 lg:mt-12 w-full'>
        <RenderTableChart select={select} />
      </div>

      
      {select === 'income' && <AffiliateSection />}


      <p className='mt-3 lg:mt-10 font-[600]'>Resources</p>
      <p className='mt-2'>Just creating your first class, we got you covered</p>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-6 mx-auto lg:gap-x-20 mt-10 self-start'>
        <VideoCard />
        <VideoCard />
        <div className='text-[13px] text-bizpotta-gray-600 lg:col-span-2 text-center lg:mt-10'>View More</div>
      </div>

      <p className='mt-6 lg:mt-16 font-[600]'>Resourses to help you get started</p>
      <div className='border resources-child rounded-md mb-6 mt-8 border-gray-700'>
        <ResourcesCard />
        <ResourcesCard />
        <ResourcesCard />
        <ResourcesCard />
        <ResourcesCard />
        <ResourcesCard />
        <ResourcesCard />
        <ResourcesCard />

        <div className='text-[13px] text-bizpotta-gray-600 text-center mt-4'>View More</div>
      </div>
    </div>
  );
};

export default Content;

const RenderTableChart = ({ select }) => {
  if (select === "courses") {
    return <CoursesTable />;
  } else if (select === "income") {
    return <IncomeTableChart />;
  } else if (select === "enrollment") {
    return <EnrollmentTable />;
  } else return <div></div>;
};



export const MainTableFooter = () => {

  const [currentPage, setCurrentPage] = useState(0)

  return (
      <div className="min-w-[1050px] xl:w-full h-[50px] mt-6 mb-2 bg-[#9B9FC6] bg-opacity-[0.12] rounded-md flex items-center justify-between px-8 text-[13px] text-[#191919] ">
          <div className = ' opacity-[0.5]'>1 - 10 of 7,814</div>

          <div className='flex justify-center items-center gap-x-10'>
              <p className = ' opacity-[0.5]'>You are currently on Page</p>

              <div className='w-[60px] h-[25px] rounded-md bg-white'></div>

              <div className='h-[25px] border-r-1 border'></div>

              <div className='centerFlex gap-x-3'>
                  <button  className disabled = {currentPage === 1} onClick={() => {console.log(1)}}><AiOutlineLeftCircle size={19} /></button>
                  <button  className onClick={() => {console.log(2)}}><AiOutlineRightCircle size={19} /></button>
              </div>

          </div>
      </div>
  )
}

export const MainTableHeader = ({filter}) => {


  const [showFilter, setShowFilter] = useState(false)
  const [showExport, setShowExport] = useState(false)

  return (

      <div className="min-w-[1050px] xl:w-full h-[50px] mt-6 mb-2 bg-[#9B9FC6] bg-opacity-[0.12] rounded-md flex items-center justify-center px-3">
        <input className="w-[400px] text-[13px] rounded-sm italic h-[35px] pl-4 outline-none focus:ring-0" placeholder="Search income by entering keywords, name, or course"/>
        <div className="h-[35px] relative centerFlex  w-[120px] text-[#191919] text-[14px] gap-x-3 bg-white rounded-md ml-20 cursor-pointer" onClick={() => {setShowFilter(prev => !prev); setShowExport(false)}}>
          <Filter />
          <p className="font-bold">Filter</p>
          {/* filter dropdown */}
          {showFilter && <div className='absolute top-[40px] w-[180px] py-4 gap-y-2 flex flex-col justify-center items-center dropdown-shadow bg-white rounded-md'>
            {
              filter.map((el, index) => (
                <p key = {index} className='w-full text-left px-3 py-2 cursor-pointer text-[13px] hover:bg-[#858585]'>{el}</p>
              ))
            }
          </div>}
        </div>

        <div className="h-[35px] centerFlex relative w-[120px] text-[#191919] text-[14px] gap-x-3 bg-white rounded-md ml-7 cursor-pointer" onClick={() => {setShowFilter(false); setShowExport(prev => !prev)}}>
          <div className="w-[17px] h-[17px] centerFlex rounded-full border border-[#191919]">
            <MdOutlineArrowUpward color="#191919"/>
          </div>
          <p className="font-bold">Export</p>
          {/* export dropdown */}
          {showExport && <div className='absolute top-[40px] w-[180px] py-4 gap-y-2 flex flex-col justify-center dropdown-shadow items-center bg-white rounded-md'>
              <p className='w-full text-center py-2 cursor-pointer text-[13px] hover:bg-[#858585]'>Export as CSV</p>
              <p className='w-full text-center py-2 cursor-pointer text-[13px] hover:bg-[#858585]'>Export as .xlsx</p>
          </div>}
        </div>

      </div>

  )
}

export const AffiliateSection = () => {

  return (
    <div className="w-full h-[140px] lg:h-[110px] bg-[#FEF5C9] bg-opacity-[0.32] border border-[#FEF5C9] rounded-md flex flex-col lg:flex-row justify-center lg:justify-between items-center px-2 lg:px-6 mt-16">
        
        <div className="flex items-center">
          <Suprise />
          <div className="">
            <p className="text-[13px]">Share your affilate code </p>
            <p className="text-[13px] font-bold">tumiLara213</p>
          </div>
        </div>

        <div className="flex items-center gap-x-5  h-2/3 px-4 lg:px-20 lg:border-l-2 border-[#FEF5C9] ">

          <Group />
          <Facebook />
          <Instagram />
          <Twitter />
          <Telegram />
          {/* <Whatsapp /> */}
          <IoLogoWhatsapp size={22} />
        </div>

    </div>
  )
}

export const WithdrawSection = () => {
   return (
    <div className="w-full h-[100px] bg-[#94F236] bg-opacity-[0.06] flex flex-col gap-y-2 sm:flex-row justify-center sm:justify-between items-center rounded-md px-16 mt-16 ">
      <div className="text-[#222222] text-[14px] centerFlex gap-x-2">
        <p className="">Available balance</p>
        <p className="text-[18px]">N405,000</p> 
      </div>

      <div className="w-[120px] h-[38px] text-[14px] rounded-md font-bold bg-bizpotta-green centerFlex">
        Withdraw
      </div>
    </div>
   )
} 