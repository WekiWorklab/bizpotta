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
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { onBoardUser } from "../store/creatorSlice";
import { setUser, reset } from "../store/authSlice";

const Onboard = ({ data }) => {
  const router = useRouter();
  const { isUserUpdated } = useSelector((state) => state.creator);
  const [showButton, setShowButton] = useState(false);

  const [toggleDrop, setToggleDrop] = useState({
    personnel: false,
    instructor: false,
    work: false,
    job: false,
  });

  const [userType, setUserType] = useState();
  const [mentorWork, setMentorWork] = useState();
  const [tutorWork, setTutorWork] = useState();
  const [industry, setIndustry] = useState();
  const [jobDesc, setJobDesc] = useState();
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleMentorChange = (event) => {
    const { value } = event.target;
    setMentorWork(value);
  };

  const handleTutorChange = (event) => {
    const { value } = event.target;
    setTutorWork(value);
  };
  useEffect(() => {
    if (userType?.name === "Student") {
      setShowButton(true);
    } else if (userType?.name === "Mentor") {
      if (!mentorWork || !industry || !jobDesc) {
        setShowButton(false);
      }
      if (mentorWork && industry && jobDesc) {
        setShowButton(true);
      }
    } else if (userType?.name === "Tutor") {
      if (tutorWork && industry && jobDesc) {
        setShowButton(true);
      } else if (!tutorWork || !industry || !jobDesc) {
        setShowButton(false);
      }
    }
  }, [tutorWork, industry, jobDesc, mentorWork, userType]);

  const filteredItems = useMemo(() => {
    if (tutorWork) {
      return data?.tutorCompany.filter((company) => {
        return company.name.toLowerCase().includes(tutorWork.toLowerCase());
      });
    }
  }, [data, tutorWork]);

  const handleNext = () => {
    if (userType.name === "Student") {
      router.push("/learners-onboarding");
    }

    if (userType.name === "Mentor") {
      const data = {
        user_type: userType.id,
        industry: industry.id,
        work_type: mentorWork,
        jobDesc: jobDesc?.name,
      };
      dispatch(onBoardUser(data));
    }

    if (userType.name === "Tutor") {
      const data = {
        user_type: userType.id,
        industry: industry.id,
        work_type: tutorWork,
        jobDesc: jobDesc?.id,
      };
      dispatch(onBoardUser(data));
    }
  };

  useEffect(() => {
    if (isUserUpdated && userType?.id == 3) {
      dispatch(reset());
      dispatch(setUser());

      router.push("/creators");
    }
    if (isUserUpdated && userType?.id == 4) {
      dispatch(reset());
      dispatch(setUser());
      if (filteredItems?.length > 0 && tutorWork.trim().length > 0) {
        router.push("/creators");
      }
      if (filteredItems?.length < 1 || filteredItems === undefined) {
        setShowModal(true);
      }
    }
  }, [isUserUpdated, userType, router, filteredItems, tutorWork]);

  const personnel = [
    { id: 2, name: "Student" },
    { id: 3, name: "Mentor" },
    { id: 4, name: "Tutor" },
  ];

  return (
    <div className='w-full min-h-screen px-2 md:px-4 xl:px-32 relative py-20'>
      <div className='flex h-auto item-center my-auto gap-x-6 xl:justify-around mt-20 '>
        <div className='hidden lg:flex flex-col justify-center items-center'>
          <OnboardingSvg />
          <p className='font-bold text-center mt-8'>New to bizpotta?</p>
          <p className='text-[13px] text-[#7C7C7C] text-center mt-4'>Help us know the best program you would like to run</p>
        </div>

        <div className='flex flex-col justify-start items-start'>
          <p className='font-bold text-lg'>Lets help you set up</p>

          <PersonnelDropDown
            data={personnel}
            userType={userType}
            setUserType={setUserType}
            setIndustry={setIndustry}
            type='student'
            toggleDrop={toggleDrop}
            setToggleDrop={setToggleDrop}
            setJobDesc={setJobDesc}
          />

          {(userType?.name === "Mentor" || userType?.name === "Tutor") && (
            <div className=''>
              <div>
                <div className='flex gap-x-3 md:gap-x-6 mt-10 items-center justify-center'>
                  <p className='text-[#282828] text-[14px]'>I am representing</p>
                  <div className='-mt-4 relative min-w-[120px] border-b-[3px] border-bizpotta-green pp'>
                    {/* Input for Mentors */}
                    {userType?.name === "Mentor" && (
                      <input
                        className='text-center text-[#282828] text-[14px] mr-4 outline-0 ring-0 border-0 focus:border-0 focus:ring-0 w-full'
                        value={mentorWork}
                        onChange={handleMentorChange}
                        type='text'
                      />
                    )}

                    {/* Input for Tutors */}
                    {userType?.name === "Tutor" && (
                      <input
                        className='text-center text-[#282828] text-[14px] mr-4 outline-0 ring-0 border-0 focus:border-0 focus:ring-0 w-full'
                        value={tutorWork}
                        onChange={handleTutorChange}
                        type='search'
                        onClick={() => {
                          setShow(true);
                        }}
                      />
                    )}
                    {filteredItems?.length > 0 && show && (
                      <div className='absolute top-8 left-[-20px] sm:left-2 z-10 px-2 py-3 flex flex-col justify-center items-start bg-white shadow-md rounded-lg'>
                        {filteredItems?.map((el, index) => (
                          <div
                            key={index}
                            className='py-2 px-2 hover:bg-blue-300 text-[13px] rounded-md hover:text-white w-[250px] break-words'
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
                  </div>
                </div>
                <div className='w-full flex justify-end text-[10px] pr-16'>(Where do you work)</div>
              </div>

              <IndustryDropDown
                data={data}
                industry={industry}
                setIndustry={setIndustry}
                userType={userType}
                type='instructor'
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
      <div className='w-full flex justify-end mt-16 items-end'>
        <button
          className={
            showButton
              ? `w-[100px] h-[45px] flex justify-center items-center bg-darkBlue text-white text-sm rounded-md hover:bg-white hover:text-darkBlue hover:text-sm hover:border-[1px] hover:font-bold hover:border-darkBlue`
              : `w-[100px] h-[40px] centerFlex bg-gray-300 text-[#7C7C7C] rounded-md`
          }
          onClick={() => (showButton ? handleNext() : toast.error("Please complete the form"))}
        >
          Next
        </button>
      </div>

      {/* Modal */}
      <OnboardModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Onboard;

const OnboardModal = ({ showModal, setShowModal }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const closeModal = () => {
    setShowModal(false);
  };

  const handleNext = () => {
    dispatch(setUser());
    router.push("/creators");
  };

  return (
    <Transition.Root show={showModal} as={Fragment}>
      <Dialog as='div' static className='fixed z-10 inset-0 overflow-y-auto' open={showModal} onClose={() => {}}>
        <div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center  sm:p-0  '>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div className='inline-block align-top bg-white rounded-lg overflow-hidden shadow-xl transform transition-all'>
              <div className='w-[340px] sm:w-[400px] md:w-[400px] md:h-[400px] flex flex-col px-4 py-6 items-center justify-start'>
                <div className='w-full flex justify-end'>
                  <MdOutlineCancel className='cursor-pointer' color='#191919' size={22} onClick={closeModal} />
                </div>
                <div className='flex flex-col px-6 mt-7 gap-y-6 items-center justify-center'>
                  <Reciept />
                  <p className='text-[#3B3B3B] text-[13px]'>
                    Your company is not registered with bizpotta, we advise you register your company to properly manage contents
                  </p>

                  <div
                    className='w-[120px] h-[35px] centerFlex rounded-md bg-darkBlue text-white text-[13px] dropdown-shadow cursor-pointer'
                    onClick={() => {
                      router.push("/onboarding/company");
                    }}
                  >
                    Yes, go ahead
                  </div>

                  <p
                    className='text-[13px] text-[#3B3B3B] underline cursor-pointer'
                    onClick={() => {
                      handleNext();
                    }}
                  >
                    No, Skip
                  </p>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

const PersonnelDropDown = ({ data, userType, setUserType, type, toggleDrop, setIndustry, setToggleDrop, setJobDesc }) => {
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
    <div className='flex gap-x-3 md:gap-x-6 mt-6'>
      <p className='text-[#282828] text-[14px]'>I am a (an)</p>
      <div onClick={() => handleDropDown()} className='-mt-1 relative min-w-[100px] border-b-[3px] border-bizpotta-green pp'>
        <p className='text-center text-[14px] text-[#282828] mr-4'>{userType?.name}</p>
        <BiChevronDown className='absolute right-0 text-[20px] top-1' color='#8F8F8F' />
        {toggleDrop.personnel && (
          <div className='absolute top-8 left-[-20px] sm:left-2 z-10 px-2 py-3 flex flex-col justify-center items-start bg-white shadow-md rounded-lg'>
            {data.map((el, index) => (
              <div
                key={index}
                className='py-2 px-2 hover:bg-blue-300 text-[13px] rounded-md hover:text-white w-[250px] break-words'
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

const IndustryDropDown = ({ data, industry, setIndustry, userType, toggleDrop, setToggleDrop }) => {
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
    <div className='flex gap-x-3 md:gap-x-6 mt-6'>
      <p className='text-[#282828] text-[14px]'>My business industry is ?</p>
      <div className='-mt-1 relative min-w-[100px] border-b-[3px] border-bizpotta-green pp' onClick={() => handleDropDown()}>
        <p className='text-center text-[14px] text-[#282828] mr-4'>{industry?.name}</p>
        <BiChevronDown className='absolute right-0 text-[20px] top-1' color='#8F8F8F' />
        {toggleDrop.instructor && (
          <div className='absolute top-8 left-[-20px] sm:left-2 z-10 px-2 py-3 flex flex-col justify-center items-start bg-white shadow-md rounded-lg'>
            {Data?.map((el, index) => (
              <div
                key={index}
                className='py-2 px-2 hover:bg-blue-300 text-[13px] rounded-md hover:text-white w-[250px] break-words'
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

const JobDescDropdown = ({ data, jobDesc, setJobDesc, userType, toggleDrop, setToggleDrop, industry }) => {
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

  const handleClick = (el) => {
    setJobDesc(el);
  };

  useEffect(() => {
    switch (userType?.name) {
      case "Tutor":
        setData(data.subCategories.filter((el) => el.course_category_id === industry.id));
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
    <div className='flex gap-x-3 md:gap-x-6 mt-6'>
      <p className='text-[#282828] text-[14px]'>My job description is ?</p>
      <div className='-mt-1 relative min-w-[100px] border-b-[3px] border-bizpotta-green pp' onClick={() => handleDropDown()}>
        <p className='text-center text-[14px] text-[#282828] mr-4'>{jobDesc?.name}</p>
        <BiChevronDown className='absolute right-0 text-[20px] top-1' color='#8F8F8F' />
        {toggleDrop.job && (
          <div className='absolute top-8 left-[-20px] sm:left-2 z-10 px-2 py-3 flex flex-col justify-center items-start bg-white shadow-md rounded-lg'>
            {Data?.map((el, index) => (
              <div
                key={index}
                className='py-2 px-2 hover:bg-blue-300 text-[13px] rounded-md hover:text-white w-[250px] break-words'
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
