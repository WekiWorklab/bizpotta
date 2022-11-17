import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { FcCheckmark } from 'react-icons/fc'
import { toast } from 'react-toastify'
import useCourse from '../../hooks/useCourse'
import learnersService from '../../services/LearnersService'
import { AscComparatorFunc } from '../../utils/wordShortner'
import { Button } from '../Auth-Components/Button'

const StudentQuiz = () => {

  const {getMyCourse} = useCourse()
  const router = useRouter()

  const [quizState, setQuizState] = useState(true) // Controls rendering of quiz questions to be answered or quiz questions with answers and results

  const [answers, setAnswers] = useState({})

  const [courseData, setCourseData ] = useState()
  const [courseQuiz, setCourseQuiz] = useState()
  const [returned, setReturned] = useState()

  // final store for question and answer
  const finalAns = []
  const {id, weekId} = router.query
   const fetchForQuiz = async (Id) => {
    const res = await learnersService.getMyCourse(Id.queryKey[1])
    return res.data
  }

  // Fetch the data for the quiz here
  const {data, isLoading} = useQuery(['student_quiz', id ], fetchForQuiz, {
    onSuccess: (data) => {
      for (const el of data.course.course_weeks) {
        if (el.id == weekId) {
          setCourseData(el)
          setCourseQuiz(el?.week_test)
      }
      }
    }, 
  })
  

  return (
    <div className='relative w-full h-full bg-[#FDFDFD] flex flex-col pt-[90px] md:pt-[120px] md:justify-start items-center md:translate-x-[200px] md:w-[calc(100%-200px)] px-2 lg:px-10  pb-10'>
  
      <div className='w-full  mt-10'>
        <div className='w-full text-darkText mb-10'> {data?.course?.name} / Week {data?.course?.course_weeks?.filter(el => el.id == weekId)?.[0].week_number} / {data?.course?.course_weeks?.filter(el => el.id == weekId)?.[0].title}</div>

       {
        <QuizForSubmission quizState = {quizState} setQuizState = {setQuizState} answers = {answers} setAnswers = {setAnswers} finalAns = {finalAns} courseQuiz = {courseQuiz} courseId = {id} weekId = {weekId} returned = {returned} setReturned = {setReturned}
        />         
        }

      </div>   
    </div>
  )
}
export default StudentQuiz



const QuizForSubmission = ({quizState, setQuizState, answers, setAnswers, finalAns, courseQuiz, courseId, weekId, setReturned, returned}) => {

  const router = useRouter()

  const handleButton = () => {
    router.push(`/students/quiz/${router.query.id}`)
  }

  // useEffect(() => {
  //   if (returned?.length > 0) {
  //     setQuizState(false)
  //   }
  // }, [returned])


  const handleSubmit = async () => {

    for (const[key, value] of Object.entries(answers)) {
      let question_id = Number(key.split("question")[1])
      finalAns.push({question_id: question_id, answer_id: value})
    }

    // Check if all the questions were answered
    if(finalAns.length != courseQuiz.length){
      toast.error(`Please answer all questions`)
      finalAns = []
      return
    }

    
    // Submit the answers before switching quiz state
    const results = await learnersService.submitAnswers(finalAns, courseId, weekId )
    setReturned(results.data.StudentCourseWeekQuizAnswer,)
    
       //switch from QuizForSubmission to QuizAnsReview
       setQuizState(false)
  } 



  return (
    
    <div className='w-full flex flex-col gap-y-16'>
    {/* Questions */}
    {
    courseQuiz?.map((el, index) => (
        <QuestionCard key={index} el={el} elemIndex = {index + 1} proxyIndex = {el.id}  quizState={quizState} answers = {answers} setAnswers = {setAnswers} returned = {returned}  />
      ))
    }

    <div className='w-full flex justify-end lg:px-20'>
        {quizState ? <Button onClick={handleSubmit} size = "w-[150px]" name = "Save Changes"/> : <Button onClick={handleButton} size = "w-[150px]" name = "Continue"/>}
    </div>

    </div>

  )
}


