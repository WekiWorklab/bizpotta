/* eslint-disable @next/next/no-img-element */
import { ArrowRightIcon, CheckIcon, ExternalLinkIcon } from "@heroicons/react/solid";
import Navbars from "../components/Navbars";
import { home_page, masterclass, offer } from "../public";
import Card from "../components/Card";
import LibraryRadioButton from "../components/LibraryRadioButton";
import HomePageSlider from "../components/HomePageSlider";
import Team from "../components/Team";
import Head from "next/head";
import Testimonals from "../components/Testimonals";
import Footer from "../components/Footer";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addCategory } from "../store/courseSlice";

import {BsArrowRight} from 'react-icons/bs'
import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai'
import LandingMarketingCarousel, { MarketingCard } from "../components/LandingMarketingCarousel";
import LandingTestimonialCarousel from "../components/LandingTestimonialCarousel";
import GreenFooter from "../components/GreenFooter";
import { useRef } from "react";
import { forwardRef } from "react";
import { useEffect } from "react";

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

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [width, setWidth] = useState(0)

  const childRef = useRef({})
  const scrollRef = useRef({})
  

  useEffect(() => {
    setWidth(childRef.current?.offsetWidth)
    console.log(childRef.current?.offsetWidth)
  }, [])



  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleChangeCourse = (course) => {
    setSelectedCourse(course);
  };
  const handleSelectLibrary = () => {
    dispatch(addCategory(selectedCourse));
    router.push(`/learners-onboarding/${selectedCourse}`);
  };

  const clickScroll = ( scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset 
  }


  return (
    <>
      <Head>
        <title key='title'>BizPotta - Home</title>
      </Head>

      <div className='bg-gray-50'>
        <div className='relative overflow-hidden'>
          <main>
            <div className=' bg-gradient-to-b from-[#D6F7BA] to-white  '>
              <Navbars />
              <div className='pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden'>
                <div className='mx-auto max-w-7xl lg:px-8'>
                  <div className='lg:grid lg:grid-cols-2 lg:gap-4'>
                    <div className='mx-auto max-w-4xl px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center'>
                      <div className='lg:py-24'>
                        <h1 className='w-full mt-4 text-4xl font-medium text-bizpotta-gray-800 sm:mt-5 sm:text-4xl lg:mt-6 xl:text-5xl'>
                          <span className='font-fancy'>
                            Learn outstanding business
                            <span className='pt-2'> skills, advance and become a</span>
                            <span className='pt-2'> master in your craft</span>
                          </span>
                        </h1>
                        <p className='text-base text-bizpotta-gray-800 sm:text-xl lg:text-base xl:text-lg pt-5 md:pt-10'>
                          Bizpotta Learning is a massive business and vocational education platform designed to help entrepreneurs advance their
                          learning and master their craft. It is designed as a platform where tutors and learners connect
                        </p>
                        {/* two buttons  */}
                        <div className='mt-4 sm:mt-8 lg:mt-0 pt-5 md:10'>
                          <div className='flex justify-center lg:justify-start'>
                            <div className='flex-shrink-0 space-x-10 md:space-x-20'>
                              <button className='btn relative px-4 py-2  inline-flex items-center justify-start overflow-hidden transition-all rounded-md bg-bizpotta-purple group md:py-3 md:text-lg md:px-10'>
                                {/* purple box */}
                                <span className='w-0 h-0 rounded bg-bizpotta-green absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1'></span>
                                <span className='w-full text-white  transition-colors duration-300 ease-in-out group-hover:text-bizpotta-purple z-10'>
                                  Join For Free
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative'>
                      <div className='mx-auto ml-10 max-w-sm px-4 sm:max-w-2xl sm:px-6 lg:max-w-sm lg:px-0'>
                        {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                        <img
                          className='w-full -ml-8  lg:absolute lg:inset-y-0 lg:left-20 lg:h-full lg:w-auto lg:max-w-none'
                          src={home_page.src}
                          alt='logo'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trusted by*/}
            <div className='relative bg-gray-50 pt-16 sm:pt-24 lg:pt-32 shadow-sm'>
              <div className='mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl'>
                <div>
                  <h2 className='text-base font-light tracking-wider text-bizpotta-gray-800'>Over 15,000 companies trust Bizpotta</h2>
                  <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5'>
                      <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
                        <img className='h-12' src='https://tailwindui.com/img/logos/tuple-logo-gray-400.svg' alt='Tuple' />
                      </div>
                      <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
                        <img className='h-12' src='https://tailwindui.com/img/logos/mirage-logo-gray-400.svg' alt='Mirage' />
                      </div>
                      <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
                        <img className='h-12' src='https://tailwindui.com/img/logos/statickit-logo-gray-400.svg' alt='StaticKit' />
                      </div>
                      <div className='col-span-1 flex justify-center md:col-span-3 lg:col-span-1'>
                        <img className='h-12' src='https://tailwindui.com/img/logos/transistor-logo-gray-400.svg' alt='Transistor' />
                      </div>
                      <div className='col-span-2 flex justify-center md:col-span-3 lg:col-span-1'>
                        <img className='h-12' src='https://tailwindui.com/img/logos/workcation-logo-gray-400.svg' alt='Workcation' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* What we offer section */}
            <div className='relative mt-20 '>
              <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start'>
                <div className='relative sm:py-16 lg:py-0'>
                  <div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20'>
                    <div className='relative mx-4 pt-40 pb-40 md:pt-64 md:pb-56 rounded-2xl shadow-xl overflow-hidden'>
                      <img className='absolute inset-0 h-full w-full object-cover' src={offer.src} alt='' />
                    </div>
                  </div>
                </div>

                <div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 '>
                  <div className='pt-12 sm:pt-16 lg:pt-40 flex flex-col justify-center items-center mx-auto'>
                    <h2 className='text-[18px] font-bold text-darkBlue md:text-3xl font-light tracking-tight '>What we offer</h2>
                    <div className='mt-6 text-gray-500 space-y-6 relative'>
                      <dt>
                        <svg
                          width='20'
                          height='12'
                          className='absolute h-6 w-6 text-green-500'
                          viewBox='0 0 20 12'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M6.625 7.125L10.375 10.875L19.375 1.125M0.625 7.125L4.375 10.875L0.625 7.125ZM9.625 4.875L13.375 1.125L9.625 4.875Z'
                            stroke='#121F4C'
                            strokeWidth='0.8'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                        <p className='text-[14px] md:text-lg ml-9 '>Learn from the best in various industries</p>
                      </dt>
                      <dt>
                        <svg
                          width='20'
                          height='12'
                          className='absolute h-6 w-6 text-green-500'
                          viewBox='0 0 20 12'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M6.625 7.125L10.375 10.875L19.375 1.125M0.625 7.125L4.375 10.875L0.625 7.125ZM9.625 4.875L13.375 1.125L9.625 4.875Z'
                            stroke='#121F4C'
                            strokeWidth='0.8'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>{" "}
                        <p className='text-[14px] md:text-lg ml-9  leading-7'>Have the best vocational skills at your finger tips</p>
                      </dt>
                      <dt>
                        <svg
                          width='20'
                          height='12'
                          className='absolute h-6 w-6 text-green-500'
                          viewBox='0 0 20 12'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M6.625 7.125L10.375 10.875L19.375 1.125M0.625 7.125L4.375 10.875L0.625 7.125ZM9.625 4.875L13.375 1.125L9.625 4.875Z'
                            stroke='#121F4C'
                            strokeWidth='0.8'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>{" "}
                        <p className='text-[14px] md:text-lg ml-9  leading-7'>Mentorship programs from top leaders in industries</p>
                      </dt>
                      <dt>
                        <svg
                          width='20'
                          height='12'
                          className='absolute h-6 w-6 text-green-500'
                          viewBox='0 0 20 12'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M6.625 7.125L10.375 10.875L19.375 1.125M0.625 7.125L4.375 10.875L0.625 7.125ZM9.625 4.875L13.375 1.125L9.625 4.875Z'
                            stroke='#121F4C'
                            strokeWidth='0.8'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>{" "}
                        <p className='text-[14px] md:text-lg ml-9  leading-7'>Access to numerous resourses</p>
                      </dt>
                      <dt>
                        <svg
                          width='20'
                          height='12'
                          className='absolute h-6 w-6 text-green-500'
                          viewBox='0 0 20 12'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M6.625 7.125L10.375 10.875L19.375 1.125M0.625 7.125L4.375 10.875L0.625 7.125ZM9.625 4.875L13.375 1.125L9.625 4.875Z'
                            stroke='#121F4C'
                            strokeWidth='0.8'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>{" "}
                        <p className='text-[14px] md:text-lg ml-9  leading-7'>Business development and management</p>
                      </dt>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Programs Section */}
            <div className='relative bg-gray-50 pt-10 pb-6 sm:pt-10 lg:pt-14 px-6 md:pl-28'>
              <h1 className='text-start text-base md:text-lg font-light tracking-wider text-black'>
                <span className='font-bold'>Programs</span>
              </h1>
              <p className='text-start flex flex-col text-[13px] md:text-base font-light tracking-wider text-bizpotta-gray-800'>
                <span className='hidden md:block text-bizpotta-gray-800'>What do you want to learn?</span>
                <span>Explore our various program, personlised your search and select the course that best suit your need.</span>
              </p>
            </div>

            {/* CTA Section */}
            <div className='relative bg-gray-50 pb-10 '>
              <h1 className='px-6 md:pl-28 text-start md:text-lg font-light tracking-wider text-bizpotta-purple'>
                <span className='font-bold md:font-medium text-[15px] md:text-2xl'>Vocational Education</span>
              </h1>
              <p className='px-6  md:pl-28 text-start flex flex-col text-[13px] md:text-base font-light tracking-wider text-bizpotta-gray-800'>
                <span className='text-bizpotta-gray-800'>Learn in-demand skills to increase your value in the Market</span>
              </p>
              {/** <div className='pt-8 flex flex-col w-full justify-center items-center px-10 md:flex-row md:mx-auto gap-4 md:px-24 pb-8'>*/}
              <div className='hidden pt-8 md:flex flex-col w-full justify-center items-center px-10 md:flex-row md:mx-auto gap-4 md:px-28 pb-8'>
                <HomePageSlider />
              </div>
              {/*Explore Courses */}
              <a href='#' className='pt-6 md:pt-8 text-[13px] md:text-base flex gap-2 w-full justify-center items-center text-bizpotta-purple'>
                <span>Explore Courses</span>
                <ArrowRightIcon className='h-4 w-4 text-bizpotta-purple' aria-hidden='true' />
              </a>
            </div>

            {/* Library Section */}
            <div className='relative bg-gray-50 pt-16 pb-8 px-6 md:pl-28'>
              <h1 className='lg:w-[1000px] mx-auto md:mx-0  text-start text-lg font-light tracking-wider text-bizpotta-purple'>
                <span className='font-bold md:font-medium text-[15px] md:text-2xl '>Explore our course library</span>
              </h1>
              <p className='text-start flex flex-col text-base font-light tracking-wider text-bizpotta-gray-800 lg:w-[1000px] mx-auto md:mx-0  text-start '>
                <span className='text-bizpotta-gray-800 text-[14px] md:text-base'>Choose category that are of interest to you</span>
              </p>
              {/* list of radio in boxes */}

              <div className='w-full mx-auto md:mx-0 grid grid-cols-2 gap-y-6 md:gap-6 justify-center items-center md:grid md:grid-cols-2 md:gap-8 md:w-[700px] lg:grid-cols-3 lg:w-[1000px] py-8  md:items-center md:justify-center'>
                {optionsLists.map((option, index) => (
                  <LibraryRadioButton key={index} option={option} setSelectedCourse={handleChangeCourse} multiSelect={false} />
                ))}
              </div>
              {/* continue with arrow */}
              <button
                onClick={() => {
                  handleSelectLibrary();
                }}
                className='pt-4 md:pt-8 cursor-pointer flex gap-2 w-full justify-center items-center text-bizpotta-purple'
              >
                <span>Continue</span>
                <ArrowRightIcon className='h-4 w-4 text-bizpotta-purple' aria-hidden='true' />
              </button>
            </div>

            {/* Specialization Program Section */}
            <div className='relative bg-gray-50 pt-6 md:pt-16 pb-8'>
              <h1 className=' px-6 md:pl-28 text-start text-lg font-light tracking-wider text-bizpotta-purple'>
                <span className='font-bold md:font-medium text-[15px] md:text-2xl'>Specialization Program</span>
              </h1>
              <p className=' px-6 md:pr-4 md:pl-28  text-start flex flex-col text-[13px] md:text-base font-light tracking-wider text-bizpotta-gray-800'>
                <span className='text-bizpotta-gray-800'>
                  Learn the basics of business development management and get certificate on completion, This program will{" "}
                </span>
                <span className='text-bizpotta-gray-800'>empower our learners with skill to help manage their business effectively.</span>
              </p>
              {/* list of radio in boxes */}
              <div className='hidden pt-8 md:flex flex-col w-full justify-center items-center px-10 md:flex-row md:mx-auto gap-4 md:px-28 pb-8'>
                <HomePageSlider />
              </div>
              {/*Explore Courses */}
              <a href='#' className='pt-8 pb-16 flex gap-2 w-full justify-center items-center text-bizpotta-purple'>
                <span>Explore Courses</span>
                <ArrowRightIcon className='h-4 w-4 text-bizpotta-purple' aria-hidden='true' />
              </a>
            </div>

            {/* MasterClass Section */}
            <div className="relative ">
                <div className="w-[100px] h-[100px] bg-transparent absolute top-[43%] left-0 flex justify-center items-center rounded-full">
                    <AiFillCaretLeft size={80}  color='#797979'  onClick = {() => clickScroll(-width - 8)}/>
                </div>
                <div className=" mx-auto w-[1140px]  flex flex-row overflow-x-hidden gap-x-2 scroll-smooth " ref={scrollRef}>
                    <BlueSection ref={childRef} router = {router} />
                    <GreenSection  router = {router} />
                </div>
                <div className="w-[100px] h-[100px] bg-transparent absolute top-[43%] right-0 flex justify-center items-center rounded-full">
                    <AiFillCaretRight size={80} color='#797979' onClick = {() => clickScroll(width + 8)} />
                </div>
            </div>
            
            {/* Market and sell your Expertise Program Section */}
            <div className='relative bg-gray-50 pt-2 md:pt-12 pb-2 '>
              <h1 className=' px-6 md:pl-28 text-start text-lg font-light tracking-wider text-bizpotta-purple'>
                <span className='text-[15px] font-bold md:font-medium  md:text-2xl'>Market and sell your Expertise</span>
              </h1>
              <p className='px-6 md:pl-28 text-start flex flex-col text-[13px] md:text-base font-light tracking-wider text-bizpotta-gray-800'>
                <span className='text-bizpotta-gray-800 '>
                  Learn how to run sustainable and profitable businesses and accelerate business growth{" "}
                </span>
              </p>
              {/* list of radio in boxes */}
              {/* <div className='flex flex-col w-full justify-center items-center px-10 md:flex-row md:mx-auto gap-4 md:px-24'> */}

              {/* For mobile view only */}
              <div className="block sm:hidden"> 
                  <LandingMarketingCarousel />
              </div>    

              <div className='hidden sm:flex flex-col w-full justify-center items-center px-10 md:flex-row md:mx-auto gap-4 md:px-28 '>
                <Team />
              </div>
              {/*Explore Courses */}
              <a href='#' className='pb-6 flex gap-2 w-full justify-center items-center font-bold text-[13px] sm:text-base text-bizpotta-purple'>
                <span>Learn More</span>
                <ArrowRightIcon className='w-3 h-3 sm:h-4  sm:w-4 text-bizpotta-purple' aria-hidden='true' />
              </a>
            </div>

            {/* Market and sell your Expertise Program Section */}
            <div className='relative bg-gray-50 pt-10 pb-8'>
              <h1 className='px-6 md:pl-28 text-start text-[15px] md:text-lg font-light tracking-wider text-bizpotta-purple'>
                <span className='font-bold md:font-medium'>Bizpotta Community</span>
              </h1>
              <p className='px-6 md:pl-28 text-start flex flex-col text-[13px] sm:text-base font-light tracking-wider text-bizpotta-gray-800'>
                <span className='text-bizpotta-gray-800 '>A community that is intensional about your business growth</span>
              </p>

              {/* Testimonial for mobile view */}
              <div className="block sm:hidden mt-8">
                <LandingTestimonialCarousel />
              </div>

              {/* list of radio in boxes */}
              <div className='hidden sm:flex flex-col w-full items-center px-10 lg:px-2 md:flex-row md:mx-auto gap-4 md:px-36 '>
                <div className=' py-4 px-4 max-w-7xl sm:px-6 lg:px-0 lg:py-12 md:mx-auto '>
                  <ul className='space-y-4 lg:grid lg:grid-cols-3 lg:items-start lg:gap-x-8  lg:space-y-0 '>
                    <Testimonals />
                    <Testimonals />
                    <Testimonals />
                  </ul>
                </div>
              </div>
              {/*Explore Courses */}
              <a href='#' className='pb-2 mt-4 sm:mt-0 sm:pb-6 flex gap-2 w-full justify-center items-center font-bold text-[13px] sm:text-base text-bizpotta-purple'>
                <span>More Testimonals</span>
                <ArrowRightIcon className='w-3 h-3 sm:h-4  sm:w-4 text-bizpotta-purple' aria-hidden='true' />
              </a>
            </div>
          </main>
          {/* <Footer /> */}
          <GreenFooter />
        </div>
      </div>
    </>
  );
}






