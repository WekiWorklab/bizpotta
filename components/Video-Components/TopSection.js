import { useRouter } from "next/router";

import { wordShortner } from "../../utils/wordShortner";

//////////////
import { useEffect, useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineLeft,
  AiOutlineShareAlt,
} from "react-icons/ai";
import AxoisApi from "utils";
import { FullPageSpinner } from "../Lib";

const TopSection = ({ data }) => {
  const router = useRouter();
  const [videoOtpt, setVideoOtpt] = useState("");
  const [videoPlayBack, setVideoPlayBack] = useState("");
  console.log(data);

  const handleClick = () => {
    router.back();
  };

  const getVideo = () => {
    AxoisApi.post("/get-video-link", {
      video_id: data?.week_lectures?.video,
    })
      .then((res) => {
        console.log(res.data);
        setVideoOtpt(res.data.data.otp);
        setVideoPlayBack(res.data.data.playbackInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getVideo();
  }, []);

  if (videoOtpt === "" || videoPlayBack === "") return <FullPageSpinner />;

  return (
    <div className=' pt-2 md:pt-8'>
      <div className='flex flex-row items-center' onClick={() => handleClick()}>
        <AiOutlineLeft size={20} />
        <p className='text-[12px] ml-2'>Go to courses</p>
      </div>
      <div className='flex flex-row text-[13px] items-center justify-between mt-4'>
        <div className='flex flex-row'>
          <p>{wordShortner(data?.title, 15)} / </p>
          <p>Week {data?.week_number} /</p>
          <p>{wordShortner(data?.week_lectures.description, 20)}</p>
        </div>
        <div className='flex flex-row'>
          <AiOutlineHeart size={18} className='mr-2' />
          <AiOutlineShareAlt size={18} className='' />
        </div>
      </div>

      <div className='w-[370px] h-[230px] mt-4 sm:mt-6 sm:w-[500px] sm:h-[300px] xl:w-[850px] xl:h-[370px]'>
        <iframe
          src={`https://player.vdocipher.com/v2/?otp=${videoOtpt}&playbackInfo=${videoPlayBack}`}
          style={{
            // border:0;max-width:100%;position:absolute;top:0;left:0;height:100%;width:100%;'
            border: "0",
            maxWidth: "100%",
            top: "0",
            left: "0",
            height: "100%",
            width: "100%",
          }}
          allowfullscreen='true'
          allow='encrypted-media'></iframe>
      </div>
    </div>
  );
};

export default TopSection;
