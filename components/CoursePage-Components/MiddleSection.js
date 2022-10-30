import React, { useState } from "react";
import BrowseCourse from "./BrowseCourse";
import { Data, instructorData } from "../Content-Components/Data";
import ContentCarousel, { ContentCardSection, CourseCategories } from "../Content-Components/ContentCarousel";
// import {ContentCardSection} from "../Content-Components/ContentCardSection";

import InstructorCarousel, { InstructorSection } from "../Content-Components/InstructorCarousel";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ContentCard from "../Content-Components/ContentCard";

const MiddleSection = ({ data, loading }) => {

  return (
    <div className="bg-transparent w-full xl:w-full">
      <div className="w-full mt-[50px]">
        <ContentCardSection data = {data} courseType = "vocational" contentTitle="Browse course based on your recent activities" />
      </div>

      <div className="w-full mt-[50px]">
        <ContentCardSection data = {data} courseType = "vocational" contentTitle="Popular courses on vocational programs" />
      </div>

      <div className="w-full mt-[50px]">
        <ContentCardSection data = {data} courseType = "vocational" contentTitle="Based on recent activities" />
      </div>

      <div className="w-full mt-[50px]">
        <ContentCardSection data = {data} courseType = "vocational" contentTitle="Trending courses" />
      </div>

      <div className="mt-[40px]">
        <InstructorSection />
      </div>      

      <div className="mt-14">
        <CourseCategories data={data} />
      </div>
      
    </div>
  );
};

export default MiddleSection;

