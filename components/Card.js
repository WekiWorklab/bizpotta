/* eslint-disable @next/next/no-img-element */
import React from "react";
// import { card_image } from "../public";

export default function Card({ clip }) {
  return (
    // <div className='mx-auto flex md:w-96 flex-col justify-center bg-bizpotta-purple rounded-md shadow-xl shadow-slate-300/60'></div>
    <div className='mx-auto flex w-96 flex-col justify-center bg-bizpotta-purple rounded-md shadow-xl shadow-slate-300/60'>
      {/* <!-- img --> */}
      <img
        // className='aspect-video md:w-96 rounded-t-2xl object-cover object-center'
        className='aspect-video w-full rounded-t-2xl object-cover object-center'
        src='https://images.pexels.com/photos/3118214/pexels-photo-3118214.jpeg?cs=srgb&dl=pexels-oladimeji-ajegbile-3118214.jpg&fm=jpg'
        alt='Card image'
      />

      {/* <!-- text information --> */}
      {/* <div className={`p-4 bg-[#121F4C] rounded-b-md -mt-56 pb-8 ${clip ? "clip-card-path  pt-12" : ""}`}> */}
      
      <div className={`p-4 bg-[#121F4C] rounded-b-md -mt-56 pb-8 ${clip ? "clip-card-path  pt-12" : ""}`}>
        <div className='flex justify-end items-end mb-10'>
          <button className='px-6 py-1 bg-[#94F236] rounded-md'>
            <span className='text-[#121F4C]'>Enroll</span>
          </button>
        </div>

        <h1 className='text-xl font-medium text-gray-50 pb-2'>Fashion Design</h1>
        <div className='flex w-full justify-between pt-10'>
          <p className='text-sm tracking-tight font-light text-slate-400 leading-6'>Design</p>
          <div className='text-sm tracking-tight font-light text-slate-400 leading-6 '>
            <div className='flex flex-col items-center'>
              <div className='flex items-center'>
                <svg
                  className='text-[#FFC700] h-5 w-5 flex-shrink-0'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
                {/* <!-- Heroicon name: solid/star --> */}
                <svg
                  className='text-[#FFC700] h-5 w-5 flex-shrink-0'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>

                {/* <!-- Heroicon name: solid/star --> */}
                <svg
                  className='text-[#FFC700] h-5 w-5 flex-shrink-0'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>

                {/* <!-- Heroicon name: solid/star --> */}
                <svg
                  className='text-[#FFC700] h-5 w-5 flex-shrink-0'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>

                {/* <!-- Heroicon name: solid/star --> */}
                <svg
                  className='text-gray-200 h-5 w-5 flex-shrink-0'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
              </div>
              <p className='sr-only'>4 out of 5 stars</p>
              <a href='#' className='ml-3 text-sm font-medium text-gray-50 hover:text-gray-300'>
                117 Studnets
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
