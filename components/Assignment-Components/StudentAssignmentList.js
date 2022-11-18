import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import useCourse from '../../hooks/useCourse'

const StudentAssignmentList = () => {

    const router = useRouter()
    const {id, weekId} = router.query
    const {getMyCourse} = useCourse()
    const quizData = new Array(6).fill("")

    const fetchAssignmentsList = async(Id) => {
        console.log(Id)
        const results = await getMyCourse(Id)
        console.log(results)
        return results
    }

    const {data, isLoading} = useQuery(["get_list_of_assignments", id ], () => fetchAssignmentsList(id), {
        onSuccess: (data) => {
            console.log(data)
        }
    })



  return (
    <div className='relative w-full min-h-screen bg-white sm:bg-gray-50 flex flex-col pt-[90px] md:pt-[120px] md:justify-start items-center md:translate-x-[200px] md:w-[calc(100%-200px)] px-2 lg:px-10 pt-4 pb-10'>
        
        <div className='w-full flex flex-col mt-4 gap-y-10 '>
            {
                data?.course?.course_weeks?.map((el, index) => (
                    <div key={index} className='w-full lg:w-4/5 bg-white dropdown-shadow'>
                        <div className='w-full bg-darkBlue h-[35px] px-4 flex items-center text-[14px] text-white justify-between'>
                            <div className='flex'>
                                <p>Week {index + 1}</p>
                                <p></p>
                            </div>
                        </div>

                        <div className="w-full h-[80px] flex items-center px-10">
                            <Link href={`/students/assignments/${id}/week/${el?.id}`} >
                                Go to assignment
                            </Link>
                        </div>

                    </div>
                ))
            }

        </div>

    </div>
  )
}

export default StudentAssignmentList