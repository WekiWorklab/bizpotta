import React from "react";
import FirstContent from "./FirstContent";
import OngoingCourses from "./OngoingCourses";
import SecondContent from "./SecondContent";

const CourseStructure = () => {
  const first = true;
  return (
    <div className="">
      {first ? <FirstContent /> : <SecondContent />}
      {/* <OngoingCourses /> */}
    </div>
  );
};

export default CourseStructure;

/**
 * Note that the OngoingCourses file is on its own for now until the workflow is sorted out
 */
