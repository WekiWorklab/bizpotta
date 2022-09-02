import React from 'react'

////////
import { BsPlayCircle } from 'react-icons/bs'

const VideoCard = () => {

    const image = 'https://images.pexels.com/photos/935949/pexels-photo-935949.jpeg?auto=compress&cs=tinysrgb&w=600'

    return(
        <div className='w-[360px] h-[270px] rounded-md bg-no-repeat bg-cover bg-center flex flex-col items-center justify-end shadow-xl' style={{backgroundImage: `url(${image})`}}>
            <BsPlayCircle size={30} color="white"/>
            <div className='w-full bg-darkBlue mt-6 text-white text-[13px] px-6 pt-4 pb-2'>
                <p className='font-lightbold max-w-[250px] break-words'>Getting started with Bizpotta Learning</p>
                <p className='max-w-[250px] break-words text-[11px]'>Learn the basics on how to become a Bizpotta tutor</p>
                <p className='w-full flex justify-end text-[11px]'>3 min</p>
            </div>
        </div>
    )
}

export default VideoCard