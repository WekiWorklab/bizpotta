////
import React, { useState, useEffect } from "react";

/////
import MiddleSection from "./MiddleSection";
import TopSection from "./TopSection";
import useCourse from "../../hooks/useCourse.jsx";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { FullPageSpinner } from "../../components/Lib";
import { AiOutlineHeart, AiOutlineLeft, AiOutlineUpload } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";

const Content = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false)
  }, [router, id]);

  const image =
    "https://cdn.pixabay.com/photo/2022/01/17/17/20/bored-6945309__340.png";

    const weeksArr = new Array(6).fill("")
 

  return (
    <div className="relative w-full h-full bg-gray-50 flex flex-col pt-[90px] md:pt-[120px] md:justify-start md:translate-x-[200px] md:w-[calc(100%-200px)] px-2 md:px-4 pb-10">
    <div className=" w-full flex flex-col pt-4 pr-2 md:pr-6 ">
      <div className="text-[13px] cursor-pointer">
        <AiOutlineLeft className="inline mr-2" />
        <p className="inline">Go to home</p>
      </div>

      <div
        className="w-full h-[230px] mt-4  bg-no-repeat bg-cover bg-center flex justify-center items-center cursor-pointer"
        style={{ backgroundImage: `url(${image}) ` }}
        >
        <FaPlay size={40} color="white" />
      </div>

      <h1 className="text-[18px] font-[600] mt-4">Fundamentals of DSLR Photography</h1>
      <div className="flex flex-row items-center w-full justify-between ">
        <div className="flex flex-row items-center ">
          <img src={image} className="w-[40px] h-[40px] rounded-full mr-4 " />
          <p className="text-[12px] sm:text-base ">
            by Thomas Mat (Ph.d, Ms.c)
          </p>
        </div>
        <div className="flex flex-row justify-self-end  items-center">
          <IoIosPeople className="text-[20px] mr-4" />
          <p className="text-[13px] mr-4">
            1032 enrolled
          </p>
          <AiOutlineHeart className="text-[20px] mr-4" />
          <AiOutlineUpload className="text-[20px]" />
        </div>
      </div>

      <h1 className="mt-6 font-[600] text-[14px]">About this course</h1>
      <p className="text-[13px]">{data?.course?.description}</p>

      <h1 className="text-[13px] font-[600] mt-6">Description</h1>
      <div className=" flex flex-row justify-between md:grid grid-cols-3 text-[13px] ">
        <div className="flex flex-col ">
          <div>
            <span className="font-[600]">Skill level: </span>
            <span>{data?.course?.level}</span>
          </div>
          <div>
            <span className="font-[600]">Audio: </span>
            <span>{data?.course.language}</span>
          </div>
        </div>

        <div className="flex flex-col col-start-2">
          <div>
            <span className="font-[600]">Language: </span>
            <span>available in {data?.course?.language} language</span>
          </div>
          <div>
            <span className="font-[600]">Videos: </span>
            <span>{data?.course?.course_weeks.length}</span>
          </div>
          <div>
            <span className="font-[600]">Estimated course time: </span>
            <span>{data?.course?.course_weeks.length * 0.5} hrs</span>
          </div>
        </div>
      </div>

      <h1 className="font-[600] text-[14px] mt-6">Certificate</h1>
      <p className="text-[13px]">Certificate is issued on completion</p>

      <h1 className="font-[600] text-[14px] mt-6 ">What you will learn</h1>

      {weeksArr.map((el, index) => (
        <div key={index} className="">
          <li className="font-[600] text-[14px] mt-5 list-disc ">Introduction to photography?</li>
          <p className="text-[13px] leading-[24px]">
          Dui morbi nisl suscipit pharetra. Tristique sit nisl velit, vulputate sit nisl. Bibendum elit, non cursus rhoncus integer id. Tristique praesent in malesuada lacus, et. Vulputate pharetra in odio nisi fermentum semper lectus scelerisque. Eget vestibulum sapien augue feugiat morbi. Nibh pretium nibh et quis viverra magna. Nisl, urna quis donec rhoncus. Sollicitudin tincidunt in vitae scelerisque et viverra pharetra. Lectus in sodales duis euismod quis in. Facilisi sed non quis magna scelerisque posuere non id phasellus..
          </p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Content;
