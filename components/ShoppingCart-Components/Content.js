import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { offer } from "../../public";
import ContentCarousel from "../Content-Components/ContentCarousel";
import { Data, instructorData } from "../Content-Components/Data";
import InstructorCarousel from "../Content-Components/InstructorCarousel";
import { useRouter } from "next/router";

import { useQuery } from "@tanstack/react-query";
// import studentService from "../../../../services/StudentService";
import studentService from "../../services/StudentService";

const Content = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    cart && setCartItems(cart);
  }, []);

  return (
    <div className="relative w-full h-full bg-white  flex flex-col mt-[90px] md:mt-[120px]  md:translate-x-[200px] md:w-[calc(100%-200px)] px-2 py-10">
      <div className="text-md font-bold">Shopping Cart</div>

      <div className="flex flex-col lg:flex-row mt-8 justify-between xl:pr-4">
        <div className="flex-col gap-y-4">
          {cartItems?.map((el, index) => (
            <CourseCard
              key={index}
              id={el}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          ))}
        </div>

        <CouponCard />
      </div>
    </div>
  );
};

export default Content;

const CourseCard = ({ id, setCartItems }) => {
  const router = useRouter();
  console.log(id);

  const RemoveItem = (ID) => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const newCart = cart.filter((el) => el != ID);
    localStorage.setItem("cart", JSON.stringify([...newCart]));

    setCartItems(newCart);
  };

  const getCourseById = async () => {
    const res = await studentService.getCourse(id);
    console.log(res?.data);
    return res?.data;
  };


  const { data, loading } = useQuery([`cartItem-${id}`], getCourseById, { staleTime: 60 * 1000 * 10, retry: 2 });

  return (
    <div className="w-full lg:w-[570px] sm:h-[140px] bg-white dropdown-shadow flex flex-col items-center py-3 sm:py-0 sm:flex-row justify-between px-10 sm:px-4 mb-8">
      <div className="flex flex-col sm:flex-row items-center gap-y-2  sm:gap-x-4 ">

      <div className="h-full flex items-center justify-start">
        <img
          src={data?.image}
          alt=""
          className="min-w-[85px] min-h-[85px] max-w-[85px] max-h-[85px] rounded-full "
        />
      </div>
      <div className="flex flex-col items-center sm:items-start justify-center  w-[350px]">
        <p className="text-[14px] font-bold">{data?.name}</p>
        <p className="text-[11px] text-center sm:text-left text-gray-400 ">
          By Introduction to Hydroponics 
        </p>
        <div>{id}</div>
        <p className="text-[12px] text-gray-400">Price: ${data?.price}</p>
        <div className="text-[12px] text-gray-400 flex flex-row items-center">
          <p className="mr-2"> Rating. 4.7</p>
          <AiFillStar size={14} color="#FFC700" />
          <AiFillStar size={14} color="#FFC700" />
          <AiFillStar size={14} color="#FFC700" />
          <AiFillStar size={14} color="#FFC700" />
          <AiFillStar size={14} color="#FFC700" />
        </div>
      </div>
      </div>


      <div className="text-[13px]  flex flex-col ">
        <div
          className=" border-[1px] border-red-400  text-center cursor-pointer p-2 rounded-md hover:text-white hover:border-0 hover:bg-red-500 mt-3 sm:mt-0"
          onClick={() => RemoveItem(id)}
        >
          Remove
        </div>
      </div>
    </div>
  );
};

const CouponCard = () => {
  return (
    <div className="w-[300px] h-[350px] border shadow-lg bg-white px-5 py-10">
      <p className="text-[14px] font-semibold">Apply Coupon</p>

      <div className="w-full h-[35px] border rounded-md flex pl-2 mt-6">
        <input className="w-[80%] h-full outline-none text-[13px] " />
        <div className="w-[20%] bg-darkBlue centerFlex text-[12px] rounded-r-md text-white ">
          Apply
        </div>
      </div>

      <div className="w-full flex justify-between items-center mt-16">
        <div className="text-[14px] font-semibold">Total</div>
        <div className="text-[11px]">10% discount</div>
      </div>

      <div className="text-[12px] mt-4">#10000</div>

      <div className="centerFlex mt-6">
        <div className="w-[120px] h-[35px] centerFlex text-[13px] rounded-md bg-bizpotta-green">
          Continue
        </div>
      </div>
    </div>
  );
};
