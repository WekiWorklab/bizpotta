import React from "react";
import { useState } from "react";
import {
  AiFillCaretDown,
  AiOutlineArrowDown,
  AiOutlinePicture,
} from "react-icons/ai";
import { Picture, specialization } from "../../../public";
import TailwindSelect from "../../TailwindSelect";
import { SlPicture } from "react-icons/si";
import { useEffect } from "react";

const Content = () => {
  const [select, setSelect] = useState("personal");
  const [open, setOpen] = useState("0");
  /**The open and setOpen objects are used to make sure that multiple select dropdowns can't be open at the same time */

  return (
    <div className="relative w-full h-full bg-[#FDFDFD] flex flex-col mt-[90px] md:mt-[120px] md:justify-center items-start md:translate-x-[250px] md:w-[calc(100%-250px)] px-2 xl:px-10 py-10 text-darkGray">
      {/* Nav section */}
      <div className="w-full overflow-x-scroll green-horizontal-scrollbar lg:overflow-x-hidden  ">
        <div className="min-w-[670px] flex items-center gap-x-12 ">
          <div
            className={`${
              select === "personal"
                ? "bg-[#94F236] bg-opacity-[0.06] text-[#5CAC0D]"
                : "text-[#999999]"
            } px-2 py-2 rounded-md text-[13px] cursor-pointer `}
            onClick={() => setSelect("personal")}
          >
            Personal information
          </div>
          <div
            className={`${
              select === "education"
                ? "bg-[#94F236] bg-opacity-[0.06] text-[#5CAC0D]"
                : "text-[#999999]"
            } px-2 py-2 rounded-md text-[13px] cursor-pointer `}
            onClick={() => setSelect("education")}
          >
            Education
          </div>
          <div
            className={`${
              select === "company"
                ? "bg-[#94F236] bg-opacity-[0.06] text-[#5CAC0D]"
                : "text-[#999999]"
            } px-2 py-2 rounded-md text-[13px] cursor-pointer `}
            onClick={() => setSelect("company")}
          >
            Company Profile
          </div>
          <div
            className={`${
              select === "payment"
                ? "bg-[#94F236] bg-opacity-[0.06] text-[#5CAC0D]"
                : "text-[#999999]"
            } px-2 py-2 rounded-md text-[13px] cursor-pointer `}
            onClick={() => setSelect("payment")}
          >
            Payment
          </div>
          <div
            className={`${
              select === "account"
                ? "bg-[#94F236] bg-opacity-[0.06] text-[#5CAC0D]"
                : "text-[#999999]"
            } px-2 py-2 rounded-md text-[13px] cursor-pointer `}
            onClick={() => setSelect("account")}
          >
            Account
          </div>
        </div>
      </div>

      {/* Body */}

      <div className="w-full ">
        {select === "personal" && (
          <PersonalInformation open={open} setOpen={setOpen} />
        )}
        {select === "education" && <Education open={open} setOpen={setOpen} />}
        {select === "company" && (
          <CompanyProfile open={open} setOpen={setOpen} />
        )}
        {select === "payment" && <Payment open={open} setOpen={setOpen} />}
        {select === "account" && <Account open={open} setOpen={setOpen} />}
      </div>
    </div>
  );
};

export default Content;

