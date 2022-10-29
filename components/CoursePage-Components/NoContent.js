import React from "react";
import ContentCarousel from "../Content-Components/ContentCarousel";
import { instructorData } from "../Content-Components/Data";
import { Data } from "./Data";
import InstructorCarousel from "../Content-Components/InstructorCarousel";
import ProgramCarousel from "./ProgramCarousel";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import ClassCards, { ClassCardsMobile } from "../ClassCards";

const NoContent = ({data}) => {
  const router = useRouter();
  const [pathName, setPathName] = useState("");

  useEffect(() => {
    setPathName(router.asPath);
  });

  return (
    <div className="relative w-full h-full bg-white sm:bg-gray-50 flex flex-col pt-[90px] md:pt-[120px] md:justify-start md:translate-x-[200px] md:w-[calc(100%-200px)] px-2 md:px-4 pb-10">
      {/* <TopSection /> */}

      <div className="pt-6">
        <p className="block font-semibold sm:font-bold mb-10 sm:mb-[20px]">
          Hi Naomi, you are currently not enrolled at the moment
        </p>
        <div className="mb-[20px]">
          <p className="text-gray-400 text-[13px]  mt-2">
            Explore our various courses
          </p>
        </div>

        <ClassCards />
        <div className="w-[370px] mx-auto md:hidden">
          <ClassCardsMobile />
        </div>
      </div>

      <div className="bg-transparent w-full  lg:mx-auto lg:mx-0 ">
        <div className="pt-[50px] flex flex-col">
          <p className="text-[14px] text-center lg:text-left lg:pl-4  mb-4 md:text-md font-semibold md:font-bold md:mb-8">
            Recommended Courses on Vocational Education
          </p>
          <div className="block w-[360px] m-auto md:hidden w-full ">
            <ContentCarousel data={data} screen={[1.5, 10]} />
          </div>
          <div className="hidden m-auto md:block lg:hidden w-full">
            <ContentCarousel data={data} screen={[2, 20]} />
          </div>
          <div className="hidden lg:block w-full">
            <ContentCarousel data={data} screen={[4, 30]} />
          </div>
        </div>
        <div className="pt-[50px] flex flex-col">
          <p className="text-[14px] text-center lg:text-left lg:pl-4  mb-4 md:text-md font-semibold md:font-bold md:mb-8  ">
            Popular courses on vocational program
          </p>
          <div className="block w-[360px] m-auto md:hidden w-full">
            <ContentCarousel data={data} screen={[1.5, 10]} />
          </div>
          <div className="hidden m-auto md:block lg:hidden w-full">
            <ContentCarousel data={data} screen={[2, 20]} />
          </div>
          <div className="hidden lg:block w-full">
            <ContentCarousel data={data} screen={[4, 30]} />
          </div>
        </div>
        <div className="pt-[50px] flex flex-col">
          <p className="text-[14px] text-center lg:text-left lg:pl-4  mb-4 md:text-md font-semibold md:font-bold md:mb-8">
            Take your business to the next level by exploring any of these
            courses
          </p>
          <div className="block w-[360px] m-auto md:hidden w-full">
            <ContentCarousel data={data} screen={[1.5, 10]} />
          </div>
          <div className="hidden m-auto md:block lg:hidden w-full">
            <ContentCarousel data={data} screen={[2, 20]} />
          </div>
          <div className="hidden lg:block w-full">
            <ContentCarousel data={data} screen={[4, 30]} />
          </div>
        </div>
        <div className="pt-[50px] flex flex-col">
          <p className="text-[14px] text-center lg:text-left lg:pl-4  mb-4 md:text-md font-semibold md:font-bold md:mb-8">
            Instructors
          </p>
          <div className="block w-[360px] m-auto md:hidden w-full">
            <InstructorCarousel data={instructorData} screen={[1.5, 10]} />
          </div>
          <div className="hidden m-auto md:block lg:hidden w-full">
            <InstructorCarousel data={instructorData} screen={[2, 20]} />
          </div>
          <div className="hidden lg:block w-full">
            <InstructorCarousel data={instructorData} screen={[4, 30]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoContent;
