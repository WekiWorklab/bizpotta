import React from "react";
import { useState } from "react";

import { BsArrowLeft } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { OnboardingSvg } from "../public/vectors/onboardingSvg";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Select from "react-select";

const Onboard = ({ data }) => {
  const router = useRouter();
  console.log(data);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [dropdown, setDropdown] = useState("usertype");
  const [toggleDrop, setToggleDrop] = useState({ user: false, work: false, sector: false, job: false });

  const [userType, setUserType] = useState();
  const [workType, setWorkType] = useState();
  const [industry, setIndustry] = useState();
  const [jobDesc, setJobDesc] = useState();
  const { user, work, sector, job } = toggleDrop;

  const handleDropDown = (type, type_name, type_value) => {
    setDropdown(type);
    setToggleDrop((prev) => ({ ...prev, [type_name]: !type_value }));
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setWorkType(value);
  };

  const handleNext = () => {
    if (userType === "Student") {
      router.push("/learners-onboarding");
    } else if (userType === "Mentor" || userType === "Tutor") {
      router.push("/creators/profile");
    }
  };

  const data1 = ["Tutor", "Mentor", "Student"];
  const data2 = [
    "Entrepreneurial Leadership",
    "Foundational Structure for Effective Business Management",
    "The Discipline of Execution",
    "Disruptive Business Models ",
    "Resource Mobilization and Allocation for Start-Ups",
    "Brand Management and Creative Globalization",
    "Maximizing Social Tools for Business Success",
    "Foundational Accounting for SMEs",
    "Understanding Sales and Marketing",
    "Business Plan Development",
  ];
  const data3 = ["IT and software", "Agriculture", "Business development", "Building and construction", "Engineering", "Arts", "Fashion design"];

  return (
    <div className='w-full min-h-screen px-2 md:px-4 xl:px-32  py-20'>
      <div className='flex items-center gap-x-2 text-[13px] text-[#7C7C7C]'>
        <BsArrowLeft className='cursor-pointer' />
        <p>Back</p>
      </div>

      <div className='flex h-auto item-center my-auto gap-x-6 xl:justify-around mt-20 '>
        <div className='hidden lg:flex flex-col justify-center items-center'>
          <OnboardingSvg />
          <p className='font-bold text-center mt-8'>New to bizpotta?</p>
          <p className='text-[13px] text-[#7C7C7C] text-center mt-4'>Help us know the best program you would like to run</p>
        </div>

        <div className='flex flex-col justify-start items-start'>
          <p className='font-bold text-lg'>Lets help you set up</p>
          <div className='flex gap-x-3 md:gap-x-6 mt-6'>
            <p className='text-[#282828] text-[14px]'>I am a (an) </p>
            <div
              className='-mt-1 relative min-w-[100px] border-b-[3px] border-bizpotta-green pp'
              onClick={() => handleDropDown("usertype", "user", user)}
            >
              <p className='text-center text-[14px] text-[#282828] mr-4'>{userType}</p>
              <BiChevronDown className='absolute right-0 text-[20px] top-1' color='#8F8F8F' />
              {dropdown === "usertype" && user && (
                <OnboardingDropDown
                  setUserType={setUserType}
                  setIndustry={setIndustry}
                  setJobDesc={setJobDesc}
                  setDropdown={setDropdown}
                  type='usertype'
                  data={data1}
                />
              )}
            </div>
          </div>

          {(userType === "Mentor" || userType === "Tutor") && (
            <div className=''>
              <div>
                <div className='flex gap-x-3 md:gap-x-6 mt-10 items-center justify-center'>
                  <p className='text-[#282828] text-[14px]'>I am representing</p>
                  <div className='-mt-4 relative min-w-[120px] border-b-[3px] border-bizpotta-green pp'>
                    <input
                      className='text-center text-[#282828] text-[14px] mr-4 outline-0 focus:border-0 focus:ring-0 w-full'
                      value={workType}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className='w-full flex justify-end text-[10px] pr-16'>(Where do you work)</div>
              </div>

              <div className='flex gap-x-3 md:gap-x-6 mt-6'>
                <p className='text-[#282828] text-[14px]'>My business industry is ?</p>
                <div
                  className=' relative min-w-[100px] border-b-[3px] border-bizpotta-green pp'
                  onClick={() => handleDropDown("industry", "sector", sector)}
                >
                  <p className='text-center text-[#282828] text-[14px] mr-4'>{industry}</p>
                  <BiChevronDown className='absolute right-0 text-[20px] top-1' color='#8F8F8F' />
                  {dropdown === "industry" && sector && (
                    <OnboardingDropDown
                      setUserType={setUserType}
                      setIndustry={setIndustry}
                      setJobDesc={setJobDesc}
                      type='industry'
                      data={data2}
                      setDropdown={setDropdown}
                    />
                  )}
                </div>
              </div>

              <div className='flex gap-x-3 md:gap-x-6 mt-6'>
                <p className='text-[#282828] text-[14px]'>My job description is ?</p>
                <div
                  className=' relative min-w-[100px] border-b-[3px] border-bizpotta-green pp'
                  onClick={() => handleDropDown("jobDesc", "job", job)}
                >
                  <p className='text-center text-[#282828] text-[14px] mr-4'>{jobDesc}</p>
                  <BiChevronDown className='absolute right-0 text-[20px] top-1' color='#8F8F8F' />
                  {dropdown === "jobDesc" && job && (
                    <OnboardingDropDown
                      setUserType={setUserType}
                      setJobDesc={setJobDesc}
                      setIndustry={setIndustry}
                      setDropdown={setDropdown}
                      type='jobDesc'
                      data={data3}
                    />
                  )}
                </div>
              </div>
            </div>
          )}

          <div></div>
        </div>
      </div>
      <div className='w-full flex justify-end mt-16 items-end'>
        <div className='w-[100px] h-[40px] centerFlex bg-gray-300 text-[#7C7C7C] rounded-md cursor-pointer' onClick={() => handleNext()}>
          Next
        </div>
      </div>
    </div>
  );
};

export default Onboard;

const OnboardingDropDown = ({ data, type, setUserType, setIndustry, setJobDesc, setDropdown }) => {
  const handleClick = (el) => {
    console.log(type, el);

    switch (type) {
      case "usertype":
        setUserType(el);
        break;
      case "industry":
        setIndustry(el);
        break;
      case "jobDesc":
        setJobDesc(el);
        break;
      default:
        break;
    }

    setDropdown("");
  };

  return (
    <div className='absolute top-5 left-[-20px] sm:left-2 z-10 px-2 py-3 flex flex-col justify-center items-start bg-white shadow-md rounded-lg'>
      {data.map((el, index) => (
        <div
          key={index}
          className='py-2 px-2 hover:bg-blue-300 text-[13px] rounded-md hover:text-white w-[250px] break-words'
          onClick={() => handleClick(el)}
        >
          {el}
        </div>
      ))}
    </div>
  );
};
