import React from 'react'
import Layout from '../../../components/CreatorsComponents/LayoutComponents/Layout'
import { MarketInsight } from '../../../public'
import { FaPaperPlane } from "react-icons/fa";

const index = () => {
  return (
    <Layout>
        <MarketInsightContent />
    </Layout>
  )
}

export default index



const MarketInsightContent = () => {



    return (
        <div className="relative w-full min-h-[calc(100vh-90px)] md:min-h-[calc(100vh-120px)] bg-[#FEFEFE] flex flex-col mt-[90px] md:mt-[120px] justify-center items-center gap-y-6 md:translate-x-[250px] md:w-[calc(100%-250px)] px-2 py-10 text-darkGray">

            <MarketInsight />

            <div className='text-2xl '>Market Insight. <span className='text-bizpotta-green'>Coming soon</span></div>

            <div className='max-w-[500px] break-words text-[#7A7A7A] text-[14px] text-center '>
            Gain excusive insight to courses in demand, what learners are interested in, most search courses on bizpotta and how to effectively monetize your platform 
            </div>

            <div className='flex items-center gap-x-10 mt-6'>
                <div className='text-[#0066FF] text-xl font-bold'>100 days <span className='text-[#222222]'>until launch</span></div>
                <div className='flex items-center gap-x-1 text-[14px]'>
                    <FaPaperPlane className='text-[#0066FF]'/>
                    <p className='cursor-pointer font-bold'>Notify me</p>
                </div>
            </div>

        </div>
    )
}