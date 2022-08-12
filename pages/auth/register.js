import React, { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";
import { logo } from "../../public";
import { set, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "../../components/Auth-Components/Input";
import Button from "../../components/Auth-Components/Button";
import { BiHide, BiShow } from "react-icons/bi";
import { FcGoogle, FcInfo } from "react-icons/fc";

export default function Register() {
  const [registerData, setRegisterData] = useState({ firstName: "", lastName: "", email: "", password: "" });
  const [passwordType, setPasswordType] = useState("password");

  const [agree, setAgree] = useState(false);
  const handleCheck = () => {
    setAgree((prev) => !prev);
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const newData = { [name]: value };
    setRegisterData((prevState) => ({ ...prevState, ...newData }));
  };

  const handlePassword = () => {
    setPasswordType((prevState) => (prevState === "password" ? "text" : "password"));
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState, setValue } = useForm(formOptions);
  const { errors } = formState;

  const submitForm = () => {
    event.preventDefault();
    console.log(loginData);
    console.log(errors);
  };

  return (
    <div className='bg-[#FAFAFA] flex flex-col justify-center items-center pb-10'>
      <div className='w-[130px] h-[65px] mb-2 '>
        <img src={logo.src} alt='' className='w-full h-full object-contain' />
      </div>
      <form onSubmit={submitForm}>
        <div className=' w-[360px] py-[30px] sm:py-[40px] bg-[#FAFAFA] sm:bg-[#FAFAFA] flex flex-col justify-center items-center '>
          <div className=' w-[330px]'>
            <h3 className='text-[18px] text-[#282828]'>Sign up to get started</h3>
            <p className='text-[12px] text-[#999999]'>Take the first step in making your dream a reality</p>
          </div>

          <div className='mt-10 flex flex-row w-[330px] items-center justify-between'>
            <p className='w-[70px] border-[1px] border-opacity-40 border-[#999999]'></p>
            <p className='text-sm text-[#999999] '>or sign in with your socials</p>
            <p className='w-[70px] border-[1px] border-opacity-40 border-[#999999]'></p>
          </div>

          <div className='mt-6 flex flex-row w-[330px] items-center justify-evenly'>
            <div className=' w-[150px] rounded-[12px] bg-[#D6F5C3] h-[45px] flex flex-row justify-evenly items-center'>
              <FcGoogle size={24} className='' />
              <p className='text-[11px]'>Sign up with Google</p>
            </div>
            <div className=' w-[150px] rounded-[12px] bg-[#DBE9FF] h-[45px] flex flex-row justify-evenly items-center'>
              <FcInfo size={24} className='' />
              <p className='text-[11px]'>Sign up with Facebook</p>
            </div>
          </div>

          <div className=' flex flex-col mt-[40px]'>
            <p className='text-[#282828]'>First Name</p>
            <FormInput
              register={register}
              handleChange={handleChange}
              value={registerData.firstName}
              name='firstName'
              type='text'
              placeholder='First Name'
              required
            />
          </div>

          <div className=' flex flex-col mt-[25px]'>
            <p className='text-[#282828]'>Last Name</p>
            <FormInput
              register={register}
              handleChange={handleChange}
              value={registerData.lastName}
              name='lastName'
              type='text'
              placeholder='Last Name'
              required
            />
          </div>

          <div className=' flex flex-col mt-[25px]'>
            <p className='text-[#282828]'> Email Address</p>
            <FormInput
              register={register}
              handleChange={handleChange}
              value={registerData.email}
              name='email'
              type='email'
              placeholder='someone@gmail.com'
              required
            />
          </div>

          <div className=' flex flex-col mt-[25px]'>
            <p className='text-[#282828]'>Create password</p>
            <div className='relative'>
              <FormInput
                register={register}
                handleChange={handleChange}
                value={registerData.password}
                name='password'
                type={passwordType}
                placeholder='********'
                required
                setPasswordType={setPasswordType}
              />

              {passwordType === "password" ? (
                <BiShow size={20} color='#999999' className='absolute top-[12px] right-[10px] ' onClick={() => handlePassword()} />
              ) : (
                <BiHide size={20} color='#999999' className='absolute top-[12px] right-[10px]' onClick={() => handlePassword()} />
              )}
            </div>
          </div>

          <div className='w-[300px] flex flex-row justify-evenly mt-[10px]'>
            <input type='checkbox' value={agree} onChange={handleCheck} className='focus:text-darkBlue focus:ring-0' />
            <p className='text-[11px]'>
              I agree to the <span className='text-[11px] text-[#475F8F]'>Terms of Services</span> and{" "}
              <span className='text-[11px] text-[#475F8F]'>Privacy policy</span>
            </p>
          </div>

          <button type='submit' className='mt-6 '>
            <Button name='Sign In' />
          </button>
          <p className='text-[12px] text-[#999999] mt-[10px]'>
            Already have an account?{" "}
            <span className='text-[#475F8F]'>
              <Link href={`/auth/login`}>Login</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
