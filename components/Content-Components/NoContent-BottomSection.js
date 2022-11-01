import React from "react";
import ContentCarousel, { ContentCardSection, StudentContentCardSection, StudentLoadingCardSection } from "./ContentCarousel";
import InstructorCarousel from "./InstructorCarousel";
import { Data as data, instructorData } from "./Data";
import { card_image } from "../../public";

const BottomSection = ({ dataObj }) => {
  return (
    <div className="pl-0  flex flex-col xl:flex-row  w-full">
      <div className=" w-full m-auto">
        <div className="w-full mt-[50px]">
            {dataObj.r_loading ? <StudentLoadingCardSection /> :
             <StudentContentCardSection
              data={dataObj.recommended}
              courseType="vocational"
              contentTitle="Recommended courses"
            />}
          </div>
          <div className="w-full mt-[50px]">
            {dataObj.p_loading ? <StudentLoadingCardSection /> :
             <StudentContentCardSection
              data={dataObj.popular}
              courseType="vocational"
              contentTitle="Popular courses on vocational program"
            />}
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

export default BottomSection;
