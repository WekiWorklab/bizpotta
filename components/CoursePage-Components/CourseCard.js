import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { showCourseDetailsModal } from "../../store/courseSlice";
import ProgressBar from "./ProgressBar";

const CourseCard = ({data, ID, length}) => {
  
  const router = useRouter()
  const dispatch = useDispatch();
  let total = 50
  let completed = 23

  const handleClick = () => {
    router.push(`/students/courses/${data.course.id}`)
  }

  return (
    <div className="border sm:border-1 w-[325px] h-[185px] rounded-md bg-white relative flex flex-col pl-4 pr-2 pt-4 box-overflow justify-self-start" onClick={() => handleClick()}>
      <p className="absolute top-[5px] right-[10px] text-[11px]">
        Lesson {ID} out of {length}
      </p>
      <div className="w-[100px] h-[55px]">
        <img
          src={data?.course?.image}
          alt=""
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      <p className="mt-4 text-[15px] box-overflow">{data?.course?.name}</p>
      <p className="text-[12px] mt-1 box-overflow">{data?.course?.course_instructor?.firstName}</p>
      <div className="flex flex-row items-center justify-between mt-3">
        <ProgressBar time={{ completed, total }} />
        <span className="text-xs">{total - completed} mins left</span>
      </div>
    </div>
  );
};

export default CourseCard;
