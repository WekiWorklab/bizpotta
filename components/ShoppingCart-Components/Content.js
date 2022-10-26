import React from "react";
import { AiFillStar } from "react-icons/ai";
import { offer } from "../../public";
import ContentCarousel from "../Content-Components/ContentCarousel";
import { Data, instructorData } from "../Content-Components/Data";
import InstructorCarousel from "../Content-Components/InstructorCarousel";

const Content = () => {
  return (
    <div className="relative w-full h-full bg-white  flex flex-col mt-[90px] md:mt-[120px]  md:translate-x-[200px] md:w-[calc(100%-200px)] pl-8 py-10">
      <div className="text-md font-bold">Shopping Cart</div>

      <div className="flex flex-row mt-8 gap-x-48">
        <div>
          <CourseCard />
          <CourseCard />
        </div>

        <CouponCard />
      </div>

      <div className="flex flex-col mt-10 xl:flex-row  w-full">
        <div className="bg-white w-full m-auto  ">
          <div className="pt-[50px] flex flex-col">
            <p className="text-[14px] mb-4 md:text-md font-semibold md:mb-8 ml-4">
              Because you liked a course on fashion designing
            </p>
            {/* <div className="block w-[360px] m-auto md:hidden">
              <ContentCarousel data={Data} smallScreen={true} />
            </div>
            <div className="hidden md:block">
              <ContentCarousel data={Data} smallScreen={false} bottom={true} />
            </div> */}
            <div className="block w-[360px] m-auto md:hidden w-full">
              <ContentCarousel data={Data} screen={[1.5, 10]} />
            </div>
            <div className="hidden m-auto md:block lg:hidden w-full">
              <ContentCarousel data={Data} screen={[2, 20]} />
            </div>
            <div className="hidden lg:block w-full">
              <ContentCarousel data={Data} screen={[4, 30]} />
            </div>
          </div>
          <div className="pt-[50px] flex flex-col">
            <p className="text-[14px] mb-4 md:text-md font-semibold md:mb-8 ml-4">
              Based on recent activites
            </p>
            {/* <div className="block w-[360px] m-auto md:hidden">
              <ContentCarousel data={Data} smallScreen={true} />
            </div>
            <div className="hidden md:block">
              <ContentCarousel data={Data} smallScreen={false} bottom={true} />
            </div> */}

            <div className="block w-[360px] m-auto md:hidden w-full">
              <ContentCarousel data={Data} screen={[1.5, 10]} />
            </div>
            <div className="hidden m-auto md:block lg:hidden w-full">
              <ContentCarousel data={Data} screen={[2, 20]} />
            </div>
            <div className="hidden lg:block w-full">
              <ContentCarousel data={Data} screen={[4, 30]} />
            </div>
          </div>
          <div className="pt-[50px] flex flex-col">
            <p className="text-[14px] mb-4 md:text-md font-semibold md:mb-8 ml-4 ">
              Instructors
            </p>
            <div className="block w-[360px] m-auto md:hidden">
              <InstructorCarousel data={instructorData} smallScreen={true} />
            </div>
            <div className="hidden md:block">
              <InstructorCarousel
                data={instructorData}
                smallScreen={false}
                bottom={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

const CourseCard = () => {
  return (
    <div className="w-[600px] h-[140px] bg-white shadow-xl flex flex-row  px-4 mb-8">
      <div className="h-full flex items-center justify-start">
        <img
          src={offer.src}
          alt=""
          className="w-[85px] h-[85px] rounded-full "
        />
      </div>
      <div className="flex flex-col justify-center ml-3 w-[350px]">
        <p className="text-[14px] font-bold">Introduction to Hydroponics</p>
        <p className="text-[11px] text-gray-400 ">
          By Introduction to Hydroponics Introduction to Hydroponics
          Introduction to Hydroponics
        </p>
        <p className="text-[12px] text-gray-400">Price: #5000</p>
        <div className="text-[12px] text-gray-400 flex flex-row items-center">
          <p className="mr-2"> Rating. 4.7</p>
          <AiFillStar size={14} color="#FFC700" />
          <AiFillStar size={14} color="#FFC700" />
          <AiFillStar size={14} color="#FFC700" />
          <AiFillStar size={14} color="#FFC700" />
          <AiFillStar size={14} color="#FFC700" />
        </div>
      </div>
      <div className="text-[13px] flex flex-col justify-center">
        <div>Remove</div>
        <div>Add to wish list</div>
      </div>
    </div>
  );
};

const CouponCard = () => {
  return (
    <div className="w-[300px] h-[350px] border shadow-lg bg-white px-5 py-10">
      <p className="text-[14px] font-semibold">Apply Coupon</p>

      <div className="w-full h-[35px] border rounded-md flex pl-2 mt-6">
        <input className="w-[80%] h-full outline-none text-[13px] " />
        <div className="w-[20%] bg-darkBlue centerFlex text-[12px] rounded-r-md text-white ">
          Apply
        </div>
      </div>

      <div className="w-full flex justify-between items-center mt-16">
        <div className="text-[14px] font-semibold">Total</div>
        <div className="text-[11px]">10% discount</div>
      </div>

      <div className="text-[12px] mt-4">#10000</div>

      <div className="centerFlex mt-6">
        <div className="w-[120px] h-[35px] centerFlex text-[13px] rounded-md bg-bizpotta-green">
          Continue
        </div>
      </div>
    </div>
  );
};
