import React, { useState } from "react";
import BrowseCourse from "./BrowseCourse";
import { Data, instructorData } from "../Content-Components/Data";
import ContentCarousel from "../Content-Components/ContentCarousel";
import InstructorCarousel from "../Content-Components/InstructorCarousel";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ContentCard from "../Content-Components/ContentCard";

const MiddleSection = ({data, loading}) => {
  const base = process.env.NEXT_PUBLIC_REACT_APP_API_URL;

  const fetchCourseCategories = async () => {
    const results = await axios.get(`${base}/courses-categories`);
    return results.data.data
  };


  const query = useQuery(["course_cat"], fetchCourseCategories)



  return (
    // <div>
    <div className="bg-transparent w-full xl:w-full">
      <div className="pt-[50px] flex flex-col">
        <p className="text-[14px] text-start   mb-4 md:text-md font-semibold md:font-bold md:mb-8  ">
          Browse course based on your recent activities
        </p>
        <div className="pt-3 rounded-sm">
          <div className="block w-full sm:w-[360px] md:hidden w-full ">
            <ContentCarousel data={data} screen={[1.5, 10]} type="vocational" />
          </div>
          <div className="hidden md:block lg:hidden w-full">
            <ContentCarousel data={data} screen={[2, 20]} type="vocational" />
          </div>
          <div className="hidden lg:block w-full">
            <ContentCarousel data={data} screen={[4, 30]} type="vocational" />
          </div>
        </div>
      </div>
      <div className="pt-[50px] flex flex-col ">
        <p className="text-[14px] text-start mb-4 md:text-md font-semibold md:font-bold md:mb-8  ">
          Popular courses on vocational programs
        </p>
        <div className="pt-3 rounded-sm">
          <div className="block w-full sm:w-[360px] md:hidden w-full ">
            <ContentCarousel data={data} screen={[1.5, 10]} type="vocational" />
          </div>
          <div className="hidden md:block lg:hidden w-full">
            <ContentCarousel data={data} screen={[2, 20]} type="vocational" />
          </div>
          <div className="hidden lg:block w-full">
            <ContentCarousel data={data} screen={[4, 30]} type="vocational" />
          </div>
        </div>
      </div>
      <div className="pt-[50px] flex flex-col ">
        <p className="text-[14px] text-start mb-4 md:text-md font-semibold md:font-bold md:mb-8  ">
          Based on recent activities
        </p>
        <div className="pt-3 rounded-sm">
          <div className="block w-full sm:w-[360px] md:hidden w-full ">
            <ContentCarousel data={data} screen={[1.5, 10]} type="vocational" />
          </div>
          <div className="hidden md:block lg:hidden w-full">
            <ContentCarousel data={data} screen={[2, 20]} type="vocational" />
          </div>
          <div className="hidden lg:block w-full">
            <ContentCarousel data={data} screen={[4, 30]} type="vocational" />
          </div>
        </div>
      </div>
      <div className="pt-[50px] flex flex-col ">
        <p className="text-[14px] text-start mb-4 md:text-md font-semibold md:font-bold md:mb-8  ">
          Trending courses
        </p>
        <div className="pt-3 rounded-sm">
          <div className="block w-full sm:w-[360px] md:hidden w-full">
            <ContentCarousel data={data} screen={[1.5, 10]} type="vocational" />
          </div>
          <div className="hidden md:block lg:hidden w-full">
            <ContentCarousel data={data} screen={[2, 20]} type="vocational" />
          </div>
          <div className="hidden lg:block w-full">
            <ContentCarousel data={data} screen={[4, 30]} type="vocational" />
          </div>
        </div>
      </div>
      <div className="pt-[50px] flex flex-col">
        <p className="text-[14px] text-start mb-4 md:text-md font-semibold md:font-bold md:mb-8  ">
          Instructors
        </p>
        <div className="block w-[360px] md:hidden w-full">
          <InstructorCarousel
            data={instructorData}
            screen={[1.5, 10]}
            type="instructor"
          />
        </div>
        <div className="hidden md:block lg:hidden w-full">
          <InstructorCarousel
            data={instructorData}
            screen={[2, 20]}
            type="instructor"
          />
        </div>
        <div className="hidden lg:block w-full">
          <InstructorCarousel
            data={instructorData}
            screen={[4, 30]}
            type="instructor"
          />
        </div>
      </div>

      <div className="w-full horizontal-scrollbar overflow-x-scroll flex flex-col font-light mt-10">
        <div className="w-[1100px] flex flex-col space-y-4 py-4 px-2">
        {query.data ? <CourseTabs courseCategories={query.data} /> : null}
        </div>
      </div>

      <div className="w-full grid justify-items-center sm:justify-items-start sm:grid-cols-2  lg:grid-cols-3 lg:justify-items-center xl:grid-cols-4 gap-x-10 gap-y-10 mt-10 ">
        {data?.map((el, index) => (
          <ContentCard key={index}  data={el} />
        ))}
      </div>

      </div>
  );
};

export default MiddleSection;






const CourseTabs = ({ courseCategories }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const tabs = courseCategories;

  const [currentTab, setCurrentTab] = useState(1);

  const handleClick = (id) => {
    setCurrentTab(id);
  };

  return (
    <div className="">
      <nav className="flex space-x-4" aria-label="Tabs">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            onClick={() => handleClick(tab.id)}
            className={classNames(
              tab.id == currentTab
                ? "font-bold"
                : "text-gray-500 hover:text-gray-700",
              "px-3 py-2 font-medium rounded-md text-[15px]"
            )}
          >
            {tab.name}
          </div>
        ))}
      </nav>
    </div>
  );
};