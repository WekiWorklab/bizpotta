import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import {
  BlueFacebook,
  BlueGroup,
  BlueInstagram,
  BlueTelegram,
  BlueTwitter,
  Celebration,
  CoursesIcon,
  EnrollmentIcon,
  IncomeIcon,
  Money,
  smile,
  Suprise,
} from "../../../public";

import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import { Fragment } from "react";


const Content = () => {
  const [select, setSelected] = useState("");

  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [amount, setAmount] = useState(null);


  return (
    <div className="relative w-full min-h-[calc(100vh-90px)] md:min-h-[calc(100vh-120px)] bg-[#FEFEFE] flex flex-col mt-[90px] md:mt-[120px] md:justify-start items-start md:translate-x-[250px] md:w-[calc(100%-250px)] px-2 py-10 text-darkGray">

      <div className="w-full pl-2 pr-2 lg:pl-10 lg:pr-10 xl:pr-52">
        
      <div className="flex items-center justify-center md:justify-start gap-x-3">
        <p className="font-medium">Keep referring people to earn more</p>
        <img src={smile.src} className="w-[30px] h-[30px]  " />
      </div>

      <div className="w-full flex flex-row justify-center md:justify-start gap-x-20 mt-7">
        <DashBoardCard
          select={select}
          title="earning"
          value={20}
          type="1"
          setSelected={setSelected}
        />

        <DashBoardCard
          select={select}
          title="people"
          value={40}
          type="2"
          setSelected={setSelected}
        />
      </div>

      <div className="w-full h-[120px] sm:h-[100px] bg-[#94F236] bg-opacity-[0.06] flex flex-col gap-y-2  sm:flex-row justify-center sm:justify-between items-center rounded-md px-2 sm:px-10 mt-16 ">
      <div className="flex items-center gap-x-4">
        <Money />

        <div className="text-[#222222] text-[14px] centerFlex gap-x-2 font-bold">
          <p className="text-[16px]">Available balance</p>
          <p className="text-[20px]">
            {/* ₦{Number(data?.balance).toLocaleString()} */}
            ₦450,000
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


      <div className="w-full h-[140px] lg:h-[110px] bg-[#FEF5C9] bg-opacity-[0.32] border border-[#FEF5C9] rounded-md flex flex-col lg:flex-row justify-center lg:justify-between items-center px-2 lg:px-6 mt-16">
      <div className="flex items-center">
        <Suprise />
        <div className="">
          <p className="text-[13px]">Share your affilate code </p>
          <p className="text-[13px] font-bold">uwgbk98732</p>
        </div>
      </div>

      <div className="flex items-center gap-x-5  h-2/3 px-4 lg:px-20 lg:border-l-2 border-[#FEF5C9] ">
        <a
          rel="noreferrer"
          onClick={() => {
            // navigator.clipboard.writeText(affilateLink);
            // toast.success("Copied to clipboard");
          }}
          target="_blank"
          className="flex items-center gap-x-2 text-[#191919] text-[13px] cursor-pointer"
        >
          <BlueGroup />
        </a>
        <a
          rel="noreferrer"
          // href={`http://www.facebook.com/share.php?u=${affilateLink}`}
          target="_blank"
        >
          <BlueFacebook />
        </a>
        <a
          rel="noreferrer"
          // href={`https://www.instagram.com/?url=${affilateLink}`}
          target="_blank"
        >
          <BlueInstagram />
        </a>
        <a
          rel="noreferrer"
          // href={`http://www.twitter.com/share?url=${affilateLink}`}
          target="_blank"
        >
          <BlueTwitter />
        </a>
        <a
          rel="noreferrer"
          // href={`https://t.me/share/url?url={${affilateLink}}`}
          target="_blank"
        >
          <BlueTelegram />
        </a>
        <a
          rel="noreferrer"
          // href={`whatsapp://send?text=${affilateLink}`}
          target="_blank"
        >
          <IoLogoWhatsapp size={22} />
        </a>
      </div>
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

const DashBoardCard = ({ select, title, setSelected, value, type }) => {
  return (
    <div
      className={`w-[150px] sm:w-[230px]  lg:w-[320px] border-[1px] border-[#858585] border-opacity-[0.25] dashboard-card-shadow cursor-pointer ${
        select === title ? "bg-[#F3F4F6]" : "bg-[#FDFDFD]"
      } rounded-md p-2 sm:p-6 lg:p-8`}
      onClick={() => setSelected(title)}
    >
      <div className="flex flex-row justify-between items-center mb-4">
        {title === "earning" ? <IncomeIcon /> : <EnrollmentIcon />}
        <BsChevronDown size={14} color="#787878" />
      </div>

      <p className="text-bizpotta-green text-[14px] sm:text-base  mb-2 capitalize font-bold">
        {title === "earning" ? "Referral Earning" : "No of people referred"}
      </p>

      <div className="font-[600] text-[14px] lg:text-base  text-bizpotta-gray-700">
        {type == 1 ? "₦" : ""}
        {type == 1 ? Number(value).toLocaleString() : value}
        {type == 2 ? (
          <span className="text-[12px]"> students</span>
        ) : type == 3 ? (
          <span className="text-[12px]"> courses</span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};




const WithdrawalModal = ({ showWithdrawModal, setShowWithdrawModal, amount, setAmount }) => {

  const [section, setSection] = useState("acc_amount");
  const router = useRouter()
      
  const closeModal = () => {
      setAmount(null)
      setSection("acc_amount")
    setShowWithdrawModal(false);
  };

  return (
    <Transition.Root show={showWithdrawModal} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        open={showWithdrawModal}
        onClose={() => {}}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center block sm:p-0  ">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-top mt-10  bg-white rounded-lg overflow-hidden shadow-xl transform transition-all">
              <div className="w-[340px] sm:w-[400px] md:w-[400px] min-h-[400px] flex flex-col px-2 sm:px-4 py-6 items-center justify-start">
                <div className="w-full flex justify-end  ">
                  <MdOutlineCancel
                    className="cursor-pointer"
                    color="#191919"
                    size={22}
                    onClick={closeModal}
                  />
                </div>
                <div className="flex w-full flex-col px-2 sm:px-6 mt-4 gap-y-6 items-center justify-center">
                  {section === "acc_amount" && (
                    <div className="flex flex-col items-center">
                      <p className="text-[#3B3B3B] mt-10">
                        How much would you like to withdraw?
                      </p>
                      <input type="number" value={amount} className="inputField w-full sm:w-[340px] break-words text-[14px] mt-8" onChange={(e) => setAmount(e.target.value)}
                      />
                      <button className="w-[120px] h-[35px] centerFlex rounded-md bg-darkBlue text-white text-[13px] dropdown-shadow cursor-pointer mt-12" onClick={() => {setSection("acc_details");}} >
                        Continue
                      </button>
                      <p
                        className="text-[13px] text-[#3B3B3B] mt-6 underline cursor-pointer"
                        onClick={() => {setAmount(null); closeModal();}}
                      >
                        No, Cancel
                      </p>
                    </div>
                  )}

                  {section === "acc_details" && (
                    <div className="flex flex-col items-center">
                      <p className="text-[#3B3B3B]">
                          Name
                      </p>
                      <div className="inputField centerFlex h-[50px] break-words w-[300px] sm:w-[340px] text-[14px] mt-2"> 
                          Mark Andrews
                      </div>
                      <p className="text-[#3B3B3B] mt-4">
                          Bank Name
                      </p>
                      <div className="inputField centerFlex h-[50px] break-words w-[300px] sm:w-[340px] text-[14px] mt-2"> 
                          Union Bank
                      </div>
                      <p className="text-[#3B3B3B] mt-4">
                          Account Number
                      </p>
                      <div className="inputField centerFlex h-[50px] break-words w-[300px] sm:w-[340px] text-[14px] mt-2"> 
                          0039430249
                      </div>
                      <button className="w-[120px] h-[35px] centerFlex rounded-md bg-darkBlue text-white text-[13px] dropdown-shadow cursor-pointer mt-6" onClick={() => {setSection("acc_success");}} >
                        Yes, go ahead
                      </button>
                      <p
                        className="text-[13px] text-[#3B3B3B] mt-6 underline cursor-pointer"
                        onClick={() => {setAmount(null); closeModal(); router.push("/creators/settings")}}
                      >
                        Change bank
                      </p>
                    </div>
                  )}

                  {section === "acc_success" && (
                    <div className="flex flex-col items-center gap-y-9 py-10">
                          <Celebration />

                          <p className="text-[17px]">Successful</p>

                          <p className="text-[13px]">Dear Ahmed, you account 0096******would be credited shortly</p>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};