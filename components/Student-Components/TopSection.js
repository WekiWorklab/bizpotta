import React from 'react'
import {BsEnvelope} from  'react-icons/bs'
import {MdAddCircleOutline} from 'react-icons/md'
import {BiShare} from  'react-icons/bi'

const TopSection = () => {

  return (
    <div className='w-full '>
        <div className='w-full h-[220px] md:h-[300px] relative z-[1]' style={{backgroundImage: `url('https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}></div>

        <div className='absolute top-[260px] md:top-[370px] w-[99%] mx-auto flex flex-col md:flex-row  items-center md:justify-between  md:pl-10 '>
            <div className='flex flex-row items-center'>
                <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' className='object-cover w-[100px] h-[100px] md:w-[130px] md:h-[130px] border-4 border-white rounded-full z-10 mr-4'/>
                <div className=' mt-14 md:mt-12'>
                    <p className='text-[11px] md:text-sm font-[600]'>Emeka Samuel</p>
                    <p className='text-xs md:mt-1'>3D Illustrator</p>
                    <p className='mt-0 '>
                        <span className='text-[10px] mr-4'>34 followers</span>
                        <span className='text-[10px]'>80 Projects</span>
                    </p>
                </div>
            </div>


            <div className='mt-6 md:mt-14 flex flex-row '>
                <div className='flex flex-row ml-0 md:ml-4 '>
                    <BsEnvelope size={16} color='#999999'  />
                    <span className='text-xs ml-1'>Message</span>
                </div>
                <div className='flex flex-row ml-4'>
                    <MdAddCircleOutline size={16} color='#999999'  />
                    <span className='text-xs ml-1'>Follow</span>
                </div>
                <div className='flex flex-row ml-4'>
                    <BiShare size={16} color='#999999'  />
                    <span className='text-xs ml-1'>Share</span>
                </div>
            </div>
                
            
            
        </div>
    </div>
  )
}

export default TopSection










/**
 * import React from 'react'
import {BsEnvelope} from  'react-icons/bs'
import {MdAddCircleOutline} from 'react-icons/md'
import {BiShare} from  'react-icons/bi'

const TopSection = () => {

  return (
    <div className='w-full '>
        <div className='w-full h-[300px] relative z-[1]' style={{backgroundImage: `url('https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}></div>

        <div className='absolute top-[370px] w-[99%] mx-auto flex flex-row justify-between pl-10'>
            <div className='flex flex-row  items-center'>
                <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' className='object-cover w-[130px] h-[130px] border-4 border-white rounded-full z-10 mr-4'/>
                <div className='mt-12'>
                    <p className='text-sm font-[600]'>Emeka Samuel</p>
                    <p className='text-xs mt-1'>3D Illustrator</p>
                    <p>
                        <span className='text-[10px] mr-4'>34 followers</span>
                        <span className='text-[10px]'>80 Projects</span>
                    </p>
                </div>
            </div>


            <div className='mt-14 flex flex-row '>
                <div className='flex flex-row ml-4 '>
                    <BsEnvelope size={16} color='#999999'  />
                    <span className='text-xs ml-1'>Message</span>
                </div>
                <div className='flex flex-row ml-4'>
                    <MdAddCircleOutline size={16} color='#999999'  />
                    <span className='text-xs ml-1'>Follow</span>
                </div>
                <div className='flex flex-row ml-4'>
                    <BiShare size={16} color='#999999'  />
                    <span className='text-xs ml-1'>Share</span>
                </div>
            </div>
                
            
            
        </div>
    </div>
  )
}

export default TopSection
 */