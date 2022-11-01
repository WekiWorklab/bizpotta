////
import React, { useState, useEffect } from "react";

/////
import MiddleSection from "./MiddleSection";
import TopSection from "./TopSection";
import useCourse from "../../hooks/useCourse.jsx";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { FullPageSpinner } from "../../components/Lib";

const Content = () => {
  const router = useRouter();
  // console.log(router.query.id)
  const { id } = router.query;
  const { getMyCourse } = useCourse();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    id
      ? getMyCourse(id)
          .then((res) => {
            if (!res) {
              router.push("/students")
            }
            setData(res);
          })
          .finally(() => setLoading(false))
      : null;
  }, [router, id]);

  if (loading) return <FullPageSpinner />;

  return (
    <div className="relative w-full h-full bg-white sm:bg-gray-50 flex flex-col pt-[90px] md:pt-[120px] md:justify-center items-center md:translate-x-[200px] md:w-[calc(100%-200px)] pl-4 md:pl-8 pb-10 text-darkGray">
      <TopSection data={data} />
      <MiddleSection data={data} />
    </div>
  );
};

export default Content;
