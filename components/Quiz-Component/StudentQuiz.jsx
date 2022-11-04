import { useRouter } from 'next/router'
import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { Button } from '../Auth-Components/Button'

const StudentQuiz = () => {

  const [quizState, setQuizState] = useState(true) // Controls rendering of quiz questions to be answered or quiz questions with answers and results


  // State for storing the values of the answers for each question
  const [answers, setAnswers] = useState({question1: "", question2: "", question3: "", question4: "", question5: "", question6: "", question7: "", question8: "", question9: "", question10: "", })

  // final store for question and answer
  // const [finalAns, setFinalAns] = useState([])
  const finalAns = []


  return (
    <div className='relative w-full h-full bg-[#FDFDFD] flex flex-col pt-[90px] md:pt-[120px] md:justify-start items-center md:translate-x-[200px] md:w-[calc(100%-200px)] px-2 lg:px-10  pb-10'>
  
      <div className='w-full redBorder'>
        <div className='w-full text-darkText mb-10'> Human Resource Management / Week 2 / Organization Resourses</div>

       {quizState ?

        <QuizForSubmission quizState = {quizState} setQuizState = {setQuizState} answers = {answers} setAnswers = {setAnswers} finalAns = {finalAns}/> :
        
        // <QuizAnsReview />
        null
        
        }


      </div>
    

        
    </div>
  )
}

export default StudentQuiz



const QuizAnsReview = ( {quizState, setQuizState, answers, setAnswers, finalAns}) => {

  const router = useRouter()

  const handleButton = () => {
    router.push(`/students/quiz/${router.query.id}`)
  }



  return (
    <div className='w-full flex flex-col gap-y-16'>
    {/* Questions */}
    {
      quizData.map((el, index) => (
        <QuestionCard key={index} el={el} quizState={quizState} answers = {answers} setAnswers = {setAnswers} returnedData = {returnedData} />
      ))
    }

    <div className='w-full flex justify-end lg:px-20'>
        <Button onClick={handleButton} size = "w-[150px]" name = "Continue"/>
    </div>

    </div>
  )


} 


const QuizForSubmission = ({quizState, setQuizState, answers, setAnswers, finalAns}) => {

  const handleButton = () => {
    console.log(answers)

    // Check if all the questions were answered
    for (const [key, value] of Object.entries(answers)) {
      if (value == "" && Number(key.split("question")[1]) <= quizData.length ) {
        toast.error(`Please ${key} was not answered`)
        return
      }
    }

    for (const[key, value] of Object.entries(answers)) {
      let question_id = Number(key.split("question")[1])
      finalAns.push({question_id: question_id, answer_id: value})
      console.log(finalAns)
      setQuizState(false)
    }

    console.log(finalAns)

  } 

  return (
    
    <div className='w-full flex flex-col gap-y-16'>
    {/* Questions */}
    {
      quizData.map((el, index) => (
        <QuestionCard key={index} el={el} quizState={quizState} answers = {answers} setAnswers = {setAnswers} />
      ))
    }

    <div className='w-full flex justify-end lg:px-20'>
        <Button onClick={handleButton} size = "w-[150px]" name = "Save Changes"/>
    </div>

    </div>

  )
}


const QuestionCard = ({el, quizState, answers, setAnswers, returnedData}) => {
  // console.log(el)
  const [option, setOption] = useState(null)

  const handleClick = (optionId) => {

    if(quizState) {
      setOption(optionId)
      setAnswers(prev => ({...prev, [`question${el.question.id}`]: optionId }))
    }
    else {
      // .....
    }
  }

  return (
    <div className = "redBorder">
        {/* Question title */}
        <div className='flex items-center gap-x-2 font-bold'>
            <p>Q{el.question.id}.</p>
            <p>{el.question.title}</p>
        </div>

        {/* Question Options */}
        <div className='flex flex-col gap-y-3 mt-4'>
          <div className='flex items-center gap-x-3'>
            <div className='w-full sm:w-[400px] lg:w-[550px] text-[14px] lg:text-base h-[55px] bg-[#F3F3F3] flex items-center justify-between px-3 rounded-md' >
              <p className='break-words'>{el.question.test_answer[0].title}</p>
              {quizState ?
                <div className={`w-[20px] h-[20px] rounded-full cursor-pointer ${option == el.question.test_answer[0].id ? "bg-darkBlue" : "bg-white" } `} onClick={() => handleClick(el.question.test_answer[0].id)} />
                :
                <div className={`w-[20px] h-[20px] rounded-full cursor-pointer ${option == el.question.test_answer[0].id ? "bg-darkBlue" : "bg-white" } `}/>
              }
            </div>
            {/* {
              !quizState ? (
                
                ) : null
              } */}
          </div>
          <div className='flex items-center gap-x-3'>
            <div className='w-full sm:w-[400px] lg:w-[550px] text-[14px] lg:text-base h-[55px] bg-[#F3F3F3] flex items-center justify-between px-3 rounded-md' >
              <p className='break-words'>{el.question.test_answer[1].title}</p>
              <div className={`w-[20px] h-[20px] rounded-full cursor-pointer ${option == el.question.test_answer[1].id ? "bg-darkBlue" : "bg-white" } `} onClick={() => handleClick(el.question.test_answer[1].id)} />
            </div>
          </div>

          <div className='flex items-center gap-x-3'>
            <div className='w-full sm:w-[400px] lg:w-[550px] text-[14px] lg:text-base h-[55px] bg-[#F3F3F3] flex items-center justify-between px-3 rounded-md' >
              <p className='break-words'>{el.question.test_answer[2].title}</p>
              <div className={`w-[20px] h-[20px] rounded-full cursor-pointer ${option == el.question.test_answer[2].id ? "bg-darkBlue" : "bg-white" } `} onClick={() => handleClick(el.question.test_answer[2].id)} />
            </div>
          </div>

          <div className='flex items-center gap-x-3'>
            <div className='w-full sm:w-[400px] lg:w-[550px] text-[14px] lg:text-base h-[55px] bg-[#F3F3F3] flex items-center justify-between px-3 rounded-md' >
              <p className='break-words'>{el.question.test_answer[3].title}</p>
              <div className={`w-[20px] h-[20px] rounded-full cursor-pointer ${option == el.question.test_answer[3].id ? "bg-darkBlue" : "bg-white" } `} onClick={() => handleClick(el.question.test_answer[3].id)} />
            </div>
          </div>
        </div>


    </div>

  )
}




const returnedData = {
  total: 10,
  results: [ 
    {
    question_id: 1,
    answer_id: 2,
    correct_id: 2
    },
    {
      question_id: 2,
      answer_id: 2,
      correct_id: 1
    },
    {
      question_id: 3,
      answer_id: 4,
      correct_id: 4
    },
    {
      question_id: 4,
      answer_id: 3,
      correct_id: 3
    },
    {
      question_id: 5,
      answer_id: 1,
      correct_id: 1
    },
    {
      question_id: 6,
      answer_id: 4,
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



