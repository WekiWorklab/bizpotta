import React, { useEffect } from "react";
import BottomSection from "./BottomSection";
import MiddleSection from "./MiddleSection";
import TopSection from "./TopSection";
import studentService from "../../services/StudentService";

import { useQuery } from "@tanstack/react-query";

const Content = ({ dataObj }) => {
  return (
    <div className="relative w-full h-full bg-gray-50 flex flex-col pt-[90px] md:pt-[120px] md:justify-start md:translate-x-[200px] md:w-[calc(100%-200px)] px-2 md:px-4 pb-10">
      <TopSection />
      <MiddleSection dataObj={dataObj} />
    </div>
  );
};

export default Content;
