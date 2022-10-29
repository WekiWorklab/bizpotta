import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import { BsArrowRight, BsDashLg } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { LeftGroupCard, offer, RightGroupCard } from "../../../public";
import {
  ExpertsCarousel,
  MainCarousel,
  TestimonialCarousel,
} from "./MainCarousel";

const BottomSection = () => {
  return (
    <div className="w-full  bg-gradient-to-b from-[#FDFFFA] to-[#FDFFFA] pb-20 pt-10">
      <p className=" text-center sm:px-40 text-xl font-bold">Upcoming Sessions </p>

      <div className="my-8 px-20 py-10 masters-shadow relative">
        <div className="absolute left-0 top-0">
          <LeftGroupCard />
        </div>
        <div className="absolute right-0 top-0">
          <RightGroupCard />
        </div>

        <div className="flex flex-col sm:flex-row items-center px-2 sm:px-6 py-3 sm:py-8 w-full ">
          <div className="w-full mt-10 md:mt-0  sm:w-2/3 ">
            <div className="flex items-center gap-x-2">
              <GoPrimitiveDot size={14} color="red" />
              <p className="font-bold text-[14px]">Live</p>
            </div>
            <p className=" text-center sm:text-left text-lg text-darkBlue font-bold mt-3">
              Getting the right client
            </p>
            <div className="  flex justify-center sm:justify-start items-center  gap-x-4">
              <p className="text-[13px]">Jan 12th, 2022</p>
              <p className="text-[12px]">Friday, 10:00pm</p>
            </div>
            <div className="hidden sm:block text-[12px] w-4/5 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
              blandit id mollis metus porttitor ut aliquam. Aliquam fermentum
              felis viverra egestas justo, lacinia ac. Nibh etiam morbi egestas
              sed id iaculis. Eu eget ac felis ac. Quisque phasellus
            </div>
            <div className="mt-2 sm:mt-4 flex justify-center sm:justify-start items-center text-xs gap-x-2">
              <p>Hastags</p>
              <div className="p-1 rounded-sm border border-[#b1adad]">UI</div>
              <div className="p-1 rounded-sm border border-[#b1adad]">UX</div>
              <div className="p-1 rounded-sm border border-[#b1adad]">
                Design thinking
              </div>
            </div>
            <div className="mt-4 flex justify-center sm:justify-start items-center text-xs gap-x-2">
              <div
                className="w-[40px] h-[40px] rounded-full bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url(${offer.src})` }}
              />
              <p>723+ attending</p>
            </div>

            <div className="flex gap-x-4 items-center justify-center sm:justify-start mt-2 sm:mt-8">
              <div className="w-[100px] sm:w-[150px] h-[32px] sm:h-[40px] rounded-md bg-bizpotta-green centerFlex text-[13px] sm:text-[15px] ">
                Register
              </div>
              <div className="w-[100px] sm:w-[150px] h-[32px] sm:h-[40px] rounded-md bg-transparent centerFlex text-[13px] sm:text-[15px] border border-[#b1adad]">
                Set reminder
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full sm:w-1/3">
            <div
              className="w-full mt-3 sm:mt-0 h-[200px] bg-no-repeat bg-cover bg-center "
              style={{ backgroundImage: `url(${offer.src})` }}
            ></div>
            <div className="w-full grid grid-cols-3 gap-x-1 mt-2">
              <div className="flex flex-col items-center justify-center py-1 rounded-md border border-[#b1adad]">
                <p className="text-[11px]">Days</p>
                <p className="text-[14px]">07</p>
              </div>
              <div className="flex flex-col items-center justify-center py-1 rounded-md border border-[#b1adad]">
                <p className="text-[11px]">Days</p>
                <p className="text-[14px]">07</p>
              </div>
              <div className="flex flex-col items-center justify-center py-1 rounded-md border border-[#b1adad]">
                <p className="text-[11px]">Days</p>
                <p className="text-[14px]">07</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-2 sm:px-10 xl:px-20 mt-20 xl:mt-32">
        <div className="text-center sm:text-left text-xl font-bold">
          Learn social tools for business success
        </div>
        {/* <div className='w-full'>  
            <MainCarousel />
            </div> */}
        <div className="flex justify-center w-full md:hidden w-full">
            <MainCarousel screen={[1.1, 10]} />
          </div>
        <div className="hidden  md:block lg:hidden w-full">
          <MainCarousel screen={[2, 20]} />
        </div>
        <div className="hidden lg:block w-full">
          <MainCarousel screen={[3, 30]} />
        </div>
      </div>

      <div className="px-3 sm:px-10 xl:px-20 mt-20 xl:mt-32">
        <div className="text-center sm:text-left text-xl font-bold">
          Get to Meet Top Business Expert
        </div>
        {/* <div className='w-full mt-10'>  
            <ExpertsCarousel />
            </div> */}
        <div className="block mx-auto md:hidden w-full">
          <ExpertsCarousel screen={[1, 10]} />
        </div>
        <div className="hidden  md:block lg:hidden w-full">
          <ExpertsCarousel screen={[2, 20]} />
        </div>
        <div className="hidden lg:block w-full">
          <ExpertsCarousel screen={[3, 30]} />
        </div>
      </div>

      <div className="px-3 sm:px-10 xl:px-20 mt-20 xl:mt-32">
        <div className="text-center sm:text-left text-xl font-bold">
          What our learners have to say
        </div>
        {/* <div className='w-full'>  
            <TestimonialCarousel />
            </div> */}
        <div className="block mx-auto md:hidden w-full">
          <TestimonialCarousel screen={[1, 5]} />
        </div>
        <div className="hidden  md:block lg:hidden w-full">
          <TestimonialCarousel screen={[1.6, 20]} />
        </div>
        <div className="hidden lg:block w-full">
          <TestimonialCarousel screen={[2.5, 30]} />
        </div>
      </div>

      <div className="px-3 sm:px-10 xl:px-20 mt-20 xl:mt-32 pb-20 flex flex-col lg:flex-row items-start">
        <div className="">
          <p className="text-[24px] md:text-[30px] font-bold">
            Any questions ?
          </p>
          <p className="text-[24px] md:text-[30px] font-bold">We got you</p>
          <p className="text-[14px]  md:mt-10">
            Yet bed any for assistance indulgence unpleasing. Not thoughts all
            exercise blessing. Indulgence way everything joy alteration
            boisterous the attachment.
          </p>

          <div className="flex flex-row items-center gap-x-4 mt-3 xl:mt-8 text-blue-500">
            <p>More FAQs</p>
            <BsArrowRight />
          </div>
        </div>

        <div className="w-full md:min-w-[600px]">
          <QuestionDropdown title="How this work?" />
          <QuestionDropdown title="How this work?" />
          <QuestionDropdown title="How this work?" />
          <QuestionDropdown title="How this work?" />
        </div>
      </div>
    </div>
  );
};

