/////
import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group';

//////
import {BsArrowRight} from 'react-icons/bs'
import {AiOutlineRight} from 'react-icons/ai'
import {FaCircleNotch} from 'react-icons/fa'

// {`${show ? 'dropdown' : ''} text-xs`}
// 'dropdown shadow-xl text-xs'
const Description = ({show, desc}) => {
    return(
        <div className= {`${show ? 'dropdown' : 'no-dropdown'} text-xs`}>
            {show ? (<div className='dropdown-enter shadow-xl'>
                {desc}
                </div>) : 
            (
                <div className='dropdown-exit'>
                    <div className=''> {desc}</div>
                </div> 
            )
            }
        </div>
    )
}

const ScheduleCard = () => {

    const [show, setShow] = useState(false)
    const desc = 'Facilisis quis sem convallis odio pellentesque. Convallis leo urna eleifend tellus ut vel amet ullamcorper nunc. Sit mauris pellentesque pellentesque aenean amet massa eget vitae. Duis lacus, hendrerit urna sit bibendum. Et enim sapien dictum egestas platea. Facilisi pretium eget nibh nam arcu. Cras etiam pellentesque dui tempor purus porttitor nec ut. Velit viverra lectus a vel faucibus sed id integer at.'

  return (
    <div className='w-full mt-4'>
        <div className='h-14 bg-darkBlue text-white flex flex-row justify-between pl-16 pr-20 items-center'>
            <div>
                <span className='inline font-[600] text-[14px] mr-4'> Week 1</span>
                <span className='inline text-[13px]'>Estimated time 3hrs 30mins</span>
            </div>
            <div>
                <span className='inline  text-[13px] mr-4'>Go to lesson</span>
                <BsArrowRight className='inline' size={18}/>
            </div>
        </div>

        <div className='bg-white gap-y-[20px] grid grid-cols-2 px-10 py-6'>
            <div className=' flex flex-row items-center'>
                <div className='w-8 h-8 rounded-full border-2 border-darkBlue'></div>
                <p className='ml-8'>Video Lessons</p>
            </div>
            <div className=' flex flex-row items-center'>
                <div className='w-8 h-8 rounded-full border-2 border-darkBlue'></div>
                <p className='ml-8'>Notes +</p>
            </div>
            <div className=' flex flex-row items-center'>
                <div className='w-8 h-8 rounded-full border-2 border-darkBlue bg-gray-100'></div>
                <p className='ml-8'>Tasks</p>
            </div>
            <div className='relative flex flex-row items-center '>
                <div className='w-8 h-8 rounded-full border-2 border-darkBlue '></div>
                <div className='ml-8 flex flex-row items-center flex-grow-[1] justify-between pr-12'>
                    <p >Description</p> 
                    <div onClick={() => setShow(prev => !prev)}>
                        <AiOutlineRight className={`${show ? 'arrow-right' : 'arrow-down'}`}  />
                    </div>
                    
                </div>
                <Description show={show} desc = {desc}/>
                {/* <AiOutlineRight className='' /> */}
            </div>
            <div className='flex flex-row items-center'>
                <div className='w-8 h-8 rounded-full border-2 border-darkBlue bg-gray-100'></div>
                <p className='ml-8'>Readings</p>
            </div>

        </div>
        
    </div>
  )
}

export default ScheduleCard