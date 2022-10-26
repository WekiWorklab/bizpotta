import React from "react";
import ContentCarousel from "./ContentCarousel";
import InstructorCarousel from "./InstructorCarousel";
import { Data, instructorData } from "./Data";
import { card_image } from "../../public";

const BottomSection = () => {
  return (
    <div className="pl-0 lg:pl-5 flex flex-col xl:flex-row  w-full">
      <div className="bg-white w-full m-auto  ">
        <div className="pt-[50px] flex flex-col">
          <p className="text-[14px] mb-4 md:text-md font-semibold md:mb-8 ml-4">
            Because you liked a course on fashion designing
          </p>
          <div className="block w-[360px] m-auto md:hidden">
            <ContentCarousel data={Data} smallScreen={true} />
          </div>
          <div className="hidden md:block">
            <ContentCarousel data={Data} smallScreen={false} bottom={true} />
          </div>
        </div>
        <div className="pt-[50px] flex flex-col">
          <p className="text-[14px] mb-4 md:text-md font-semibold md:mb-8 ml-4">
            Based on recent activites
          </p>
          <div className="block w-[360px] m-auto md:hidden">
            <ContentCarousel data={Data} smallScreen={true} />
          </div>
          <div className="hidden md:block">
            <ContentCarousel data={Data} smallScreen={false} bottom={true} />
          </div>
        </div>
        <div className="pt-[50px] flex flex-col">
          <p className="text-[14px] mb-4 md:text-md font-semibold md:mb-8 ml-4 ">
            Instructors
          </p>
          <div className="block w-[360px] m-auto md:hidden">
            <InstructorCarousel data={instructorData} smallScreen={true} />
          </div>
          <div className="hidden md:block">
            <InstructorCarousel
              data={instructorData}
              smallScreen={false}
              bottom={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;

{
  /* <div className=' bg-white w-full md:w-[650px] lg:w-[850px] flex flex-col sm:flex-row xl:flex-col items-start justify-start mx-auto pt-2'> */
}
{
  /* 
                <div className='hidden xl:flex flex-col flex-wrap justify-evenly items-center xl:w-[252px] xl:mt-2  mx-auto  xl:mt-10'>
                    <h1 className='mt-10 mx-auto'>Trending Courses</h1>
                    
                        <div className='w-[250px] h-[96px] bg-[#F9FFF3] relative rounded-md flex flex-row justify-evenly items-center mt-5'>
                            <img src={card_image.src} className = 'h-12 w-12 rounded-md'/>
                            <div className='flex flex-col'>
                                <p className='text-[13px]'>Cut and sew tops for women </p>
                                <p className='text-[11px]'>By Queen Paul</p>
                            </div>
                            <p className='text-[9px] absolute top-[78px] right-2'>Monday 9pm</p>
                        </div>

                        <div className='w-[250px] h-[96px] bg-[#F9FFF3] relative rounded-md flex flex-row justify-evenly items-center mt-5'>
                            <img src={card_image.src} className = 'h-12 w-12 rounded-md'/>
                            <div className='flex flex-col'>
                                <p className='text-[13px]'>Cut and sew tops for women </p>
                                <p className='text-[11px]'>By Queen Paul</p>
                            </div>
                            <p className='text-[9px] absolute top-[78px] right-2'>Monday 9pm</p>
                        </div>

                        <div className='w-[250px] h-[96px] bg-[#F9FFF3] relative rounded-md flex flex-row justify-evenly items-center mt-5'>
                            <img src={card_image.src} className = 'h-12 w-12 rounded-md'/>
                            <div className='flex flex-col'>
                                <p className='text-[13px]'>Cut and sew tops for women </p>
                                <p className='text-[11px]'>By Queen Paul</p>
                            </div>
                            <p className='text-[9px] absolute top-[78px] right-2'>Monday 9pm</p>
                        </div>
                </div> */
}
{
  /* </div> */
}

{
  /* <div className='pt-[50px] flex flex-col'>
                            <p className="text-[14px] mb-4 md:text-md font-semibold md:mb-8 ml-4">Recommended for you</p>
                            <div className='block w-[360px] m-auto md:hidden'>
                                <ContentCarousel data = {Data} smallScreen = {true} />
                            </div>
                            <div className='hidden md:block'>
                                <ContentCarousel data = {Data} smallScreen = {false}/>
                            </div> 
                    </div>
                    <div className='pt-[50px] flex flex-col'>
                            <p className="text-[14px] mb-4 md:text-md font-semibold md:mb-8 ml-4">Popular courses</p>
                            <div className='block w-[360px] m-auto md:hidden'>
                                <ContentCarousel data = {Data} smallScreen = {true} />
                            </div>
                            <div className='hidden md:block'>
                                <ContentCarousel data = {Data} smallScreen = {false}/>
                            </div> 
                    </div> */
}
