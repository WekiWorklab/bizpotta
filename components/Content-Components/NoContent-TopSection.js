import React from "react";
import { useSelector } from "react-redux";

const TopSection = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="w-full h-[400px] pt-10 px-10 ">
      {/* <p className='font-[600]'>My Projects</p> */}
      <p className="mt-4 font-[600]">
        Hi {user?.firstName}, you are currently not enrolled in any course at
        the moment.
      </p>

      <div className="mt-[100px] md:ml-[40%] w-[300px] relative ">
        <div className="h-[70px] w-[45px] border border-black absolute z-40 left-[40%] md:left-[0%] bg-[#E5E5E5]">
          {" "}
        </div>
        <div className="h-[70px] w-[45px] border border-black absolute bg-[#E5E5E5] -rotate-12 z-30 translate-x-[-10px] translate-y-[-4px] left-[40%] md:left-[0%]">
          {" "}
        </div>
        <div className="h-[70px] w-[45px] border border-black absolute bg-[#E5E5E5] -rotate-45 z-20 translate-x-[-20px] translate-y-[-5.5px] left-[40%] md:left-[0%]">
          {" "}
        </div>
        <p className="absolute mt-20  w-[100px] right-[40%] md:right-[220px]  ">
          Start Course
        </p>
      </div>
    </div>
  );
};

export default TopSection;
