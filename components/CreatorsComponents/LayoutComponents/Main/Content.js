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

const Content = () => {
  const [select, setSelected] = useState("");

  const ongoing = false;

  const times = {
    total: 90,
    completed: 24,
  };

  const value = (times.completed / times.total) * 100;
  console.log(value);

  return (
    <div className='relative w-full h-full bg-white flex flex-col mt-[90px] md:mt-[120px] md:justify-center items-start md:translate-x-[250px] md:w-[calc(100%-250px)] px-2 sm:px-4 xl:px-12 py-10  text-darkGray '>
      {!ongoing && <p className='mb-8'>Dashboard</p>}

      {ongoing && (
        <div className='mb-10 w-full'>
          <div className='flex flex-row justify-between w-full '>
            <p className='text-[17px] font-bold'>Introduction to fashion designing</p>
            <p className='text-[12px] text-dark-gray-100'>{Math.round(value)}%</p>
          </div>

          <div className='w-full h-[15px] mt-2 rounded-[20px] bg-[#FBFFF8] border border-gray-100'>
            <div className='h-full rounded-[20px] bg-bizpotta-green' style={{ width: `${(times.completed / times.total) * 100}%` }}></div>
          </div>
        </div>
      )}

      <div className='w-full flex flex-row flex-wrap justify-center gap-3 sm:gap-8 xl:gap-0 xl:justify-between '>
        <DashBoardCard select={select} title='income' setSelected={setSelected} />
        <DashBoardCard select={select} title='enrollment' setSelected={setSelected} />
        <DashBoardCard select={select} title='courses' setSelected={setSelected} />
      </div>

      <div className='mt-6 lg:mt-16 w-full'>
        <RenderTableChart select={select} />
      </div>

      <p className='mt-3 lg:mt-10 font-[600]'>Resources</p>
      <p className='mt-2'>Just creating your first class, we got you covered</p>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-6 mx-auto lg:gap-x-20 mt-10 self-start'>
        <VideoCard />
        <VideoCard />
        <div className='text-[13px] text-bizpotta-gray-600 lg:col-span-2 text-center lg:mt-10'>View More</div>
      </div>

      <p className='mt-6 lg:mt-16 font-[600]'>Resourses to help you get started</p>
      <div className='border rounded-md mb-6 mt-8 border-gray-700'>
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
