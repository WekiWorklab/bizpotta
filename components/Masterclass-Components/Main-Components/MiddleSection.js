import { LeftGroupCard, RightGroupCard, offer } from "../../../public";

import { GoPrimitiveDot } from "react-icons/go";
import { MainCarousel } from "./MainCarousel";

const MiddleSection = () => {
  return (
    <div className='w-full  bg-gradient-to-b from-[#FDFFFA] to-[#FDFFFA] py-24'>
      <div className='px-3 sm:px-10 xl:px-20'>
        <p className='text-lg sm:text-xl font-bold'>
          Expand your skillset, gain insights, and get support from mentors
        </p>
        <div
          className='w-full h-[350px] md:h-[500px] mt-10 bg-center bg-no-repeat bg-cover rounded-lg'
          style={{ backgroundImage: `url(${offer.src})` }}
        />
      </div>

      <div className='relative mt-16 sm:mt-20 md:mt-40 flex item-center justify-center'>
        <div className='absolute left-0 top-0'>
          <LeftGroupCard />
        </div>
        <div className='absolute right-0 top-0'>
          <RightGroupCard />
        </div>
        <div className='mt-10'>
          <p className='text-lg sm:text-xl font-bold text-center xl:text-left'>
            How mentors on Bizpotta can help achieve your dreams
          </p>
          <div className='w-full grid grid-cols-1 justify-items-center sm:grid-cols-2 xl:grid-cols-3 sm:gap-x-3 gap-y-10 sm:gap-y-4 md:gap-x-16 md:gap-y-10  mt-10'>
            <div className='w-[300px] h-[180px] text-white bg-darkBlue rounded-md py-4 px-6 flex flex-col justify-between'>
              <p>Career advice</p>
              <p className='text-sm w-[90%]'>
                Navigate career transitions, promotions and access a sounding
                board for career decisions.
              </p>
              <div className='w-[100px] h-[30px] centerFlex border rounded-md text-xs'>
                Get started
              </div>
            </div>

            <div className='w-[300px] h-[180px] text-white bg-darkBlue rounded-md py-4 px-6 flex flex-col justify-between'>
              <p>Business Development</p>
              <p className='text-sm w-[90%]'>
                Develop specific skills you want to improve in order to succeed
                in your career..
              </p>
              <div className='w-[100px] h-[30px] centerFlex border rounded-md text-xs'>
                Get started
              </div>
            </div>

            <div className='sm:col-span-2 xl:col-span-1 flex justify-center w-full'>
              <div className=' w-[300px] align-center h-[180px] text-white bg-darkBlue rounded-md py-4 px-6 flex flex-col justify-between'>
                <p>Skills</p>
                <p className='text-sm w-[90%]'>
                  Develop specific skills you want to improve in order to
                  succeed in your career.
                </p>
                <div className='w-[100px] h-[30px] centerFlex border rounded-md text-xs'>
                  Get started
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full flex  flex-col xl:flex-row items-center gap-x-10 px-3 sm:px-10 xl:px-20 mt-40'>
        <div className='flex flex-col sm:flex-row items-center border masters-shadow2 border-[#b1adad] rounded-md px-2 sm:px-6 py-3 sm:py-8 w-full xl:w-[70%]'>
          <div className='w-full  sm:w-2/3 '>
            <div className='flex items-center gap-x-2'>
              <GoPrimitiveDot size={14} color='red' />
              <p className='font-bold text-[14px]'>Live</p>
            </div>
            <p className=' text-center sm:text-left text-lg text-darkBlue font-bold mt-3'>
              Getting the right client
            </p>
            <div className='  flex justify-center sm:justify-start items-center  gap-x-4'>
              <p className='text-[13px]'>Jan 12th, 2022</p>
              <p className='text-[12px]'>Friday, 10:00pm</p>
            </div>
            <div className='hidden sm:block text-[12px] w-4/5 mt-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
              blandit id mollis metus porttitor ut aliquam. Aliquam fermentum
              felis viverra egestas justo, lacinia ac. Nibh etiam morbi egestas
              sed id iaculis. Eu eget ac felis ac. Quisque phasellus
            </div>
            <div className='mt-2 sm:mt-4 flex justify-center sm:justify-start items-center text-xs gap-x-2'>
              <p>Hastags</p>
              <div className='p-1 rounded-sm border border-[#b1adad]'>UI</div>
              <div className='p-1 rounded-sm border border-[#b1adad]'>UX</div>
              <div className='p-1 rounded-sm border border-[#b1adad]'>
                Design thinking
              </div>
            </div>
            <div className='mt-4 flex justify-center sm:justify-start items-center text-xs gap-x-2'>
              <div
                className='w-[40px] h-[40px] rounded-full bg-no-repeat bg-cover bg-center'
                style={{ backgroundImage: `url(${offer.src})` }}
              />
              <p>723+ attending</p>
            </div>

            <div className='flex gap-x-4 items-center justify-center sm:justify-start mt-2 sm:mt-8'>
              <div className='w-[100px] sm:w-[150px] h-[32px] sm:h-[40px] rounded-md bg-bizpotta-green centerFlex text-[13px] sm:text-[15px] '>
                Register
              </div>
              <div className='w-[100px] sm:w-[150px] h-[32px] sm:h-[40px] rounded-md bg-transparent centerFlex text-[13px] sm:text-[15px] border border-[#b1adad]'>
                Set reminder
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center w-full sm:w-1/3'>
            <div
              className='w-full mt-3 sm:mt-0 h-[200px] bg-no-repeat bg-cover bg-center '
              style={{ backgroundImage: `url(${offer.src})` }}></div>
            <div className='w-full grid grid-cols-3 gap-x-1 mt-2'>
              <div className='flex flex-col items-center justify-center py-1 rounded-md border border-[#b1adad]'>
                <p className='text-[11px]'>Days</p>
                <p className='text-[14px]'>07</p>
              </div>
              <div className='flex flex-col items-center justify-center py-1 rounded-md border border-[#b1adad]'>
                <p className='text-[11px]'>Days</p>
                <p className='text-[14px]'>07</p>
              </div>
              <div className='flex flex-col items-center justify-center py-1 rounded-md border border-[#b1adad]'>
                <p className='text-[11px]'>Days</p>
                <p className='text-[14px]'>07</p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full md:w-1/2 xl:w-[30%] h-full mt-12 xl:mt-0'>
          <p className='text-[15px] mb-2 font-bold text-center xl:text-left'>
            Upcoming events
          </p>
          <div className='gap-y-3 flex flex-col'>
            <div className='bg-[#FFFFFF] rounded-md py-4 px-6 border-[1px] border-[#E7E7E7] rounded-md flex flex-col justify-center'>
              <p className='text-[14px] w-2/3 font-bold'>
                Getting Started With Figma; A Designer’s First Step.........
              </p>
              <div className='flex flex-row items-center justify-between '>
                <div>
                  <p className='text-[13px] '>August 7, 2022</p>
                  <p className='text-[10px]'>Adekuncle Ajayi</p>
                </div>
                <div className='w-[80px] h-[24px] centerFlex bg-bizpotta-green text-[12px] rounded-[4px]'>
                  Register
                </div>
              </div>
            </div>
            <div className='bg-[#FFFFFF] rounded-md py-4 px-6 border-[1px] border-[#E7E7E7] rounded-md flex flex-col justify-center'>
              <p className='text-[14px] w-2/3 font-bold'>
                Getting Started With Figma; A Designer’s First Step.........
              </p>
              <div className='flex flex-row items-center justify-between '>
                <div>
                  <p className='text-[13px] '>August 7, 2022</p>
                  <p className='text-[10px]'>Adekuncle Ajayi</p>
                </div>
                <div className='w-[80px] h-[24px] centerFlex bg-bizpotta-green text-[12px] rounded-[4px]'>
                  Register
                </div>
              </div>
            </div>
            <div className='bg-[#FFFFFF] rounded-md py-4 px-6 border-[1px] border-[#E7E7E7] rounded-md flex flex-col justify-center'>
              <p className='text-[14px] w-2/3 font-bold'>
                Getting Started With Figma; A Designer’s First Step.........
              </p>
              <div className='flex flex-row items-center justify-between '>
                <div>
                  <p className='text-[13px] '>August 7, 2022</p>
                  <p className='text-[10px]'>Adekuncle Ajayi</p>
                </div>
                <div className='w-[80px] h-[24px] centerFlex bg-bizpotta-green text-[12px] rounded-[4px]'>
                  Register
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='px-2 sm:px-10 xl:px-20'>
        <div className='w-full mt-16  lg:mt-32'>
          <div className='text-center sm:text-left text-xl sm:text-xl font-bold'>
            Popular courses
          </div>
          <div className='flex justify-center w-full md:hidden'>
            <MainCarousel screen={[1.1, 10]} />
          </div>
          <div className='hidden  md:block lg:hidden w-full'>
            <MainCarousel screen={[2, 20]} />
          </div>
          <div className='hidden lg:block w-full'>
            <MainCarousel screen={[3, 30]} />
          </div>
        </div>

        <div className='w-full mt-16 lg:mt-32'>
          <div className='text-center sm:text-left text-xl sm:text-xl font-bold'>
            Top coaches/mentors
          </div>
          <div className='flex justify-center md:hidden w-full'>
            <MainCarousel screen={[1.1, 10]} />
          </div>
          <div className='hidden m-auto md:block lg:hidden w-full'>
            <MainCarousel screen={[2, 20]} />
          </div>
          <div className='hidden lg:block w-full'>
            <MainCarousel screen={[3, 30]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