const QuestionCard = ({el, proxyIndex, quizState, answers, setAnswers, returnedData, elemIndex, returned}) => {
  
  const [option, setOption] = useState(null)

  useEffect(() => {
    console.log(returned)
  
  }, [returned])
  

  const handleClick = (optionId) => {
    if(quizState) {
      setOption(optionId)
      setAnswers(prev => ({...prev, [`question${proxyIndex}`]: optionId }))
    }
    else {
      // .....
    }
  }
  
    const checkOptions = (elemIndex) => {
      return returned[elemIndex-1]
    }
    





  return (
    <div className = "">
        {/* Question title */}
        <div className='flex items-center gap-x-2 font-bold'>
            <p>Q{elemIndex}.</p>
            <p>{el?.title}</p>
        </div>

  
        {/* Question Options */}
        <div className='flex flex-col gap-y-3 mt-4'>
          <div className='flex items-center gap-x-3'>
            <div className='w-full sm:w-[400px] lg:w-[550px] text-[14px] lg:text-base h-[55px] bg-[#F3F3F3] flex items-center justify-between px-3 rounded-md' >
              <p className='break-words'>{el?.answers?.[0]?.title}</p>
              <div className={`w-[20px] h-[20px] rounded-full cursor-pointer ${option == el.answers?.[0]?.id ? "bg-darkBlue" : "bg-white" } `} onClick={() => handleClick(el.answers[0].id)} />
              
            </div> 
            {/* This is for controlling the good mark or bad mark sign is shown for the option */}
            
              {
                !quizState ? (
                  returned?.length > 0 ? (
                    <div>
                      {checkOptions(elemIndex)?.correct_answer_id == el?.answers?.[0]?.id ? <FcCheckmark /> : <p className='text-[14px] text-red-500 font-bold'>X</p>}
                    </div>
                  ) : null
                ) : null 
              } 
          </div>


          <div className='flex items-center gap-x-3'>
            <div className='w-full sm:w-[400px] lg:w-[550px] text-[14px] lg:text-base h-[55px] bg-[#F3F3F3] flex items-center justify-between px-3 rounded-md' >
            <p className='break-words'>{el?.answers?.[1].title}</p>

              {<div className={`w-[20px] h-[20px] rounded-full cursor-pointer ${option == el?.answers?.[1]?.id ? "bg-darkBlue" : "bg-white" } `} onClick={() => handleClick(el.answers[1].id)} />
              }
            </div>
            {
                !quizState ? (
                  returned?.length > 0 ? (
                    <div>
                      {checkOptions(elemIndex)?.correct_answer_id == el?.answers?.[1]?.id ? <FcCheckmark /> : <p className='text-[14px] text-red-500 font-bold'>X</p>}
                    </div>
                  ) : null
                ) : null 
              }
          </div>



          <div className='flex items-center gap-x-3'>
            <div className='w-full sm:w-[400px] lg:w-[550px] text-[14px] lg:text-base h-[55px] bg-[#F3F3F3] flex items-center justify-between px-3 rounded-md' >
            <p className='break-words'>{el?.answers?.[2]?.title} </p>
              {
              <div className={`w-[20px] h-[20px] rounded-full cursor-pointer ${option == el.answers?.[2]?.id ? "bg-darkBlue" : "bg-white" } `} onClick={() => handleClick(el.answers[2].id)} />
              }
            </div>
            {/* This is for controlling the good mark or bad mark sign is shown for the option */}
            {
                !quizState ? (
                  returned?.length > 0 ? (
                    <div>
                      {checkOptions(elemIndex)?.correct_answer_id == el?.answers?.[2]?.id ? <FcCheckmark /> : <p className='text-[14px] text-red-500 font-bold'>X</p>}
                    </div>
                  ) : null
                ) : null 
              }
          </div>



          <div className='flex items-center gap-x-3'>
            <div className='w-full sm:w-[400px] lg:w-[550px] text-[14px] lg:text-base h-[55px] bg-[#F3F3F3] flex items-center justify-between px-3 rounded-md' >
            <p className='break-words'>{el?.answers?.[3]?.title} </p>
              {
              <div className={`w-[20px] h-[20px] rounded-full cursor-pointer ${option == el.answers?.[3]?.id ? "bg-darkBlue" : "bg-white" } `} onClick={() => handleClick(el.answers[3].id)} />
              }
            </div>
            {/* This is for controlling the good mark or bad mark sign is shown for the option */}
            {
                !quizState ? (
                  returned?.length > 0 ? (
                    <div>
                      {checkOptions(elemIndex)?.correct_answer_id == el?.answers?.[3]?.id ? <FcCheckmark /> : <p className='text-[14px] text-red-500 font-bold'>X</p>}
                    </div>
                  ) : null
                ) : null 
              }
          </div>


        </div>
    </div>

  )
}



