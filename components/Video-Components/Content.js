import React, {useState, useEffect} from "react";
import MiddleSection from "./MiddleSection";
import TopSection from "./TopSection";
import useCourse from "../../hooks/useCourse.jsx"
import {FullPageSpinner} from '../Lib'
import {useRouter} from 'next/router'

const Content = () => {

  const router = useRouter()
  const {id, weekId} = router.query
  const {getMyCourse} = useCourse()
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    id
      ? getMyCourse(id)
          .then((res) => {
            if (!res) {
              router.push("/students")
            }
            // setData(res)
            setData(res?.course?.course_weeks?.find(el => el.id == weekId));
          })
          .finally(() => setLoading(false))
      : null;
  }, [router, id])

  if (loading) return <FullPageSpinner />;



  return (
    <div className="relative w-full h-full bg-white sm:bg-gray-50 flex flex-col pt-[90px] md:pt-[120px] md:justify-center items-center md:translate-x-[200px] md:w-[calc(100%-200px)] px-2 md:px-8 pb-10 text-darkGray ">
      <TopSection data = {data} />
      <MiddleSection data = {data}/>
    </div>
  );
};

export default Content;
