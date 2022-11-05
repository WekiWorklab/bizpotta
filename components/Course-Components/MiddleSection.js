/////
import React from "react";

//////
import ScheduleCard from "./ScheduleCard";

const MiddleSection = ({ data }) => {
  return (
    <div className=" w-full mt-10 pt-4 pr-2 lg:pr-24 text-[darkBlue]">
      <div className=" overflow-x-scroll no-scrollbar">
        <div className="min-w-[630px] max-w-[630px] flex flex-row">
          {data?.course?.course_weeks.map((el, index) => (
            <div key={index} className="flex">
              <div className="flex flex-col justify-center items-center">
                <div className="w-[20px] h-[20px] rounded-full bg-darkBlue"></div>
                <p className="min-w-[50px] text-center text-[11px] mt-2">
                  Week {el.week_number}
                </p>
              </div>
              {index == data?.course?.course_weeks.length - 1 ? (
                <div />
              ) : (
                <div className="w-16 mt-[10px] border-t-2 border-dashed border-darkBlue " />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        {data?.course.course_weeks.map((el, index) => (
          <ScheduleCard key={index} data={el} index={index} />
        ))}
      </div>
    </div>
  );
};

export default MiddleSection;



/**
 * Note that week_number was the best identifier available for now for trhe weekId query parameter for routing in this section even though week_number 4 appears twice and 6 is missing. id would have been used as it is unique but the data was not arranged orderly according to id.
 */

