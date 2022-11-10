import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { useDispatch } from "react-redux";
import useCourse from "../../../hooks/useCourse";
import { TextEditorNotesModal } from "./CourseStructureComponent/TextEditorNotesModal";

const CourseProject = () => {
  const [counter, setCounter] = useState(1);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { handleCreateCourseProject } = useCourse();
  const router = useRouter();

  const [inputValue, setInputValue] = useState({
    value1: "",
    value2: "",
    value3: "",
    value4: "",
    value5: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddLinks = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div className='w-full'>
      <div className='w-full border-[1px] rounded-sm border-gray-500 mt-8 pb-10 px-4 md:pl-10'>
        <p className='text-[14px] font-bold mt-10'>Resources</p>
        <p className='text-[13px] mt-4'>
          We have shared helpful of resources, if you need more assistance, kindly contact us on our Helpline or you can ask for help in{" "}
          <span className='text-seaBlue'>Bizpotta Instructor&#39;s Community</span>
        </p>

        <div className='flex flex-row gap-x-4 items-center mt-8 '>
          <div className='text-seaBlue border-b-2 border-seaBlue text-[14px]'>Get started with teaching</div>
        </div>
        <div className='flex flex-row gap-x-4 items-center mt-8'>
          <div className='text-seaBlue border-b-2 border-seaBlue text-[14px]'>Video setup &#38; equipment</div>
        </div>
        <div className='flex flex-row gap-x-4 items-center mt-8'>
          <div className='text-seaBlue border-b-2 border-seaBlue text-[14px]'>Course quality requirement</div>
        </div>
        <div className='flex flex-row gap-x-4 items-center mt-8'>
          <div className='text-seaBlue border-b-2 border-seaBlue text-[14px]'>Audio and video editing</div>
        </div>
        <div className='flex flex-row gap-x-4 items-center mt-8'>
          <div className='text-seaBlue border-b-2 border-seaBlue text-[14px]'>Tips to build an outstanding course</div>
        </div>
      </div>

      <div className='px-1 sm:px-4 md:px-10 bg-white py-3 sm:py-8 mt-10 rounded-sm shadow-xl border'>
        <p className='font-bold text-[15px]'>Project</p>
        <div className='mt-10'>
          <TextEditorNotesModal />
        </div>
        <div>
          <label htmlFor='file' className='mt-5 flex w-[320px] h-[40px] inputField items-center gap-x-3 px-2 cursor-pointer'>
            <AiOutlineVideoCamera color='gray' size={24} />
            <p className='mt-[0.5px] text-[13px] text-[#999999]'>Upload the images and text files</p>
            <input type='file' id='file' multiple accept='.pdf, .png, .pdf, .docx, .jpeg' className='hidden' />
          </label>
        </div>

        <div className='flex flex-col'>
          <input
            type='text'
            className='inputField w-[320px] sm:min-w-[400px] mt-10'
            value={inputValue.value1}
            name='value1'
            onChange={(e) => handleChange(e)}
            placeholder='paste link here'
          />

          {counter > 1 && (
            <input
              type='text'
              className='inputField w-[320px] sm:min-w-[400px] mt-6'
              value={inputValue.value2}
              name='value2'
              onChange={(e) => handleChange(e)}
              placeholder='paste link here'
            />
          )}

          {counter > 2 && (
            <input
              type='text'
              className='inputField w-[320px] sm:min-w-[400px] mt-6'
              value={inputValue.value3}
              name='value3'
              onChange={(e) => handleChange(e)}
              placeholder='paste link here'
            />
          )}

          {counter > 3 && (
            <input
              type='text'
              className='inputField w-[320px] sm:min-w-[400px] mt-6'
              value={inputValue.value4}
              name='value4'
              onChange={(e) => handleChange(e)}
              placeholder='paste link here'
            />
          )}

          {counter > 4 && (
            <input
              type='text'
              className='inputField w-[320px] sm:min-w-[400px] mt-6'
              value={inputValue.value5}
              name='value5'
              onChange={(e) => handleChange(e)}
              placeholder='paste link here'
            />
          )}

          <div className='text-darkBlue text-[13px] cursor-pointer mt-3' onClick={() => handleAddLinks()}>
            + add another link
          </div>
        </div>

        <div className='w-full flex justify-end'>
          <div
            className='w-[120px] h-[40px] centerFlex bg-darkBlue text-white text-[13px] font-bold rounded-md cursor-pointer mt-16'
            onClick={() => console.log(inputValue)}
          >
            Save Changes
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseProject;

// const NewInput = ({number, handleChange, objKey, links}) => {

//   useEffect(() => {
//     console.log(links)
//     console.log(number)
//     console.log(Object.values(links))
//   }, [links, number])

//   return(
//     <div className="flex">

//     <input type = "text" className="inputField min-w-[400px]" value = {Object.values(links)[number]} onChange={(e) => handleChange(e, number)} />
//     <p>{number}</p>
//     </div>

//   )
// }

/**
 * const handleAddLinks = () => {
    setCounter(prev => prev + 1)
    setNumLinks(prev => [...prev, counter])
    const newKey = `inputValue${counter}`
    setLinks(prev => ({...prev, [newKey]: "" }))
  }

  const handleChange = (e, number) => {
      const {value} = e.target
      const key = `inputValue${number}`
      setLinks((prev => ({...prev, [key]: value})))
  }

  useEffect(() => {
  }, [counter, links, numLinks])
 */

// {
//   numLinks.map((el, index) => (
//     <NewInput key = {index} handleChange={handleChange} number = {el} links = {links} objKey = {`inputValue${el}`} />
//   ))
// }
