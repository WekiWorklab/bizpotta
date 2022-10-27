import React, { useEffect, useState } from "react";
import { FullPageSpinner } from "../../../Lib";
import FirstContent from "./FirstContent";
import { useRouter } from "next/router";

const CourseStructure = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const { courseId } = router.query;

  useEffect(() => {
    if (courseId) setLoading(false);
  }, [courseId]);

  if (loading) <FullPageSpinner />;
  return (
    <div className=''>
      <FirstContent />
      {/* <OngoingCourses /> */}
    </div>
  );
};

export default CourseStructure;

/**
 * Note that the OngoingCourses file is on its own for now until the workflow is sorted out
 */
