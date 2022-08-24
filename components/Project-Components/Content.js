import React from 'react'

////////
import MiddleSection from './MiddleSection'
import TopSection from './TopSection'

const Content = () => {
  return (
    <div className='relative w-full h-full bg-white sm:bg-gray-50 flex flex-col pt-[90px] md:pt-[120px] md:justify-center items-center md:translate-x-[200px] md:w-[calc(100%-200px)] pl-4 pb-10'>
           {/* Top Section */}
           <TopSection />
           <MiddleSection />
    </div>
  )
}

export default Content