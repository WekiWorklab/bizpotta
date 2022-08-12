import { ArrowRightIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LibraryCheckBox from "../../components/LibraryCheckBox";
import LibraryRadioButton from "../../components/LibraryRadioButton";
import SelectCoursesModal from "../../components/Modal-Components/SelectCoursesModal";
import Tabs from "../../components/Tabs";
import {addCourse, removeCourse, showCourseModal} from '../../store/courseSlice'

export default function SelectCourse() {
  const router = useRouter();
  const { id } = router.query;
  const optionsLists = [
    {
      id: 1,
      name: "Agriculture",
      href: "#",
    },
    {
      id: 2,
      name: "Arts",
      href: "#",
    },
    {
      id: 3,
      name: "Business",
      href: "#",
    },
    {
      id: 4,
      name: "Engineering",
      href: "#",
    },
    {
      id: 5,
      name: "IT & Software",
      href: "#",
    },
    {
      id: 6,
      name: "Law",
      href: "#",
    },
    {
      id: 7,
      name: "Design",
      href: "#",
    },
    {
      id: 8,
      name: "Development",
      href: "#",
    },
  ];

  const dispatch = useDispatch()
  const total_courses = useSelector((state) => state.course.total_courses)

  const parentRef = useRef({})
  const [selectedCourses, setSelectedCourses] = useState([])

  const handleContinue = () => {
    const childNodes = parentRef.current?.childNodes
    console.log(childNodes)
    let total = []

    for(const x of childNodes){
      const checked = x.childNodes[1].checked
      const name = x.childNodes[1].name
      console.log(checked, name)
      checked && total.push({name, checked})
      // checked && dispatch(addCourse({name, checked}))
    }

    if (total.length > 5){
      // pop the last element.

      // dispatch showModal to be false
    }
    else if (total.length > 0 && total.length <= 5 ){
      dispatch(addCourse(total))
      dispatch(showCourseModal(true))
    }

    // console.log(total_courses)

  }


  return (
    <div className='w-full h-screen bg-gray-50 md:px-52 py-40 px-4 font-light'>
      <h1 className='font-fancy text-2xl md:text-3xl text-bizpotta-purple px-4'>Explore our course library</h1>
      <div className='flex flex-col space-y-4 py-4'>
        <Tabs current={id} />
        {/* This div will be the parent reference */}
        <div className='flex flex-col items-center justify-center gap-6 md:grid md:grid-cols-3 md:gap-8  py-8 mx-2' ref = {parentRef}>
          {optionsLists.map((option, index) => (
            <LibraryCheckBox key={index} option={option} current={id} selectedCourses = {selectedCourses} setSelectedCourses = {setSelectedCourses}/>
          ))}
        </div>
        <div className='flex mx-auto gap-2 items-center justify-center border border-red-200' onClick={handleContinue}>
          <a href='#' className='flex gap-2 w-full justify-center items-center text-bizpotta-purple'>
            <span>Continue</span>
            <ArrowRightIcon className='h-4 w-4 text-bizpotta-purple' aria-hidden='true' />
          </a>
          <a href='#' className='flex w-full justify-center items-center text-gray-300'>
            <span>Skip</span>
          </a>
        </div>
      </div>
      <SelectCoursesModal />
    </div>
  );
}
