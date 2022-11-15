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
import useCourse from "../../hooks/useCourse";
import { useRouter } from "next/router";

export const LoadingCardSection = ({ contentTitle }) => {
  const arr = new Array(4).fill("");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-x-8 gap-y-10 justify-items-center mb-20">
      {arr.map((el, index) => (
        <div
          key={index}
          className="w-[220px] h-[220px] flex flex-col justify-end rounded-[4px] skeleton-parent dropdown-shadow "
        >
          <div className="clip-card-path2 text-[white] h-3/5 flex flex-col gap-y-2 justify-end  px-2 pb-2 rounded-b-md skeleton-child1">
            <div className="w-3/4 h-[15px]  skeleton-child2" />
            <div className="w-3/4 h-[15px]  skeleton-child2" />
            {/* <div/> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export const StudentLoadingCardSection = ({ contentTitle }) => {
  const arr = new Array(4).fill("");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  xl:grid-cols-3 gap-x-8 gap-y-10 justify-items-center mb-20">
      {arr.map((el, index) => (
        <div
          key={index}
          className="w-[220px] h-[220px] flex flex-col justify-end rounded-[4px] skeleton-parent dropdown-shadow "
        >
          <div className="clip-card-path2 text-[white] h-3/5 flex flex-col gap-y-2 justify-end  px-2 pb-2 rounded-b-md skeleton-child1">
            <div className="w-3/4 h-[15px]  skeleton-child2" />
            <div className="w-3/4 h-[15px]  skeleton-child2" />
            {/* <div/> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export const ContentCardSection = ({ data, contentTitle, courseType }) => {
  // console.log(data, contentTitle)
  return (
    <div className="">
      {data?.length > 0 ? (
        <div className="flex flex-col">
          <p className="text-[14px] text-start   mb-4 md:text-md font-semibold md:font-bold md:mb-8  ">
            {contentTitle}
          </p>
          <div className="pt-3 rounded-sm">
            <div className="block w-full sm:w-[400px] md:hidden ">
              <ContentCarousel
                data={data}
                screen={[1.5, 10]}
                type={courseType}
              />
            </div>
            <div className="hidden md:block lg:hidden w-full">
              <ContentCarousel data={data} screen={[2, 20]} type={courseType} />
            </div>
            <div className="hidden lg:block w-full">
              <ContentCarousel data={data} screen={[4, 30]} type={courseType} />
            </div>
          </div>
        </div>
      ) : null}
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
    <div>
      {data?.length > 0 ? (
        <div className="flex flex-col">
          <p className="text-[14px] text-start mb-4 md:text-md font-semibold md:font-bold md:mb-8  ">
            {contentTitle}
          </p>
          <div className="pt-3 rounded-sm">
            <div className="block w-full sm:w-[400px] md:hidden w-full ">
              <ContentCarousel
                data={data}
                screen={[1.5, 10]}
                type={courseType}
              />
            </div>
            <div className="hidden md:block lg:hidden w-full">
              <ContentCarousel data={data} screen={[2, 20]} />
            </div>
            <div className="hidden lg:block w-full">
              <ContentCarousel data={data} screen={[3, 30]} type={courseType} />
            </div>
          </div>
        </div>
      ) : null}
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
  const [catId, setCatId] = useState();

  const fetchCourseCategories = async () => {
    const results = await axios.get(`${base}/courses-categories`);
    return results.data.data;
  };

  const fetchCourses = async (Id) => {
    console.log(Id);
    // const res = await studentService.getVCCourses(Id.queryKey[1]);
    const res = await studentService.getVCCourses(Id);
    console.log(res?.data);
    return res?.data;
  };

  const query = useQuery(["course_cat"], fetchCourseCategories);
  // const { data, isLoading } = useQuery(["courses", catId], fetchCourses);
  const { data, isLoading } = useQuery(["courses", catId], () =>
    fetchCourses(catId)
  );

  if (isLoading) {
    return (
      <div className="mt-20">
        <LoadingCardSection />
      </div>
    );
  }

  return (
    <div>
      <div className="w-full horizontal-scrollbar overflow-x-scroll flex flex-col font-light ">
        <div className="w-[1100px] flex flex-col space-y-4 py-4 px-2">
          {query?.data ? (
            <CourseTabs
              courseCategories={query.data}
              catId={catId}
              setCatId={setCatId}
            />
          ) : null}
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

  const [currentTab, setCurrentTab] = useState(catId || 1);

  useEffect(() => {
    setCatId(currentTab);
  }, [currentTab]);

  const handleClick = (id) => {
    console.log(id);
    setCurrentTab(id);
    setCatId(id);
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


export const StudentPurchaseSection = () => {


  const { getMyCourses } = useCourse();
  const router = useRouter();

  const { data, isLoading } = useQuery(["purchased_courses"], getMyCourses);

  if(isLoading){
    return(
    <div className="w-4/5 h-[185px] flex flex-col p-3 rounded-md border skeleton-parent">
      <div className="w-[100px] h-[100px] rounded-md skeleton-child1" />
      <div className="w-full h-[20px] skeleton-child1 mt-6" />
      <div className="w-full h-[20px] skeleton-child1 mt-6" />

    </div>
    )
  }


  return (
      <div>
          <p className="text-[14px] text-start mb-4 md:text-md font-semibold md:font-bold md:mb-8  ">
            Purchased courses
          </p>
          <div className="hidden xl:flex xl:w-full">
            <CourseCarousel screen="big" data={data} />
          </div>

          {/* Medium screens */}
          <div className="hidden lg:flex lg:w-full xl:hidden">
            <CourseCarousel screen="medium" data={data} />
          </div>

          {/* Small screens */}
          <div className="hidden sm:flex sm:flex-nowrap sm:w-full lg:hidden">
            <CourseCarousel screen="small" data={data} />
          </div>

          {/* Mobile */}
          <div className="flex w-full sm:hidden">
            <CourseCarousel screen="mobile" data={data} />
          </div>
      </div>
  )

}


export const CourseCarousel = ({ data, screen, type }) => {
  const router = useRouter();

  const slidesPerView = () => {
    if (screen === "big") {
      return 2.5;
    } else if (screen === "medium") {
      return 2.4;
    } else if (screen === "small") {
      return 1.6;
    } else if (screen === "mobile") {
      return 1.2;
    }
  };

  const spaceBtw = () => {
    if (screen === "big") {
      return 10;
    } else if (screen === "medium") {
      return 10;
    } else if (screen === "small") {
      return 10;
    } else if (screen === "mobile") {
      return 10;
    }
  };


  return (
    <Swiper
      slidesPerView={slidesPerView()}
      spaceBetween={spaceBtw()}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Scrollbar]}
      style={{ backgroundColor: "transparent" }}
    >
      {data?.map((el, index) => (
        <SwiperSlide
          key={index}
          style={{
            minWidth: "325px",
            maxWidth: "325px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "start",
            backgroundColor: "transparent",
          }}
          className=" "
          
        >
          <CourseCard data={el} length = {data.length} ID = {index + 1} />
        </SwiperSlide>
      ))}

      <div className="h-[45px] "></div>
    </Swiper>
  );
};



