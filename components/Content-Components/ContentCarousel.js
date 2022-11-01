import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useDispatch } from "react-redux";

import { useSwiper } from "swiper/react";
import { BsStarFill } from "react-icons/bs";
import {
  setCourseDetails,
  showCourseDetailsModal,
} from "../../store/courseSlice";
import { wordShortner } from "../../utils/wordShortner";
import { offer } from "../../public";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";
import studentService from "../../services/StudentService";

export const ContentCardSection = ({ data, contentTitle, courseType }) => {
  return (
    <div className="flex flex-col">
      <p className="text-[14px] text-start   mb-4 md:text-md font-semibold md:font-bold md:mb-8  ">
        {contentTitle}
      </p>
      <div className="pt-3 rounded-sm">
        <div className="block w-full sm:w-[400px] md:hidden w-full ">
          <ContentCarousel data={data} screen={[1.5, 10]} type={courseType} />
        </div>
        <div className="hidden md:block lg:hidden w-full">
          <ContentCarousel data={data} screen={[2, 20]} type={courseType} />
        </div>
        <div className="hidden lg:block w-full">
          <ContentCarousel data={data} screen={[4, 30]} type={courseType} />
        </div>
      </div>
    </div>
  );
};

export default function ContentCarousel({ data, type, screen }) {
  // console.log(data)
  return (
    <Swiper
      slidesPerView={screen[0]}
      spaceBetween={screen[1]}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper "
    >
      {data?.map((el, index) => (
        <SwiperSlide
          key={index}
          style={{
            display: "flex",
            justifyContent: "start",
            backgroundColor: "transparent",
          }}
        >
          <ContentCard data={el} type={type} />
        </SwiperSlide>
      ))}

      <div className="h-14"></div>
    </Swiper>
  );
}

export const StudentContentCardSection = ({
  data,
  contentTitle,
  courseType,
}) => {
  return (
    <div className="flex flex-col">
      <p className="text-[14px] text-start mb-4 md:text-md font-semibold md:font-bold md:mb-8  ">
        {contentTitle}
      </p>
      <div className="pt-3 rounded-sm">
        <div className="block w-full sm:w-[400px] md:hidden w-full ">
          <ContentCarousel data={data} screen={[1.5, 10]} type={courseType} />
        </div>
        <div className="hidden md:block lg:hidden w-full">
          <ContentCarousel data={data} screen={[2, 20]} />
        </div>
        <div className="hidden lg:block w-full">
          <ContentCarousel data={data} screen={[3, 30]} type={courseType} />
        </div>
      </div>
    </div>
  );
};

const ContentCard = ({ data, type }) => {
  // console.log(data)

  const imageSrc =
    "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

  const colorType = (type) => {
    switch (type) {
      case "vocational":
        return "bg-[#121F4C]";
      case "masterclass":
        return "bg-[#4C1512]";
      default:
        return "bg-[#121F4C]";
    }
  };

  const dispatch = useDispatch();

  const name =
    "kjjhgvbn;iuhygjhmb,nmhbvihuFvhsjaiouyjGVHbniudbaegujnm;lkjgbnm.";

  return (
    <div
      className="w-[220px] h-[220px] rounded-[4px] bg-no-repeat bg-cover bg-center flex flex-col justify-end"
      style={{ backgroundImage: `url(${data?.image})` }}
    >
      <div
        className={`clip-card-path2 ${colorType(
          type
        )} text-[white] h-3/5 flex flex-col justify-end px-2 pb-2 rounded-b-md`}
      >
        <div className="flex flex-row justify-end">
          <div
            className="text-[13px] w-[50px] h-[25px] rounded-[5px] flex justify-center items-center cursor-pointer bg-[#94F236] text-darkBlue"
            onClick={() => {
              dispatch(showCourseDetailsModal(true));
              dispatch(setCourseDetails(data));
            }}
          >
            Enroll
          </div>
        </div>

        <div className="text-[14px] mt-[3px] break-words">
          {wordShortner(data?.name, 26)}
        </div>
        <div className="flex flex-row justify-between items-center mt-0">
          <div className="">
            <div className="flex items-center gap-x-1">
              <div className="w-[20px] h-[20px] ">
                <img src={offer.src} alt="" className="rounded-full" />
              </div>
              <p className="text-[11px] break-words">{data.academy}</p>
            </div>
          </div>
          <div>
            <div className="flex flex-row gap-x justify-end">
              <BsStarFill size={12} color="#FFC700" />
              <BsStarFill size={12} color="#FFC700" />
              <BsStarFill size={12} color="#FFC700" />
              <BsStarFill size={12} color="#FFC700" />
              <BsStarFill size={12} color="#FFC700" />
            </div>
            <p className="text-[10px]">{data.total_students} students</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CourseCategories = () => {
  const base = process.env.NEXT_PUBLIC_REACT_APP_API_URL;
  const [catId, setCatId] = useState(1)

  const fetchCourseCategories = async () => {
    const results = await axios.get(`${base}/courses-categories`);
    return results.data.data;
  };

  const fetchCourses = async (catId) => {
    const res = await studentService.getVCCourses(catId);
    console.log(res?.data)
    return res?.data
  }

// fetchCourses()

  const query = useQuery(["course_cat"], fetchCourseCategories);

  const {data, loading} = useQuery(["courses", catId], fetchCourses);
  // const {data, loading} = useQuery(["courses_category",], fetchCourses);



  return (
    <div>
      <div className="w-full horizontal-scrollbar overflow-x-scroll flex flex-col font-light ">
        <div className="w-[1100px] flex flex-col space-y-4 py-4 px-2">
          {query?.data ? <CourseTabs courseCategories={query.data} catId = {catId} setCatId = {setCatId} /> : null}
        </div>
      </div>

      <div className="w-full grid justify-items-center sm:justify-items-start sm:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 gap-x-10 gap-y-10 mt-10">
        {data?.map((el, index) => (
          <ContentCard key={index} data={el} />
        ))}
      </div>
    </div>
  );
};

const CourseTabs = ({ courseCategories, setCatId, catId }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const tabs = courseCategories;

  const [currentTab, setCurrentTab] = useState(1);


  useEffect(() => {
    setCatId(currentTab)
  }, [currentTab])
  
  const handleClick = (id) => {
    setCurrentTab(id);
    setCatId(id)
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
