import React, {useRef, useState, useEffect} from 'react'
import {AiOutlineDown} from 'react-icons/ai'




const Message = ({name}) => {
    //
    return(
        <div className='w-full border-2 border-gray-400 rounded-md px-4 py-4 mt-8 text-[14px]'>
            <div>Hi welcome to the forum, kindly go ahead and introduce yourself, feel free to ask relevant questions, intereact with your course mate, share knowledge and idea. We are here for one another. </div>
            <div className='flex flex-row justify-between items-center mt-4'>
                <div className='flex flex-row justify-between gap-x-4'>
                    <div className='w-[90px] h-[35px] rounded-md border flex justify-center items-center'>Like</div>
                    <div className='w-[90px] h-[35px] rounded-md border flex justify-center items-center'>Dislike</div>
                    <div className='w-[90px] h-[35px] rounded-md border flex justify-center items-center'>Reply</div>
                </div>
                <div className=''>
                    {name}
                </div>
            </div>
        </div>
    )
}

const Content = () => {

    const parentRef = useRef(null)
    const childRef = useRef(null)

    const [drop, setDrop] = useState(true)
    const [height, setHeight] = useState(null)
    const [realHeight, setRealHeight] = useState(null)

    useEffect(() => {
        setRealHeight(parentRef.current?.firstChild.offsetHeight)
        setHeight(parentRef.current?.firstChild.offsetHeight)

    }, [])

    const handleClick = () => {
        if (drop === true) {
            setHeight(0)
        }

        else if (drop === false) {
            setHeight(realHeight)
        }
        setDrop(!drop)
    }

  return (
    <div className='relative w-full h-full bg-white  flex flex-col pt-[90px] md:pt-[120px] md:justify-start md:translate-x-[200px] md:w-[calc(100%-200px)] px-2 sm:px-4 pb-10 '>
        <div className='w-full flex-col-reverse items-center lg:flex lg:flex-row lg:items-start lg:justify-between lg:pr-8'>

            <div className='w-full lg:w-[700px]  lg:px-10'>
                <p className='mt-10 font-bold '>Discussion Forum </p>
                <div className='border-2 border-gray-400 rounded-md mt-6 px-6 pb-4 '>
                    <div className='flex flex-row justify-between items-center h-10 w-full mt-6 '>
                        <p className=''>Week 1</p>
                        <AiOutlineDown  onClick={handleClick} className={drop ? 'arrow-right' : 'arrow-down'}/>
                    </div>
                    <div className='dropParent' style={{height: `${height}px` }} ref={parentRef}>
                        <div className={drop ? "drop" : 'no-drop'} ref={childRef}>
                            <Message name = 'Instructor'/> 
                            <Message name = 'David'/> 
                            <Message name = 'Instructor'/> 
                            <Message name = 'Instructor'/> 
                            <Message name = 'Instructor'/> 
                            <Message name = 'Instructor'/> 
                            <Message name = 'Instructor'/> 
                            <Message name = 'Instructor'/> 
                            <Message name = 'Instructor'/> 
                            <Message name = 'Instructor'/> 
                            <Message name = 'Instructor'/> 
                            <Message name = 'Instructor'/> 
                            <Message name = 'Instructor'/> 
                        </div>
                          
                    </div>
                    
                </div>
            </div>

            <div className=' mt-10 flex flex-col w-[230px] justify-center  '>
                <p className='text-sm flex justify-end mb-4'>View Forum Guidelines</p>
                <div className='bg-darkBlue text-white w-full py-8 px-6 rounded-[8px]'>
                    <div className='flex flex-row justify-between text-[12px]'>
                        <p>Go to</p>
                        <p>Learn more</p>
                    </div>
                    <div className='mt-8 font-[600] text-[15px]'>Week 1</div>
                    <div className='mt-8 font-[600] text-[15px]'>Week 2</div>
                    <div className='mt-8 font-[600] text-[15px]'>Week 3</div>
                    <div className='mt-8 font-[600] text-[15px]'>Week 4</div>
                </div>
            </div>

        </div>
    
        

    </div>
  )
}

export default Content