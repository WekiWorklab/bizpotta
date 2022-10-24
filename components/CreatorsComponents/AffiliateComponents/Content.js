import React, { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs';
import { CoursesIcon, EnrollmentIcon, IncomeIcon, smile } from '../../../public'

const Content = () => {

  const [select, setSelected] = useState("");



  return (
    <div className="relative w-full min-h-[calc(100vh-90px)] md:min-h-[calc(100vh-120px)] bg-[#FEFEFE] flex flex-col mt-[90px] md:mt-[120px] md:justify-start items-start md:translate-x-[250px] md:w-[calc(100%-250px)] px-2 xl:px-8 py-6 text-darkGray">
        
        <div className = 'flex items-center gap-x-3'>
            <p className='font-medium'>Keep referring people to earn more</p>
            <img src={smile.src} className='w-[30px] h-[30px]  ' />
        </div>


      <div className="w-full flex flex-row flex-wrap justify-start gap-x-20 mt-7">
        <DashBoardCard
          select={select}
          title="earning"
          value={20}
          type="1"
          setSelected={setSelected}
        />

        <DashBoardCard
          select={select}
          title="people"
          value={40}
          type="2"
          setSelected={setSelected}
        />
      </div>

    </div>
  )
}

export default Content






const DashBoardCard = ({ select, title, setSelected, value, type }) => {
    return (
      <div
        className={`w-[150px] sm:w-[200px] lg:w-[320px] border-[1px] border-[#858585] border-opacity-[0.25] dashboard-card-shadow cursor-pointer ${
          select === title ? "bg-[#F3F4F6]" : "bg-[#FDFDFD]"
        } rounded-md p-2 lg:p-8`}
        onClick={() => setSelected(title)}
      >
        <div className='flex flex-row justify-between items-center mb-4'>
          {title === "earning" ? <IncomeIcon /> : <EnrollmentIcon />}
          <BsChevronDown size={14} color='#787878' />
        </div>
  
        <p className='text-bizpotta-green mb-2 capitalize font-bold'>{title === "earning" ? "Referral Earning" : "No of people referred"}</p>
  
        <div className='font-[600] text-[14px] lg:text-base  text-bizpotta-gray-700'>
          {type == 1 ? "₦" : ""}
          {type == 1 ? Number(value).toLocaleString() : value}
          {type == 2 ? <span className='text-[12px]'> students</span> : type == 3 ? <span className='text-[12px]'> courses</span> : ""}
        </div>
      </div>
    );
  };