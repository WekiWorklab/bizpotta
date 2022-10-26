import React from "react";
import { offer, LeftGroupCard, RightGroupCard } from "../../../public";

import { GoPrimitiveDot } from "react-icons/go";
import { MainCarousel, TestimonialCarousel } from "./MainCarousel";

const MiddleSection = () => {
  return (
    <div className="w-full  bg-gradient-to-b from-[#FDFFFA] to-[#FDFFFA] py-24">
        <div className="px-20">
            <p className="text-xl font-bold">
            Expand your skillset, gain insights, and get support from mentors
            </p>
            <div
            className="w-full h-[500px] mt-10 bg-center bg-no-repeat bg-cover rounded-lg"
            style={{ backgroundImage: `url(${offer.src})` }}
            />
        </div>

      <div className="relative mt-40 flex item-center justify-center">
        <div className="absolute left-0 top-0">
            <LeftGroupCard />
        </div>
        <div className="absolute right-0 top-0">
            <RightGroupCard />
        </div>
        <div className="mt-10">
            <p className="text-xl font-bold">
            How mentors on Bizpotta can help achieve your dreams
            </p>
            <div className="w-full flex items-center justify-center gap-x-16 mt-10">
                <div className="w-[300px] h-[180px] text-white bg-darkBlue rounded-md py-4 px-6 flex flex-col justify-between">
                    <p>Career advice</p>
                    <p className="text-sm w-[90%]">
                    Navigate career transitions, promotions and access a sounding
                    board for career decisions.
                    </p>
                    <div className="w-[100px] h-[30px] centerFlex border rounded-md text-xs">
                    Get started
                    </div>
                </div>

                <div className="w-[300px] h-[180px] text-white bg-darkBlue rounded-md py-4 px-6 flex flex-col justify-between">
                    <p>Business Development</p>
                    <p className="text-sm w-[90%]">
                    Develop specific skills you want to improve in order to succeed in
                    your career..
                    </p>
                    <div className="w-[100px] h-[30px] centerFlex border rounded-md text-xs">
                    Get started
                    </div>
                </div>

                <div className="w-[300px] h-[180px] text-white bg-darkBlue rounded-md py-4 px-6 flex flex-col justify-between">
                    <p>Skills</p>
                    <p className="text-sm w-[90%]">
                    Develop specific skills you want to improve in order to succeed in
                    your career.
                    </p>
                    <div className="w-[100px] h-[30px] centerFlex border rounded-md text-xs">
                    Get started
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center gap-x-10 px-20 mt-40">
        <div className="flex items-center border masters-shadow2 border-[#b1adad] rounded-md px-6 py-8 w-2/3">
          <div className="w-2/3">
            <div className="flex items-center gap-x-2">
              <GoPrimitiveDot size={14} color="red" />
              <p className="font-bold text-[14px]">Live</p>
            </div>
            <p className="text-lg text-darkBlue font-bold mt-3">
              Getting the right client
            </p>
            <div className="flex items-center gap-x-4">
              <p className="text-[13px]">Jan 12th, 2022</p>
              <p className="text-[12px]">Friday, 10:00pm</p>
            </div>
            <div className="text-[12px] w-4/5 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
              blandit id mollis metus porttitor ut aliquam. Aliquam fermentum
              felis viverra egestas justo, lacinia ac. Nibh etiam morbi egestas
              sed id iaculis. Eu eget ac felis ac. Quisque phasellus
            </div>
            <div className="mt-4 flex items-center text-xs gap-x-2">
              <p>Hastags</p>
              <div className="p-1 rounded-sm border border-[#b1adad]">UI</div>
              <div className="p-1 rounded-sm border border-[#b1adad]">UX</div>
              <div className="p-1 rounded-sm border border-[#b1adad]">
                Design thinking
              </div>
            </div>
            <div className="mt-4 flex items-center text-xs gap-x-2">
              <div
                className="w-[40px] h-[40px] rounded-full bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url(${offer.src})` }}
              />
              <p>723+ attending</p>
            </div>

            <div className="flex gap-x-4 items-center mt-8">
              <div className="w-[150px] h-[40px] rounded-md bg-bizpotta-green centerFlex text-[15px] ">
                Register
              </div>
              <div className="w-[150px] h-[40px] rounded-md bg-transparent centerFlex text-[15px] border border-[#b1adad]">
                Set reminder
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center  w-1/3">
            <div
              className="w-full h-[200px] bg-no-repeat bg-cover bg-center "
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

        <div className="w-1/3 h-full">
          <p className="text-[15px] font-bold">Upcoming events</p>
          <div className="gap-y-3 flex flex-col">
            <div className="bg-white rounded-md p-2 flex flex-col justify-center">
              <p className="text-[13px] w-2/3">
                Getting Started With Figma; A Designer’s First Step.........
              </p>
              <div className="flex flex-row items-center justify-between ">
                <div>
                  <p className="text-[13px]">August 7, 2022</p>
                  <p className="text-[10px]">Adekuncle Ajayi</p>
                </div>
                <div className="w-[80px] h-[24px] centerFlex bg-bizpotta-green text-[12px] rounded-[4px]">
                  Register
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md p-2 flex flex-col  justify-center">
              <p className="text-[13px] w-2/3">
                Getting Started With Figma; A Designer’s First Step.........
              </p>
              <div className="flex flex-row items-center justify-between ">
                <div>
                  <p className="text-[13px]">August 7, 2022</p>
                  <p className="text-[10px]">Adekuncle Ajayi</p>
                </div>
                <div className="w-[80px] h-[24px] centerFlex bg-bizpotta-green text-[12px] rounded-[4px]">
                  Register
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md p-2 flex flex-col  justify-center">
              <p className="text-[13px] w-2/3">
                Getting Started With Figma; A Designer’s First Step.........
              </p>
              <div className="flex flex-row items-center justify-between ">
                <div>
                  <p className="text-[13px]">August 7, 2022</p>
                  <p className="text-[10px]">Adekuncle Ajayi</p>
                </div>
                <div className="w-[80px] h-[24px] centerFlex bg-bizpotta-green text-[12px] rounded-[4px]">
                  Register
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    <div className="px-20">
      <div className="w-full mt-32">
        <div className="text-xl font-bold">
          Top courses on business plan development
        </div>
        <div className="w-full">
          <MainCarousel />
        </div>
      </div>

      <div className="w-full mt-36">
        <div className="text-xl font-bold">
          Most enrolled courses on disruptive business model
        </div>
        <div className="w-full">
          <MainCarousel />
        </div>
      </div>
    </div>

    </div>
  );
};

export default MiddleSection;
