/// 
import React from 'react'

/////
import ReactPlayer from 'react-player'
import {AiOutlineLeft, AiOutlineHeart, AiOutlineUpload} from 'react-icons/ai'
import {IoIosPeople } from 'react-icons/io'
import {FaPlay} from 'react-icons/fa'
import { useRouter } from 'next/router'

const TopSection = () => {

const image = 'https://cdn.pixabay.com/photo/2022/01/17/17/20/bored-6945309__340.png'

const router = useRouter()

const handleClick = () => {
    router.push('/students/courses/course/video')
}

const handleBack = () => {
    router.push('/students/courses/')
}

  return (
    <div className=' w-full flex flex-col pt-4 pr-2 md:pr-6 '>
        <div className='text-[13px] cursor-pointer' onClick={() => handleBack()}>
            <AiOutlineLeft className='inline mr-2'/>
            <p className='inline'>Go to home</p>
        </div>

        {/* sm:w-[500px] sm:h-[300px] xl:w-[850px] xl:h-[370px] */}

        <div className = 'w-full h-[230px] w-full h-[500px]  mt-4  bg-no-repeat bg-cover bg-center flex justify-center items-center cursor-pointer' style={{backgroundImage: `url(${image}) `}} onClick={() => handleClick()}>
            <FaPlay size={40} color='white'/>
        </div>
        {/* <img src={image} alt='' className = 'w-full h-[230px]  sm:w-[500px] sm:h-[300px] xl:w-[850px] xl:h-[370px] mt-4 '/> */}

        <h1 className='text-[18px] font-[600] mt-4'>Fundamentals of DSLR Photography</h1>
        <div className='flex flex-row items-center w-full justify-between '>
            <div className='flex flex-row items-center '>
                <img src={image} className='w-[40px] h-[40px] rounded-full mr-4 '/>
                <p>by Thomas Mat (Ph.d, Ms.c) </p>
            </div>
            <div className='flex flex-row justify-self-end  items-center'>
                <IoIosPeople className='text-[20px] mr-4'/>
                <p className='text-[13px] mr-4'>1,321 enrolled</p>
                <AiOutlineHeart className='text-[20px] mr-4'/>
                <AiOutlineUpload className='text-[20px]'/>
            </div>
        </div>

        <h1 className='mt-6 font-[600] text-[14px]'>About this course</h1>
        <p className='text-[13px]'>
            Dui morbi nisl suscipit pharetra. Tristique sit nisl velit, vulputate sit nisl. Bibendum elit, non cursus rhoncus integer id. Tristique praesent in malesuada lacus, et. Vulputate pharetra in odio nisi fermentum semper lectus scelerisque. Eget vestibulum sapien augue feugiat morbi. Nibh pretium nibh et quis viverra magna. Nisl, urna quis donec rhoncus. Sollicitudin tincidunt in vitae scelerisque et viverra pharetra. Lectus in sodales duis euismod quis in. Facilisi sed non quis magna scelerisque posuere non id phasellus..
            Dui morbi nisl suscipit pharetra. Tristique sit nisl velit, vulputate sit nisl. Bibendum elit, non cursus rhoncus integer id. Tristique praesent in malesuada lacus, et. Vulputate pharetra in odio nisi fermentum semper lectus scelerisque. Eget vestibulum sapien augue feugiat morbi. Nibh pretium nibh et quis viverra magna. Nisl, urna quis donec rhoncus. Sollicitudin tincidunt in vitae scelerisque et viverra pharetra. Lectus in sodales duis euismod quis in. Facilisi sed non quis magna scelerisque posuere non id phasellus..
        </p>

        <h1 className='text-[13px] font-[600] mt-6'>
            Description
        </h1>
        <div className=' flex flex-row justify-between md:grid grid-cols-3 text-[13px] '>
            <div className='flex flex-col '>
                <div>
                    <span className='font-[600]'>Skill level:</span>
                    <span>Beginner</span>
                </div>
                <div>
                    <span className='font-[600]'>Audio:</span>
                    <span>English</span>
                </div>
                <div>
                    <span className='font-[600]'>Caption:</span>
                    <span>English</span>
                </div>
            </div>

            <div className='flex flex-col col-start-2'>
                <div>
                    <span className='font-[600]'>Language:</span>
                    <span>available in 4 languages</span>
                </div>
                <div>
                    <span className='font-[600]'>Video:</span>
                    <span>24 hours</span>
                </div>
                <div>
                    <span className='font-[600]'>Estimated course time:</span>
                    <span>25 hours</span>
                </div>
            </div>
        </div>

        <h1 className='font-[600] text-[14px] mt-6'>Certificate</h1>
        <p className='text-[13px]'>Certificate is issued on completion</p>

        <h1 className='font-[600] text-[14px] mt-6 '>What you will learn</h1>
        <li className='font-[600] text-[14px] mt-4 list-disc ml-2'>What is photography?</li>
        <p className='text-[13px] leading-[24px]'>
            Dui morbi nisl suscipit pharetra. Tristique sit nisl velit, vulputate sit nisl. Bibendum elit, non cursus rhoncus integer id. Tristique praesent in malesuada lacus, et. Vulputate pharetra in odio nisi fermentum semper lectus scelerisque. Eget vestibulum sapien augue feugiat morbi. Nibh pretium nibh et quis viverra magna. Nisl, urna quis donec rhoncus. Sollicitudin tincidunt in vitae scelerisque et viverra pharetra. Lectus in sodales duis euismod quis in. Facilisi sed non quis magna scelerisque posuere non id phasellus..
        </p>
        <li className='font-[600] text-[14px] mt-4 list-disc ml-2'>What is photography?</li>
        <p className='text-[13px] leading-[24px]'>
            Dui morbi nisl suscipit pharetra. Tristique sit nisl velit, vulputate sit nisl. Bibendum elit, non cursus rhoncus integer id. Tristique praesent in malesuada lacus, et. Vulputate pharetra in odio nisi fermentum semper lectus scelerisque. Eget vestibulum sapien augue feugiat morbi. Nibh pretium nibh et quis viverra magna. Nisl, urna quis donec rhoncus. Sollicitudin tincidunt in vitae scelerisque et viverra pharetra. Lectus in sodales duis euismod quis in. Facilisi sed non quis magna scelerisque posuere non id phasellus..
        </p>
        <li className='font-[600] text-[14px] mt-4 list-disc ml-2'>What is photography?</li>
        <p className='text-[13px] leading-[24px]'>
            Dui morbi nisl suscipit pharetra. Tristique sit nisl velit, vulputate sit nisl. Bibendum elit, non cursus rhoncus integer id. Tristique praesent in malesuada lacus, et. Vulputate pharetra in odio nisi fermentum semper lectus scelerisque. Eget vestibulum sapien augue feugiat morbi. Nibh pretium nibh et quis viverra magna. Nisl, urna quis donec rhoncus. Sollicitudin tincidunt in vitae scelerisque et viverra pharetra. Lectus in sodales duis euismod quis in. Facilisi sed non quis magna scelerisque posuere non id phasellus..
        </p>
        <li className='font-[600] text-[14px] mt-4 list-disc ml-2'>What is photography?</li>
        <p className='text-[13px] leading-[24px]'>
            Dui morbi nisl suscipit pharetra. Tristique sit nisl velit, vulputate sit nisl. Bibendum elit, non cursus rhoncus integer id. Tristique praesent in malesuada lacus, et. Vulputate pharetra in odio nisi fermentum semper lectus scelerisque. Eget vestibulum sapien augue feugiat morbi. Nibh pretium nibh et quis viverra magna. Nisl, urna quis donec rhoncus. Sollicitudin tincidunt in vitae scelerisque et viverra pharetra. Lectus in sodales duis euismod quis in. Facilisi sed non quis magna scelerisque posuere non id phasellus..
        </p>



    </div>
  )
}

export default TopSection