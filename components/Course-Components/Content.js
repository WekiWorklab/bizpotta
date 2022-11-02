////
import React, { useState, useEffect } from "react";

/////
import MiddleSection from "./MiddleSection";
import TopSection from "./TopSection";
import useCourse from "../../hooks/useCourse.jsx";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { FullPageSpinner } from "../../components/Lib";

const Content = () => {
  const router = useRouter();
  const { id } = router.query;
  
  return (
    <div className="relative w-full min-h-screen bg-[#FEFEFE] flex flex-col pt-[90px] md:pt-[120px] md:justify-center items-center md:translate-x-[200px] md:w-[calc(100%-200px)] pl-4 md:pl-8 pb-10 text-darkGray">
      
    </div>
  );
};

export default Content;
