/* eslint-disable @next/next/no-img-element */
// import { card_image } from "../public";

export default function Card({ slide }) {
  return (
    // <div className='mx-auto flex md:w-96 flex-col justify-center bg-bizpotta-purple rounded-md shadow-xl shadow-slate-300/60'></div>
    <div className='mx-auto flex w-96 flex-col justify-center bg-bizpotta-purple md:min-h-[440px]  rounded-md shadow-xl shadow-slate-300/60'>
      {/* <!-- img --> */}
      <div className='h-1/2'>
        <img
          // className='aspect-video md:w-96 rounded-t-2xl object-cover object-center'
          className='w-full h-full rounded-t-md object-cover object-center'
          src={slide.img}
          alt='Card image'
        />
      </div>
      {/* <!-- text information --> */}
      {/* <div className={`p-4 bg-[#121F4C] rounded-b-md -mt-56 pb-8 ${clip ? "clip-card-path  pt-12" : ""}`}> */}

      <div className={`p-4 bg-[#121F4C] rounded-b-md -mt-56 pb-8 h-full`}>
        <div className='flex justify-end items-end mb-10'>
          <button className='px-6 py-1 bg-[#94F236] rounded-md'>
            <span className='text-[#121F4C]'>
              {slide.comingSoon ? "Coming Soon" : "learn more"}
            </span>
          </button>
        </div>

        <h1 className='text-xl font-medium text-gray-50 pb-2'>{slide.name}</h1>
        <div className='flex w-full justify-between pt-2'>
          <p className='text-sm tracking-tight font-light text-slate-400 leading-6'>
            {slide.description}
          </p>
        </div>
      </div>
    </div>
  );
}
