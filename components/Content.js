import React from "react";

import TopSection from "./Content-Components/TopSection";

const Content = ({dataObj}) => {
  return (
    <div className="relative w-full  md:bg-gray-50 flex flex-col pt-[90px] md:pt-[120px] md:justify-start md:translate-x-[200px] md:w-[calc(100%-200px)] text-darkBlue ">
      {/* Top section */}
      <TopSection dataObj = {dataObj}/>
    </div>
  );
};

export default Content;
