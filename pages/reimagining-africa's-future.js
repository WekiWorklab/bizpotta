/* eslint-disable @next/next/no-img-element */
// rafce

import { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "../components/Auth-Components/Button";
import learnersService from "../services/LearnersService";

const Reimagine = () => {
  const [data, setData] = useState({ email: "", city: "" });
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [resCheck, SetResCheck] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleNameChange = (e) => {
    let { name, value } = e.target;

    let fullnameArr = value.split(" ");
    if (fullnameArr.length > 2) {
      setNameError("Please enter only first name and last name");
      setName(value);
    } else if (fullnameArr.length < 2) {
      setNameError("Please enter both first name and last name");
      setName(value);
    } else {
      setName(value);
      setNameError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (nameError != "") return;
    let newData = { name: name, email: data.email, city: data.city };
    setLoading(true);
    const result = await learnersService.confUsers(newData).catch((err) => {
      toast.error(err.response.data.message);
    });

    if (result?.status === 200) {
      toast.success("Thank you for your submission");
      setData({ name: "", email: "", city: "" });
      setLoading(false);
      SetResCheck(true);
    }

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  return (
    <div className='w-full flex flex-row '>
      <div className='w-full md:w-[60%] xl:w-[40%] h-full md:h-screen px-2 sm:px-4 xl:px-10 flex flex-col py-3'>
        <img
          src='./images/logo.png'
          className='w-[200px] h-[40px] mx-auto md:mx-0'
          alt='logo'
        />

        <p className='text-[15px] font-semibold text-center md:text-start  mt-8'>
          Bizpotta Global Entrepreneurship Conference 2022
        </p>

        <div className='hidden md:block'>
          <div className='text-[24px] font-bold uppercase mt-4'>
            <span className='text-darkBlue '>Reimagining </span>
            <span className='text-[#C78108] '>Africa’s Future:</span>
          </div>
          <div className='text-[14px] font-bold uppercase text-darkBlue mt-2'>
            Developing The Human Capital for exponential Growth
          </div>
        </div>

        <div
          className=' block md:hidden bg-no-repeat bg-contain bg-center w-full h-[200px] mt-4'
          style={{ backgroundImage: "url(./images/EventMobile.webp)" }}
        />

        <div className='text-[14px] font-bold mt-4 text-center md:text-start'>
          Date: 9th - 10th Dec. 2022
        </div>

        {resCheck ? (
          <div className='mt-14 w-full  flex flex-col gap-y-8'>
            <div className='text-[30px] text-grad font-bold w-full text-center'>
              Thank you for registering
            </div>
            <div className='font-bold text-grad text-[24px] w-full text-center '>
              Check your email for a link to join the conference
            </div>
          </div>
        ) : (
          <form className='mt-10 w-full' onSubmit={(e) => handleSubmit(e)}>
            <p className='text-[14px] font-bold text-center md:text-start'>
              Register for the event today!
            </p>

            <div className='flex flex-col gap-y-7 mt-4'>
              <div className=''>
                <p className='text-[13px] font-bold'>Full Name</p>
                <input
                  type='text'
                  name='name'
                  value={name}
                  required
                  className='w-full h-[40px] rounded-md focus:ring-0 focus:outline-none outline-none border-[1px] mt-1'
                  onChange={(e) => handleNameChange(e)}
                />
                <p className='text-[13px] font-bold text-red-400'>
                  {nameError}
                </p>
              </div>

              <FormInput
                title='Email'
                type='email'
                name='email'
                setData={setData}
                value={data.email}
              />
              <FormInput
                title='City'
                type='text'
                name='city'
                setData={setData}
                value={data.city}
              />
            </div>

            <div className='mt-8'>
              <Button
                name='Register'
                loading={loading}
                size='w-[100px]'
                type='submit'
              />
            </div>
          </form>
        )}
      </div>

      <div
        className='bg-no-repeat bg-cover bg-center w-[40%] xl:w-[60%] hidden md:block md:h-screen'
        style={{ backgroundImage: "url(./images/EventImage.webp)" }}
      />
    </div>
  );
};

export default Reimagine;

const FormInput = ({ title, name, type, setData, value }) => {
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
        value={value}
        required
        className='w-full h-[40px] rounded-md focus:ring-0 focus:outline-none outline-none border-[1px] mt-1'
        onChange={handleChange}
      />
    </div>
  );
};
