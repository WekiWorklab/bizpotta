import React from "react";

// import { TextEditor } from '../../TextEditor'

import { AiFillCaretDown, AiOutlineCaretDown, AiOutlineCaretUp, AiOutlineCheck, AiOutlineLink } from "react-icons/ai";
import { BsPencil, BsThreeDotsVertical, BsTrash } from "react-icons/bs";
import { TiDocumentText } from "react-icons/ti";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { TextEditor } from "../../../TextEditor";
import NotesSuccessModal from "./NotesSuccessModal";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setWeeksArray, deleteLastWeek } from "../../../../store/courseSlice";
import creatorService from "../../../../services/CreatorService";
import { useQuery } from "@tanstack/react-query";
import { wordShortner } from "../../../../utils/wordShortner";
import { Button } from "../../../Auth-Components/Button";
import useCourse from "../../../../hooks/useCourse";

const FirstContent = () => {
  const dispatch = useDispatch();
  const weeksArray = useSelector((state) => state.course.weeks_array);
  const router = useRouter();
  const { courseId } = router.query;
  const [loading, setLoading] = useState(false);
  const { saveCourse } = useCourse();

  const getSingeCourse = async () => {
    const res = await creatorService.getCourse(courseId);
    return res?.data;
  };

  const handleSubmit = async () => {
    setLoading(true);
    saveCourse(courseId).then((res) => {
      setLoading(false);
      router.push(`/creator/course/${courseId}/edit`);
    });
  };

  const { data } = useQuery(["single-courses"], getSingeCourse);

  return (
    <div className=''>
      <div className='w-full border-[1px] rounded-sm border-gray-500 mt-8 py-10 px-4 md:pl-10'>
        <p className='text-[14px] font-bold'>Resources</p>
        <p className='text-[13px] mt-4'>
          We have shared helpful of resources, if you need more assistance, kindly contact us on our Helpline or you can ask for help in{" "}
          <span className='text-seaBlue'>Bizpotta Instructor&#39;s Community</span>
        </p>

        <div className='flex flex-row gap-x-4 items-center mt-8 '>
          <div className='text-seaBlue border-b-2 border-seaBlue text-[14px]'>Get started with teaching vocational skills</div>
        </div>
        <div className='flex flex-row gap-x-4 items-center mt-8'>
          <div className='text-seaBlue border-b-2 border-seaBlue text-[14px]'>Video setup &#38; equipment</div>
        </div>
        <div className='flex flex-row gap-x-4 items-center mt-8'>
          <div className='text-seaBlue border-b-2 border-seaBlue text-[14px]'>Course quality requirement</div>
        </div>
        <div className='flex flex-row gap-x-4 items-center mt-8'>
          <div className='text-seaBlue border-b-2 border-seaBlue text-[14px]'>Audio and video editing</div>
        </div>
        <div className='flex flex-row gap-x-4 items-center mt-8'>
          <div className='text-seaBlue border-b-2 border-seaBlue text-[14px]'>Get started in teaching master class </div>
        </div>
        <div className='flex flex-row gap-x-4 items-center mt-8'>
          <div className='text-seaBlue border-b-2 border-seaBlue text-[14px]'>Get started in teaching certificate program </div>
        </div>
      </div>

      <div className='w-full border-[1px] rounded-sm border-gray-500 mt-8 py-10 md:pl-10 px-4'>
        <div className='flex flex-row justify-between items-center'>
          <div>Course Structure</div>
          <div className='flex flex-row gap-x-2 items-center'>
            <div className='w-[100px] h-[35px] flex justify-center items-center bg-darkBlue rounded-md text-white text-[13px]'>Preview</div>
            <BsThreeDotsVertical />
          </div>
        </div>

        <div className='text-[13px] mt-8'>
          The following descriptions will be publicly visible on your <span className='text-seaBlue'>Landing Page</span> and will have a direct impact
          on your course performance. These descriptions will help learners decide if your course is right for them.
        </div>

        <div className='mt-8 flex flex-col gap-y-8'>
          {weeksArray?.map((el, index) => (
            <WeekSection key={index} week_no={el} course_week={data?.course_weeks[index]} />
          ))}
        </div>

        <div className='flex justify-center mt-6'>
          <button
            className='w-[150px] h-[40px] flex justify-center items-center text-[13px] text-white font-bold border rounded-md bg-darkBlue hover:text-darkBlue hover:bg-white hover:border border-darkBlue'
            onClick={() => {
              dispatch(setWeeksArray());
            }}
          >
            Add Week {weeksArray?.length + 1}
          </button>
        </div>

        <div className='flex justify-end mt-8'>
          <Button
            className='w-full md:w-[120px] h-[40px] centerFlex bg-darkBlue text-white text-[13px] font-bold rounded-md cursor-pointer mt-16'
            type='button'
            onClick={handleSubmit}
            name={"Save changes"}
            size={"w-[120px]"}
            loading={loading}
          />
          <button className='w-[150px] h-[40px] flex justify-center items-center text-[13px] hover:text-white font-bold rounded-md hover:bg-darkBlue text-darkBlue bg-white border border-darkBlue hover:border-0'>
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstContent;

const WeekSection = ({ week_no, course_week }) => {
  const router = useRouter();
  const { courseId } = router.query;
  const dispatch = useDispatch();
  const weeksArray = useSelector((state) => state.course.weeks_array);
  const [weekTitle, setWeekTitle] = useState(course_week ? course_week?.title : "week " + week_no);
  const [editWeekTitle, setEditWeekTitle] = useState(false); //controls the ability to change the title of the week
  const [collapseWeek, setCollapseWeek] = useState(week_no > 1 && true); //controls collapse and expansion of week
  console.log(course_week);
  const isLastWeek = weeksArray?.length === week_no;

  return (
    <div className='w-full py-2'>
      <div className='w-full'>
        <div className='flex w-full justify-between items-center'>
          <div className='flex items-center gap-x-5'>
            <div>Week {week_no} </div>
            {!editWeekTitle && (
              <div className='flex items-center gap-x-2 text-gray-400 text-[14px] '>
                <p>{weekTitle}</p>
                <BsPencil
                  size={12}
                  className='cursor-pointer'
                  onClick={() => {
                    setEditWeekTitle(true);
                  }}
                />
              </div>
            )}
            {editWeekTitle && (
              <div className='flex items-center text-[14px] gap-x-2'>
                <input
                  type='text'
                  placeholder='introduction'
                  className='focus:ring-0 outline-none rounded-sm h-[24px]'
                  value={weekTitle}
                  onChange={(e) => {
                    setWeekTitle(e.target.value);
                  }}
                />
                <div
                  className='text-[#FF0000] cursor-pointer'
                  onClick={() => {
                    setEditWeekTitle(false);
                  }}
                >
                  X
                </div>
                <AiOutlineCheck
                  color='green'
                  className='cursor-pointer'
                  onClick={() => {
                    setEditWeekTitle(false);
                  }}
                />
              </div>
            )}
            {isLastWeek && (
              <BsTrash
                color='red'
                size={14}
                className='cursor-pointer'
                onClick={() => {
                  dispatch(deleteLastWeek());
                }}
              />
            )}
          </div>

          <div className=''>
            {collapseWeek && (
              <AiOutlineCaretDown className='text-[#999999] text-[20px] font-bold cursor-pointer' onClick={() => setCollapseWeek(false)} />
            )}
            {!collapseWeek && (
              <AiOutlineCaretUp className='text-[#999999] text-[20px] font-bold cursor-pointer' onClick={() => setCollapseWeek(true)} />
            )}
          </div>
        </div>

        {!collapseWeek && (
          <div>
            {/* Lecture */}
            <div>
              <div className='flex items-center gap-x-2 mt-4'>
                <TiDocumentText />
                <p>Lecture</p>
                <BsPencil size={12} />
                <AiFillCaretDown />
              </div>

              <div className='mt-6 '>
                {/* Clicking on this takes the user to the page for typing and editing lectures */}
                <div
                  className='min-h-[150px] w-full border break-all p-2 cursor-pointer'
                  onClick={() =>
                    router.push({
                      pathname: "/creators/courses/create/structure",
                      query: {
                        type: "lecture",
                        week_no: week_no,
                        courseId: courseId,
                        week_title: weekTitle,
                      },
                    })
                  }
                >
                  <p>{course_week ? wordShortner(course_week?.week_lectures?.description, 150) : ""}</p>
                </div>
              </div>
              {/* 
              <div className='flex flex-col gap-y-2 mt-4'>
                <div className='flex flex-row items-center gap-x-3'>
                  <div className=' font-bold border rounded-md w-full md:w-[350px] h-[50px] flex flex-row items-center gap-x-2 pl-2'>
                    <IoCheckmarkCircleOutline className='' size={26} color='#94F236' />
                    <p>Video upload successful</p>
                  </div>
                  <p className='text-red-300'>X</p>
                </div>

                <div className='flex flex-row items-center gap-x-3'>
                  <div className=' font-bold border rounded-md w-full md:w-[350px] h-[50px] flex flex-row items-center gap-x-2 pl-2'>
                    <IoCheckmarkCircleOutline className='' size={26} color='#94F236' />
                    <p>Content upload successful</p>
                  </div>
                  <p className='text-red-300'>X</p>
                </div>
              </div> */}
            </div>

            {/* Resources */}
            <div className='mt-20'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-x-2 mt-4'>
                  <TiDocumentText />
                  <p>Resources</p>
                  <AiFillCaretDown />
                </div>
                <BsTrash color='red' size={14} />
              </div>

              <div className='mt-6'>
                <div
                  className=' min-h-[150px] w-full border break-all p-2 cursor-pointer'
                  onClick={() =>
                    router.push({
                      pathname: "/creators/courses/create/structure",
                      query: { type: "resource", week_no: week_no, courseId: courseId, week_title: weekTitle },
                    })
                  }
                >
                  <p>{course_week ? wordShortner(course_week?.week_resources?.description, 150) : ""}</p>
                </div>
              </div>
            </div>

            {/* Quiz/Test/Exam */}
            <div className='mt-20'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-x-2 mt-4'>
                  <TiDocumentText />
                  <p>Quiz/Test/Exam</p>
                  <AiFillCaretDown />
                </div>
                <BsTrash color='red' size={14} />
              </div>

              <div className='mt-6'>
                <div
                  className=' min-h-[150px] w-full border break-all p-2 cursor-pointer'
                  onClick={() =>
                    router.push({
                      pathname: "/creators/courses/create/structure",
                      query: {
                        type: "quiz",
                        week_no: week_no,
                        courseId: courseId,
                        week_title: weekTitle,
                      },
                    })
                  }
                >
                  <p>{course_week?.week_test?.length > 0 ? "Quiz Submitted" : ""}</p>
                </div>
              </div>
            </div>

            {/* Assignment */}
            <div className='mt-20'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-x-2 mt-4'>
                  <TiDocumentText />
                  <p>Assignment</p>
                  <AiFillCaretDown />
                </div>
                <BsTrash color='red' size={14} />
              </div>
              <div className='mt-6'>
                {/* Clicking on this takes the user to the page for typing and editing assignments */}
                <div
                  className=' min-h-[150px] w-full border break-all p-2 cursor-pointer'
                  onClick={() =>
                    router.push({
                      pathname: "/creators/courses/create/structure",
                      query: { type: "assignment", week_no: week_no, courseId: courseId, week_title: weekTitle },
                    })
                  }
                >
                  <p>{course_week ? wordShortner(course_week?.week_assignments?.description, 150) : ""}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
