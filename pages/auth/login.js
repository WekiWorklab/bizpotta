/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
//
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { BiHide, BiShow } from "react-icons/bi";
import { yupResolver } from "@hookform/resolvers/yup";
import { FcGoogle, FcInfo } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
//
import { logo } from "../../public";
import FormInput from "../../components/Auth-Components/Input";
import { Button, WhiteButton } from "../../components/Auth-Components/Button";
import { login, reset } from "../../store/authSlice";

import { Facebook } from "../../public";
import AuthLayout from "../../components/Auth-Components/AuthLayout";
import Head from "next/head";

export default function Login() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [passwordType, setPasswordType] = useState("password");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const newData = { [name]: value };
    setLoginData((prevState) => ({ ...prevState, ...newData }));
  };
  const { isLoading } = useSelector((state) => state.auth);

  const handlePassword = () => {
    setPasswordType((prevState) =>
      prevState === "password" ? "text" : "password"
    );
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Please Enter your password"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const submitForm = (data) => {
    dispatch(login(data));
  };

  return (
    <AuthLayout>
      <Head>
        <title>Login | Bizpotta</title>
      </Head>

      <div className=" h-[100vh] flex flex-col justify-center items-center">
        <div className="w-[130px]  h-[65px] mb-2 ">
          <Link href="/">
            <img
              src={logo.src}
              alt=""
              className="w-full h-full object-contain cursor-pointer "
            />
          </Link>
        </div>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className=" w-[360px] py-[30px] sm:py-[40px] bg-[#FAFAFA] sm:bg-white flex flex-col justify-center items-center ">
            <div className=" w-[330px]">
              <h3 className="text-[18px] text-[#282828]">
                Sign into your account
              </h3>
              <p className="text-[12px] text-[#999999] mt-[10px]">
                Don&apos;t have an account?{" "}
                <span className="text-[#475F8F]">
                  <Link href={`/auth/register`}>Sign up</Link>
                </span>
              </p>{" "}
            </div>

            <div className=" flex flex-col mt-[20px]">
              <p className="text-[#282828]"> Email Address</p>
              <FormInput
                register={register}
                handleChange={handleChange}
                value={loginData.email}
                name="email"
                type="email"
                placeholder="someone@gmail.com"
                required
              />
            </div>

            <div className=" flex flex-col mt-[25px]">
              <p className="text-[#282828]">Password</p>
              <div className="relative">
                <FormInput
                  register={register}
                  handleChange={handleChange}
                  value={loginData.password}
                  name="password"
                  type={passwordType}
                  placeholder="********"
                  required
                  setPasswordType={setPasswordType}
                />

                {passwordType === "password" ? (
                  <BiShow
                    size={20}
                    color="#999999"
                    className="absolute top-[12px] right-[10px] "
                    onClick={() => handlePassword()}
                  />
                ) : (
                  <BiHide
                    size={20}
                    color="#999999"
                    className="absolute top-[12px] right-[10px]"
                    onClick={() => handlePassword()}
                  />
                )}
              </div>
            </div>

            <p className="text-xs text-[#999999] mt-4 ml-[55%]">
              Forgot password
            </p>

            <button type="submit" className="mt-6 ">
              <Button name="Sign In" type={"submit"} loading={isLoading} />
            </button>

            <div type="submit" className="mt-6 ">
              <WhiteButton
                onClick={() => {
                  console.log("pressed");
                }}
                name="Sign up with Google"
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
