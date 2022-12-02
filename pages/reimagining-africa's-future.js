// rafce

import { useState } from "react";
import { Button } from "../components/Auth-Components/Button";

const Reimagine = () => {
  const [data, setData] = useState({ name: "", email: "", city: "" });

  const handleSubmit = async () => {
    const result = await learnersService.confUsers(data);

    if (result.status === 200) {
      console.log(result);
    }
  };

  return (
    <div className='w-full flex flex-row '>
      <div className='w-full md:w-[60%] xl:w-[40%] h-full md:h-screen px-2 sm:px-4 xl:px-10 flex flex-col py-3'>
        <img src='./images/logo.png' className='w-[200px] h-[40px] mx-auto md:mx-0' />

        <p className='text-[15px] font-semibold text-center md:text-start  mt-8'>Bizpotta Global Entrepreneurship Conference 2022</p>

        <div className='hidden md:block'>
          <div className='text-[24px] font-bold uppercase mt-4'>
            <span className='text-darkBlue '>Reimagining </span>
            <span className='text-[#C78108] '>Africa’s Future:</span>
          </div>
          <div className='text-[14px] font-bold uppercase text-darkBlue mt-2'>Developing The Human Capital for exponential Growth</div>
        </div>

        <div
          className=' block md:hidden bg-no-repeat bg-contain bg-center w-full h-[200px] mt-4'
          style={{ backgroundImage: "url(./images/EventMobile.webp)" }}
        />

        <div className='text-[14px] font-bold mt-4 text-center md:text-start'>Date: 9th - 10th Dec. 2022</div>

        <form className='mt-10 w-full'>
          <p className='text-[14px] font-bold text-center md:text-start'>Register for the event today!</p>

          <div className='flex flex-col gap-y-7 mt-4'>
            <FormInput title='Full Name' type='text' name='name' setData={setData} />
            <FormInput title='Email' type='email' name='email' setData={setData} />
            <FormInput title='City' type='text' name='city' setData={setData} />
          </div>

          <div className='mt-8'>
            <Button name='Register' onClick={handleSubmit} size='w-[100px]' type='button' />
          </div>
        </form>
      </div>

      <div
        className='bg-no-repeat bg-cover bg-center w-[40%] xl:w-[60%] hidden md:block md:h-screen'
        style={{ backgroundImage: "url(./images/EventImage.webp)" }}
      />
    </div>
  );
};

export default Reimagine;

const FormInput = ({ title, name, type, setData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className=''>
      <p className='text-[13px] font-bold'>{title}</p>
      <input
        type={type}
        name={name}
        required
        className='w-full h-[40px] rounded-md focus:ring-0 focus:outline-none outline-none border border-[1px] mt-1'
        onChange={handleChange}
      />
    </div>
  );
};
