import React from "react";
import ContentCarousel, {
  ContentCardSection,
  CourseCategories,
  LoadingCardSection,
} from "../Content-Components/ContentCarousel";
import { instructorData } from "../Content-Components/Data";
import { Data } from "./Data";
import InstructorCarousel, {
  InstructorSection,
} from "../Content-Components/InstructorCarousel";
import ProgramCarousel from "./ProgramCarousel";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import ClassCards, { ClassCardsMobile } from "../ClassCards";

const NoContent = ({ data, dataObj }) => {
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
        <div className="w-full mt-[50px]">
          {dataObj.r_loading ? <LoadingCardSection /> :
          <ContentCardSection
            data={dataObj.recommended}
            courseType="vocational"
            contentTitle="Recommended courses on vocational education"
          />}
        </div>

        <div className="w-full mt-[50px]">
        {dataObj.p_loading ? <LoadingCardSection /> :
        <ContentCardSection
          data={dataObj.popular}
          courseType="vocational"
          contentTitle="Popular courses on vocational programs"
        />}
      </div>

      <div className="w-full mt-[50px]">
      {dataObj.f_loading ? <LoadingCardSection /> :
        <ContentCardSection
          data={dataObj.featured}
          courseType="vocational"
          contentTitle="Take your business to the next level by exploring any of these courses"
        />}
      </div>

        <div className="mt-[40px]">
          <InstructorSection />
        </div>

        <div className="mt-14">
          <CourseCategories data={data} />
        </div>
      </div>
    </div>
  );
};

export default NoContent;
