import { useQuery } from "@tanstack/react-query";
import moment from "moment/moment";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import useCourse from "../../hooks/useCourse";
import { useDispatch } from "react-redux";
import { showMasterclassModal } from "../../store/courseSlice";

import Countdown from "react-countdown";

const LiveComponent = () => {
  const [session, setSession] = useState("");
  const router = useRouter();
  const { getLiveSessions } = useCourse();

  // Get live sessions data here
  const { data, isLoading } = useQuery(
    ["student_livesessions"],
    getLiveSessions
  );

  return (
    <div className="relative w-full h-full bg-[#FDFDFD] flex flex-col pt-[90px] md:pt-[120px] md:justify-start md:translate-x-[200px] md:w-[calc(100%-200px)] px-2 md:px-3 lg:px-16 pb-10">
      <p className="mt-10 font-bold">Live sessions</p>

      <p className="mt-10  font-bold">Purchased live sessions </p>

      {/* loading state */}
      {isLoading ? (
        <div className="w-full">
          <div className="flex flex-col  items-start border masters-shadow2 border-[#b1adad] rounded-md px-3 sm:px-6 py-4 sm:py-8 w-full mt-10  skeleton-parent h-[300px] sm:h-[400px]">
            <div className="w-full h-3/4 sm:w-2/3 skeleton-child1" />
            <div className="w-full h-[20px] rounded-sm mt-8 skeleton-child1" />
            <div className="w-full h-[20px] rounded-sm mt-4 skeleton-child1" />
          </div>
        </div>
      ) : null}

      {/* Data state */}
      {data ? (
        <div className="w-full flex flex-col gap-y-10 mt-6">
          {data?.liveSessions.map((el, index) => (
            <LiveSessionCard key={index} data={el} />
          ))}
        </div>
      ) : null}

      <p className="mt-28  font-bold">See other live sessions </p>

      {/* <LiveSessionCard router = {router}/> */}
      <div className="mt-4">
        <SessionTabs session={session} setSession={setSession} />
      </div>
    </div>
  );
};

export default LiveComponent;

const LiveSessionCard = ({ data }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [time, setTime] = useState(
    moment(`${data?.date} ${data?.time}`).format("x")
  );
  //

  useEffect(() => {
    const myInterval = setInterval(() => {
      const newTime = moment(`${data?.date} ${data?.time}`).format("x");
      console.log(newTime);
      setTime(Number(newTime));
    }, 1800000);

    return () => {
      clearInterval(myInterval);
    };
  }, [time, data?.date, data?.time]);
  // Run the interval every 30mins

  // Calc date time
  const liveSessionTime = useMemo(
    () => moment(`${data?.date} ${data?.time}`).format(),
    [data]
  );

  //Renderer fxn
  const Renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <div></div>;
    } else {
      return (
        <div className="w-full grid grid-cols-4 gap-x-1 mt-2">
          <div className="flex flex-col items-center justify-center px-2 py-1 rounded-md border border-[#b1adad]">
            <p className="text-[11px]">Days</p>
            <p className="text-[14px]">{days}</p>
          </div>
          <div className="flex flex-col items-center justify-center px-2 py-1 rounded-md border border-[#b1adad]">
            <p className="text-[11px]">Hours</p>
            <p className="text-[14px]">{hours}</p>
          </div>
          <div className="flex flex-col items-center justify-center px-2 py-1 rounded-md border border-[#b1adad]">
            <p className="text-[11px]">Minutes</p>
            <p className="text-[14px]">{minutes}</p>
          </div>
          <div className="flex flex-col items-center justify-center px-2 py-1 rounded-md border border-[#b1adad]">
            <p className="text-[11px]">Seconds</p>
            <p className="text-[14px]">{seconds}</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col sm:flex-row   items-center border masters-shadow2 border-[#b1adad] rounded-md px-3 sm:px-6 md:px-3 lg:px-6 py-4 sm:py-8 w-full  cursor-pointer">
      <div className="w-full flex flex-col items-center sm:items-start sm:w-2/3">
        {Date.now() <= time ? (
          <div className="flex items-center gap-x-2">
            <GoPrimitiveDot size={14} color="red" />
            <p className="font-bold text-[14px]">Live</p>
            {/* <div>{time + Date.now()}</div> */}
          </div>
        ) : null}
        <p className="text-lg text-darkBlue font-bold mt-2 sm:mt-3">
          {data?.name}
        </p>
        <div className="flex items-center gap-x-4">
          <p className="text-[13px]">{data?.date}</p>
          <p className="text-[12px]">{data?.time}</p>
        </div>
        <div className="text-[12px] sm:w-4/5 mt-2 sm:mt-4">
          {data?.description}
        </div>
        <div className="mt-2 sm:mt-4 flex items-center text-xs gap-x-2">
          <div
            className="w-[40px] h-[40px] rounded-full bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${data?.image})` }}
          />
          <p>{data?.attendees_count}+ attending</p>
        </div>

        <div className="flex gap-x-4 items-center mt-3 sm:mt-6">
          <div
            className="w-[150px] h-[40px] rounded-md bg-bizpotta-green centerFlex text-[15px] cursor-pointer"
            onClick={() => {
              dispatch(showMasterclassModal(true));
            }}
          >
            Register
          </div>
          <div className="w-[150px] h-[40px] rounded-md bg-transparent centerFlex text-[15px] border border-[#b1adad]">
            Set reminder
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full mt-4 sm:mt-0 sm:w-1/3">
        <div
          className="w-full h-[200px] bg-no-repeat bg-cover bg-center rounded-md"
          style={{ backgroundImage: `url(${data?.image})` }}
        ></div>

        <div>
          <Countdown date={liveSessionTime} renderer={Renderer} />
        </div>
      </div>
    </div>
  );
};

function SessionTabs({ session, setSession }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const tabs = [
    { name: "Business Plan Development" },
    { name: "Entrepreneurial Leadership" },
    { name: "Team Foundational Structure for Effective Business Management" },
    { name: "Business Plan" },
  ];

  return (
    <div className="block overflow-x-scroll horizontal-scrollbar pb12">
      <div className="border-b border-gray-200 w-[1000px]">
        <nav className="-mb-px flex space-x-4" aria-label="Tabs">
          {tabs.map((tab) => (
            <div
              key={tab.name}
              onClick={() => setSession(tab.name)}
              className={classNames(
                session === tab.name
                  ? "border-bizpotta-green text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
              )}
              aria-current={tab.current ? "page" : undefined}
            >
              {tab.name}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}

/**
   * <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          <select
            id="tabs"
            name="tabs"
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            defaultValue={session}
          >
            {tabs.map((tab) => (
              <option key={tab.name} className = 'break-words'>{tab.name}</option>
            ))}
          </select>
        </div>
   */
