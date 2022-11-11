import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { set, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useLiveSession from "../../../hooks/useLiveSession";
import { useRouter } from "next/router";
import { Button } from "../../../components/Auth-Components/Button";

import { TextEditorNotesModal } from "../../CreatorsComponents/CourseLandingComponent/CourseStructureComponent/TextEditorNotesModal";

const NewSession = ({ data }) => {
  const { handleCreateLiveSession } = useLiveSession();
  const [course, setCourse] = useState("");
  const [textValue, setTextValue] = useState("");
  const [price, setPrice] = useState(null);
  const [open, setOpen] = useState(null);
  const [loading, setLoading] = useState(false);
  const API_KEY = process.env.NEXT_PUBLIC_TINY_API_KEY;

  const data1 = data?.industries;
  const data2 = [
    {
      id: 1,
      name: "Free",
    },
    {
      id: 2,
      name: "Less than ₦50,000",
    },
    {
      id: 3,
      name: "More than ₦50,000",
    },
    {
      id: 4,
      name: "Set your own price",
    },
  ];

  const submitHandler = async (data) => {
    setLoading(true);
    console.log(data);
    const UploadData = new FormData();
    UploadData.append("image", data.image[0]);
    UploadData.append("name", data.name);
    UploadData.append("description", data.description);
    UploadData.append("industry_id", data.category_id);
    UploadData.append("price", data.price);
    UploadData.append("custom_price", data.custom_price);
    UploadData.append("date", data.date);
    UploadData.append("time", data.time);

    const res = await handleCreateLiveSession(UploadData, setLoading);
    console.log(res);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
    date: Yup.string().required("Date is required"),
    time: Yup.string().required("Time is required"),
    category_id: Yup.string().required("Category is required"),
    price: Yup.string().required("Event Price is required"),
    image: Yup.mixed().required("Event Image is required"),
    custom_price: Yup.string().when("price", {
      is: "4",
      then: Yup.string().required("Custom Price is required"),
    }),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState, setValue } = useForm(formOptions);
  const { errors } = formState;

  const router = useRouter();

  const onChangeCategory = (data) => {
    setValue("category_id", data?.id);
    setCourse(data);
  };

  const onChangePrice = (data) => {
    setValue("price", data?.id);
    setPrice(data);
  };

  const onChangeDescription = (data) => {
    setValue("description", data);
    setTextValue(data);
  };

  return (
    <div className='relative w-full h-full bg-[#FEFEFE] flex flex-col mt-[90px] md:mt-[120px] md:justify-center items-start md:translate-x-[250px] md:w-[calc(100%-250px)] px-2 xl:px-8 py-6  text-darkGray'>
      <div className='flex'>
        <p className='text-[15px] text-darkBlue '>Live classes</p>
        <div className='h-[10px] w-[10px] bg-[#FF0000] rounded-full animate-pulse' />
      </div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className='w-full px-0 sm:px-4 py-4 sm:border mt-7 rounded-md'>
          <p className='text-[15px] font-bold'>Live Session</p>

          <div className='mt-14  text-[14px] font-bold'>
            <div className='w-full flex items-center justify-between '>
              <p>Title</p>
            </div>
            <div className='w-full mt-5'>
              <input {...register("name")} type='text' className='w-full md:w-[80%] h-[40px] border border-[#E5E5E5] rounded-md px-4' />
            </div>
            <div className='px-4 text-red-500 text-[12px] md:text-sm font-medium'>{errors.name?.message}</div>
          </div>

          <div className='mt-14  text-[14px] font-bold'>
            <div className='w-full flex items-center justify-between '>
              <p>Description</p>
              <BsTrash className='text-[#FF0000] text-opacity-[0.25]' />
            </div>
            <div className='w-full mt-5'>
              <TextEditorNotesModal api_key={API_KEY} setValue={onChangeDescription} />
            </div>
            <div className='px-4 text-red-500 text-[12px] md:text-sm font-medium'>{errors.description?.message}</div>
          </div>

          <div className='mt-14 flex flex-col sm:flex-row  sm:items-center gap-y-5 gap-x-7'>
            <div>
              <p className='text-[14px] font-bold'>Date</p>
              <input {...register("date")} type='date' className='inputField w-[300px] text-[14px] mt-2 sm:mt-4' placeholder={Date.now()} />
              <div className='px-4 text-red-500 text-[12px] md:text-sm font-medium'>{errors.date?.message}</div>
            </div>

            <div>
              <p className='text-[14px] font-bold'>Time </p>
              <input {...register("time")} type='time' className='inputField w-[200px] text-[14px] mt-4' />
              <div className='px-4 text-red-500 text-[12px] md:text-sm font-medium'>{errors.time?.message}</div>
            </div>
          </div>

          <div className='mt-14'>
            <p className='text-[14px] font-bold'>Choose Event category</p>
            <SelectOptions option={course} setOption={onChangeCategory} open={open} setOpen={setOpen} width='320px' data={data1} type='0' />
            <div className='px-4 text-red-500 text-[12px] md:text-sm font-medium'>{errors.category_id?.message}</div>
          </div>

          <div className='mt-14'>
            <p className='text-[14px] font-bold'>Choose price range</p>
            <SelectOptions option={price} setOption={onChangePrice} open={open} setOpen={setOpen} width='320px' data={data2} type='1' />
            <div className='px-4 text-red-500 text-[12px] md:text-sm font-medium'>{errors.price?.message}</div>
          </div>

          {/* custom price */}
          {price?.id === 4 && (
            <div className='mt-14'>
              <p className='text-[14px] font-bold'>Event price </p>
              <input
                {...register("custom_price")}
                type='number'
                className='inputField w-[300px] text-[14px] mt-2 sm:mt-4'
                placeholder='Enter price'
              />
              <div className='px-4 text-red-500 text-[12px] md:text-sm font-medium'>{errors.custom_price?.message}</div>
            </div>
          )}

          <div className='w-[320px] mt-8'>
            <p className='text-[14px] font-bold'>Image</p>

            <label htmlFor='file' className='inputField w-full flex justify-between items-center px-2 py-3 mt-3'>
              {/* <MdOutlinePhotoSizeSelectActual className='text-[20px] text-darkBlue' /> */}
              <input
                type='file'
                name='image'
                {...register("image")}
                className='text-[12px] ml-2 focus:ring-0 focus:outline-none'
                required
                placeholder='Upload an image for easy identification'
              />
              <svg width='26' height='25' viewBox='0 0 26 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M1.33301 5.50065C1.33301 4.26297 1.82467 3.07599 2.69984 2.20082C3.57501 1.32565 4.762 0.833984 5.99967 0.833984H19.9997C21.2374 0.833984 22.4243 1.32565 23.2995 2.20082C24.1747 3.07599 24.6663 4.26297 24.6663 5.50065V19.5007C24.6663 20.7383 24.1747 21.9253 23.2995 22.8005C22.4243 23.6757 21.2374 24.1673 19.9997 24.1673H5.99967C4.762 24.1673 3.57501 23.6757 2.69984 22.8005C1.82467 21.9253 1.33301 20.7383 1.33301 19.5007V5.50065Z'
                  stroke='#121F4C'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M8.91667 11.3333C10.5275 11.3333 11.8333 10.0275 11.8333 8.41667C11.8333 6.80584 10.5275 5.5 8.91667 5.5C7.30584 5.5 6 6.80584 6 8.41667C6 10.0275 7.30584 11.3333 8.91667 11.3333Z'
                  stroke='#121F4C'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M15.947 13.2245L6 24.1667H20.1552C21.3517 24.1667 22.4992 23.6914 23.3453 22.8453C24.1913 21.9992 24.6667 20.8517 24.6667 19.6552V19.5C24.6667 18.9564 24.4625 18.7475 24.095 18.345L19.3933 13.2175C19.1742 12.9785 18.9077 12.7878 18.6107 12.6575C18.3137 12.5272 17.9929 12.4603 17.6686 12.4609C17.3443 12.4616 17.0238 12.5298 16.7273 12.6613C16.4309 12.7928 16.1652 12.9846 15.947 13.2245V13.2245Z'
                  stroke='#121F4C'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </label>
            <p className='w-full break-words text-[12px] text-[#999999] mt-3'>
              This is the first image attendees will see at the top of your listing. Use a high quality image: 48x48px (1:1 ratio)
            </p>
            <div className='px-4 text-red-500 text-[12px] md:text-sm font-medium'>{errors.image?.message}</div>
          </div>

          <div className=''>
            <Button type='submit' name={" Save "} size={"w-[120px] mt-4"} loading={loading} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewSession;

// Select Components
const SelectOptions = ({ data, option, setOption, width, type, open, setOpen }) => {
  const [showSelect, setShowSelect] = useState(false);

  useEffect(() => {
    if (open != type) {
      setShowSelect(false);
    }
  }, [open, type]);

  /**This useffect ensures that all non-opened dropdowns have their showSelect boolean set to false when a different dropdown is opened. This prevents faulty toggling of the showSelect variable */

  return (
    <div className='relative mt-4'>
      <div className='flex items-center gap-x-3'>
        <div
          className={`w-[${width}] cursor-pointer h-[40px] px-2 rounded-md focus:ring-0 outline-none border-[1px] border-[#CCCCCC] border-opacity-[0.45] flex justify-between items-center text-[13px] text-gray-400`}
          onClick={() => {
            setShowSelect((prev) => !prev);
            setOpen(type);
          }}
        >
          {option?.name || "select"}
          <AiFillCaretDown
            size={20}
            color='#999999'
            onClick={() => {
              setShowSelect((prev) => !prev);
              setOpen(type);
            }}
          />
        </div>
      </div>
      {showSelect && open === type && (
        <div className='absolute cursor-pointer min-w-[200px] z-20 top-[42px] left-0 py-4 bg-white rounded-md dropdown-shadow'>
          {data.map((el, index) => (
            <div
              key={el.id}
              className='py-2 px-4 hover:bg-gray-500 hover:text-white text-[13px]'
              onClick={() => {
                setOption(el);
                setShowSelect(false);
              }}
            >
              {el.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
