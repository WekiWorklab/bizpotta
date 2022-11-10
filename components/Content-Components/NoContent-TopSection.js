import React from "react";
import { useSelector } from "react-redux";
import { NoCourseSVG } from "../../public";

const TopSection = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="w-full  pt-10  ">
      {/* <p className='font-[600]'>My Projects</p> */}
      <p className="mt-4 font-[600]">
        Hi {user?.firstName}, you are currently not enrolled in any course at
        the moment.
      </p>

      <div className=" flex flex-col justify-center h-[250px] items-center">
        <NoCourseSVG />
        <p className=" ">
          Start Course
        </p>
      </div>
      
    </div>
  );
};

export default TopSection;