const CourseCard = ({data, ID, length}) => {
  
  const router = useRouter()
  let total = 50
  let completed = 23

  const handleClick = () => {
    router.push(`/students/courses/${data.course.id}`)
  }

  return (
    <div className="border sm:border-1 w-[325px] h-[185px] rounded-md bg-white relative flex flex-col pl-4 pr-2 pt-4 box-overflow justify-self-start" onClick={() => handleClick()}>
      <p className="absolute top-[5px] right-[10px] text-[11px]">
        Lesson {ID} out of {length}
      </p>
      <div className="w-[100px] h-[55px]">
        <img
          src={data?.course?.image}
          alt=""
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      <p className="mt-4 text-[15px] box-overflow">{data?.course?.name}</p>
      <p className="text-[12px] mt-1 box-overflow">{data?.course?.course_instructor?.firstName}</p>
      <div className="flex flex-row items-center justify-between mt-3">
        <ProgressBar time={{ completed, total }} />
        <span className="text-xs">{total - completed} mins left</span>
      </div>
    </div>
  );
};



const ProgressBar = ({time:{total, completed}}) => {
    
  return (
    <div className='w-[225px] h-[10px] bg-[#C4C4C4] rounded-[10px]'>
        <div className='h-full bg-[green] rounded-[10px]' style={{width: `${(completed/total) * 100}%`}}></div>
    </div>
  )
}