const GreenSection = () => {
  return (
    <section className='bg-[#1F9A5F] mx-auto  w-full  py-8 md:py-20 px-6 md:px-16 h-[600px] min-w-[1140px] rounded-xl'>
      <div className=" ">
        <div className="flex flex-row items-center gap-x-8">
          <div className="min-w-[70px] min-h-[5px] rounded-xl bg-bizpotta-green" />
          <div className="text-white text-[18px] ">Coming soon</div>
        </div>

        <div className="text-base mt-12 tracking-tight font-bold md:font-light sm:text-5xl xl:text-6xl text-white ">Specialization Program</div>
        <div className="text-base md:text-xl text-white mt-5">Learn the basics of business development and management, get certificate on completion. </div>
        <div className="text-base md:text-xl text-white mt-5">This program will empower you with skills needed to manage your business effectively.</div>
        <div className="text-white text-[18px] mt-16">Get notifications when we launch</div>

        <div className="w-[450px] h-[60px] rounded-md bg-white flex flex-row items-center mt-10">
            <input type="text" placeholder="Enter email address"  className="w-full h-[50px] outline-none border-0 bg-transparent text-gray-500 text-[15px] " />
            <div className="h-full w-[180px] bg-darkBlue centerFlex rounded-r-md text-white">
              Notify me
            </div>
        </div>
      </div>
    </section>
  )
}


