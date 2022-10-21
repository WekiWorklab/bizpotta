import React from "react";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { TextEditorNotesModal } from "./CourseStructureComponent/TextEditorNotesModal";

const CourseProject = () => {
  return (
    <div className="w-full">
      <div className="w-full border-[1px] rounded-sm border-gray-500 mt-8 pb-10 px-4 md:pl-10">
        <p className="text-[14px] font-bold mt-10">Resources</p>
        <p className="text-[13px] mt-4">
          We have shared helpful of resources, if you need more assistance,
          kindly contact us on our Helpline or you can ask for help in{" "}
          <span className="text-seaBlue">
            Bizpotta Instructor&#39;s Community
          </span>
        </p>

        <div className="flex flex-row gap-x-4 items-center mt-8 ">
          <div className="text-seaBlue border-b-2 border-seaBlue text-[14px]">
            Get started with teaching
          </div>
        </div>
        <div className="flex flex-row gap-x-4 items-center mt-8">
          <div className="text-seaBlue border-b-2 border-seaBlue text-[14px]">
            Video setup &#38; equipment
          </div>
        </div>
        <div className="flex flex-row gap-x-4 items-center mt-8">
          <div className="text-seaBlue border-b-2 border-seaBlue text-[14px]">
            Course quality requirement
          </div>
        </div>
        <div className="flex flex-row gap-x-4 items-center mt-8">
          <div className="text-seaBlue border-b-2 border-seaBlue text-[14px]">
            Audio and video editing
          </div>
        </div>
        <div className="flex flex-row gap-x-4 items-center mt-8">
          <div className="text-seaBlue border-b-2 border-seaBlue text-[14px]">
            Tips to build an outstanding course
          </div>
        </div>
      </div>

      <div className="px-4 md:px-10 bg-white py-8 mt-10 rounded-sm shadow-xl border">
        <p className="font-bold text-[15px]">Project</p>

        <div className="mt-10 min-h-[300px]">
          <TextEditorNotesModal />
        </div>

        <div>
          <label
            htmlFor="file"
            className="mt-2 flex w-[300px] h-[40px] inputField items-center gap-x-3 px-2 cursor-pointer"
          >
            <AiOutlineVideoCamera color="gray" size={24} />
            <p className="mt-[0.5px] text-[13px] text-[#999999]">
              Upload the lecture video
            </p>
            <input
              type="file"
              id="file"
              multiple
              accept=".pdf, .png, .pdf, .docx, .jpeg"
              className="hidden"
            />
          </label>
        </div>

        <div className="w-full flex justify-end">
          <div className="w-[120px] h-[40px] centerFlex bg-darkBlue text-white text-[13px] font-bold rounded-md cursor-pointer mt-16">
            Save Changes
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseProject;
