/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Testimonals() {
  return (
    <div className='max-w-sm rounded overflow-hidden px-6 '>
      <img
        className='w-full rounded-lg'
        src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        alt='Sunset in the mountains'
      />
      <div className=' py-4'>
        <div className='font-bold text-xl mb-2'>Maxwell John</div>
        <p className='text-gray-700 text-base'>
          I have ben struggling with my business, after connecting with mentors who have gone through my part, i have been able to restructure my
          business and life
        </p>
        <p className='text-gray-800 mt-4'>
          <span>Cape Town, S.A</span>
        </p>
      </div>
    </div>
  );
}
