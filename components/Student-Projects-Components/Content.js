import React from 'react'

/////////////
import MiddleSection from './MiddleSection'
import NoProjects from './NoProjects'
import TopSection from './TopSection'

const Content = () => {

    const isProjects = true // Boolean for if the student has projects or not
    // h-[calc(100vh-120px)]

  return (
    <div className='relative w-full bg-white sm:bg-gray-50 flex flex-col pt-[90px] md:pt-[120px] md:justify-center items-center md:translate-x-[200px] md:w-[calc(100%-200px)] sm:pl-4 pb-10 xl:px-8  border'>
        {isProjects ? 
        <>
            <TopSection />
            <MiddleSection />
        </>
         :
         <NoProjects />}
        
    </div>
  )
}

export default Content