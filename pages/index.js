/* eslint-disable @next/next/no-img-element */
import { ArrowRightIcon, CheckIcon, ExternalLinkIcon } from "@heroicons/react/solid";
import Navbars from "../components/Navbars";
import { home_page, masterclass, offer } from "../public";
import Card from "../components/Card";
import LibraryRadioButton from "../components/LibraryRadioButton";
import HomePageSlider from "../components/HomePageSlider";
import Team from "../components/Team";
import Head from "next/head";

const footerNavigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
    {
      name: "Dribbble",
      href: "#",
      icon: (props) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
  ],
};

const optionsLists = [
  {
    id: 1,
    name: "Agriculture",
    href: "#",
  },
  {
    id: 1,
    name: "Arts",
    href: "#",
  },
  {
    id: 1,
    name: "Business",
    href: "#",
  },
  {
    id: 1,
    name: "Engineering",
    href: "#",
  },
  {
    id: 1,
    name: "IT & Software",
    href: "#",
  },
  {
    id: 1,
    name: "Law",
    href: "#",
  },
  {
    id: 1,
    name: "Design",
    href: "#",
  },
  {
    id: 1,
    name: "Development",
    href: "#",
  },
];

const handleSelectLibrary = (library) => {
  console.log(library);
};
export default function Home() {
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
              <div className='pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden'>
                <div className='mx-auto max-w-7xl lg:px-8'>
                  <div className='lg:grid lg:grid-cols-2 lg:gap-4'>
                    <div className='mx-auto max-w-4xl px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center'>
                      <div className='lg:py-24'>
                        <h1 className='w-full mt-4 text-4xl font-medium text-bizpotta-gray-800 sm:mt-5 sm:text-4xl lg:mt-6 xl:text-5xl'>
                          <span>
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

                              <button className='btn relative px-4 py-2  inline-flex items-center justify-start overflow-hidden transition-all rounded-md border border-bizpotta-purple group md:py-3 md:text-lg md:px-12'>
                                {/* purple box */}
                                <span className='w-0 h-0 rounded bg-bizpotta-purple absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1'></span>
                                <span className='w-full text-bizpotta-purple  transition-colors duration-300 ease-in-out group-hover:text-white z-10'>
                                  Sign in
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
            <div className='relative bg-white pt-16 sm:pt-24 lg:pt-32 shadow-sm'>
              <div className='mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl'>
                <div>
                  <h2 className='text-base font-light tracking-wider text-bizpotta-gray-800'>Over 15000+ companies trust Bizpotta</h2>
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
                    <h2 className='text-3xl text-gray-900 font-light tracking-tight '>What we offer</h2>
                    <div className='mt-6 text-gray-500 space-y-6 relative'>
                      <dt>
                        <CheckIcon className='absolute h-6 w-6 text-green-500' aria-hidden='true' />
                        <p className='text-base md:text-lg ml-9 '>Learn from the best in various industries</p>
                      </dt>
                      <dt>
                        <CheckIcon className='absolute h-6 w-6 text-green-500' aria-hidden='true' />
                        <p className='text-base md:text-lg ml-9  leading-7'>Have the best vocational skills at your finger tips</p>
                      </dt>
                      <dt>
                        <CheckIcon className='absolute h-6 w-6 text-green-500' aria-hidden='true' />
                        <p className='text-base md:text-lg ml-9  leading-7'>Mentorship programs from top leaders in industries</p>
                      </dt>
                      <dt>
                        <CheckIcon className='absolute h-6 w-6 text-green-500' aria-hidden='true' />
                        <p className='text-base md:text-lg ml-9  leading-7'>Access to numerous resourses</p>
                      </dt>
                      <dt>
                        <CheckIcon className='absolute h-6 w-6 text-green-500' aria-hidden='true' />
                        <p className='text-base md:text-lg ml-9  leading-7'>Business development and management</p>
                      </dt>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Programs Section */}
            <div className='relative bg-gray-50 py-10 sm:pt-24 lg:pt-32 md:pl-28 '>
              <h1 className='text-center md:text-start text-lg font-light tracking-wider text-bizpotta-purple'>
                <span className='font-normal'>Programs</span>
              </h1>
              <p className='text-center md:text-start flex flex-col text-base font-light tracking-wider text-bizpotta-gray-800'>
                <span className='text-bizpotta-gray-800'>What do you want to learn?</span>
                <span>Explore our various program, personlised your search and select the course that best suit your need.</span>
              </p>
            </div>

            {/* CTA Section */}
            <div className='relative bg-gray-50 pb-10'>
              <h1 className='md:pl-28 text-center md:text-start text-lg font-light tracking-wider text-bizpotta-purple'>
                <span className='font-medium'>Vocational Education</span>
              </h1>
              <p className='md:pl-28 text-center md:text-start flex flex-col text-base font-light tracking-wider text-bizpotta-gray-800'>
                <span className='text-bizpotta-gray-800'>Learn in-demand skills to increase your value in the Market</span>
              </p>
              <div className='pt-8 flex flex-col w-full justify-center items-center px-10 md:flex-row md:mx-auto gap-4 md:px-24 pb-8'>
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
              {/*Explore Courses */}
              <a href='#' onClick={handleSelectLibrary} className='pt-8 flex gap-2 w-full justify-center items-center text-bizpotta-purple'>
                <span>Explore Courses</span>
                <ArrowRightIcon className='h-4 w-4 text-bizpotta-purple' aria-hidden='true' />
              </a>
            </div>

            {/* Library Section */}
            <div className='relative bg-gray-50 pt-16  pb-8'>
              <h1 className='md:pl-28 text-center md:text-start text-lg font-light tracking-wider text-bizpotta-purple'>
                <span className='font-medium'>Explore our course library</span>
              </h1>
              <p className='md:pl-28 text-center md:text-start flex flex-col text-base font-light tracking-wider text-bizpotta-gray-800'>
                <span className='text-bizpotta-gray-800'>Choose category that are of interest to you</span>
              </p>
              {/* list of radio in boxes */}
              <div className='w-full mx-auto flex flex-col gap-6 justify-center items-center md:grid md:grid-cols-3 md:gap-8 md:px-24 py-8'>
                {optionsLists.map((option, index) => (
                  <LibraryRadioButton key={index} option={option} />
                ))}
              </div>
              {/* continue with arrow */}
              <a href='#' onClick={handleSelectLibrary} className='pt-8  flex gap-2 w-full justify-center items-center text-bizpotta-purple'>
                <span>Continue</span>
                <ArrowRightIcon className='h-4 w-4 text-bizpotta-purple' aria-hidden='true' />
              </a>
            </div>

            {/* Specialization Program Section */}
            <div className='relative bg-gray-50 pt-16 pb-8'>
              <h1 className='md:pl-28 text-center md:text-start text-lg font-light tracking-wider text-bizpotta-purple'>
                <span className='font-medium'>Specialization Program</span>
              </h1>
              <p className='md:pl-28 text-center md:text-start flex flex-col text-base font-light tracking-wider text-bizpotta-gray-800'>
                <span className='text-bizpotta-gray-800'>
                  Learn the basics of business development management and get certificate on completion, This program will{" "}
                </span>
                <span className='text-bizpotta-gray-800'>empower our learners with skill to help manage their business effectively.</span>
              </p>
              {/* list of radio in boxes */}
              <div className='hidden  pt-8 md:flex flex-col w-full justify-center items-center px-10 md:flex-row md:mx-auto gap-4 md:px-24 pb-8'>
                <HomePageSlider />
              </div>
              {/*Explore Courses */}
              <a href='#' onClick={handleSelectLibrary} className='pt-8 pb-16 flex gap-2 w-full justify-center items-center text-bizpotta-purple'>
                <span>Explore Courses</span>
                <ArrowRightIcon className='h-4 w-4 text-bizpotta-purple' aria-hidden='true' />
              </a>
            </div>

            {/* MasterClass Section */}
            <section className='bg-bizpotta-green-100 mx-auto w-full py-20 px-6 md:px-16 mb-10'>
              <div className='max-w-7xl lg:grid lg:grid-cols-12 lg:gap-8'>
                <div className='sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left'>
                  <h1>
                    <span className='mt-1 px-8 block text-2xl tracking-tight font-light sm:text-5xl xl:text-6xl'>
                      <span className='block text-gray-900'>Masterclass Program</span>
                    </span>
                  </h1>
                  <div className='mt-6 md:px-8 text-gray-500 space-y-6 relative'>
                    <dt>
                      <CheckIcon className='absolute h-6 w-6 text-green-500' aria-hidden='true' />
                      <p className='text-base md:text-lg ml-9 '>Learn from the best in various industries</p>
                    </dt>
                    <dt>
                      <CheckIcon className='absolute h-6 w-6 text-green-500' aria-hidden='true' />
                      <p className='text-base md:text-lg ml-9  leading-7'>Have the best vocational skills at your finger tips</p>
                    </dt>
                    <dt>
                      <CheckIcon className='absolute h-6 w-6 text-green-500' aria-hidden='true' />
                      <p className='text-base md:text-lg ml-9  leading-7'>Mentorship programs from top leaders in industries</p>
                    </dt>
                    <dt>
                      <CheckIcon className='absolute h-6 w-6 text-green-500' aria-hidden='true' />
                      <p className='text-base md:text-lg ml-9  leading-7'>Access to numerous resourses</p>
                    </dt>
                    <dt>
                      <CheckIcon className='absolute h-6 w-6 text-green-500' aria-hidden='true' />
                      <p className='text-base md:text-lg ml-9  leading-7'>Business development and management</p>
                    </dt>
                  </div>
                  <div className='md:px-8 w-full flex items-center justify-start gap-14 mt-8 md:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0'>
                    <div className='flex items-center justify-center'>
                      <button className='px-6 py-2 h-14 w-30 inline-flex items-center justify-start overflow-hidden transition-all rounded-md bg-bizpotta-green'>
                        {/* purple box */}
                        <span className='w-0 h-0 rounded bg-bizpotta-purple absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1'></span>
                        <span className='w-full text-gray-800 transition-colors duration-300 ease-in-out group-hover:text-bizpotta-purple z-10'>
                          Get started
                        </span>
                      </button>
                    </div>
                    <div className='flex items-center justify-center'>
                      <a href='#' onClick={handleSelectLibrary} className=' flex gap-2 w-full justify-center items-center text-bizpotta-purple'>
                        <span>Explore Courses</span>
                        <ArrowRightIcon className='h-4 w-4 text-bizpotta-purple' aria-hidden='true' />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center'>
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
              </div>
            </section>
            {/* Market and sell your Expertise Program Section */}
            <div className='relative bg-gray-50 pt-16 pb-8'>
              <h1 className='md:pl-28 text-center md:text-start text-lg font-light tracking-wider text-bizpotta-purple'>
                <span className='font-medium'>Market and sell your Expertise</span>
              </h1>
              <p className='md:pl-28 text-center md:text-start flex flex-col text-base font-light tracking-wider text-bizpotta-gray-800'>
                <span className='text-bizpotta-gray-800'>Learn how to run sustainable and profitable businesses and accelerate business growth </span>
              </p>
              {/* list of radio in boxes */}
              <div className='flex flex-col w-full justify-center items-center px-10 md:flex-row md:mx-auto gap-4 md:px-24'>
                <Team />
              </div>
              {/*Explore Courses */}
              <a href='#' onClick={handleSelectLibrary} className='pt-8 pb-16 flex gap-2 w-full justify-center items-center text-bizpotta-purple'>
                <span>Explore Courses</span>
                <ArrowRightIcon className='h-4 w-4 text-bizpotta-purple' aria-hidden='true' />
              </a>
            </div>
          </main>

          <footer className='bg-bizpotta-green' aria-labelledby='footerHeading'>
            <h2 id='footerHeading' className='sr-only'>
              Footer
            </h2>
            <div className='max-w-md mx-auto pt-12 px-4 sm:max-w-7xl sm:px-6 lg:pt-16 lg:px-8'>
              <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
                <div className='space-y-8 xl:col-span-1'>
                  <img className='h-10' src='https://tailwindui.com/img/logos/workflow-mark-gray-300.svg' alt='Company name' />
                  <p className='text-gray-800 text-base'>Making the world a better place through constructing elegant hierarchies.</p>
                  <div className='flex space-x-6'>
                    {footerNavigation.social.map((item) => (
                      <a key={item.name} href={item.href} className='text-gray-900 hover:text-gray-800'>
                        <span className='sr-only'>{item.name}</span>
                        <item.icon className='h-6 w-6' aria-hidden='true' />
                      </a>
                    ))}
                  </div>
                </div>
                <div className='mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2'>
                  <div className='md:grid md:grid-cols-2 md:gap-8'>
                    <div>
                      <h3 className='text-sm font-semibold text-gray-900 tracking-wider uppercase'>Solutions</h3>
                      <ul className='mt-4 space-y-4'>
                        {footerNavigation.solutions.map((item) => (
                          <li key={item.name}>
                            <a href={item.href} className='text-base text-gray-800 hover:text-gray-900'>
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className='mt-12 md:mt-0'>
                      <h3 className='text-sm font-semibold text-gray-900 tracking-wider uppercase'>Support</h3>
                      <ul className='mt-4 space-y-4'>
                        {footerNavigation.support.map((item) => (
                          <li key={item.name}>
                            <a href={item.href} className='text-base text-gray-800 hover:text-gray-900'>
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className='md:grid md:grid-cols-2 md:gap-8'>
                    <div>
                      <h3 className='text-sm font-semibold text-gray-900 tracking-wider uppercase'>Company</h3>
                      <ul className='mt-4 space-y-4'>
                        {footerNavigation.company.map((item) => (
                          <li key={item.name}>
                            <a href={item.href} className='text-base text-gray-800 hover:text-gray-900'>
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className='mt-12 md:mt-0'>
                      <h3 className='text-sm font-semibold text-gray-900 tracking-wider uppercase'>Legal</h3>
                      <ul className='mt-4 space-y-4'>
                        {footerNavigation.legal.map((item) => (
                          <li key={item.name}>
                            <a href={item.href} className='text-base text-gray-800 hover:text-gray-900'>
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-12 border-t border-gray-200 py-8'>
                <p className='text-base text-gray-900 xl:text-center'>&copy; 2020 Workflow, Inc. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