// eslint-disable-next-line react/display-name
const BlueSection = forwardRef(({router}, ref) => {
  return (
    <section className='bg-gradient-to-br from-[#9DB9E4] to-[#B5DDFA] mx-auto blueShadow w-full  py-8 md:py-14 px-6 md:px-10 h-[600px] min-w-[1140px] rounded-xl' ref = {ref}>
                <div className='max-w-7xl lg:grid lg:grid-cols-12 lg:gap-8 '>
                  <div className='sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left'>
                    <h1>
                      <span className='pl-0 md:px-8 block text-base md:text-2xl tracking-tight font-bold md:font-light sm:text-5xl xl:text-6xl'>
                        <span className='block text-gray-900'>Masterclass Program</span>
                      </span>
                    </h1>
                      
                    <div className="w-full flex md:hidden text-[13px] text-gray-900">
                      Meet and connect with the best in industries
                    </div>

                    <div className='hidden md:block mt-6 md:px-8 text-gray-500 space-y-6 relative'>
                      <dt>
                        <svg
                          width='20'
                          height='12'
                          className='absolute h-6 w-6 text-green-500'
                          viewBox='0 0 20 12'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M6.625 7.125L10.375 10.875L19.375 1.125M0.625 7.125L4.375 10.875L0.625 7.125ZM9.625 4.875L13.375 1.125L9.625 4.875Z'
                            stroke='#121F4C'
                            strokeWidth='0.8'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>{" "}
                        <p className='text-base md:text-lg ml-9 text-black'>Learn from the best in various industries</p>
                      </dt>
                      <dt>
                        <svg
                          width='20'
                          height='12'
                          className='absolute h-6 w-6 text-green-500'
                          viewBox='0 0 20 12'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M6.625 7.125L10.375 10.875L19.375 1.125M0.625 7.125L4.375 10.875L0.625 7.125ZM9.625 4.875L13.375 1.125L9.625 4.875Z'
                            stroke='#121F4C'
                            strokeWidth='0.8'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>{" "}
                        <p className='text-base md:text-lg ml-9 text-black leading-7'>Have the best vocational skills at your finger tips</p>
                      </dt>
                      <dt>
                        <svg
                          width='20'
                          height='12'
                          className='absolute h-6 w-6 text-green-500'
                          viewBox='0 0 20 12'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M6.625 7.125L10.375 10.875L19.375 1.125M0.625 7.125L4.375 10.875L0.625 7.125ZM9.625 4.875L13.375 1.125L9.625 4.875Z'
                            stroke='#121F4C'
                            strokeWidth='0.8'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>{" "}
                        <p className='text-base md:text-lg ml-9 text-black leading-7'>Mentorship programs from top leaders in industries</p>
                      </dt>
                      <dt>
                        <svg
                          width='20'
                          height='12'
                          className='absolute h-6 w-6 text-green-500'
                          viewBox='0 0 20 12'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M6.625 7.125L10.375 10.875L19.375 1.125M0.625 7.125L4.375 10.875L0.625 7.125ZM9.625 4.875L13.375 1.125L9.625 4.875Z'
                            stroke='#121F4C'
                            strokeWidth='0.8'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>{" "}
                        <p className='text-base md:text-lg ml-9 text-black leading-7'>Access to numerous resourses</p>
                      </dt>
                      <dt>
                        <svg
                          width='20'
                          height='12'
                          className='absolute h-6 w-6 text-green-500'
                          viewBox='0 0 20 12'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M6.625 7.125L10.375 10.875L19.375 1.125M0.625 7.125L4.375 10.875L0.625 7.125ZM9.625 4.875L13.375 1.125L9.625 4.875Z'
                            stroke='#121F4C'
                            strokeWidth='0.8'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>{" "}
                        <p className='text-base md:text-lg ml-9 text-black leading-7'>Business development and management</p>
                      </dt>
                    </div>
                    <div className='md:px-8 w-full hidden md:flex items-center justify-start gap-14 mt-8 md:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0'>
                      <div className='flex items-center justify-center'>
                        <button className='px-6 py-2 h-14 w-30 inline-flex items-center justify-start overflow-hidden transition-all rounded-md bg-darkBlue' onClick={() => router.push('/masters')}>
                          {/* purple box */}
                          <span className='w-0 h-0 rounded bg-bizpotta-purple absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1'></span>
                          <span className='w-full text-white transition-colors duration-300 ease-in-out group-hover:text-bizpotta-purple z-10'>
                            Get started
                          </span>
                        </button>
                      </div>
                      {/* <div className='flex items-center justify-center'>
                        <a href='#' className=' flex gap-2 w-full justify-center items-center text-bizpotta-purple'>
                          <span>Explore Courses</span>
                        </a>
                      </div> */}
                    </div>
                  </div>
                  <div className=' mt-6 md:mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center '>
                    <div className='relative mx-auto w-full rounded-lg lg:max-w-md'>
                      <button
                        type='button'
                        className='relative block w-full rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      >
                        <span className='sr-only'>Watch our video to learn more</span>
                        <img className='w-full' src={masterclass.src} alt='' />
                      </button>
                    </div>
                  </div>

                  <div className='flex w-full flex-row justify-center mt-8 gap-x-2 px-6 items-center text-[13px] text-gray-900 font-bold text-darkBlue md:hidden'>
                    <p>Explore session</p>
                    <BsArrowRight color="gray"/>
                  </div>

                </div>
              </section>
  )
}
)