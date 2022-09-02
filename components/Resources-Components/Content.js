import React from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import CourseCard from '../CoursePage-Components/CourseCard';
import CourseCarousel from '../CoursePage-Components/CourseCarousel'
import ResourcesCarousel from './ResourcesCarousel';

const Content = () => {

    const data = Data

  return (
    <div className='relative w-full h-full bg-white sm:bg-gray-50 flex flex-col pt-[90px] md:pt-[120px] md:justify-center items-center md:translate-x-[200px] md:w-[calc(100%-200px)] px-2 md:px-10 pb-10 text-darkGray'>
        <div className='w-full mt-10'>

            
            <div className='flex flex-row items-center justify-between'>
                <p className='font-bold '>Resources</p>
                <div className='text-[14px] text-white text-whitep px-6 py-2 rounded-md bg-darkBlue'>Download</div>
            </div>

            <div className='w-full min-h-[100px] rounded-[4px] mt-6 px-[3px] sm:px-6 py-6 bg-white '>
                <div className='flex flex-row gap-x-4 items-center font-[500] text-[15px]'>
                    <p>Week 1</p>
                    <AiOutlineDown color='#B1B1B1' size={20}/>
                </div>

                <div className='flex flex-col sm:flex-row mt-10  gap-x-4 justify-between '>

                    <div className='hidden sm:flex flex-col gap-y-6'>
                        <div className=' text-[14px] flex flex-row items-center sm:gap-x-2'>
                            <p className=' w-[170px]'>Introduction to Human Management</p>
                            <AiOutlineDown color='#B1B1B1'/>
                        </div>
                        <div className=' text-[14px] flex flex-row items-center sm:gap-x-2'>
                            <p className=' w-[170px]'>Introduction to Human Management</p>
                            <AiOutlineDown color='#B1B1B1'/>
                        </div>
                        <div className=' text-[14px] flex flex-row items-center sm:gap-x-2 '>
                            <p className=' w-[170px]'>Introduction to Human Management</p>
                            <AiOutlineDown color='#B1B1B1'/>
                        </div>
                    </div>

                    <div className='w-full flex  sm:hidden mb-10'>
                        <ResourcesCarousel />
                    </div>
                   
                    <div className='w-full sm:w-[400px] md:w-[600px] text-[14px]'>
                        Faucibus quam lacus pharetra dictumst purus gravida mattis nulla at. Proin nullam urna, vitae at condimentum. Vitae vel, odio convallis dui amet, tincidunt lorem volutpat. Ut donec nunc aliquet tristique nullam tortor cursus lacus semper. Viverra mauris fermentum eu feugiat hendrerit. Duis volutpat donec vulputate elementum et, dui. Nisl pellentesque proin ornare nibh. Nunc amet commodo purus porta eget ultricies elementum convallis. Justo ut feugiat aliquet integer arcu ipsum. Velit integer habitasse dignissim aliquet id. Pulvinar sit vulputate sed pellentesque at ut hendrerit molestie venenatis.
                        Cursus pretium pretium suspendisse sed pretium purus, quis egestas. Purus amet arcu rhoncus et orci felis, lacus venenatis. Sit eu, aliquet id dui odio vitae id fermentum. Pulvinar at mi mi adipiscing eget nulla et ut. Dignissim in amet, faucibus maecenas pharetra sit lobortis. Molestie feugiat amet enim non massa pretium suspendisse laoreet. Habitant porta ac aliquet ultricies lorem et sodales.
                        Nibh natoque leo, diam habitasse id amet tempor. In proin commodo amet, bibendum ut nulla sagittis. Ultrices pharetra in nisl velit. Pharetra consequat fermentum vitae a id at ut erat. Vulputate fusce aliquet fusce aliquam. Neque vel, morbi turpis maecenas. Accumsan ultricies viverra porttitor ut volutpat turpis purus amet faucibus. Consectetur consectetur nibh molestie malesuada sed eu. Donec sodales bibendum a habitasse libero. Nascetur amet tincidunt id porta. Elit, pretium non purus id eget. Massa vestibulum nibh tincidunt morbi scelerisque in libero tempus. Nibh massa augue nulla vel arcu massa malesuada.
                        Nibh natoque leo, diam habitasse id amet tempor. In proin commodo amet, bibendum ut nulla sagittis. Ultrices pharetra in nisl velit. Pharetra consequat fermentum vitae a id at ut erat. Vulputate fusce aliquet fusce aliquam. Neque vel, morbi turpis maecenas. Accumsan ultricies viverra porttitor ut volutpat turpis purus amet faucibus. Consectetur consectetur nibh molestie malesuada sed eu. Donec sodales bibendum a habitasse libero. Nascetur amet tincidunt id porta. Elit, pretium non purus id eget. Massa vestibulum nibh tincidunt morbi scelerisque in libero tempus. Nibh massa augue nulla vel arcu massa malesuada.
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Content





const Data = [
    {
        ID: 1,
        title: "Fundamentals of DSLR Photography",
        name: "Queen Paul",
        time: {total: 80, completed: 60}
    },
    {
        ID: 2,
        title: "Fundamentals of DSLR Photography",
        name: "Queen Paul",
        time: {total: 100, completed: 60}
    },
    {
        ID: 3,
        title: "Fundamentals of DSLR Photography",
        name: "Queen Paul",
        time: {total: 40, completed: 35}
    },
    {
        ID: 4,
        title: "Fundamentals of DSLR Photography",
        name: "Queen Paul",
        time: {total: 100, completed: 60}
    },
    {
        ID: 5,
        title: "Fundamentals of DSLR Photography",
        name: "Queen Paul",
        time: {total: 100, completed: 60}
    },
    
]


// const ResourcesCarousel = () => {

//     return (
//         <Swiper
//         slidesPerView={1.2}
//         spaceBetween={0}
//         pagination={{
//         clickable: true,
//         }}
//         modules={[Pagination]}
//         style={{width: "full"}}
//         >
//             <SwiperSlide style={{border: "2px solid red"}}>
//                 <div className=' text-[14px] flex flex-row items-center  border-2 w-[300px] h-[50px] rounded-md justify-center'>
//                     <p className=' '>Introduction to Human Management</p>
//                 </div>
//             </SwiperSlide>
//             <SwiperSlide>
//                 <div className=' text-[14px] flex flex-row items-center  border-2 w-[300px] h-[50px] rounded-md justify-center'>
//                     <p className=' '>Introduction to Human Management</p>
//                 </div>
//             </SwiperSlide>
//             <SwiperSlide>
//                 <div className=' text-[14px] flex flex-row items-center  border-2 w-[300px] h-[50px] rounded-md justify-center'>
//                     <p className=' '>Introduction to Human Management</p>
//                 </div>
//             </SwiperSlide>
//                <div className='h-20'></div>
//         </Swiper>
//       );
// }




