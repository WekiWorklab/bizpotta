import React from "react";

// /////
import TopSection from "./NoContent-TopSection";
import BottomSection from "./NoContent-BottomSection";

const NoContent = ({dataObj}) => {

  console.log(dataObj)

  return (
    <div className="relative w-full  md:bg-gray-50 flex flex-col pt-[90px] md:pt-[120px] md:justify-start md:translate-x-[200px] md:w-[calc(100%-200px)] text-darkBlue  px-2 md:px-4">
      {/* Top section */}
      <TopSection />

      {/* Bottom section  */}
      <BottomSection dataObj = {dataObj}/>
    </div>
  );
};

export default NoContent;
