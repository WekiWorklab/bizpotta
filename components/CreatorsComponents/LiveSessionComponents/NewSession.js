import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";

import { TextEditorNotesModal } from "../../CreatorsComponents/CourseLandingComponent/CourseStructureComponent/TextEditorNotesModal";

const NewSession = () => {
  const [course, setCourse] = useState("");
  const [price, setPrice] = useState(null);
  const [open, setOpen] = useState(null);

  const data1 = ["jhgfdfghjk", "jhgfdfghjk", "jhgfdfghjk", "jhgfdfghjk"];
  const data2 = ["jhgfdfghjk", "jhgfdfghjk", "jhgfdfghjk", "jhgfdfghjk"];

  return (
    <div className="relative w-full h-full bg-[#FEFEFE] flex flex-col mt-[90px] md:mt-[120px] md:justify-center items-start md:translate-x-[250px] md:w-[calc(100%-250px)] px-2 xl:px-8 py-6  text-darkGray">
      <div className="flex">
        <p className="text-[15px] text-darkBlue ">Live classes</p>
        <div className="h-[10px] w-[10px] bg-[#FF0000] rounded-full animate-pulse" />
      </div>

      <div className="w-full px-0 sm:px-4 py-4 sm:border mt-7 rounded-md">
        <p className="text-[15px] font-bold">Live Session</p>

        <div className="mt-14  text-[14px] font-bold">
          <div className="w-full flex items-center justify-between ">
            <p>Title</p>
            <BsTrash className="text-[#FF0000] text-opacity-[0.25]" />
          </div>
          <div className="w-full mt-5">
            <TextEditorNotesModal />
          </div>
        </div>

        <div className="mt-14  text-[14px] font-bold">
          <div className="w-full flex items-center justify-between ">
            <p>Description</p>
            <BsTrash className="text-[#FF0000] text-opacity-[0.25]" />
          </div>
          <div className="w-full mt-5">
            <TextEditorNotesModal />
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row  sm:items-center gap-y-5 gap-x-7">
          <div>
            <p className="text-[14px] font-bold">Date</p>
            <input
              type="date"
              className="inputField w-[300px] text-[14px] mt-2 sm:mt-4"
              placeholder={Date.now()}
            />
          </div>

          <div>
            <p className="text-[14px] font-bold">Time </p>
            <input
              type="time"
              className="inputField w-[200px] text-[14px] mt-4"
            />
          </div>
        </div>

        <div className="mt-14">
          <p className="text-[14px] font-bold">Choose course category</p>
          <SelectOptions
            option={course}
            setOption={setCourse}
            open={open}
            setOpen={setOpen}
            width="320px"
            data={data1}
            type="0"
          />
        </div>

        <div className="mt-14">
          <p className="text-[14px] font-bold">Choose price range</p>
          <SelectOptions
            option={price}
            setOption={setPrice}
            open={open}
            setOpen={setOpen}
            width="320px"
            data={data2}
            type="1"
          />
        </div>

        <div className="w-[320px] mt-8">
          <p className="text-[14px] font-bold">Image</p>

          <label
            htmlFor="file"
            className="inputField w-full flex justify-between items-center px-2 py-3 mt-3"
          >
            <p className="text-[12px] text-[#CCCCCC] text-opacity-[0.45]">
              Set your course price range
            </p>
            <MdOutlinePhotoSizeSelectActual className="text-[20px] text-darkBlue" />
            <input
              type="file"
              id="file"
              accept=".jpeg, .png, .jpg"
              className="hidden"
            />
          </label>
          <p className="w-full break-words text-[12px] text-[#999999] mt-3">
            This is the first image attendees will see at the top of your
            listing. Use a high quality image: 48x48px (1:1 ratio)
          </p>
        </div>

        <div className="">
          <button className="text-white text-[13px] bg-darkBlue px-4 py-2 rounded-md mt-8 justify-self-end">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewSession;

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
          className={`w-[${width}] h-[40px] px-2 rounded-md focus:ring-0 outline-none border border-[1px] border-[#CCCCCC] border-opacity-[0.45] flex justify-between items-center text-[13px] text-gray-400`}
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
        <div className="absolute min-w-[200px] z-20 top-[42px] left-0 py-4 bg-white rounded-md dropdown-shadow">
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
