import { useRouter } from "next/router";
import React from "react";

import {wordShortner} from '../../utils/wordShortner'

//////////////
import {
  AiOutlineHeart,
  AiOutlineShareAlt,
  AiOutlineLeft,
} from "react-icons/ai";
import ReactPlayer from "react-player";

const TopSection = ({data}) => {
  const router = useRouter();
    console.log(data)


  const handleClick = () => {
    router.back();
  };

  return (
    <div className=" pt-2 md:pt-8">
      <div className="flex flex-row items-center" onClick={() => handleClick()}>
        <AiOutlineLeft size={20} />
        <p className="text-[12px] ml-2">Go to courses</p>
      </div>
      <div className="flex flex-row text-[13px] items-center justify-between mt-4">
        <div className="flex flex-row">
          <p>{wordShortner(data?.title, 15)} / </p>
          <p>Week {data.week_number} /</p>
          <p>{wordShortner(data?.week_lectures.description, 20)}</p>
        </div>
        <div className="flex flex-row">
          <AiOutlineHeart size={18} className="mr-2" />
          <AiOutlineShareAlt size={18} className="" />
        </div>
      </div>

      <div className="w-[370px] h-[230px] mt-4 sm:mt-6 sm:w-[500px] sm:h-[300px] xl:w-[850px] xl:h-[370px]">
        <ReactPlayer
          url={data?.week_lectures.video}
          controls={true}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default TopSection;
