import React, { Fragment, useEffect, useState } from "react";

//////////
import { useSelector, useDispatch } from "react-redux";
import { Dialog, Transition } from "@headlessui/react";
import { MdOutlineCancel } from "react-icons/md";
import { addToCart, setCourseDetails, showCourseDetailsModal } from "../store/courseSlice";
import { offer, specialization } from "../public";
import { HiUserGroup } from "react-icons/hi";
import { useRouter } from "next/router";
import learnersService from "../services/LearnersService";
import useCourse from "../hooks/useCourse";

const CourseDetailsModal = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const success = useSelector((state) => state.course.show_course_details_modal);
  const data = useSelector((state) => state.course.course_details);
  const {getMyCourse} = useCourse()
  const [courseId, setCourseId] = useState()

  const closeModal = () => {
    dispatch(showCourseDetailsModal(false));
    setCourseId(null)
    dispatch(setCourseDetails(null))
  };


  useEffect(() => {
    data?.id ? getMyCourse(data.id).then(res => setCourseId(res?.course_id)) : null

  }, [data, data?.id])


  const AddToCart = () => {

    const prevCart = localStorage.getItem("cart");
    if (!prevCart) {
      localStorage.setItem("cart", JSON.stringify([data.id]));
    } else {
      const cartSet = new Set([...[...JSON.parse(prevCart), data.id]]);
      const newCart = [...cartSet];
      localStorage.setItem("cart", JSON.stringify(newCart));
    }

    closeModal();

    router.push({
      pathname: "/students/cart",
    });
  };


  // TODO: Since there is a lag btw when courseId switches "purchase course" to "go to course" let the modal be in a loading state until courseId is determined from the useEffect above  


  return (
    <Transition.Root show={success} as={Fragment}>
      <Dialog as='div' static className='fixed z-10 inset-0 overflow-y-auto' open={success} onClose={() => {}}>
        <div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-10 text-left  sm:p-0  '>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ' />
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
            <div className=' relative inline-block align-top mt-24 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all'>
              <div className='absolute w-10 h-10 top-0 right-2 z-20 centerFlex cursor-pointer' onClick={() => closeModal()}>
                <MdOutlineCancel color='#7A7575' size={28} />
              </div>
              <div className='w-full sm:w-[500px] pb-8 overflow-y-scroll styled-scrollbar  h-[500px] bg-white'>
                <div
                  className='w-full h-[200px] sm:h-[250px] pb-6 bg-center bg-cover bg-no-repeat flex flex-col justify-end items-center '
                  style={{ backgroundImage: `url(${data?.image})` }}
                >
                  <p className='text-white font-bold text-[20px]'>
                    {/* Increase Sales in 30 days */}
                    {data?.name}
                  </p>
                  <p className='text-white font-bold mt-0'>
                    {data?.instructor != null ? `${data.instructor.firstName} " " ${data.instructor.lastName}` : "Charles Mark"}
                  </p>
                  {!courseId ? <div
                    className='w-[120px] h-[30px] mt-4 centerFlex text-[13px] bg-bizpotta-green cursor-pointer rounded-lg'
                    onClick={() => AddToCart()}
                  >
                    Purchase course
                  </div> : <div
                    className='w-[120px] h-[30px] mt-4 centerFlex text-[13px] bg-bizpotta-green cursor-pointer rounded-lg'
                    onClick={() => router.push(`/students/courses/${courseId}`)}
                  >
                    Go to Course
                  </div>}
                </div>

                <div className='w-full px-5 mt-3 '>
                  <div className='w-full flex justify-center gap-x-2 text-[12px] text-darkBlue'>
                    <p className={`border-b-2 border-darkBlue`}>Course Info</p>
                    <p className='cursor-not-allowed'>FAQ</p>
                  </div>

                  <div className='grid grid-cols-1 sm:grid-cols-2 w-full mt-4 justify-start gap-x-4 items-center'>
                    <div className='flex flex-col gap-y-2'>
                      <div className='flex items-center gap-x-3'>
                        <img
                          src={specialization.src} //instructor's image here
                          className='w-[30px] h-[30px] rounded-full'
                        />
                        <p className='text-darkText text-[12px]'>
                          by {data?.instructor != null ? `${data?.instructor.firstName} " " ${data?.instructor.lastName}` : "Charles Mark"}
                        </p>
                      </div>
                      <div className='flex items-center gap-x-3'>
                        <img src={specialization.src} className='w-[30px] h-[30px] rounded-full' />
                        <p className='text-darkText text-[12px]'>Offered by Leo’s Photography</p>
                      </div>
                    </div>
                    <div className='flex flex-col gap-y-2 mt-2 sm:mt-0'>
                      <div className='flex items-center gap-x-3'>
                        <p className='text-darkText text-[12px]'>Price:</p>
                        <p className='text-darkText text-[13px]'>₦ {Number(data?.price)}</p>
                      </div>
                      <div className='flex items-center gap-x-2'>
                        <HiUserGroup color='#121F4C' size={13} />
                        <p className='text-darkText text-[12px]'>{data?.course_student_count} enrolled</p>
                      </div>
                    </div>
                  </div>

                  <p className='text-[14px] font-bold text-darkBlue  text-left mt-4'>Description</p>
                  <div className='grid  sm:grid-cols-2 w-full items-start'>
                    <div className='flex flex-col '>
                      <div className='flex items-center gap-x-3'>
                        <p className='text-darkText text-[12px] font-bold'>Skill level:</p>
                        <p className='text-darkText text-[12px] capitalize'>{data?.level}</p>
                      </div>
                      <div className='flex items-center gap-x-3'>
                        <p className='text-darkText text-[12px] font-bold'>Audio:</p>
                        <p className='text-darkText text-[12px] capitalize'>{data?.language}</p>
                      </div>
                      {/* <div className="flex items-center gap-x-3">
                        <p className="text-darkText text-[12px] font-bold">
                          Caption:
                        </p>
                        <p className="text-darkText text-[12px]">English</p>
                      </div> */}
                    </div>
                    <div className='flex flex-col '>
                      <div className='flex items-center gap-x-3'>
                        <p className='text-darkText text-[12px] font-bold'>Video:</p>
                        <p className='text-darkText text-[12px]'>{data?.course_weeks.length} videos</p>
                      </div>
                      <div className='flex items-center gap-x-3'>
                        <p className='text-darkText text-[12px] font-bold'>Estimated watch time:</p>
                        <p className='text-darkText text-[12px]'>24 hours</p>
                      </div>
                    </div>
                  </div>

                  <p className='text-[14px] font-bold text-darkBlue  text-left mt-4'>Location</p>
                  <p className='text-darkText text-[12px]'>Physical virtual</p>
                  <p className='text-darkText text-[12px]'>Physical location address: 19 Goodluck Jonathan Way, Asaba.</p>

                  <p className='text-[14px] font-bold text-darkBlue  text-left mt-4'>Certificate</p>
                  <p className='text-darkText text-[12px]'>Certificate is issued on completion</p>

                  <p className='text-[14px] font-bold text-darkBlue  text-left mt-4'>At the end of this course you will learn,</p>
                  <div className='text-darkText text-[12px]'>
                    <div className='flex items-center gap-x-2'>
                      <div className='w-[5px] h-[5px] bg-black rounded-full'></div>
                      <p className=''>How to design using canva</p>
                    </div>
                    <div className='flex items-center gap-x-2'>
                      <div className='w-[5px] h-[5px] bg-black rounded-full'></div>
                      <p className=''>How to design using canva</p>
                    </div>
                  </div>

                  <p className='text-[14px] font-bold text-darkBlue  text-left mt-4'>About course</p>
                  <p className='text-darkText text-[12px]'> {data?.description}</p>

                  <p className='text-[14px] font-bold text-darkBlue  text-left mt-4'>Lesson outline</p>

                  {data?.course_weeks.map((el, index) => (
                    <div key={index} className='flex items-center justify-start gap-x-2 text-[12px] text-darkText'>
                      <div className=''>
                        {el.week_number < 10 ? `0${el.week_number}.` : `${el.week_number}.`}
                        {/* {el.week_number}. */}
                      </div>
                      <p className=''>{el.title}</p>
                    </div>
                  ))}

                  {/* <p className="text-[14px] font-bold text-darkBlue  text-left mt-4">
                    About Leo’s Photography
                  </p>
                  <p className="text-darkText text-[12px]">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Orci blandit id mollis metus porttitor ut aliquam. Aliquam
                    fermentum felis viverra egestas justo, lacinia ac. Nibh
                    etiam morbi egestas sed id iaculis. Eu eget ac felis ac.
                    Quisque phasellus sit et eget ut quis pellentesque. Quam sed
                    bibendum integer odio lacus elit sit scelerisque. Nunc
                    volutpat vel dictum neque. Commodo euismod vulputate congue
                    urna adipiscing bibendum. Sit nulla sed velit tellus rhoncus
                    elementum ac elementum, malesuada. Vivamus faucibus sed
                    augue massa habitasse neque. Aliquam, curabitur pulvinar
                    auctor turpis a. Placerat sed tortor, quisque a, tel sed
                    egestas sodales. Habitant quam sagittis elit habitant dui.
                  </p> */}

                  {/* <p className="text-[14px] font-bold text-darkBlue  text-left mt-4">
                    About Instructors
                  </p>
                  <p className="text-darkText text-[12px]">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Orci blandit id mollis metus porttitor ut aliquam. Aliquam
                    fermentum felis viverra egestas justo, lacinia ac. Nibh
                    etiam morbi egestas sed id iaculis. Eu eget ac felis ac.
                    Quisque phasellus sit et eget ut quis pellentesque. Quam sed
                    bibendum integer odio lacus elit sit scelerisque. Nunc
                    volutpat vel dictum neque. Commodo euismod vulputate congue
                    urna adipiscing bibendum. Sit nulla sed velit tellus rhoncus
                    elementum ac elementum, malesuada. Vivamus faucibus sed
                    augue massa habitasse neque. Aliquam, curabitur pulvinar
                    auctor turpis a. Placerat sed tortor, quisque a, tel sed
                    egestas sodales. Habitant quam sagittis elit habitant dui.
                  </p> */}
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default CourseDetailsModal;