// Select Components
const SelectOptions = ({
  data,
  option,
  setOption,
  width,
  type,
  open,
  setOpen,
}) => {
  const [showSelect, setShowSelect] = useState(false);

  useEffect(() => {
    if (open != type) {
      setShowSelect(false);
    }
  }, [open, type]);

  /**This useffect ensures that all non-opened dropdowns have their showSelect boolean set to false when a different dropdown is opened. This prevents faulty toggling of the showSelect variable */

  return (
    <div className="relative mt-4">
      <div className="flex items-center gap-x-3">
        <div
          className={`w-[${width}]  cursor-pointer h-[40px] px-2 rounded-md focus:ring-0 outline-none border border-[1px] border-[#CCCCCC] border-opacity-[0.45] flex justify-between items-center text-[13px] text-gray-400`}
          onClick={() => {
              setShowSelect((prev) => !prev);
              setOpen(type);
            }}
        >
          {option || "select"}
          <AiFillCaretDown
            size={20}
            color="#999999"
            onClick={() => {
              setShowSelect((prev) => !prev);
              setOpen(type);
            }}
          />
        </div>
      </div>
      {showSelect && open === type && (
        <div className="absolute cursor-pointer min-w-[200px] z-20 top-[42px] left-0 py-4 bg-white rounded-md dropdown-shadow">
          {data.map((el, index) => (
            <div
              key={index}
              className="py-2 px-4 hover:bg-gray-500 hover:text-white text-[13px]"
              onClick={() => {
                setOption(el);
                setShowSelect(false);
              }}
            >
              {el}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Account Section
const Account = ({ open, setOpen }) => {
  const [industry, setIndustry] = useState("");
  const [experience, setExperience] = useState("");
  const [material, setMaterial] = useState("");
  const [revenue, setRevenue] = useState("");

  const Industry = [
    "Less than 1 year",
    "Less than 5 years",
    "Less than 10 years",
    "More than 10 years",
  ];
  const Experience = [
    "Less than 1 year",
    "Less than 5 years",
    "Less than 10 years",
    "More than 10 years",
  ];

  return (
    <div className="w-full mt-8 pb-20">
      <div className="font-bold text-[16px]">Account</div>

      <div className="mt-16 text-[14px]">
        <p className="font-bold">What industry would you be teaching in</p>
        <div>
          <SelectOptions
            data={Industry}
            width="330px"
            option={industry}
            setOption={setIndustry}
            open={open}
            setOpen={setOpen}
            type="1"
          />
        </div>
      </div>

      <div className="mt-16 text-[14px]">
        <p className="font-bold">
          How many years of experience do you have in this field?
        </p>
        <div>
          <SelectOptions
            data={Experience}
            width="330px"
            option={experience}
            setOption={setExperience}
            open={open}
            setOpen={setOpen}
            type="2"
          />
        </div>
      </div>
      <div className="mt-16 text-[14px]">
        <p className="font-bold">How much training material do you have?</p>
        <div>
          <SelectOptions
            data={Experience}
            width="330px"
            option={material}
            setOption={setMaterial}
            open={open}
            setOpen={setOpen}
            type="3"
          />
        </div>
      </div>
      <div className="mt-16 text-[14px]">
        <p className="font-bold">
          How much do you plan on making from teaching this course?
        </p>
        <div>
          <SelectOptions
            data={Experience}
            width="330px"
            option={revenue}
            setOption={setRevenue}
            open={open}
            setOpen={setOpen}
            type="4"
          />
        </div>
      </div>
      <div className="mt-16 text-[14px]">
        <p className="font-bold">
          How much time do you have in creating your course weekly?
        </p>
        <p className="font-bold text-[11px]">
          It is nothing to worry about, we will help you acheive your goals
        </p>
        <div>
          <SelectOptions
            data={Experience}
            width="330px"
            option={revenue}
            setOption={setRevenue}
            open={open}
            setOpen={setOpen}
            type="5"
          />
        </div>
      </div>
      <div className="mt-16 text-[14px]">
        <p className="font-bold">Social Handles</p>
        <p className="text-[11px] mt-4 bold">Website</p>
        <textarea className="w-[300px] h-[50px] inputField mt-1"></textarea>
      </div>

      <div className="flex justify-center  gap-x-3 mt-16">
        <div
          className="w-[120px] h-[40px] bg-darkBlue text-white centerFlex font-bold rounded-md text-[13px] cursor-pointer"
          onClick={() => {}}
        >
          {" "}
          Save changes{" "}
        </div>
      </div>
    </div>
  );
};

// Payments section
const Payment = ({ open, setOpen }) => {
  const [bank, setBank] = useState();

  const banks = [
    "GT Bank",
    "Access Bank",
    "Zenith Bank",
    "Wema Bank",
    "Diamond Bank",
  ];

  return (
    <div className="w-full mt-8 pb-20">
      <div className="font-bold text-[16px]">Payment</div>
      <div className="mt-16 text-[14px]">
        <p className="font-bold">Bank Name</p>
        <div>
          <SelectOptions
            data={banks}
            width="330px"
            option={bank}
            setOption={setBank}
            open={open}
            setOpen={setOpen}
            type="1"
          />
        </div>
      </div>

      <div className="mt-16 text-[14px]">
        <p className="font-bold">Account Number</p>
        <input className="w-[300px] h-[50px] inputField mt-4" type="number" />
      </div>

      <div className="flex justify-center  gap-x-3 mt-14">
        <div
          className="w-[120px] h-[40px] bg-darkBlue text-white centerFlex font-bold rounded-md text-[13px] cursor-pointer"
          onClick={() => {}}
        >
          {" "}
          Save changes{" "}
        </div>
      </div>
    </div>
  );
};

const CompanyProfile = () => {
  const [select, setSelect] = useState("");

  return (
    <div className="w-full mt-8 pb-20">
      <div className="font-bold text-[16px]">Education</div>

      <div className="mt-16 text-[14px]">
        <p className="font-bold">Highest level of education</p>
        <textarea className="w-[300px] h-[100px] inputField mt-4"></textarea>
      </div>

      <div className="mt-16 text-[14px]">
        <p className="font-bold">Instructors Bio</p>
        <textarea className="w-[300px] h-[100px] inputField mt-4"></textarea>
      </div>

      <div className="mt-16 text-[14px]">
        <p className="font-bold">Company’s Profile</p>
        <textarea className="w-[300px] h-[100px] inputField mt-4"></textarea>
      </div>

      <div className="mt-16 text-[14px]">
        <p className="font-bold">Image</p>
        <label
          htmlFor="file"
          className="w-[345px] sm:w-[400px] h-[50px] inputField mt-4 flex items-center justify-between px-4"
        >
          <p className="text-[#CCCCCC] text-[12px] ">
            Upload a Logo thumbnail for easy identification
          </p>
          <input type="file" id="file" className="hidden" />
          <Picture />
        </label>
        <p className="mt-3 max-w-[400px] break-words text-[#CCCCCC] text-[12px]">
          This is the first image attendees will see at the top of your listing.
          Use a high quality image: 48x48px (1:1 ratio)
        </p>
      </div>

      <div className="mt-16 text-[14px]">
        <p className="font-bold">Job Location Status</p>
        <div className="flex items-center gap-x-5">
          <div className="flex gap-x-1 items-center">
            <div
              className="w-[12px] h-[12px] border-[1px] centerFlex border-black rounded-full"
              onClick={() => setSelect("physical")}
            >
              {select === "physical" && (
                <div className="w-[6px] h-[6px] bg-black rounded-full" />
              )}
            </div>
            <p className="text-[12px]">Physical</p>
          </div>
          <div className="flex gap-x-1  items-center">
            <div
              className="w-[12px] h-[12px] border-[1px] centerFlex border-black rounded-full"
              onClick={() => setSelect("remote")}
            >
              {select === "remote" && (
                <div className="w-[6px] h-[6px] bg-black rounded-full" />
              )}
            </div>
            <p className="text-[12px]">Remote</p>
          </div>
          <div className="flex gap-x-1  items-center">
            <div
              className="w-[12px] h-[12px] border-[1px] centerFlex border-black rounded-full"
              onClick={() => setSelect("hybrid")}
            >
              {select === "hybrid" && (
                <div className="w-[6px] h-[6px] bg-black rounded-full" />
              )}
            </div>
            <p className="text-[12px]">Hybrid</p>
          </div>
        </div>
      </div>

      <div className="mt-16 text-[14px]">
        <p className="font-bold">Job Location Description</p>
        <p className="text-[11px] bold">
          Provide a detailed description of where your office is located
        </p>
        <textarea
          className="w-[300px] h-[50px] text-[12px] inputField mt-4"
          placeholder="12, Omowunmi Lane, Ikeja Bus Stop, Lagos"
        ></textarea>
      </div>

      <div className="mt-16 text-[14px]">
        <p className="font-bold">Social Handles</p>
        <p className="text-[11px] mt-4 bold">Website</p>
        <textarea className="w-[300px] h-[50px] inputField mt-1"></textarea>
      </div>

      <div className="flex justify-center  gap-x-3 mt-16">
        <div
          className="w-[120px] h-[40px] bg-white border-[1px] border-darkBlue text-darkBlue centerFlex font-bold rounded-md text-[13px] cursor-pointer"
          onClick={() => {}}
        >
          {" "}
          Cancel{" "}
        </div>
        <div
          className="w-[120px] h-[40px] bg-darkBlue text-white centerFlex font-bold rounded-md text-[13px] cursor-pointer"
          onClick={() => {}}
        >
          {" "}
          Save changes{" "}
        </div>
      </div>
    </div>
  );
};

/** Education section */
const Education = ({ open, setOpen }) => {
  const [education, setEducation] = useState();
  const [experience, setExperience] = useState();
  const [institution, setInstitution] = useState();

  const [time, setTime] = useState();

  const level = [
    "Less than High School Diploma (or equivalent)",
    "High School Diploma (equivalent)",
    "College but no degree",
    "Associate degree",
    "Bachelor’s degree",
    "Master’s degree",
    "Professional school degree",
    "Doctorate school degree",
  ];
  const Experience = [
    "Employed",
    "Unemployed",
    "Self employed",
    "Prefer not to say",
  ];
  const Institution = [
    "Leo's Photography",
    "Leo's Photography",
    "Leo's Photography",
    "Leo's Photography",
    "Leo's Photography",
  ];

  const timeExperience = [
    "Less than 1 year",
    "Less than 5 years",
    "Less than 10 years",
    "More than 10 years",
  ];

  return (
    <div className="w-full mt-8 pb-20">
      <div className="font-bold text-[16px]">Education</div>

      <div className="mt-16 text-[14px]">
        <p className="font-bold">Highest level of education</p>
        <div>
          <SelectOptions
            data={level}
            width="330px"
            option={education}
            setOption={setEducation}
            open={open}
            setOpen={setOpen}
            type="1"
          />
        </div>
      </div>

      <div className="mt-16 text-[14px]">
        <p className="font-bold">Work Experience</p>
        <div>
          <SelectOptions
            data={Experience}
            width="330px"
            option={experience}
            setOption={setExperience}
            open={open}
            setOpen={setOpen}
            type="2"
          />
        </div>
      </div>

      <div className="mt-16 text-[14px]">
        <p className="font-bold">Institution</p>
        <div>
          <SelectOptions
            data={Institution}
            width="280px"
            option={institution}
            setOption={setInstitution}
            open={open}
            setOpen={setOpen}
            type="3"
          />
        </div>
      </div>

      <div className="mt-16 text-[14px]">
        <p className="font-bold">Departmental Role</p>
        <div>
          <SelectOptions
            data={Institution}
            width="280px"
            option={institution}
            setOption={setInstitution}
            open={open}
            setOpen={setOpen}
            type="4"
          />
        </div>
      </div>

      <div className="mt-16 text-[14px]">
        <p className="font-bold">Years of Experience</p>
        <div>
          <SelectOptions
            data={timeExperience}
            width="280px"
            option={time}
            setOption={setTime}
            open={open}
            setOpen={setOpen}
            type="5"
          />
        </div>
      </div>

      <div className="mt-16 text-[14px]">
        <p className="font-bold">Certification</p>
        <div>
          <SelectOptions
            data={timeExperience}
            width="280px"
            option={time}
            setOption={setTime}
            open={open}
            setOpen={setOpen}
            type="6"
          />
        </div>
        <div className="flex w-[280px] items-center mt-3">
          <AiOutlinePicture size={20} />
          <p className="text-[12px] ml-2">Upload certification</p>
          <label
            htmlFor="file"
            className="flex items-center justify-center gap-x-3 bg-darkBlue text-[13px] text-white py-1 px-2 rounded-md ml-8 cursor-pointer"
          >
            <p className="">Browse</p>
            <AiFillCaretDown color="white" size={14} />
            <input type="file" id="file" className="hidden" />
          </label>
        </div>
      </div>

      <div className="flex justify-center sm:justify-end gap-x-3 mt-16">
        <div
          className="w-[120px] h-[40px] bg-white border-[1px] border-darkBlue text-darkBlue centerFlex font-bold rounded-md text-[13px] cursor-pointer"
          onClick={() => {}}
        >
          {" "}
          Cancel{" "}
        </div>
        <div
          className="w-[120px] h-[40px] bg-darkBlue text-white centerFlex font-bold rounded-md text-[13px] cursor-pointer"
          onClick={() => {}}
        >
          {" "}
          Save changes{" "}
        </div>
      </div>
    </div>
  );
};

/** Personal Information Section */

const PersonalInformation = () => {
  const [showEditSection, setShowEditSection] = useState(true);

  return (
    <div className="w-full mt-8">
      {!showEditSection ? (
        <InformationPreview setShowEditSection={setShowEditSection} />
      ) : (
        <InformationEdit setShowEditSection={setShowEditSection} />
      )}
    </div>
  );
};

const InformationEdit = ({ setShowEditSection }) => {
  return (
    <div>
      <p className="font-bold text-[14px] text-center xl:text-left">
        My Information
      </p>
      <div className="w-full flex flex-col xl:flex-row gap-x-28 mt-7">
        <div className="">
          <img
            src={specialization.src}
            alt=""
            className="min-w-[250px] min-h-[250px] max-w-[250px] max-h-[250px] rounded-md mx-auto xl:mx-[0px]"
          />
          <form className="mt-6 mx-auto centerFlex">
            <label htmlFor="file">
              <div className="w-[140px] h-[40px] bg-white border-[1px] border-darkBlue text-black centerFlex font-bold rounded-sm text-[13px] cursor-pointer">
                {" "}
                Change picture{" "}
              </div>
              <input type="file" id="file" className="hidden" />
            </label>
          </form>
        </div>

        <div className="grid mt-10 xl:mt-[0px]  lg:grid-cols-2 gap-y-10 gap-x-28 text-[14px]">
          <div className="flex flex-col items-center xl:block  ">
            <p className="font-bold">First name</p>
            <input
              type="text"
              className="w-[250px] h-[40px] mt-3 focus:ring-0 outline-none bg-[#FCFDFE] border-[1px] border-[#CCCCCC] border-opacity-[0.45] text-[13px] text-[#999999] pl-3 rounded-md"
              placeholder="Ahmed"
            />
          </div>
          <div className="flex flex-col items-center xl:block ">
            <p className="font-bold">Last name</p>
            <input
              type="text"
              className="w-[250px] h-[40px] mt-3 focus:ring-0 outline-none bg-[#FCFDFE] border-[1px] border-[#CCCCCC] border-opacity-[0.45] text-[13px] text-[#999999] pl-3 rounded-md"
              placeholder="Ahmed"
            />
          </div>
          <div className="flex flex-col items-center xl:block ">
            <p className="font-bold">Mobile number</p>
            <input
              type="number"
              className="w-[250px] h-[40px] mt-3 focus:ring-0 outline-none bg-[#FCFDFE] border-[1px] border-[#CCCCCC] border-opacity-[0.45] text-[13px] text-[#999999] pl-3 rounded-md"
              placeholder="09030395075"
            />
          </div>
          <div className="flex flex-col items-center xl:block ">
            <p className="font-bold">Gender</p>
            <select className="w-[250px] h-[40px] mt-3 focus:ring-0 outline-none bg-[#FCFDFE] border-[1px] border-[#CCCCCC] border-opacity-[0.45] text-[13px] text-[#999999] pl-3 rounded-md">
              <option value="" className="hidden"></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {/* <TailwindSelect data = {data} /> */}
          </div>
          <div className="flex flex-col items-center xl:block xl:col-span-2">
            <p className="font-bold">Email address</p>
            <input
              type="email"
              className="w-[300px] h-[40px] mt-3 focus:ring-0 outline-none bg-[#FCFDFE] border-[1px] border-[#CCCCCC] border-opacity-[0.45] text-[13px] text-[#999999] pl-3 rounded-md"
              placeholder="ahmed@gmail.com"
            />
          </div>
          <div className="flex flex-col items-center xl:block ">
            <p className="font-bold">Organisation</p>
            <input
              type="text"
              className="w-[250px] h-[40px] mt-3 focus:ring-0 outline-none bg-[#FCFDFE] border-[1px] border-[#CCCCCC] border-opacity-[0.45] text-[13px] text-[#999999] pl-3 rounded-md"
              placeholder="weki-work"
            />
          </div>
          <div className="flex flex-col items-center xl:block ">
            <p className="font-bold">Date of birth</p>
            <input
              type="date"
              className="w-[250px] h-[40px] mt-3 focus:ring-0 outline-none bg-[#FCFDFE] border-[1px] border-[#CCCCCC] border-opacity-[0.45] text-[13px] text-[#999999] pl-3 rounded-md"
            />
          </div>
          <div className="flex flex-col items-center xl:block xl:col-span-2">
            <p className="font-bold">Residential Address</p>
            <input
              type="text"
              className="w-[300px] h-[40px] mt-3 focus:ring-0 outline-none bg-[#FCFDFE] border-[1px] border-[#CCCCCC] border-opacity-[0.45] text-[13px] text-[#999999] pl-3 rounded-md"
              placeholder="12, Omowunmi Lane, Ikeja Bus Stop, Lagos"
            />
          </div>
          <div className="flex flex-col items-center xl:block ">
            <p className="font-bold">Country</p>
            <input
              type="text"
              className="w-[250px] h-[40px] mt-3 focus:ring-0 outline-none bg-[#FCFDFE] border-[1px] border-[#CCCCCC] border-opacity-[0.45] text-[13px] text-[#999999] pl-3 rounded-md"
              placeholder="weki-work"
            />
          </div>
          <div className="flex flex-col items-center xl:block ">
            <p className="font-bold">State</p>
            <input
              type="text"
              className="w-[250px] h-[40px] mt-3 focus:ring-0 outline-none bg-[#FCFDFE] border-[1px] border-[#CCCCCC] border-opacity-[0.45] text-[13px] text-[#999999] pl-3 rounded-md"
              placeholder="weki-work"
            />
          </div>
          <div className="flex flex-col items-center xl:block ">
            <p className="font-bold">Password</p>
            <input
              type="password"
              className="w-[250px] h-[40px] mt-3 focus:ring-0 outline-none bg-[#FCFDFE] border-[1px] border-[#CCCCCC] border-opacity-[0.45] text-[13px] text-[#999999] pl-3 rounded-md"
              placeholder="*********"
            />
          </div>
          <div className="flex flex-col items-center xl:block self-end">
            <input
              type="password"
              className="w-[250px] h-[40px] mt-3 focus:ring-0 outline-none bg-[#FCFDFE] border-[1px] border-[#CCCCCC] border-opacity-[0.45] text-[13px] text-[#999999] pl-3 rounded-md"
              placeholder="*********"
            />
          </div>

          <div className="lg:col-span-2 gap-x-12 flex justify-end mt-6">
            <div
              className="w-[120px] h-[40px] bg-white border-[1px] border-darkBlue text-darkBlue centerFlex font-bold rounded-md text-[13px] cursor-pointer"
              onClick={() => setShowEditSection(false)}
            >
              {" "}
              Cancel{" "}
            </div>
            <div
              className="w-[120px] h-[40px] bg-darkBlue text-white centerFlex font-bold rounded-md text-[13px] cursor-pointer"
              onClick={() => setShowEditSection(false)}
            >
              {" "}
              Save changes{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InformationPreview = ({ setShowEditSection }) => {
  return (
    <div>
      <p className="font-bold text-[14px]">My Information</p>
      <div className="w-full flex flex-col lg:flex-row gap-x-40 mt-7">
        <img
          src={specialization.src}
          alt=""
          className="min-w-[250px] min-h-[250px] max-w-[250px] max-h-[250px] rounded-md "
        />
        <div className="grid mt-10 lg:mt-[0px] grid-cols-2 gap-y-10 gap-x-28 text-[14px]">
          <div className="">
            <p className="font-bold">First name</p>
            <p className="text-darkBlue break-words">Ahmed</p>
          </div>
          <div className="">
            <p className="font-bold">Mobile Number</p>
            <p className="text-darkBlue break-words">Ahmed</p>
          </div>
          <div className="">
            <p className="font-bold">Mobile number</p>
            <p className="text-darkBlue">09030395075</p>
          </div>
          <div className="">
            <p className="font-bold">Gender</p>
            <p className="text-darkBlue">Male</p>
          </div>
          <div className="col-span-2">
            <p className="font-bold">Email address</p>
            <p className="text-darkBlue break-words">Ahmedsalisu@email.com</p>
          </div>
          <div className="">
            <p className="font-bold">Organisation</p>
            <p className="text-darkBlue break-words">Weki-work</p>
          </div>
          <div className="">
            <p className="font-bold">Date of birth</p>
            <p className="text-darkBlue">DD/MM/YY</p>
          </div>
          <div className="col-span-2">
            <p className="font-bold">Residential Address</p>
            <p className="text-darkBlue break-words">
              12, Omowunmi Lane, Ikeja Bus Stop, Lagos
            </p>
          </div>
          <div className="">
            <p className="font-bold">Country</p>
            <p className="text-darkBlue break-words">Nigeria</p>
          </div>
          <div className="">
            <p className="font-bold">State</p>
            <p className="text-darkBlue break-words">Osun</p>
          </div>
          <div className="col-span-2 flex justify-end">
            <div
              className="w-[120px] h-[40px] bg-darkBlue text-white centerFlex font-bold rounded-md text-[13px] cursor-pointer"
              onClick={() => setShowEditSection(true)}
            >
              {" "}
              Edit{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
