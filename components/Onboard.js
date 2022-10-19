import React from "react";
import { useState } from "react";

import { BsArrowLeft } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { OnboardingSvg } from "../public/vectors/onboardingSvg";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useMemo } from "react";

const Onboard = ({ data }) => {
  const router = useRouter();
  console.log(data);

  const [toggleDrop, setToggleDrop] = useState({
    personnel: false,
    instructor: false,
    work: false,
    job: false,
  });

  const [userType, setUserType] = useState();
  // const [workType, setWorkType] = useState();
  const [mentorWork, setMentorWork] = useState();
  const [tutorWork, setTutorWork] = useState();
  const [industry, setIndustry] = useState();
  const [jobDesc, setJobDesc] = useState();

  const [show, setShow] = useState(false);

  const handleMentorChange = (event) => {
    const { value } = event.target;
    setMentorWork(value);
  };

  const handleTutorChange = (event) => {
    const { value } = event.target;
    setTutorWork(value);
    console.log(value);
  };

  const filteredItems = useMemo(() => {
    if (tutorWork) {
      return data?.tutorCompany.filter((company) => {
        return company.name.toLowerCase().includes(tutorWork.toLowerCase());
      });
    }
  }, [data, tutorWork]);

  const handleNext = () => {
    if (userType === "Student") {
      router.push("/learners-onboarding");
    } else if (userType === "Mentor" || userType === "Tutor") {
      router.push("/creators/profile");
    }
  };

  const personnel = [
    { id: 2, name: "Student" },
    { id: 3, name: "Mentor" },
    { id: 3, name: "Tutor" },
    { id: 4, name: "Institution" },
  ];

  return (
    <div className="w-full min-h-screen px-2 md:px-4 xl:px-32  py-20">
      <div className="flex items-center gap-x-2 text-[13px] text-[#7C7C7C]">
        <BsArrowLeft className="cursor-pointer" />
        <p>Back</p>
      </div>

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

          <PersonnelDropDown
            data={personnel}
            userType={userType}
            setUserType={setUserType}
            setIndustry={setIndustry}
            type="student"
            toggleDrop={toggleDrop}
            setToggleDrop={setToggleDrop}
            setJobDesc={setJobDesc}
          />

          {(userType?.name === "Mentor" || userType?.name === "Tutor") && (
            <div className="">
              <div>
                <div className="flex gap-x-3 md:gap-x-6 mt-10 items-center justify-center">
                  <p className="text-[#282828] text-[14px]">
                    I am representing
                  </p>
                  <div className="-mt-4 relative min-w-[120px] border-b-[3px] border-bizpotta-green pp">
                    {/* Input for Mentors */}
                    {userType?.name === "Mentor" && (
                      <input
                        className="text-center text-[#282828] text-[14px] mr-4 outline-0 ring-0 border-0 focus:border-0 focus:ring-0 w-full"
                        value={mentorWork}
                        onChange={handleMentorChange}
                        type="text"
                      />
                    )}

                    {/* Input for Tutors */}
                    {userType?.name === "Tutor" && (
                      <input
                        className="text-center text-[#282828] text-[14px] mr-4 outline-0 ring-0 border-0 focus:border-0 focus:ring-0 w-full"
                        value={tutorWork}
                        onChange={handleTutorChange}
                        type="search"
                        onClick={() => {
                          setShow(true);
                        }}
                      />
                    )}
                    {tutorWork && show && (
                      <div className="absolute top-8 left-[-20px] sm:left-2 z-10 px-2 py-3 flex flex-col justify-center items-start bg-white shadow-md rounded-lg">
                        {filteredItems?.map((el, index) => (
                          <div
                            key={index}
                            className="py-2 px-2 hover:bg-blue-300 text-[13px] rounded-md hover:text-white w-[250px] break-words"
                            onClick={() => {
                              setTutorWork(el.name);
                              setShow(false);
                            }}
                          >
                            {el.name}
                          </div>
                        ))}
                      </div>
                    )}
                    {/* {
                      filteredItems?.map((el, index) => (
                        <div key={index} className="">
                          {el.name}
                          jhbnmkj
                        </div>
                      ))
                    } */}
                  </div>
                </div>
                <div className="w-full flex justify-end text-[10px] pr-16">
                  (Where do you work)
                </div>
              </div>

              <IndustryDropDown
                data={data}
                industry={industry}
                setIndustry={setIndustry}
                userType={userType}
                type="instructor"
                toggleDrop={toggleDrop}
                setToggleDrop={setToggleDrop}
              />

              {industry && (
                <JobDescDropdown
                  jobDesc={jobDesc}
                  setJobDesc={setJobDesc}
                  data={data}
                  userType={userType}
                  toggleDrop={toggleDrop}
                  setToggleDrop={setToggleDrop}
                  industry={industry}
                />
              )}
            </div>
          )}

          <div></div>
        </div>
      </div>
      <div className="w-full flex justify-end mt-16 items-end">
        <div
          className="w-[100px] h-[40px] centerFlex bg-gray-300 text-[#7C7C7C] rounded-md cursor-pointer"
          onClick={() => handleNext()}
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default Onboard;

const PersonnelDropDown = ({
  data,
  userType,
  setUserType,
  type,
  toggleDrop,
  setIndustry,
  setToggleDrop,
  setJobDesc,
}) => {
  const handleDropDown = () => {
    setToggleDrop((prev) => ({
      ...prev,
      personnel: !prev.personnel,
      instructor: false,
      work: false,
      job: false,
    }));
  };
  const handleClick = (el) => {
    setUserType(el);
    setIndustry(null);
    setJobDesc(null);
  };

  return (
    <div className="flex gap-x-3 md:gap-x-6 mt-6">
      <p className="text-[#282828] text-[14px]">I am a (an)</p>
      <div
        onClick={() => handleDropDown()}
        className="-mt-1 relative min-w-[100px] border-b-[3px] border-bizpotta-green pp"
      >
        <p className="text-center text-[14px] text-[#282828] mr-4">
          {userType?.name}
        </p>
        <BiChevronDown
          className="absolute right-0 text-[20px] top-1"
          color="#8F8F8F"
        />
        {toggleDrop.personnel && (
          <div className="absolute top-8 left-[-20px] sm:left-2 z-10 px-2 py-3 flex flex-col justify-center items-start bg-white shadow-md rounded-lg">
            {data.map((el, index) => (
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

const IndustryDropDown = ({
  data,
  industry,
  setIndustry,
  userType,
  toggleDrop,
  setToggleDrop,
}) => {
  const [Data, setData] = useState();

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

  // console.log(toggleDrop);

  useEffect(() => {
    switch (userType.name) {
      case "Tutor":
        setData(data.categories);
        break;
      case "Mentor":
        setData(data.industries);
        break;
    }
  }, [data, userType]);

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
            {Data?.map((el, index) => (
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
  userType,
  toggleDrop,
  setToggleDrop,
  industry,
}) => {
  const [Data, setData] = useState();

  const handleDropDown = () => {
    setToggleDrop((prev) => ({
      ...prev,
      job: !prev.job,
      personnel: false,
      work: false,
      instructor: false,
    }));
  };

  // console.log(industry);

  const handleClick = (el) => {
    setJobDesc(el);
  };

  useEffect(() => {
    switch (userType?.name) {
      case "Tutor":
        setData(
          data.subCategories.filter(
            (el) => el.course_category_id === industry.id
          )
        );
        break;
      case "Mentor":
        // convert data.jobDescriptionsForCompany to array of objects with id and name properties
        const dataArr = [];
        for (let i = 0; i < data.jobDescriptionsForCompany.length; i++) {
          dataArr.push({ id: i + 1, name: data.jobDescriptionsForCompany[i] });
        }
        setData(dataArr);
        break;
    }
  }, [data, userType, industry]);

  return (
    <div className="flex gap-x-3 md:gap-x-6 mt-6">
      <p className="text-[#282828] text-[14px]">My job description is ?</p>
      <div
        className="-mt-1 relative min-w-[100px] border-b-[3px] border-bizpotta-green pp"
        onClick={() => handleDropDown()}
      >
        <p className="text-center text-[14px] text-[#282828] mr-4">
          {jobDesc?.name}
        </p>
        <BiChevronDown
          className="absolute right-0 text-[20px] top-1"
          color="#8F8F8F"
        />
        {toggleDrop.job && (
          <div className="absolute top-8 left-[-20px] sm:left-2 z-10 px-2 py-3 flex flex-col justify-center items-start bg-white shadow-md rounded-lg">
            {Data?.map((el, index) => (
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
