import React from "react";

////////////
import DashBoardCard from "../DashBoardCard";
import ResourcesCard from "../ResourcesCard";
import VideoCard from "../VideoCard";

////////////////
import CoursesTable from "../CoursesTable";
import { useState } from "react";
import EnrollmentTable from "../EnrollmentTable";
import IncomeTableChart from "../IncomeTableChart";
import { MdOutlineArrowUpward } from "react-icons/md";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io5";
import {
  BlueFacebook,
  BlueGroup,
  BlueInstagram,
  BlueTelegram,
  BlueTwitter,
  Filter,
  Money,
  NoActivities,
  Suprise,
} from "../../../../public";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import WithdrawalModal from "./WithdrawalModal";


const baseUrl = process.env.NEXT_PUBLIC_REACT_APP_API_URL;

const Content = () => {
  const [select, setSelected] = useState("");
  const { user, token } = useSelector((state) => state.auth);

  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [amount, setAmount] = useState(null);

  const ongoing = false;

  const times = {
    total: 90,
    completed: 24,
  };

  const value = (times.completed / times.total) * 100;

  const fetchDashboardStats = async () => {
    const res = await fetch(`${baseUrl}/creators/tutors-dashboard-stats`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return data.data;
  };

  // react query

  const { data } = useQuery(["dashboardStats"], fetchDashboardStats);

  return (
    <div className="relative w-full h-full bg-[#FEFEFE] flex flex-col mt-[90px] md:mt-[120px] md:justify-center items-start md:translate-x-[250px] md:w-[calc(100%-250px)] px-2 xl:px-8 py-6 text-darkGray">
      <p className="mb-8">Hello, {user?.firstName}</p>

      <div className="w-full flex flex-row flex-wrap justify-center md:pr-3 gap-3 sm:gap-8 xl:gap-0 xl:justify-between ">
        <DashBoardCard
          select={select}
          title="income"
          value={data?.totalIncome}
          type="1"
          setSelected={setSelected}
        />
        <DashBoardCard
          select={select}
          title="enrollment"
          value={data?.totalStudents}
          type="2"
          setSelected={setSelected}
        />
        <DashBoardCard
          select={select}
          title="courses"
          value={data?.totalCourses}
          type="3"
          setSelected={setSelected}
        />
      </div>

      {ongoing && select === "courses" && (
        <div className="mt-14 w-full">
          <div className="flex flex-row justify-between w-full ">
            <p className="text-[17px] font-bold">
              Introduction to fashion designing
            </p>
            <p className="text-[12px] text-dark-gray-100">
              {Math.round(value)}%
            </p>
          </div>

          <div className="w-full h-[15px] mt-2 rounded-[20px] bg-[#FBFFF8] border border-gray-100">
            <div
              className="h-full rounded-[20px] bg-bizpotta-green"
              style={{ width: `${(times.completed / times.total) * 100}%` }}
            ></div>
          </div>
        </div>
      )}

      {select === "income" && (
        <WithdrawSection
          token={token}
          setShowWithdrawModal={setShowWithdrawModal}
        />
      )}

      <div className="mt-6 lg:mt-12 w-full">
        <RenderTableChart select={select} courses={data?.courses} />
      </div>

      {select === "income" && <AffiliateSection code={user?.referral_code} />}

      <p className="mt-3 lg:mt-10 font-[600]">Resources</p>
      <p className="mt-2">Just creating your first class, we got you covered</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto lg:mx-1  gap-y-6  lg:gap-x-20 mt-10 self-start">
        <VideoCard />
        <VideoCard />
        <div className="text-[14px] text-bizpotta-gray-600 lg:col-span-2 text-center lg:mt-10">
          View More
        </div>
      </div>

      <p className="mt-6 lg:mt-16 font-[600]">
        Resourses to help you get started
      </p>
      <div className="border resources-child rounded-md mb-6 mt-8 border-gray-700">
        <ResourcesCard />
        <ResourcesCard />
        <ResourcesCard />
        <ResourcesCard />
        <ResourcesCard />
        <ResourcesCard />
        <ResourcesCard />
        <ResourcesCard />

        <div className="text-[13px] text-bizpotta-gray-600 text-center mt-4">
          View More
        </div>
      </div>

      <WithdrawalModal
        showWithdrawModal={showWithdrawModal}
        setShowWithdrawModal={setShowWithdrawModal}
        amount={amount}
        setAmount={setAmount}
      />
    </div>
  );
};

export default Content;

const RenderTableChart = ({ select, courses }) => {
  if (select === "courses") {
    return courses.length > 0 ? (
      <CoursesTable courses={courses} />
    ) : (
      <div className="flex flex-col mx-auto">
        <div className="w-full h-[450px] flex flex-col justify-center items-center">
          <NoActivities />
          <p className="text-[#787878] text-[14px] font-bold mt-4">
            No courses yet
          </p>
        </div>
      </div>
    );
  } else if (select === "income") {
    return <IncomeTableChart />;
  } else if (select === "enrollment") {
    return <EnrollmentTable />;
  } else return <div></div>;
};

export const MainTableFooter = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="min-w-[1050px] xl:w-full h-[50px] mt-6 mb-2 bg-[#9B9FC6] bg-opacity-[0.12] rounded-md flex items-center justify-between px-8 text-[13px] text-[#191919] ">
      <div className=" opacity-[0.5]">1 - 10 of 7,814</div>

      <div className="flex justify-center items-center gap-x-10">
        <p className=" opacity-[0.5]">You are currently on Page</p>

        <div className="w-[60px] h-[25px] rounded-md bg-white"></div>

        <div className="h-[25px] border-r-1 border"></div>

        <div className="centerFlex gap-x-3">
          <button
            disabled={currentPage === 1}
            onClick={() => {
              console.log(1);
            }}
          >
            <AiOutlineLeftCircle size={19} />
          </button>
          <button
            onClick={() => {
              console.log(2);
            }}
          >
            <AiOutlineRightCircle size={19} />
          </button>
        </div>
      </div>
    </div>
  );
};

