import { set, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlinePicture } from "react-icons/ai";
import InputForm from "./InstructorProfileComponent/InputForm";
import { Button } from "../../../components/Auth-Components/Button";
import { useSelector } from "react-redux";

const CourseLanding = ({ data, setSelect }) => {
  const { user } = useSelector((state) => state.auth);

  const [categories, setCategories] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [subCategoriesSeleted, setSubCategoriesSeleted] = React.useState();
  const [levelSeleted, setLevelSeleted] = React.useState();
  const validationSchema = Yup.object().shape({
    courseTitle: Yup.string().required("Course Title is required"),
    courseSubTitle: Yup.string().required("Course Sub Description is required"),
    courseDescription: Yup.string().required("Course Description is required"),
    coursePrice: Yup.string().required("Course Price is required"),
    language: Yup.string().required("Course Language is required"),
    category: Yup.string(),
    subCategory: Yup.string(),
    industries: Yup.string(),
    level: Yup.string().required("Course Level is required"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState, setValue } = useForm(formOptions);
  const { errors } = formState;

  const router = useRouter();
  const submitCourse = () => {
    router.query.courseId = "VALUE";
    router.push(router);
    setSelect("structure");
  };

  const onChangeCategories = (e) => {
    setCategories(e.target.value);
    setValue("category", e.target.value);
  };

  const onChangeIndustries = (e) => {
    setCategories(e.target.value);
    setValue("industries", e.target.value);
  };

  const onChangeLevel = (e) => {
    setLevelSeleted(e.target.value);
    setValue("level", e.target.value);
  };
  const onChangeSubCategories = (e) => {
    setSubCategoriesSeleted(e.target.value);
    setValue("subCategory", e.target.value);
  };

  const subCategories = data?.subCategories?.filter((item) => item.course_category_id == categories);

  const industries = data?.industries;

  const level = [
    { id: "Beginner", name: "Beginner" },
    { id: "Intermediate", name: "Intermediate" },
    { id: "Advanced", name: "Advanced" },
  ];

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

      {/* Landing Page Form */}

      <div className='px-4 md:px-10 bg-white py-8 mt-10 rounded-sm shadow-xl border'>
        <p className='font-bold'>Landing Page</p>
        <form onSubmit={handleSubmit(submitCourse)}>
          <div className='text-[13px] mt-6'>
            The following descriptions will be publicly visible on your <span className='text-seaBlue'>Landing Page</span> and will have a direct
            impact on your course performance. These descriptions will help learners decide if your course is right for them.
          </div>

          <div className=' mt-10'>
            <p className='text-[13px] font-bold'>Course Title</p>
            <p className='text-[12px]'>Give your course a clear title that will explain what the course is all about. Max of 100 words.</p>
            <div className='flex flex-row gap-x-8 mt-2'>
              <InputForm width='500px' placeholder='' type='text' register={register} InputName='courseTitle' />
            </div>
            <div className='px-4 text-red-500 text-[12px] md:text-sm font-medium'>{errors.courseTitle?.message}</div>
          </div>

          <div className=' mt-10'>
            <p className='text-[13px] font-bold'>Course Subtitle</p>
            <p className='text-[12px]'>Give your course a clear title that will explain what the course is all about. Max of 100 words.</p>
            <div className='flex flex-row gap-x-8 mt-2'>
              <InputForm width='500px' placeholder='' type='text' register={register} InputName='courseSubTitle' />
            </div>
            <div className='px-4 text-red-500 text-[12px] md:text-sm font-medium'>{errors.courseSubTitle?.message}</div>
          </div>

          {/* <div className=' mt-10'>
          <p className='text-[13px] font-bold'>Course Hastags</p>
          <p className='text-[12px]'>Give your course a clear title that will explain what the course is all about. Max of 100 words.</p>
          <div className='flex flex-row gap-x-8 mt-2'>
            <InputForm width='500px' placeholder='' type='text' />
          </div>
        </div> */}

          <div className=' mt-10'>
            <p className='text-[13px] font-bold'>Course Description</p>
            <p className='text-[12px] mt-2 '>Kindly give a detailed decription of your course. Minimum 1000 words</p>
            <textarea
              {...register("courseDescription")}
              className='w-full lg:w-[600px] min-h-[200px] bg-[#FCFDFE] focus:ring-0 focus:outline-none border rounded-md text-[#C4C4C4] pl-4 text-[14px] mt-2'
            ></textarea>
            <div className='px-4 text-red-500 text-[12px] md:text-sm font-medium'>{errors.courseDescription?.message}</div>
          </div>

          <div className=' mt-10'>
            <p className='text-[13px] font-bold'>Language</p>
            <div className='flex flex-row gap-x-8 mt-2'>
              <InputForm width='500px' placeholder='' type='text' register={register} InputName='language' />
            </div>
            <div className='px-4 text-red-500 text-[12px] md:text-sm font-medium'>{errors.language?.message}</div>
          </div>

          <div className=' mt-10'>
            <p className='text-[13px] font-bold'>Level</p>
            <div className='flex flex-row gap-x-8 mt-2'>
              <SelectForm width='500px' data={level} name='level' onChange={onChangeLevel} />
            </div>
            <div className='px-4 text-red-500 text-[12px] md:text-sm font-medium'>{errors.level?.message}</div>
          </div>
          {user?.roles_id === 4 && (
            <>
              <div className=' mt-10'>
                <p className='text-[13px] font-bold'>Course Category</p>
                <div className='flex flex-row gap-x-8 mt-2'>
                  <SelectForm width='500px' data={data?.categories} name='categories' onChange={onChangeCategories} />
                </div>
                <div className='px-4 text-red-500 text-[12px] md:text-sm font-medium'>{errors.category?.message}</div>
              </div>

              <div className=' mt-10'>
                <p className='text-[13px] font-bold'>Course SubCategory</p>
                <div className='flex flex-row gap-x-8 mt-2'>
                  <SelectForm width='500px' data={subCategories} name='subCategories' onChange={onChangeSubCategories} />
                </div>
                <div className='px-4 text-red-500 text-[12px] md:text-sm font-medium'>{errors.subCategory?.message}</div>
              </div>
            </>
          )}

          {user?.roles_id === 3 && (
            <>
              <div className=' mt-10'>
                <p className='text-[13px] font-bold'>Course Category</p>
                <div className='flex flex-row gap-x-8 mt-2'>
                  <SelectForm width='500px' data={industries} name='industries' onChange={onChangeIndustries} />
                </div>
                <div className='px-4 text-red-500 text-[12px] md:text-sm font-medium'>{errors.industries?.message}</div>
              </div>
            </>
          )}

          <div className=' mt-10'>
            <p className='text-[13px] font-bold'>Course Image</p>
            <p className='text-[12px]'>Image quality 750x422 pixel. jpg, jpeg, gif or png</p>

            <div className='h-[40px] w-full sm:w-[300px] lg:w-[500px] bg-[#FCFDFE] focus:ring-0 focus:outline-none border rounded-md text-[#C4C4C4] pl-4 text-[15px] flex flex-row items-center gap-x-4'>
              <AiOutlinePicture size={18} />
              <input type='file' name='image' className='text-[12px] ml-2 focus:ring-0 focus:outline-none' required />
            </div>
            <div className='px-4 text-red-500 text-[12px] md:text-sm font-medium'>{errors.image?.message}</div>
          </div>

          <div className=' mt-10'>
            <p className='text-[13px] font-bold'>Promotional Video</p>
            <p className='text-[12px]'>Video quality 750x422 pixel. jpg, jpeg, gif or png</p>

            <div className='h-[40px] w-full sm:w-[300px] lg:w-[500px] bg-[#FCFDFE] focus:ring-0 focus:outline-none border rounded-md text-[#C4C4C4] pl-4 text-[15px] flex flex-row items-center gap-x-4'>
              <AiOutlinePicture size={18} />
              <input type='file' name='video' className='text-[12px] ml-2 focus:ring-0 focus:outline-none' required />
            </div>
            <div className='px-4 text-red-500 text-[12px] md:text-sm font-medium'>{errors.video?.message}</div>
          </div>

          <div className='flex justify-end mt-6 cursor-pointer'>
            <Button
              className='w-[120px]  h-[45px] flex items-center justify-center bg-darkBlue text-white text-[13px] font-bold rounded-md cursor-pointer'
              type='submit'
              name={" Save changes"}
              size={"w-[120px]"}
              loading={loading}
            >
              Save changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseLanding;

function SelectForm({ type, placeholder, width, name, data, onChange }) {
  return (
    <select
      onChange={onChange}
      className={`h-[40px] w-[${width}] bg-[#FCFDFE] focus:ring-0 focus:outline-none border rounded-md text-gray-600 pl-4 text-[14px]`}
      name={name}
      required
    >
      <option value=''>Select</option>
      {data?.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
}
