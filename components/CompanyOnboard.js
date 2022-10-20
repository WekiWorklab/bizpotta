import React from "react";
import { useState } from "react";

import { Dialog, Transition } from "@headlessui/react";

import { BsArrowLeft } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { OnboardingSvg } from "../public/vectors/onboardingSvg";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { Fragment } from "react";
import { Reciept } from "../public";

import { MdOutlineCancel } from "react-icons/md";

const CompanyOnboard = ({ data }) => {
  const router = useRouter();

  const [toggleDrop, setToggleDrop] = useState({
    personnel: false,
    instructor: false,
    work: false,
    job: false,
  });

  const [companyName, setCompanyName] = useState();
  const [industry, setIndustry] = useState();
  const [jobDesc, setJobDesc] = useState();

  const handleCompanyName = (event) => {
    const { value } = event.target;
    setCompanyName(value);
  };

  const handleNext = () => {

    //This handle the comapny registration

    // Take creator to creator page
    router.push('/creators/courses')

  };

  return (
    <div className="w-full min-h-screen px-2 md:px-4 xl:px-32 relative py-20">
      <div className="flex h-auto item-center my-auto gap-x-6 xl:justify-around mt-20 ">
        <div className="hidden lg:flex flex-col justify-center items-center">
          <OnboardingSvg />
          <p className="font-bold text-center mt-8">New to bizpotta?</p>
          <p className="text-[13px] text-[#7C7C7C] text-center mt-4">
            Help us know the best program you would like to run
          </p>
        </div>

        <div className="flex flex-col justify-start items-start">
          <p className="font-bold text-lg">Lets help you set up</p>

          <div>
            <div>
              <div className="flex gap-x-3 md:gap-x-6 mt-10 items-center justify-center">
                <p className="text-[#282828] text-[14px]">
                  My company’s name is
                </p>
                <div className="mt-4 relative min-w-[120px] max-w-full border-b-[3px] border-bizpotta-green pp">
                  <input
                    className="text-center text-[#282828] text-[14px] mr-4 outline-0 ring-0 border-0 focus:border-0 focus:ring-0 w-full uppercase font-bold"
                    value={companyName}
                    onChange={handleCompanyName}
                    type="input"
                  />
                </div>
              </div>
              <div className="w-full flex justify-end text-[10px]">
                (What is the name of your company)
              </div>
            </div>

            <IndustryDropDown
              data={data}
              industry={industry}
              setIndustry={setIndustry}
              toggleDrop={toggleDrop}
              setToggleDrop={setToggleDrop}
            />

            <JobDescDropdown
              jobDesc={jobDesc}
              setJobDesc={setJobDesc}
              data={data}
              toggleDrop={toggleDrop}
              setToggleDrop={setToggleDrop}
            />
          </div>

          <div></div>
        </div>
      </div>
      <div className="w-full flex justify-end mt-16 items-end">
        <button
          className="w-[100px] h-[40px] centerFlex bg-gray-300 text-[#7C7C7C] rounded-md "
          onClick={() => handleNext()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CompanyOnboard;

const IndustryDropDown = ({
  data,
  industry,
  setIndustry,
  toggleDrop,
  setToggleDrop,
}) => {
  console.log(data);

  const handleDropDown = () => {
    setToggleDrop((prev) => ({
      ...prev,
      instructor: !prev.instructor,
      personnel: false,
      work: false,
      job: false,
    }));
  };

  const handleClick = (el) => {
    setIndustry(el);
  };

  return (
    <div className="flex gap-x-3 md:gap-x-6 mt-6">
      <p className="text-[#282828] text-[14px]">My business industry is ?</p>
      <div
        className="-mt-1 relative min-w-[100px] border-b-[3px] border-bizpotta-green pp"
        onClick={() => handleDropDown()}
      >
        <p className="text-center text-[14px] text-[#282828] mr-4">
          {industry?.name}
        </p>
        <BiChevronDown
          className="absolute right-0 text-[20px] top-1"
          color="#8F8F8F"
        />

        {toggleDrop.instructor && (
          <div className="absolute top-8 left-[-20px] sm:left-2 z-10 px-2 py-3 flex flex-col justify-center items-start bg-white shadow-md rounded-lg">
            {data?.categories.map((el, index) => (
              <div
                key={index}
                className="py-2 px-2 hover:bg-blue-300 text-[13px] rounded-md hover:text-white w-[250px] break-words"
                onClick={() => handleClick(el)}
              >
                {el.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const JobDescDropdown = ({
  data,
  jobDesc,
  setJobDesc,
  toggleDrop,
  setToggleDrop,
}) => {
  const handleDropDown = () => {
    setToggleDrop((prev) => ({
      ...prev,
      job: !prev.job,
      personnel: false,
      work: false,
      instructor: false,
    }));
  };

  const handleClick = (el) => {
    setJobDesc(el);
  };

  return (
    <div className="flex gap-x-3 md:gap-x-6 mt-6">
      <p className="text-[#282828] text-[14px]">My job description is ?</p>
      <div
        className="-mt-1 relative min-w-[100px] border-b-[3px] border-bizpotta-green pp"
        onClick={() => handleDropDown()}
      >
        <p className="text-center text-[14px] text-[#282828] mr-4">{jobDesc}</p>
        <BiChevronDown
          className="absolute right-0 text-[20px] top-1"
          color="#8F8F8F"
        />

        {toggleDrop.job && (
          <div className="absolute top-8 left-[-20px] sm:left-2 z-10 px-2 py-3 flex flex-col justify-center items-start bg-white shadow-md rounded-lg">
            {data?.jobDescriptionsForCompany.map((el, index) => (
              <div
                key={index}
                className="py-2 px-2 hover:bg-blue-300 text-[13px] rounded-md hover:text-white w-[250px] break-words"
                onClick={() => handleClick(el)}
              >
                {el}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
