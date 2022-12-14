import React, { useEffect } from "react";
import { AiOutlineCalendar, AiOutlinePlusCircle } from "react-icons/ai";
import { BiMoney } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { specialization, NoSession } from "../../../public";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import { useRouter } from "next/router";
import useLiveSession from "../../../hooks/useLiveSession";
import { useQuery } from "@tanstack/react-query";
import { FullPageSpinner } from "../../Lib";
import moment from "moment";

const Content = () => {
  const [live, setLive] = useState(false);
  const [data, setData] = useState([])

  const { handleGetLiveSessions } = useLiveSession();

  const getData = () => {
    const data = handleGetLiveSessions();
    return data;
  };

  const StorageApi = process.env.NEXT_PUBLIC_REACT_APP_STORAGE_URL
  console.log(StorageApi)

  //This sorts the date and time of the liveSessions from closest to farthest
  const sortingFunction = (a, b) => {
    let timestampA = moment(moment(`${a?.date} ${a?.time}`).format()).valueOf()
    let timestampB = moment(moment(`${b?.date} ${b?.time}`).format()).valueOf()
    if (timestampA < timestampB ) return -1;
    if(timestampA > timestampB) return 1;
    return 0;
  }


  //convert date of the data object to datetime
  const convertDate = () => {
    return moment(`${data?.date} ${data?.time}`)
  } 

  const [value, onChange] = useState(); // for the calender
  const { data: liveSessionData, isLoading, isError } = useQuery(["liveSessions"], getData, {
    onSuccess: (data) => {
      // let timestamp = moment(`${data[1]?.date} ${data[1]?.time}`).format()
      const newData = (data.sort(sortingFunction))
      console.log(newData)
      setData(newData[0])
    },
  });

  console.log("date---> ", new Date(moment(`${data?.date} ${data?.time}`).format()))

  useEffect(() => {
    if (data) {
      onChange(new Date(moment(`${data?.date} ${data?.time}`).format()))
    }
  }, [data])

  const router = useRouter();

  useEffect(() => {
    // console.log(data);
    if (liveSessionData?.length > 0) {
      setLive(true);
    }
  }, [liveSessionData]);

  if (isLoading) {
    return <FullPageSpinner />;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  const Image = `${StorageApi}${data?.image}`



  return (
    <div className="relative w-full h-full bg-[#FEFEFE] flex flex-col mt-[90px] md:mt-[120px] md:justify-center items-start md:translate-x-[250px] md:w-[calc(100%-250px)] px-2 xl:px-8 py-6  text-darkGray ">
      <div className="w-full flex justify-between items-center">
        <div className="flex">
          <p className="text-[15px] text-darkBlue ">Live classes</p>
          <div className="h-[10px] w-[10px] bg-[#FF0000] rounded-full animate-pulse" />
        </div>
        <button
          className="flex items-center px-3 py-3 gap-x-2 text-[13px] rounded-md dashboard-card-shadow bg-white"
          onClick={() => router.push("/creators/live-session/new")}
        >
          <AiOutlinePlusCircle color="#121F4C" size={17} />
          <p>Create new live session</p>
        </button>
      </div>

      {/* If there is already a scheduled live-session */}
      {live && (
        <div className="w-full flex flex-col-reverse xl:flex-row items-center xl:items-start xl:justify-between mt-8 ">
          <div className="w-full sm:w-[500px] mt-10 xl:mt-0">
            <div className="w-full bg-white rounded-xl">
              {data ? <div
                className="w-full h-[400px] px-3 rounded-xl flex flex-col justify-end  bg-center bg-cover bg-no-repeat"
                style={{backgroundImage: `url("${Image}")`}}
              >
                 <div className="h-[100px] w-[68px] bg-white rounded-2xl flex flex-col items-center justify-center ">
                  <p className="text-[30px] font-bold text-black">{(convertDate().format("LL")).split(" ")?.[1]}</p>
                  <p className="text-[#B3B3B3] text-[14px]">{(convertDate().format("LL")).split(" ")?.[0]}</p>
                </div> 
              </div> : null}
              <div className="w-full h-[40px] flex justify-between px-4 items-center">
                <div className="flex items-center gap-x-1 text-[#999999] text-[13px]">
                  <MdLocationOn size={17} />
                  <p>{data?.host?.company}</p>
                </div>

                {/* <div className="flex items-center gap-x-1 text-[#B4B407] text-[13px]">
                  <div className="w-[8px] h-[8px] rounded-full bg-[#B4B407]" />
                  <p>Today</p>
                </div> */}
              </div>
            </div>

            <p className="text-[#444444] mt-7">{data?.name}</p>
            <div className="text-[#B3B3B3] text-[13px] mt-2">
              Hosted by <span className="text-[#5CAC0D]">{data?.host?.firstName} {data?.host?.lastName} </span>{" "}
            </div>

            <div className="flex items-center gap-x-2 mt-7">
              <AiOutlineCalendar className="text-[30px]" />
              {data ? <div>
                <p className="font-bold ">{(convertDate().format("LL"))}</p>  
                {/* <p className="font-bold ">July, Mon 27th</p> */}
                <p className="text-[12px] ">{(convertDate().format("hh:mm a"))}</p>
              </div> : null}
            </div>

            <div className="flex items-center gap-x-2 mt-4">
              <BiMoney className="text-[30px]" />
              <div>
                <p className="font-bold ">#{Number(data?.price).toLocaleString()}</p>
              </div>
            </div>

            {/* <div className="flex items-center gap-x-2 mt-4">
              <AiOutlineCalendar className="text-[30px]" />
              <div>
                <p className="font-bold ">#20,000</p>
              </div>
            </div> */}

            <p className="text-[#444444] mt-10 font-bold text-base">
              Description
            </p>
            <p className="mt-4 text-[#444444] text-[13px]">
              {data?.description}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
              cursus sit enim facilisi gravida ligula bibendum dignissim
              penatibus. Justo dapibus in venenatis, nunc. Vulputate leo
              ultrices id bibendum. Volutpat duis amet curabitur vestibulum
              morbi facilisis. Nulla mauris tellus eu nibh nulla quam et arcu.
              Tellus non, ullamcorper convallis fermentum libero commodo.
              Pellentesque vulputate aliquet etiam blandit sagittis nec aliquet
              pellentesque tellus. Id posuere bibendum id sed ut tellus.
              Elementum massa sed arcu pellentesque tempor. Arcu massa sed
              ultrices quis justo, lorem consectetur. Tincidunt nulla est, non
              imperdiet posuere erat. Enim, aliquet sed lectus id. Nisl ut proin
              nulla at sagittis egestas accumsan elit nunc. Cras lacus, justo
              eget vulputate. Et potenti enim, posuere eget nunc sagittis
              sodales id. Ut tortor et nulla sit convallis habitasse consectetur
              lorem in. Mi augue ipsum tristique quis est nec sodales vitae.
              Vitae porta amet odio sed dictum. Semper eget leo, feugiat orci
              diam. Habitant netus malesuada urna, feugiat amet consectetur
              cursus sem. In dictum sit tempor, diam fames lorem. Egestas enim
              consequat leo quam. Viverra lorem proin viverra cras sollicitudin
              in imperdiet suspendisse ac. Eu gravida nunc pretium porttitor.
              Sed placerat est sed nunc tellus dis. Eget orci gravida curabitur
              cursus massa at sed id scelerisque. Egestas sed sapien nisl nunc
              eros faucibus purus amet, felis. Quis at amet vel, euismod. Et
              viverra vestibulum egestas ornare cursus amet purus in.
              Ullamcorper urna, sollicitudin fringilla nulla orci, maecenas
              fringilla urna. Magna ut porta ac cras sed diam diam volutpat. Leo
              ipsum lacus, metus a cras morbi commodo quam. Mattis cras interdum
              nisl, mattis lacus tortor amet. Augue vitae, et quis lobortis
              morbi id dictum sed. Ipsum felis habitasse morbi duis auctor.
              Rhoncus neque non orci.
            </p>

            <div className="centerFlex text-[13px] text-white bg-darkBlue rounded-md py-3 mt-3">
              Share link
            </div>
          </div>

          <div className=" flex flex-col lg:flex-row items-center justify-start gap-x-4 xl:flex-col">
            {data ? <div className="w-[340px] ">
              <Calendar
                onChange={onChange}
                showWeekNumbers
                value={value}
                className=""
              />
            </div> : null}

            <div className="xl:w-full px-5 py-7 rounded-md mt-10 bg-[#FFFFFF]">
              <p className="text-[17px] text-[#444444] font-bold w-full border-b-[1px] pb-4">
                Upcoming
              </p>
              {liveSessionData?.filter(el => el.id != data?.id)?.map((item, index) => (
                <div key={item.id}>
                  <p className="text-[#444444] text-[17px] font-bold mt-4">
                    {item.name}
                  </p>
                  <p className="text-[12px] text-[#999999] mt-2">
                    {Number(item.attendees_count)} people registered
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* If there is no scheduled live-session */}

      {!live && (
        <div className=" min-h-[calc(100vh-180px)] sm:min-h-[calc(100vh-150px)] w-full flex flex-col justify-center gap-y-4 sm:gap-y-12 items-center">
          <NoSession />
          <p className="text-xl">No upcoming live session</p>
          <div
            className="w-[140px] h-[40px] centerFlex bg-darkBlue rounded-md text-[14px] cursor-pointer text-white"
            onClick={() => router.push("/creators/live-session/new")}
          >
            Create live session
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
