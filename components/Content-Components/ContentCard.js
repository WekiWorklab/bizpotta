import React from "react";
import { BsStarFill, BsTag } from "react-icons/bs";
import { offer } from "../../public";

import { useDispatch } from "react-redux";
import { showCourseDetailsModal } from "../../store/courseSlice";
import { wordShortner } from "../../utils/wordShortner";
 
export const ContentCard = ({ data, type }) => {
  const imageSrc =
    "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

  const colorType = (type) => {
    switch (type) {
      case "vocational":
        return "bg-[#121F4C]";
      case "masterclass":
        return "bg-[#4C1512]";
      default:
        return "bg-[#121F4C]";
    }
  };

  const dispatch = useDispatch();

  const name = "kjjhgvbn;iuhygjhmb,nmhbvihuFvhsjaiouyjGVHbniudbaegujnm;lkjgbnm."

  return (
    <div
      className="w-[220px] h-[220px] rounded-[4px] bg-no-repeat bg-cover bg-center flex flex-col justify-end"
      style={{ backgroundImage: `url(${data?.image})` }}
      onClick={() => {
        dispatch(showCourseDetailsModal(true));
      }}
    >
      <div
        className={`clip-card-path2 ${colorType(
          type
        )} text-[white] h-3/5 flex flex-col justify-end px-2 pb-2 rounded-b-md`}
      >
        <div className="flex flex-row justify-end">
          <div className="text-[13px] w-[50px] h-[25px] rounded-[5px] flex justify-center items-center bg-[#94F236] text-darkBlue">
            Enroll
          </div>
        </div>

        <div className="text-[14px] mt-[3px] break-words">{wordShortner(data?.name, 26)}</div>
        <div className="flex flex-row justify-between items-center mt-0">
          <div className="">
            <div className="flex items-center gap-x-1">
              <div className="w-[20px] h-[20px] ">
                <img src={offer.src} alt="" className="rounded-full" />
              </div>
              <p className="text-[11px] break-words">{data.academy}</p>
            </div>
          </div>
          <div>
            <div className="flex flex-row gap-x justify-end">
              <BsStarFill size={12} color="#FFC700" />
              <BsStarFill size={12} color="#FFC700" />
              <BsStarFill size={12} color="#FFC700" />
              <BsStarFill size={12} color="#FFC700" />
              <BsStarFill size={12} color="#FFC700" />
            </div>
            <p className="text-[10px]">{data.total_students} students</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
