/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { usePaystackPayment } from "react-paystack";

import { useQuery } from "@tanstack/react-query";
import studentService from "../../services/StudentService";
import useCourse from "../../hooks/useCourse";

const Content = () => {
  const [cartItems, setCartItems] = useState([]);
  const [Data, setData] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    cart && setCartItems(cart);
  }, []);

  return (
    <div className="relative w-full h-full bg-white  flex flex-col mt-[90px] md:mt-[120px]  md:translate-x-[200px] md:w-[calc(100%-200px)] px-10 py-10">
      <div className="text-md font-bold">Shopping Cart</div>

      <div className="flex flex-col lg:flex-row mt-8 justify-between xl:pr-4">
        <div className="flex-col gap-y-4">
          {cartItems?.map((el, index) => (
            <CourseCard
              key={index}
              id={el}
              cartItems={cartItems}
              setCartItems={setCartItems}
              setData={setData}
            />
          ))}
        </div>

        <CouponCard cartItems={cartItems} Data={Data} />
      </div>
    </div>
  );
};

export default Content;

const CourseCard = ({ id, setCartItems, Data, setData }) => {
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
    // update state if course id isn't in cart
    setData((prev) => [...prev, res.data]);
    return res?.data;
  };

  const { data, loading } = useQuery([`cartItem-${id}`], getCourseById, {
    staleTime: 60 * 1000 * 10,
    retry: 2,
  });

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
          {/* <div>{id}</div> */}
          <p className="text-[12px] text-gray-400">Price: ₦{data?.price}</p>
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

const CouponCard = ({ cartItems, Data }) => {
  const [total, setTotal] = useState(0);
  const { purchaseCourse, purchasedCourse, purchaseCourseFailed } = useCourse();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => state.auth);
  const config = {
    reference: `course-purchase${new Date().getTime().toString()}`,
    email: user?.email,
    amount: total * 100,
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
  };
  const initializePayment = usePaystackPayment(config);
  const [coupon, setCoupon] = useState("");
  console.log(Data);

  // get total price
  useEffect(() => {
    let total = 0;
    cartItems?.map((el) => {
      const course = Data.find((course) => course.id == el);
      total += Number(course?.price);
    });

    setTotal(total);

    console.log(total);
  }, [Data, cartItems]);

  const handleMakePayment = () => {
    setLoading(true);

    let data = {
      courses: cartItems,
      total_amount: total,
      reference: config.reference,
    };

    purchaseCourse(data, setLoading).then((res) => {
      initializePayment(onSuccess, onClose);
    });
  };

  const onSuccess = (reference) => {
    purchasedCourse(reference, setLoading).then((res) => {
      // remove cart items from local storage
      localStorage.removeItem("cart");
      // redirect to dashboard ////////////////////
      router.push("/students/courses/vocational");
    });
  };

  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    let data = {
      reference: config.reference,
    };
    purchaseCourseFailed(data, setLoading).finally(() => {
      setLoading(false);
    });
  };

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
        {/* <div className="text-[11px]">10% discount</div> */}
      </div>

      <div className="text-[12px] mt-4">₦{Number(total).toLocaleString()}</div>

      <div className="centerFlex mt-6">
        <button
          onClick={() => {
            handleMakePayment();
          }}
          className="w-[120px] h-[35px] centerFlex text-[13px] rounded-md bg-bizpotta-green hover:bg-bizpotta-green-500 "
        >
          Continue
        </button>
      </div>
    </div>
  );
};
