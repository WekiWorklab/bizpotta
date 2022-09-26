import React from 'react'
import { useState } from 'react'
import { AiOutlineLike, AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { BiShare } from 'react-icons/bi'
import { FiAward } from 'react-icons/fi'
import { offer } from '../../../public'
import Header from '../../Header'


const Content = () => {
 
    const [select, setSelect] = useState('review')

  return (
    <div className='relative w-full h-full bg-white sm:bg-[#FEFEFE] flex flex-col pt-[90px] md:pt-[120px] md:justify-center items-center md:translate-x-[200px] md:w-[calc(100%-200px)] pb-10'>
            <div className='w-full h-[300px] bg-no-repeat bg-center bg-cover' style={{backgroundImage: `url(${offer.src})`}} />
            <img src={offer.src}  className = 'w-[120px] h-[120px] top-[370px] left-24 absolute object-cover rounded-full border-4 border-white'/>
            <div className='w-full  flex items-center justify-between pl-56 mt-2 pr-24'>
                <div className='flex flex-col'>
                    <p className='font-bold text-[14px]'>Ibrahim Abubakar</p>
                    <p className='text-[12px] '>Graphic designer at Google</p>
                    <p className='text-[11px]'>23,123 followers</p>
                </div>

                <div className='flex items-center gap-x-5'>
                    <div className='flex items-center gap-x-1 text-[14px]'>
                        <AiOutlinePlusCircle color='#999999' />
                        <p>Follow</p>
                    </div>

                    <div className='flex items-center gap-x-1 text-[14px]'>
                        <BiShare color='#999999' />
                        <p>Share</p>
                    </div>
                </div>
            </div>

            {/* Contents */}

            <div className='w-full px-24 mt-10 '>
                <div className='w-full flex items-end border-b-2 border-gray-400 text-[14px] gap-x-8 px-2'>
                    <p className={`${select==='about' ? "border-b-2" : "border-0"} border-bizpotta-green`} onClick={() => setSelect('about')}>About</p>
                    <p className={`${select==='review' ? "border-b-2" : "border-0"} border-bizpotta-green`} onClick={() => setSelect('review')}>Review</p>
                    <p className={`${select==='session' ? "border-b-2" : "border-0"} border-bizpotta-green`} onClick={() => setSelect('session')}>Session</p>
                </div>

            {select === 'about' && <About />}

            {select === 'review' && <Review />}


            </div>



    </div>
  )
}

export default Content



const Session = () => {

    return (
        <div className='w-full '>

        </div>
    )
}




const Review = () => {

    const arr = new Array(3).fill('')

    return (
        <div className='w-full mt-5'>
            {arr.map((el, index) => (
            <div key={index} className='w-full p-5 mt-5 bg-[#F6FFED]  flex items-start gap-x-4 rounded-sm'>
                <img src={offer.src} alt='' className='w-[50px] h-[50px] rounded-full object-cover' />
                <div className='flex flex-col gap-y-1 mt-3'>
                    <p className='text-[14px]'>Amaka Jonathan</p>
                    <p className='text-[12px]'>30min ago</p>
                    <p className='text-[13px]'>An outstanding session</p>
                    <div className='mt-5 flex gap-x-3'>
                        <div className='flex items-center gap-x-2'>
                            <AiOutlineLike size={14} color='#999999'/>
                            <p className='text-[12px] '>12 likes</p>
                        </div>
                        <div className='flex items-center gap-x-2'>
                            <AiOutlineMinusCircle size={14} color='#999999'/>
                            <p className='text-[12px] '>Reply</p>
                        </div>
                    </div>
                </div>
            </div>

            ))}
        </div>
    )
}

const About = () => {

    return (
        <div className='w-full mt-5'>
            <div className='w-full h-[250px] bg-no-repeat bg-cover bg-center' style={{backgroundImage: `url(${offer.src})`}} />
            <p className='mt-10 text-[14px]'> Hi, </p>
            <p className=' text-[14px]'>
            I am Samantha Oke, a graphic designer at google. I have over 18 years of experience, I can’t wait to meet you and show you how its done. Kindly watch my brief introduction video, so as to know me more.
            </p>
            <p className=' text-[14px]'>
            Lots of love
            </p>

            <h1 className='font-bold mt-10'>Expertise </h1>
            <div className='flex flex-row items-center gap-x-5 mt-5'>
                <div className='p-2 border shadow-md rounded-md'>Graphic Designs</div>
                <div className='p-2 border shadow-md rounded-md'>Design Thinking</div>
                <div className='p-2 border shadow-md rounded-md'>Good Communication Skill</div>
            </div>

            <h1 className='font-bold mt-10'>Language </h1>
            <div className='flex flex-row items-center gap-x-5 mt-5'>
                <div className='p-2 border shadow-md rounded-md'>English</div>
                <div className='p-2 border shadow-md rounded-md'>Yoruba</div>
                <div className='p-2 border shadow-md rounded-md'>French</div>
            </div>

            <div className='flex items-center text-base gap-x-4 mt-8'>
                <FiAward color='#FDBC64' />
                <p className='font-bold'>Achievements</p>
            </div>

            <div className='text-[15px] font-bold mt-7'>
                Best staff of the year at Google
            </div>

            <div className='font-bold text-[15px] text-[#3771C8] mt-14'>
                Book a session
            </div>

        </div>
    )
}