import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import React from 'react'
import useCourse from '../../hooks/useCourse'

const SingleNoteComponent = () => {
  const router = useRouter()
  const {noteId} = router.query
  const {getNote} = useCourse()


  const {data, isLoading} = useQuery(["get-single-course", noteId], () => getNote(noteId), {
    onSuccess: (data) => {
      console.log(data)
    } 
  }  )


  return (
    <div className="relative w-full min-h-screen bg-white sm:bg-gray-50 flex flex-col pt-[90px] md:pt-[120px] items-center md:translate-x-[200px] md:w-[calc(100%-200px)] px-2 md:px-8 pb-10 text-darkGray ">
        <div className='mt-20'>
        {data?.data?.note}
        </div>
    </div>
  )
}

export default SingleNoteComponent