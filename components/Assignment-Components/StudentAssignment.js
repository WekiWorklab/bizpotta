import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { AiOutlineFile } from 'react-icons/ai'
import { BsUpload } from 'react-icons/bs'
import useCourse from '../../hooks/useCourse'
import { Button } from '../Auth-Components/Button'

const StudentAssignment = () => {

    const {setAssignments, getMyCourse} = useCourse()
    const [file, setFile] = useState()

    const [workData, setWorkData] = useState()
    const [assignment, setAssignment] = useState()
    const [dataId, setDataId] = useState()

    const router = useRouter()

    const {id, weekId} = router.query
    
    const handleSubmit = async () => {
        const formData = new FormData()
        formData.append("file", file)

        const results = await setAssignments({course_student_id: dataId, week_id: weekId, file: formData})
        console.log(results)
    }

    const fetchAssignments = async (id) => {
        const results = await getMyCourse(id)
        return results
    }

    const {data, isLoading} = useQuery(["get_assignment", id], () => fetchAssignments(id), {
        onSuccess: (data) => {
            for (const el of data.course.course_weeks) {
                if (el.id == weekId) {
                    setDataId(data?.id)
                    setWorkData(el)
                    setAssignment(el?.week_assignments)
                }
            }
        }
    } )


  return (
    <div className="relative w-full h-full min-h-[100vh] bg-white sm:bg-gray-50 flex flex-col pt-[90px] md:pt-[120px] md:translate-x-[200px] md:w-[calc(100%-200px)] px-2 md:px-8 pb-10 text-darkGray">
        <div className='mt-10'>
            <div className='text-[18px] font-bold'>
                Week {workData?.id} Assignment
            </div>
            <div className='mt-10 '>
                {assignment?.description}
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            </div>

            <div className='flex flex-col gap-y-8 sm:flex-row items-center gap-x-20 mt-10'>
                <label htmlFor='file' >
                    <div className="flex flex-row items-center justify-evenly w-[250px] h-[45px] bg-darkBlue text-white rounded-md cursor-pointer ">
                        <BsUpload color='white' />
                        <div className='text-[14px]'>Upload assignment file here</div>
                        <input id="file" type="file" className='hidden' onChange={(e) => setFile(e.target.files)} />
                    </div>
                </label>

                <Button name="Submit Files" onClick={handleSubmit} size="w-[130px]"  />

            </div>


            <div className='mt-10 text-[13px] text-darkBlue flex items-center gap-x-4 '>
                {file ? [...file]?.map((el, index) => (
                    <div key = {index} cla>
                        <AiOutlineFile className='text-darkBlue' size={30} />
                        <p className="mt-3">{el.name}</p>
                    </div>
                )) : null}
            </div>
        </div>
    </div>
  )
}

export default StudentAssignment