export const MainTableHeader = ({ filter, placeholder }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [showExport, setShowExport] = useState(false);

  return (
    <div className="min-w-[1050px] xl:w-full h-[55px] mt-6 mb-2 bg-[#9B9FC6] bg-opacity-[0.12] rounded-md flex items-center justify-between px-8">
      <input
        className="w-[500px] text-[13px] text-[#191919] rounded-sm h-[35px] pl-4 outline-none focus:ring-0"
        placeholder={placeholder}
      />

      <div className="flex items-center gap-x-4">
        <div
          className="h-[35px] relative centerFlex w-[120px] text-[#191919] text-[14px] gap-x-3 bg-white rounded-md cursor-pointer"
          onClick={() => {
            setShowFilter((prev) => !prev);
            setShowExport(false);
          }}
        >
          <Filter />
          <p className="">Filter</p>
          {/* filter dropdown */}
          {showFilter && (
            <div className="absolute top-[40px] w-[180px] py-4 gap-y-2 flex flex-col justify-center items-center dropdown-shadow bg-white rounded-md">
              {filter.map((el, index) => (
                <p
                  key={index}
                  className="w-full text-left px-3 py-2 cursor-pointer text-[13px] hover:bg-[#858585]"
                >
                  {el}
                </p>
              ))}
            </div>
          )}
        </div>

        <div
          className="h-[35px] centerFlex relative w-[120px] text-[#191919] text-[14px] gap-x-3 bg-white rounded-md cursor-pointer"
          onClick={() => {
            setShowFilter(false);
            setShowExport((prev) => !prev);
          }}
        >
          <div className="w-[17px] h-[17px] centerFlex rounded-full border border-[#191919]">
            <MdOutlineArrowUpward color="#191919" />
          </div>
          <p className="">Export</p>
          {/* export dropdown */}
          {showExport && (
            <div className="absolute top-[40px] w-[180px] py-4 gap-y-2 flex flex-col justify-center dropdown-shadow items-center bg-white rounded-md">
              <p className="w-full text-center py-2 cursor-pointer text-[13px] hover:bg-[#858585]">
                Export as CSV
              </p>
              <p className="w-full text-center py-2 cursor-pointer text-[13px] hover:bg-[#858585]">
                Export as .xlsx
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const AffiliateSection = ({ code }) => {
  const affilateLink = `https://bizpotta.com/?ref=${code}`;
  return (
    <div className="w-full h-[140px] lg:h-[110px] bg-[#FEF5C9] bg-opacity-[0.32] border border-[#FEF5C9] rounded-md flex flex-col lg:flex-row justify-center lg:justify-between items-center px-2 lg:px-6 mt-16">
      <div className="flex items-center">
        <Suprise />
        <div className="">
          <p className="text-[13px]">Share your affilate code </p>
          <p className="text-[13px] font-bold">{code}</p>
        </div>
      </div>

      <div className="flex items-center gap-x-5  h-2/3 px-4 lg:px-20 lg:border-l-2 border-[#FEF5C9] ">
        <a
          rel="noreferrer"
          onClick={() => {
            navigator.clipboard.writeText(affilateLink);
            toast.success("Copied to clipboard");
          }}
          target="_blank"
          className="flex items-center gap-x-2 text-[#191919] text-[13px] cursor-pointer"
        >
          <BlueGroup />
        </a>
        <a
          rel="noreferrer"
          href={`http://www.facebook.com/share.php?u=${affilateLink}`}
          target="_blank"
        >
          <BlueFacebook />
        </a>
        <a
          rel="noreferrer"
          href={`https://www.instagram.com/?url=${affilateLink}`}
          target="_blank"
        >
          <BlueInstagram />
        </a>
        <a
          rel="noreferrer"
          href={`http://www.twitter.com/share?url=${affilateLink}`}
          target="_blank"
        >
          <BlueTwitter />
        </a>
        <a
          rel="noreferrer"
          href={`https://t.me/share/url?url={${affilateLink}}`}
          target="_blank"
        >
          <BlueTelegram />
        </a>
        <a
          rel="noreferrer"
          href={`whatsapp://send?text=${affilateLink}`}
          target="_blank"
        >
          <IoLogoWhatsapp size={22} />
        </a>
      </div>
    </div>
  );
};

export const WithdrawSection = ({ token, setShowWithdrawModal }) => {
  const fetchWallet = async () => {
    const res = await fetch(`${baseUrl}/creators/wallet`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return data.data;
  };

  // react query

  const { data } = useQuery(["wallet"], fetchWallet);
  return (
    <div className="w-full h-[120px] sm:h-[100px] bg-[#94F236] bg-opacity-[0.06] flex flex-col gap-y-2  sm:flex-row justify-center sm:justify-between items-center rounded-md px-2 sm:px-10 mt-16 ">
      <div className="flex items-center gap-x-4">
        <Money />

        <div className="text-[#222222] text-[14px] centerFlex gap-x-2 font-bold">
          <p className="text-[16px]">Available balance</p>
          <p className="text-[20px]">
            ₦{Number(data?.balance).toLocaleString()}
          </p>
        </div>
      </div>
      <div
        className="w-[120px] h-[38px] text-[14px] rounded-md font-bold bg-bizpotta-green centerFlex cursor-pointer"
        onClick={() => setShowWithdrawModal(true)}
      >
        Withdraw
      </div>
    </div>
  );
};
