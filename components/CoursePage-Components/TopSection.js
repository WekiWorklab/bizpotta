import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ClassCards, { ClassCardsMobile } from "../ClassCards";

const TopSection = ({}) => {
  const router = useRouter();
  const [pathName, setPathName] = useState("");

  useEffect(() => {
    setPathName(router.asPath);
  });

  return (
    <div className='pt-6'>
      <p className=' hidden sm:block sm:font-[600] sm:mb-[20px]'>
        Welcome back Naomi, continue from where you stopped
      </p>
      <div className='mb-[20px]'>
        <p className='block sm:hidden text-[12px]'>Welcome back Naomi</p>
        <p className='block sm:hidden text-[14px] font-[600]'>
          Continue from where you stopped
        </p>
      </div>

      {/* #5FFC54 */}
      <h1 className='text-[15px] font-semibold mt-10 w-full'>
        Explore various programmes
      </h1>

      <p className='text-gray-400 text-[13px] mt-2'>
        Learn from the best in the industry and take your business
      </p>

      <ClassCards />

      <div className='w-full sm:w-[400px] md:hidden mt-10'>
        <ClassCardsMobile />
      </div>
    </div>
  );
};

export default TopSection;

/**
 <div className="hidden xl:flex xl:w-full">
 <CourseCarousel screen="big" data={Data} />
</div>

<div className="hidden lg:flex lg:w-full xl:hidden">
 <CourseCarousel screen="medium" data={Data} />
</div>

<div className="hidden sm:flex sm:flex-nowrap sm:w-full lg:hidden">
 <CourseCarousel screen="small" data={Data} />
</div>

<div className="flex w-full sm:hidden">
 <CourseCarousel screen="mobile" data={Data} />
</div>
 */
