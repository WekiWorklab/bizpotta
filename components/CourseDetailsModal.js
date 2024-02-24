import { Fragment, useEffect, useState } from "react";

//////////
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import { HiUserGroup } from "react-icons/hi";
import { MdOutlineCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import useCourse from "../hooks/useCourse";
import { setCourseDetails, showCourseDetailsModal } from "../store/courseSlice";

const CourseDetailsModal = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const success = useSelector(
    (state) => state.course.show_course_details_modal
  );
  const data = useSelector((state) => state.course.course_details);
  const { getMyCourse } = useCourse();
  const [courseId, setCourseId] = useState();

  const [loading, setLoading] = useState(true);

  const closeModal = () => {
    dispatch(showCourseDetailsModal(false));
    setCourseId(null);
    dispatch(setCourseDetails(null));
    setLoading(true);
  };

  console.log("course details modal");

  useEffect(() => {
    data?.id
      ? getMyCourse(data.id)
          .then((res) => setCourseId(res?.course_id))
          .catch((err) => console.log(err))
          .finally(() => setLoading(false))
      : null;
  }, [data, data?.id]);

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

  const Spinner = () => {
    return (
      <svg
        role='status'
        className='inline mr-3 ml-4 w-4 h-4 text-darkBlue animate-spin'
        viewBox='0 0 100 101'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
          fill='#E5E7EB'
        />

        <path
          d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
          fill='currentColor'
        />
      </svg>
    );
  };

  return (
    <Transition.Root show={success} as={Fragment}>
      <Dialog
        as='div'
        static
        className='fixed z-10 inset-0 overflow-y-auto'
        open={success}
        onClose={() => {}}>
        <div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-10 text-left  sm:p-0  '>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='hidden sm:inline-block sm:align-middle sm:h-screen'
            aria-hidden='true'>
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
            {
              <div className=' relative inline-block align-top mt-24  bg-white rounded-lg overflow-hidden shadow-xl transform transition-all'>
                <div
                  className='absolute w-10 h-10 top-0 right-2 z-20 centerFlex cursor-pointer'
                  onClick={() => closeModal()}>
                  <MdOutlineCancel color='#7A7575' size={28} />
                </div>
                <div className='w-full sm:w-[500px] pb-8 overflow-y-scroll styled-scrollbar  h-[500px] bg-white'>
                  <div
                    className='w-full h-[200px] sm:h-[250px] pb-6 bg-center bg-cover bg-no-repeat flex flex-col justify-end items-center  bg-bizpotta-purple'
                    style={{
                      backgroundImage: `url(${process.env.NEXT_PUBLIC_REACT_APP_STORAGE_URL}/${data?.image})`,
                    }}>
                    <p className='text-white font-bold text-[20px] bg-bizpotta-purple'>
                      {/* Increase Sales in 30 days */}
                      {data?.name}
                    </p>
                    <p className='text-white font-bold mt-0  bg-bizpotta-purple'>
                      {data?.course_instructor != null
                        ? `${data.course_instructor.firstName} " " ${data.course_instructor.lastName}`
                        : "Charles Mark"}
                    </p>
                    {!courseId ? (
                      !loading ? (
                        <div
                          className='w-[120px] h-[30px] mt-4 centerFlex text-[13px] bg-bizpotta-green cursor-pointer rounded-lg'
                          onClick={() => AddToCart()}>
                          <p>Purchase course</p>
                        </div>
                      ) : (
                        <Spinner />
                      )
                    ) : (
                      <div
                        className='w-[120px] h-[30px] mt-4 centerFlex text-[13px] bg-bizpotta-green cursor-pointer rounded-lg'
                        onClick={() =>
                          router.push(`/students/courses/${courseId}`)
                        }>
                        <p>Go to course</p>
                      </div>
                    )}
                  </div>

                  <div className='w-full px-5 mt-3 '>
                    <div className='w-full flex justify-center gap-x-2 text-[12px] text-darkBlue'>
                      <p className={`border-b-2 border-darkBlue`}>
                        Course Info
                      </p>
                      <p className='cursor-not-allowed'>FAQ</p>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 w-full mt-4 justify-start gap-x-4 items-center'>
                      <div className='flex flex-col gap-y-2'>
                        <div className='flex items-center gap-x-3'>
                          <img
                            src={
                              "https://ui-avatars.com/api/?name=" +
                              data?.course_instructor?.firstName +
                              " " +
                              data?.course_instructor?.lastName
                            }
                            className='w-[30px] h-[30px] rounded-full'
                            alt=''
                          />
                          <p className='text-darkText text-[12px]'>
                            by{" "}
                            {data?.course_instructor != null
                              ? `${data?.course_instructor.firstName} ${data?.course_instructor.lastName}`
                              : "Charles Mark"}
                          </p>
                        </div>
                      </div>
                      <div className='flex flex-col gap-y-2 mt-2 sm:mt-0'>
                        <div className='flex items-center gap-x-3'>
                          <p className='text-darkText text-[12px]'>Price:</p>
                          <p className='text-darkText text-[13px]'>
                            ₦ {Number(data?.price)}
                          </p>
                        </div>
                        <div className='flex items-center gap-x-2'>
                          <HiUserGroup color='#121F4C' size={13} />
                          <p className='text-darkText text-[12px]'>
                            {data?.course_student_count} enrolled
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className='text-[14px] font-bold text-darkBlue  text-left mt-4'>
                      Description
                    </p>
                    <div className='grid  sm:grid-cols-2 w-full items-start'>
                      <div className='flex flex-col '>
                        <div className='flex items-center gap-x-3'>
                          <p className='text-darkText text-[12px] font-bold'>
                            Skill level:
                          </p>
                          <p className='text-darkText text-[12px] capitalize'>
                            {data?.level}
                          </p>
                        </div>
                        <div className='flex items-center gap-x-3'>
                          <p className='text-darkText text-[12px] font-bold'>
                            Audio:
                          </p>
                          <p className='text-darkText text-[12px] capitalize'>
                            {data?.language}
                          </p>
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
                          <p className='text-darkText text-[12px] font-bold'>
                            Video:
                          </p>
                          <p className='text-darkText text-[12px]'>
                            {data?.course_weeks.length} videos
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className='text-[14px] font-bold text-darkBlue  text-left mt-4'>
                      Location
                    </p>
                    <p className='text-darkText text-[12px]'>Virtual</p>

                    <p className='text-[14px] font-bold text-darkBlue  text-left mt-4'>
                      Certificate
                    </p>
                    <p className='text-darkText text-[12px]'>
                      Certificate is issued on completion
                    </p>

                    <p className='text-[14px] font-bold text-darkBlue  text-left mt-4'>
                      At the end of this course you will learn,
                    </p>
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

                    <p className='text-[14px] font-bold text-darkBlue  text-left mt-4'>
                      About course
                    </p>
                    <p className='text-darkText text-[12px]'>
                      {" "}
                      {data?.description}
                    </p>

                    <p className='text-[14px] font-bold text-darkBlue  text-left mt-4'>
                      Lesson outline
                    </p>

                    {data?.course_weeks.map((el, index) => (
                      <div
                        key={index}
                        className='flex items-center justify-start gap-x-2 text-[12px] text-darkText'>
                        <div className=''>
                          {el.week_number < 10
                            ? `0${el.week_number}.`
                            : `${el.week_number}.`}
                          {/* {el.week_number}. */}
                        </div>
                        <p className=''>{el.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            }
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default CourseDetailsModal;

/**
 * loading 
              ?      
                <div className=' relative inline-block align-top mt-24 bg-[#A9A9A9] w-full sm:w-[500px]  h-[500px] bg-[#E0FFF] rounded-lg overflow-hidden shadow-xl transform transition-all animate-pulse'>
                  <div
                  className='w-full h-[200px] sm:h-[250px] pb-6 animate-pulse bg-[#E0FFFF] flex flex-col justify-end items-center'/>

                  <div className="mt-16 flex flex-col gap-y-6 px-3 sm:px-10">
                    <div className="w-1/2 h-[40px] animate-pulse bg-[#E0FFFF]"/>
                    <div className="w-1/2 h-[40px] animate-pulse bg-[#E0FFFF]"/>
                  </div>
                  
                </div>
              : 
 */