export default BottomSection;

const QuestionDropdown = ({ title }) => {
  const childRef = useRef({});
  const parentRef = useRef({});
  const [show, setShow] = useState(false);
  const [height, setHeight] = useState(0);

  const ClickHandler = () => {
    if (!show) {
      setHeight(parentRef.current?.firstChild.offsetHeight);
    } else if (show) {
      setHeight(0);
    }
    setShow((prev) => !prev);
  };

  return (
    <div className="w-full pb-4 border-b-2 border-gray-700 mt-4 ">
      <div className="flex flex-row items-center justify-between darkBlue mb-4">
        <p className="font-bold">{title}</p>
        {show ? (
          <BsDashLg onClick={ClickHandler} className="cursor-pointer" />
        ) : (
          <AiOutlinePlus onClick={ClickHandler} className="cursor-pointer" />
        )}
      </div>

      <div
        className=" overflow-y-hidden parent-drop"
        style={{ height: `${height}px` }}
        ref={parentRef}
      >
        <div
          className={`${
            show ? "show-drop" : "no-drop"
          } text-[14px] md:text-base`}
          ref={childRef}
        >
          Yet bed any for assistance indulgence unpleasing. Not thoughts all
          exercise blessing. Indulgence way everything joy alteration boisterous
          the attachment come and go health yesterday morning inclusion.
        </div>
      </div>
    </div>
  );
};

