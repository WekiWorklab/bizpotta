/////
import { useEffect, useState } from "react";

//////
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineRight } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

const Description = ({ show, desc }) => {
  return (
    <div className={`${show ? "dropdown" : "no-dropdown"} text-xs`}>
      {show ? (
        <div className='dropdown-enter shadow-xl'>{desc}</div>
      ) : (
        <div className='dropdown-exit'>
          <div className=''> {desc}</div>
        </div>
      )}
    </div>
  );
};

const ScheduleCard = ({ data, index, completedWeeks }) => {
  const router = useRouter();

  const [show, setShow] = useState(false);
  const [completedData, setCompletedData] = useState();
  const desc =
    "Facilisis quis sem convallis odio pellentesque. Convallis leo urna eleifend tellus ut vel amet ullamcorper nunc. Sit mauris pellentesque pellentesque aenean amet massa eget vitae. Duis lacus, hendrerit urna sit bibendum. Et enim sapien dictum egestas platea. Facilisi pretium eget nibh nam arcu. Cras etiam pellentesque dui tempor purus porttitor nec ut. Velit viverra lectus a vel faucibus sed id integer at.";

  useEffect(() => {
    if (completedWeeks.length > 0) {
      for (const el of completedWeeks) {
        if (el.week_id == data.id) {
          setCompletedData(el);
        } else {
        }
      }
    }
  }, [completedWeeks, data]);

  const handleToClicked = (section) => {
    router.push({
      pathname: `/students/${section}/[id]/week/[weekId]`,
      query: {
        id: data?.course_id,
        weekId: data?.id,
      },
    });
  };

  return (
    <div className='w-full lg:w-full mt-4'>
      <div className='h-16 md:h-14 bg-darkBlue  text-white flex flex-row justify-between  md:justify-between px-4 md:pl-6 md:pr-10 items-center'>
        <div className='flex flex-col   md:flex-row md:items-center'>
          <div className='font-[600] text-[14px] mr-4'> Week {index}</div>
          <div className='text-[13px]'></div>
        </div>
        <div
          className='flex flex-row  justify-center md:block cursor-pointer'
          onClick={() =>
            router.push(`/students/courses/${data?.course_id}/week/${data?.id}`)
          }>
          <span className='inline  text-[13px] md:mr-4'>Go to lesson</span>
          <BsArrowRight className='inline' size={18} />
        </div>
      </div>

      <div className='bg-white gap-y-[20px] grid grid-cols-1 md:grid-cols-2 px-14 md:px-10 py-6 Group'>
        <div
          className=' flex flex-row items-center cursor-pointer'
          onClick={() =>
            router.push(`/students/courses/${data?.course_id}/week/${data?.id}`)
          }>
          <div
            className={`w-8 h-8 rounded-full border-2 border-darkBlue ${
              completedData?.is_lecture_completed
                ? "bg-darkBlue"
                : "bg-transparent"
            } `}></div>
          <p className='ml-8'>Lecture</p>
        </div>
        <div
          className=' flex flex-row items-center cursor-pointer'
          onClick={() => handleToClicked("quiz")}>
          <div
            className={`w-8 h-8 rounded-full border-2 border-darkBlue ${
              completedData?.is_quiz_completed
                ? "bg-darkBlue"
                : "bg-transparent"
            } `}></div>
          <p className='ml-8'>Quiz</p>
        </div>

        <Link
          href={`/students/assignments/${data?.course_id}/week/${data?.id}`}>
          <div className=' flex flex-row items-center cursor-pointer'>
            <div
              className={`w-8 h-8 rounded-full border-2 border-darkBlue ${
                completedData?.is_assignment_completed
                  ? "bg-darkBlue"
                  : "bg-transparent"
              } `}></div>
            <p className='ml-8'>Assignment</p>
          </div>
        </Link>

        <div className='relative flex flex-row items-center cursor-pointer'>
          <div className='w-8 h-8 rounded-full border-2 border-darkBlue '></div>
          <div className='ml-8 flex flex-row items-center flex-grow-[1] justify-between pr-12'>
            <p>Description</p>
            <div onClick={() => setShow((prev) => !prev)}>
              <AiOutlineRight
                className={`${show ? "arrow-right" : "arrow-down"}`}
              />
            </div>
          </div>
          <Description show={show} desc={data?.week_lectures?.description} />
          {/* <AiOutlineRight className='' /> */}
        </div>
        <div className='flex flex-row items-center'>
          <div className='w-8 h-8 rounded-full border-2 border-darkBlue bg-gray-100'></div>
          <p className='ml-8'>Resources</p>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;

/**
 * Note that week_number was the best identifier available for now for trhe weekId query parameter for routing in this section even though week_number 4 appears twice and 6 is missing. id would have been used as it is unique but the data was not arranged orderly according to id.
 */
