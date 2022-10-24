import { ArrowRightIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LibraryRadioButton from "../../components/LibraryRadioButton";
import { addCategory } from "../../store/courseSlice";

const Index = ({ courseCategoryData }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { user } = useSelector((state) => state.auth);

  React.useEffect(() => {
    if (!user) {
      router.push("/auth/login");
    }
  }, [router, user]);

  const optionsLists = courseCategoryData;

  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleChangeCourse = (course) => {
    setSelectedCourse(course);
  };

  const handleSelectLibrary = () => {
    if(selectedCourse){
    dispatch(addCategory(selectedCourse));
    router.push(`/learners-onboarding/${selectedCourse}`);
    }
    else{
      // show modal
    }
  };

  return (
    <div className='relative h-screen bg-gray-50 py-40 sm:px-20 md:px-10 lg:px-40'>
      {/* <div className='w-full h-full redBorder'> */}
      <h1 className='w-full mx-auto md:mx-0 text-center md:text-start text-lg font-light tracking-wider text-bizpotta-purple'>
        <span className='font-bold  md:font-medium text-[15px] md:text-2xl '>Explore our course library</span>
      </h1>
      <p className='text-center md:text-start flex flex-col text-base font-light tracking-wider text-bizpotta-gray-800 lg:w-full mx-auto md:mx-0'>
        <span className='text-bizpotta-gray-800 text-[14px] md:text-base '>Choose category that are of interest to you</span>
      </p>
      {/* list of radio in boxes */}
      {/* <div className='w-full mx-auto md:mx-0 grid grid-cols-2 gap-y-6 justify-center items-center md:grid md:grid-cols-2 md:gap-8 md:w-[700px] lg:grid-cols-3 lg:w-[1000px] py-8  md:items-center md:justify-center '> */}
      {/* md:items-center md:justify-center */}
      {/* justify-items-center */}

      <div className='w-full grid grid-cols-2 gap-y-6 items-center justify-items-center md:justify-items-start md:gap-8  lg:grid-cols-3 py-8    '>
        {optionsLists.map((option, index) => (
          <LibraryRadioButton key={index} option={option} setSelectedCourse={handleChangeCourse} multiSelect={false} />
        ))}
      </div>
      {/* continue with arrow */}
      <button
        onClick={() => {
          handleSelectLibrary();
        }}
        className='pt-4 md:pt-4 cursor-pointer flex gap-2 w-full  justify-center items-center text-bizpotta-purple'
      >
        <span>Continue</span>
        <ArrowRightIcon className='h-4 w-4 text-bizpotta-purple' aria-hidden='true' />
      </button>
      {/* </div> */}
    </div>
  );
};

export default Index;

// static side props
export async function getStaticProps() {
  const base = process.env.NEXT_PUBLIC_REACT_APP_API_URL;
  const courseCategory = await fetch(`${base}/courses-categories`).then((res) => res.json());
  const courseCategoryData = courseCategory.data;
  return {
    props: {
      courseCategoryData,
    },
  };
}
