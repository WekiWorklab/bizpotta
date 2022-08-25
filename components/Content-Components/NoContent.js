import React from 'react'

// /////
import TopSection from './NoContent-TopSection'
import BottomSection from './NoContent-BottomSection'

const NoContent = () => {


return (
    <div className='relative w-full  md:bg-gray-50 flex flex-col pt-[90px] md:pt-[120px] md:justify-start md:translate-x-[200px] md:w-[calc(100%-200px)] text-darkBlue  '>
        
        {/* Top section */}
        <TopSection />

        {/* Bottom section  */}
        <BottomSection />
    </div>
  )
}

export default NoContent


