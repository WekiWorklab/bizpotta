///

/////
import { useRouter } from "next/router";
import { AiOutlineHeart, AiOutlineLeft, AiOutlineUpload } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";

const TopSection = ({ data }) => {
  const image =
    "https://cdn.pixabay.com/photo/2022/01/17/17/20/bored-6945309__340.png";

  const router = useRouter();

  const { id } = router.query;

  const handleClick = () => {
    router.push(`/students/courses/${id}/week/1`);
    // This should send the user to a particular course week but the default would be week 1
  };
  const handleBack = () => {
    router.back();
  };

  console.log(data);

  return (
    <div className=' w-full flex flex-col pt-4 pr-2 md:pr-6 '>
      <div className='text-[13px] cursor-pointer' onClick={() => handleBack()}>
        <AiOutlineLeft className='inline mr-2' />
        <p className='inline'>Go to home</p>
      </div>

      <div
        className='w-full h-[230px]  md:h-[500px]  mt-4  bg-no-repeat bg-cover bg-center flex justify-center items-center cursor-pointer'
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_REACT_APP_STORAGE_URL}/${data?.course?.image}) `,
        }}
        onClick={() => handleClick()}>
        <FaPlay size={40} color='white' />
      </div>

      <h1 className='text-[18px] font-[600] mt-4'>{data?.course?.name}</h1>
      <div className='flex flex-row items-center w-full justify-between '>
        <div className='flex flex-row items-center '>
          <img src={image} className='w-[40px] h-[40px] rounded-full mr-4 ' />
          <p className='text-[12px] sm:text-base '>
            by {data?.course?.course_instructor.firstName}{" "}
            {data?.course?.course_instructor.lastName}
          </p>
        </div>
        <div className='flex flex-row justify-self-end  items-center'>
          <IoIosPeople className='text-[20px] mr-4' />
          <p className='text-[13px] mr-4'>
            {data?.course.course_student?.length} enrolled
          </p>
          <AiOutlineHeart className='text-[20px] mr-4' />
          <AiOutlineUpload className='text-[20px]' />
        </div>
      </div>

      <h1 className='mt-6 font-[600] text-[14px]'>About this course</h1>
      <p className='text-[13px]'>{data?.course?.description}</p>

      <h1 className='text-[13px] font-[600] mt-6'>Description</h1>
      <div className=' flex flex-row justify-between md:grid grid-cols-3 text-[13px] '>
        <div className='flex flex-col '>
          <div>
            <span className='font-[600]'>Skill level: </span>
            <span>{data?.course?.level}</span>
          </div>
          <div>
            <span className='font-[600]'>Audio: </span>
            <span>{data?.course.language}</span>
          </div>
        </div>

        <div className='flex flex-col col-start-2'>
          <div>
            <span className='font-[600]'>Language: </span>
            <span>available in {data?.course?.language} language</span>
          </div>
          <div>
            <span className='font-[600]'>Videos: </span>
            <span>{data?.course?.course_weeks.length}</span>
          </div>
          <div>
            <span className='font-[600]'>Estimated course time: </span>
            <span>{data?.course?.course_weeks.length * 0.5} hrs</span>
          </div>
        </div>
      </div>

      <h1 className='font-[600] text-[14px] mt-6'>Certificate</h1>
      <p className='text-[13px]'>Certificate is issued on completion</p>

      <h1 className='font-[600] text-[14px] mt-6 '>What you will learn</h1>

      {data?.course?.course_weeks.map((el, index) => (
        <div key={index} className=''>
          <li className='font-[600] text-[14px] mt-4 list-disc '>{el.title}</li>
          <p className='text-[13px] leading-[24px]'>
            {el.week_lectures.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TopSection;
