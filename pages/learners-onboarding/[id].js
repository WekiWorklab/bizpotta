import { ArrowRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LibraryCheckBox from "../../components/LibraryCheckBox";
import LibraryRadioButton from "../../components/LibraryRadioButton";
import SelectCoursesModal from "../../components/Modal-Components/SelectCoursesModal";
import Tabs from "../../components/Tabs";
import { addCourse, removeCourse, showCourseModal, reset } from "../../store/courseSlice";

export default function SelectCourse({ optionsLists, optionsLists1 }) {
  const router = useRouter();
  const { id } = router.query;

  const dispatch = useDispatch();
  const total_courses = useSelector((state) => state.course.total_courses);

  const parentRef = useRef({});
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleContinue = () => {
    const childNodes = parentRef.current?.childNodes;
    let total = [];

    for (const x of childNodes) {
      console.log(x);
      const checked = x.childNodes[1].checked;
      const name = x.childNodes[1].name;
      checked && total.push({ name, checked });
    }

    dispatch(addCourse(total));
    dispatch(showCourseModal(true));
  };

  return (
    <div className='w-full h-screen bg-gray-50 flex  flex-col items-center py-40 px-4 font-light'>
      <h1 className='font-fancy text-2xl md:text-3xl text-bizpotta-purple px-4'>Explore our course library</h1>
      <div className='flex flex-col space-y-4 py-4'>
        <Tabs current={id} courseCategories={optionsLists1} />
        {/* This div will be the parent reference */}
        <div
          className='flex flex-col items-center justify-center gap-6 md:grid md:grid-cols-2 md:gap-4 md:gap-x-[50px]  xl:grid-cols-3 xl:gap-8  py-8'
          ref={parentRef}
        >
          {optionsLists.map((option, index) => (
            <LibraryCheckBox key={index} option={option} current={id} selectedCourses={selectedCourses} setSelectedCourses={setSelectedCourses} />
          ))}
        </div>
        <div className='flex mx-auto gap-2 items-center justify-center'>
          <a href='#' onClick={handleContinue} className='flex gap-2 w-full justify-center items-center text-bizpotta-purple'>
            <span>Continue</span>
            <ArrowRightIcon className='h-4 w-4 text-bizpotta-purple' aria-hidden='true' />
          </a>
          <Link href='/auth/register'>
            <a href='#' className='flex w-full justify-center items-center text-gray-300'>
              <span>Skip</span>
            </a>
          </Link>
        </div>
      </div>
      <SelectCoursesModal courses={total_courses.length} />
    </div>
  );
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const base = process.env.NEXT_PUBLIC_REACT_APP_API_URL;

  const res = await fetch(`${base}/courses-sub-categories/${id}`);

  const post = await res.json();

  const optionsLists = post.data;

  const res1 = await fetch(`${base}/courses-categories`);

  const post1 = await res1.json();

  const optionsLists1 = post1.data;

  return {
    props: {
      optionsLists,
      optionsLists1,
    },
  };
}

export async function getStaticPaths() {
  const base = process.env.NEXT_PUBLIC_REACT_APP_API_URL;

  const res = await fetch(`${base}/courses-categories`);

  const post = await res.json();

  const optionsLists = post.data;

  const paths = optionsLists.map((option) => ({
    params: { id: option.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}
