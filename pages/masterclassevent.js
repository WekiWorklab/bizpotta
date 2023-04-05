/* eslint-disable @next/next/no-img-element */
// rafce

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button } from "../components/Auth-Components/Button";
import learnersService from "../services/LearnersService";
import { MdArrowBack } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { PaystackButton } from "react-paystack";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";

const MasterClass = () => {
  const [data, setData] = useState({
    phoneNumber: "",
    email: "",
    city: "",
    eventName: "Bizpotta",
    eventNamespan: "MasterClass",
    amount: 100000,
  });
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [resCheck, SetResCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Full Name is required"),
    email: Yup.string().email().required("Email is required"),
    // phoneNumber: Yup.string().required("Phone Number is required"),
    phoneNumber: Yup.string().matches(
      /^(?:(?:\+|00)234)?[789][01]\d{8}$/,
      "Invalid phone number format eg +2348061372545"
    ),
    city: Yup.string().required("City is required"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const amount = 100000;

  const eventName = "Bizpotta";
  const eventNamespan = "MasterClass";

  const config = {
    reference: new Date().getTime().toString(),
    email: data?.email || "",
    amount: amount * 100,
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
  };

  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    if ((reference.status = "success")) {
      axios
        .post("/api/myendpoint", {
          ...data,
          name,
          reference,
         
          
        })
        .then(function (response) {
          console.log(response, data, name);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "Pay Now",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

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

  function addCommasToNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submitForm = async (data) => {
    console.log(data);

    
  };

  return (
    <div className="w-full flex flex-row ">
      <div className="w-full lg:w-[60%] xl:w-[40%] h-full md:h-screen px-2 sm:px-4 xl:px-10 flex flex-col py-3">
        <img
          src="./images/logo.png"
          className="w-[200px] h-[40px] mx-auto md:mx-0"
        />

        <p className="text-[15px] font-semibold text-center md:text-start  mt-8">
          Bizpotta Global Entrepreneurship Master Class
        </p>

        <div className="hidden md:block">
          <div className="text-6xl font-bold uppercase mt-4">
            <div name="eventName" value={eventName} className="text-darkBlue ">
              {eventName}
            </div>
            <span
              name="eventNamespan"
              value={eventNamespan}
              className="text-[#C78108] "
            >
              {eventNamespan}:
            </span>
          </div>

          {!open ? (
            <div className="flex">
              <div className="pt-10 flex justify-start pb-8">
                <div className="text-[14px] font-bold uppercase text-darkBlue mt-2 ">
                  <div
                    className="bg-[#00f806]  text-darkBlue px-2"
                    style={{ transform: "rotate(4.7100rad)" }}
                  >
                    Theme:
                  </div>
                </div>
              </div>

              <div className="pt-8 font-extrabold text-xl text-darkBlue">
                <span>ACHIEVING EXPONENTIAL GROWTH </span>
                <span>AND BUSINESS SUSTAINABILITY</span>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        {/* <img
         src="./images/masterClass.jpg"
          className="  mx-auto md:mx-0"
        /> */}

        {!open ? (
          <div
            className=" block md:hidden bg-no-repeat bg-contain bg-center w-full h-[200px] mt-4"
            style={{ backgroundImage: "url(./images/eventimg.jpg)" }}
          />
        ) : (
          ""
        )}

        <div className="text-[14px] font-bold mt-4 text-center md:text-start">
          Date: 30th - 31th March 2023
        </div>

        {resCheck ? (
          <div className="mt-14 w-full  flex flex-col gap-y-8">
            <div className="text-[30px] text-grad font-bold w-full text-center">
              Thank you for registering
            </div>
            <div className="font-bold text-grad text-[24px] w-full text-center ">
              Check your email for a link to join the conference
            </div>
          </div>
        ) : (
          <form className="mt-10 w-full" onSubmit={handleSubmit(submitForm)}>
            {open ? (
              <div>
                <div className="flex justify-center text-center">
                  <div className="card w-96 h-50% bg-[#c1eac2]  shadow-xl">
                    <div className="card-body text-center">
                      <MdArrowBack size={18} onClick={() => setOpen(false)} />
                      <div className="flex justify-center pt-8">
                        <h2 className="card-title text-darkBlue">
                          Payment Method
                        </h2>
                      </div>
                      <p>Amount</p>
                      <div className="text-6xl py-8 text-darkBlue">
                        ₦{addCommasToNumber(amount)}
                      </div>
                      {/* <div className="card-actions justify-center pb-8">
                        <button className="btn btn-success btn-outline ">
                          Pay Now
                        </button>
                      </div> */}
                      <PaystackButton
                        className="items-center justify-center rounded-md border border-transparent bg-darkBlue  py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 "
                        type="submit"
                        {...componentProps}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <p className="text-[14px] font-bold text-center md:text-start">
                  Register for the event today!
                </p>

                <div className="flex flex-col gap-y-7 mt-4">
                  <div className="">
                    <p className="text-[13px] font-bold">Full Name</p>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      // setData={setData}
                      {...register("name")}
                      required
                      className="w-full h-[40px] rounded-md focus:ring-0 focus:outline-none outline-none border-[1px] mt-1"
                      onChange={(e) => handleNameChange(e)}
                    />
                    <p className="text-[13px] font-bold text-red-400">
                      {nameError}
                    </p>
                  </div>

                  <div className="">
                    <p className="text-[13px] font-bold">Email</p>
                    <input
                      type="text"
                      name="email"
                      value={data.email}
                      // setData={setData}
                      {...register("email")}
                      required
                      className="w-full h-[40px] rounded-md focus:ring-0 focus:outline-none outline-none border-[1px] mt-1"
                      onChange={handleChange}
                    />
                    <p className="text-[13px] font-bold text-red-400">
                      {errors.email?.message}
                    </p>
                  </div>

                  <div className="">
                    <p className="text-[13px] font-bold">Phone Number</p>
                    <input
                      type="text"
                      name="phoneNumber"
                      value={data.phoneNumber}
                      // setData={setData}
                      {...register("phoneNumber")}
                      required
                      className="w-full h-[40px] rounded-md focus:ring-0 focus:outline-none outline-none border-[1px] mt-1"
                      onChange={handleChange}
                    />
                    <p className="text-[13px] font-bold text-red-400">
                      {errors.phoneNumber?.message}
                    </p>
                  </div>

                  <div className="">
                    <p className="text-[13px] font-bold">City</p>
                    <input
                      type="text"
                      name="city"
                      red
                      value={data.city}
                      setData={setData}
                      {...register("city")}
                      requi
                      className="w-full h-[40px] rounded-md focus:ring-0 focus:outline-none outline-none border-[1px] mt-1"
                      onChange={handleChange}
                    />
                    <p className="text-[13px] font-bold text-red-400">
                      {errors.city?.message}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <Button
                    name="Continue"
                    size="w-[100px]"
                    // onClick={() => {
                    //   if (
                    //     !data.name ||
                    //     !data.phoneNumber ||
                    //     !data.city ||
                    //     !data.email ||
                    //     !data.amount
                    //   ) {
                    //     console.log(data);
                    //     alert("Please fill in all required fields.");
                    //   } else {
                    //     setOpen(true);
                    //   }
                    // }}
                    onClick={() => {
                      setOpen(true);
                    }}
                  />
                </div>
              </>
            )}
          </form>
        )}
      </div>
      <div
        className="bg-no-repeat bg-contain right w-[40%] xl:w-[60%] hidden lg:block  "
        style={{ backgroundImage: "url(./images/eventimgg.jpg)" }}
      />

      {/* <div className="w-[40%]  ">
          <img src="./images/eventimgg.jpg" alt="" className="imagePosition" />
        </div> */}
    </div>
  );
};

export default MasterClass;

const FormInput = ({
  title,
  name,
  type,
  setData,
  value,
  register,
  handleChange,
}) => {
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setData((prev) => ({ ...prev, [name]: value }));
  // };

  return (
    <div className="">
      <p className="text-[13px] font-bold">{title}</p>
      <input
        type={type}
        name={name}
        value={value}
        setData={setData}
        register={register}
        onChange={(e) => handleChange(e)}
        required
        className="w-full h-[40px] rounded-md focus:ring-0 focus:outline-none outline-none border-[1px] mt-1"
        // onChange={handleChange}
      />
    </div>
  );
};