/**Note: In the course_weeks array, i used the (weekId - 1) as the index of the element in the array that i will take as the actual course data for that the week.
   * A better way is to run the onSuccess fucntion after every successsful query and get the required course data and corresponding course quiz for that week and store them in state. This was done to reduce length object chaining.
   */

  /**
   * Just in case react query causes rerenders and state changes switch back to useEffect for the api call.
   * Also in certain cases i didnt use the id for some data because the one coming in from the api is random. Instead i used hard numbers or index of elements in an array
   */





const returnedData = {
  total: 10,
  results: [ 
    {
    question_id: 1,
    answer_id: 1,
    correct_id: 2
    },
    {
      question_id: 2,
      answer_id: 2,
      correct_id: 1
    },
    {
      question_id: 3,
      answer_id: 3,
      correct_id: 4
    },
    {
      question_id: 4,
      answer_id: 4,
      correct_id: 3
    },
    {
      question_id: 5,
      answer_id: 3,
      correct_id: 1
    },
    {
      question_id: 6,
      answer_id: 2,
      correct_id: 1
    }
]
}


const quizData = [
  {
    question: {
      id: 1,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      test_answer: [
        {
          id: 1,
          title: " Quisque a congue "
        },
        {
          id: 2,
          title: " Quisque a congue "
        },
        {
          id: 3,
          title: " Quisque a congue "
        },
        {
          id: 4,
          title: " Quisque a congue "
        }

      ]
    }
  },

  {
    question: {
      id: 2,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      test_answer: [
        {
          id: 1,
          title: " Quisque a congue "
        },
        {
          id: 2,
          title: " Quisque a congue "
        },
        {
          id: 3,
          title: " Quisque a congue "
        },
        {
          id: 4,
          title: " Quisque a congue "
        }

      ]
    }
  },

    {
      question: {
        id: 3,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        test_answer: [
          {
            id: 1,
            title: " Quisque a congue "
          },
          {
            id: 2,
            title: " Quisque a congue "
          },
          {
            id: 3,
            title: " Quisque a congue "
          },
          {
            id: 4,
            title: " Quisque a congue "
          }
  
        ]
      }
    },

    {
      question: {
        id: 4,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        test_answer: [
          {
            id: 1,
            title: " Quisque a congue "
          },
          {
            id: 2,
            title: " Quisque a congue "
          },
          {
            id: 3,
            title: " Quisque a congue "
          },
          {
            id: 4,
            title: " Quisque a congue "
          }
  
        ]
      }
    },

    {
      question: {
        id: 5,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        test_answer: [
          {
            id: 1,
            title: " Quisque a congue "
          },
          {
            id: 2,
            title: " Quisque a congue "
          },
          {
            id: 3,
            title: " Quisque a congue "
          },
          {
            id: 4,
            title: " Quisque a congue "
          }
  
        ]
      }
    },


    {
      question: {
        id: 6,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        test_answer: [
          {
            id: 1,
            title: " Quisque a congue "
          },
          {
            id: 2,
            title: " Quisque a congue "
          },
          {
            id: 3,
            title: " Quisque a congue "
          },
          {
            id: 4,
            title: " Quisque a congue "
          }
  
        ]
      }
    }
  

]



