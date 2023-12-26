/* eslint-disable @next/next/no-img-element */
import { yupResolver } from "@hookform/resolvers/yup";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiHide, BiShow } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import AuthLayout from "../../components/Auth-Components/AuthLayout";
import { Button, WhiteButton } from "../../components/Auth-Components/Button";
import FormInput from "../../components/Auth-Components/Input";
import { logo } from "../../public";
import { registerUser } from "../../store/authSlice";

export default function Register() {
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [passwordType, setPasswordType] = useState("password");
  const dispatch = useDispatch();
  const router = useRouter();
  const { isLoading } = useSelector((state) => state.auth);

  const handlePassword = () => {
    setPasswordType((prevState) =>
      prevState === "password" ? "text" : "password"
    );
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Please Enter your password")
      .min(8, "Must be more than 8 characters")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must contain mixed characters, a number and a symbol"
      ),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState, setValue } = useForm(formOptions);
  const { errors } = formState;
  setTimeout(() => {}, 1000);

  const submitForm = (data) => {
    dispatch(registerUser(data));
  };

  return (
    <AuthLayout>
      <Head>
        <title>Register | Bizpotta</title>
      </Head>
      <div className='flex flex-col justify-center items-center pb-10 pt-10 h-screen overflow-auto'>
        <div className='w-[130px] h-[65px] '>
          <Link href='/'>
            <img
              src={logo.src}
              alt=''
              className='w-full h-full object-contain cursor-pointer'
            />
          </Link>{" "}
        </div>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className=' w-[360px] py-[30px] sm:py-[30px]  flex flex-col justify-center items-center '>
            <div className=' w-[330px]'>
              <h3 className='text-[18px] text-[#282828]'>
                Sign up to get started
              </h3>
              <p className='text-[12px] text-[#999999]'>
                Already have an account?{" "}
                <span className='text-[#475F8F]'>
                  <Link href={`/auth/login`}> Sign in</Link>
                </span>
              </p>
            </div>

            <div className=' flex flex-col mt-[40px]'>
              <p className='text-[#282828] text-xs mb-2'>First Name</p>
              <FormInput
                register={register}
                name='firstName'
                type='text'
                placeholder='First Name'
                required
              />
              <div className='px-2 text-red-500 text-sm font-medium'>
                {errors.firstName?.message}
              </div>
            </div>

            <div className=' flex flex-col mt-[25px]'>
              <p className='text-[#282828] text-xs mb-2'>Last Name</p>
              <FormInput
                register={register}
                value={registerData.lastName}
                name='lastName'
                type='text'
                placeholder='Last Name'
                required
              />
              <div className='px-2 text-red-500 text-sm font-medium'>
                {errors.lastName?.message}
              </div>
            </div>

            <div className=' flex flex-col mt-[25px]'>
              <p className='text-[#282828] text-xs mb-2'> Email Address</p>
              <FormInput
                register={register}
                value={registerData.email}
                name='email'
                type='email'
                placeholder='u*******@gmail.com'
                required
              />
              <div className='px-2 text-red-500 text-sm font-medium'>
                {errors.email?.message}
              </div>
            </div>

            <div className=' flex flex-col mt-[25px]'>
              <p className='text-[#282828] text-xs mb-2'>Create password</p>
              <div className='relative'>
                <FormInput
                  register={register}
                  value={registerData.password}
                  name='password'
                  type={passwordType}
                  placeholder='********'
                  required
                  setPasswordType={setPasswordType}
                />

                {passwordType === "password" ? (
                  <BiShow
                    size={20}
                    color='#999999'
                    className='absolute top-[12px] right-[10px] '
                    onClick={() => handlePassword()}
                  />
                ) : (
                  <BiHide
                    size={20}
                    color='#999999'
                    className='absolute top-[12px] right-[10px]'
                    onClick={() => handlePassword()}
                  />
                )}
              </div>
            </div>
            <div className='px-4 text-red-500 text-[12px] md:text-sm font-medium'>
              {errors.password?.message}
            </div>

            <div className='w-[300px] flex flex-row justify-start mt-[10px] font-sans gap-4'>
              <input
                required
                type='checkbox'
                className='focus:text-darkBlue focus:ring-0 rounded-sm'
              />
              <p className='text-[13px]'>
                I agree to the{" "}
                <span className='text-[11px] text-[#475F8F]'>
                  Terms of Services
                </span>{" "}
                and{" "}
                <span className='text-[11px] text-[#475F8F]'>
                  Privacy policy
                </span>
              </p>
            </div>

            <div type='submit' className='mt-6 '>
              <Button
                name='Create Account'
                type={"submit"}
                loading={isLoading}
              />
            </div>
            <div type='submit' className='mt-6 '>
              <WhiteButton
                onClick={() => {
                  console.log("pressed");
                }}
                name='Sign up with Google'
                type={"button"}
                loading={isLoading}
              />
            </div>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}

{
  /* 
            <div className='mt-6 flex flex-row w-[330px] items-center justify-between'>
              <p className='w-[70px] border-[1px] border-opacity-40 border-[#999999]'></p>
              <p className='text-sm text-[#999999] '>or sign in with your socials</p>
              <p className='w-[70px] border-[1px] border-opacity-40 border-[#999999]'></p>
            </div> */
}
{
  /* 
            <div className='mt-6 flex flex-row w-[330px] items-center justify-evenly'>
              <div className=' w-[150px] rounded-[12px] bg-[#D6F5C3] h-[45px] flex flex-row justify-evenly items-center'>
                <FcGoogle size={24} className='' />
                <p className='text-[11px]'>Sign up with Google</p>
              </div>
              <div className=' w-[150px] rounded-[12px] bg-[#DBE9FF] h-[45px] flex flex-row justify-evenly items-center'>
                <Facebook />
                <p className='text-[11px]'>Sign up with Facebook</p>
              </div>
            </div> */
}
