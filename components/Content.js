import React from 'react'
import {BsHeart, BsPersonPlus, BsChatDots} from 'react-icons/bs'
import {BiTransfer} from 'react-icons/bi'
import { card_image } from '../public'
import AreaChart from './Content-Components/AreaChart'
import { CircleChart } from './Content-Components/DonutChart'
import ContentCarousel from './Content-Components/ContentCarousel'
import InstructorCard from './Content-Components/InstructorCard'
import InstructorCarousel from './Content-Components/InstructorCarousel'
import ProgramCarousel from './Content-Components/ProgramCarousel'
import TopSection from './Content-Components/TopSection'
import BottomSection from './Content-Components/BottomSection'

const Content = () => {


return (
    <div className='relative w-full  md:bg-gray-50 flex flex-col pt-[90px] md:pt-[120px] md:justify-start md:translate-x-[200px] md:w-[calc(100%-200px)] text-darkBlue '>
        
        {/* Top section */}
            <TopSection />

        {/* Bottom section  */}
            <BottomSection />     
    </div>
  )
}

export default Content


