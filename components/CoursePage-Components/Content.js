import React, {useEffect} from "react";
import BottomSection from "./BottomSection";
import MiddleSection from "./MiddleSection";
import TopSection from "./TopSection";
import studentService from "../../services/StudentService";

import { useQuery } from "@tanstack/react-query";


const Content = () => {


  const getCourses = async () => {
    const res = await studentService.getCourses()
    return res?.data
  }

  // useEffect(() => {
  //   console.log(getCourses())


  // })
  const {data, loading} = useQuery(["all-courses"], getCourses)

  console.log(data)

  return (
    <div className="relative w-full h-full bg-white sm:bg-gray-50 flex flex-col pt-[90px] md:pt-[120px] md:justify-start md:translate-x-[200px] md:w-[calc(100%-200px)] px-2 md:px-4 pb-10">
      <TopSection  />

      <MiddleSection data = {data} loading = {loading} />

      {/* <BottomSection /> */}
    </div>
  );
};

export default Content;
