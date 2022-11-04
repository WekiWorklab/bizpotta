import { useRouter } from 'next/router'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const StudentQuizList = () => {

    const quizData = new Array(6).fill("")

    const router = useRouter()
    const courseId = router.query.id

    const handleClick = (proxy_id) => {
        router.push({
            pathname: `/students/quiz/[id]/week/[weekId]`,
            query: {
                id: courseId,
                weekId: proxy_id
            }
            
        })
    }

  return (
    <div className='relative w-full min-h-screen bg-white sm:bg-gray-50 flex flex-col pt-[90px] md:pt-[120px] md:justify-start items-center md:translate-x-[200px] md:w-[calc(100%-200px)] px-2 lg:px-10 pt-4 pb-10'>
        
        <div className='w-full flex flex-col mt-4 gap-y-10 '>
            {
                quizData.map((el, index) => (
                    <div key={index} className='w-full lg:w-4/5 bg-white dropdown-shadow'>
                        <div className='w-full bg-darkBlue h-[35px] px-4 flex items-center text-[14px] text-white justify-between'>
                            <div className='flex'>
                                <p>Week {index + 1}</p>
                                <p></p>
                            </div>
                            <div className='cursor-pointer flex gap-x-2 items-center ' onClick={() => handleClick(index+1)}>
                                <p>Go to quiz</p>
                                <AiOutlineArrowRight />
                            </div>
                        </div>

                        {(index%2) == 0 ?
                        <div className='w-full px-10 py-4'>
                            <p className='text-bizpotta-green text-base font-bold'>Completed</p>
                            <div className='flex items-center text-darkText gap-x-4'>
                                <p className=' font-semibold'>Grade:</p>
                                <p className='text-[24px] font-bold '>80%</p>
                            </div>                            
                        </div> : 
                        <div className='w-full px-10 py-4'>
                            <p className='text-red-400 text-base font-bold'>Not done yet</p>
                            <div className='flex items-center text-darkText gap-x-4'>
                                <p className=' font-semibold'>Completion percentage:</p>
                                <p className='text-[24px] font-bold text-red-400'>0%</p>
                            </div>                            
                        </div> 
                        }

                    </div>
                ))
            }

        </div>

    </div>
  )
}

export default StudentQuizList



const QuizOverviewCard = () => {


    return (
        <div className='w-full '>
            <div className='w-full bg-darkBlue '>

            </div>

        </div>
    )
}


