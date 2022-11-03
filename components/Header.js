/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import { logo, specialization } from "../public";
import { FiSearch } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { card_image } from "../public";
import { BsChevronDown } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { IoMenuOutline } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import SearchMenu from "./Header-Components/SearchMenu";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Header = ({ show, setShow, setSlideIn }) => {
  const { user } = useSelector((state) => state.auth);
  const [showHover, setShowHover] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const [showCart, setShowCart] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const router = useRouter();
  // console.log(user)

  const handleBlur = () => {
    setShowSearch(false);
    setShowHover(false);
  };

  const imgUrl =
    user?.image ||
    `https://ui-avatars.com/api/?name=${
      user?.firstName + " " + user?.lastName
    }&background=${"121F4C"}&color=${"ffffff"}`;

  const handleFocus = () => {
    setShowSearch(true);
    setShowHover(false);
  };

  const handleMouseOver = () => {
    if (showSearch === true) {
      return;
    } else {
      setShowHover(true);
    }
  };

  const handleMouseOut = () => {
    setShowHover(false);
  };

  const cartArr = new Array(3).fill("");

  const toggleCart = () => {
    setShowCart((prev) => !prev);
    setShowNotifications(false);
  };

  const toggleNotifications = () => {
    setShowNotifications((prev) => !prev);
    setShowCart(false);
  };

  /*
    Be sure to change onFocus with an onChange event when onChange is implemented
     */

  return (
    <div className="fixed w-full z-20 h-[90px] md:h-[120px] bg-white flex flex-row justify-between items-center px-4 lg:px-8">
      {/* Logo */}
      <div className="flex flex-row justify-start items-center ">
        <div
          className="h-8 w-[150px] lg:w-[200px] sm:h-10 flex flex-row justify-center items-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <img src={logo.src} alt="" className="object-cover" />
        </div>

        <BsChevronDown className="hidden md:block text-sm text-[#999999] font-light ml-2" />
      </div>

      {/* Large Screen Search */}
      <div className="hidden md:flex flex-row h-[40px] justify-start ">
        <input
          className="w-[160px] ml-2 sm:w-[200px] md:w-[350px] outline-none md:pl-6 text-xs sm:text-sm md:text-[14px] border-2 rounded-l-md border-r-0"
          placeholder="What do you want to learn"
          onBlur={handleBlur}
          onFocus={handleFocus}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />

        <div className=" w-[55px] h-full border  rounded-r-md bg-gradient-to-r from-[#121F4C] via-[#0E4858]  to-[#0B6C64] flex justify-center items-center">
          <FiSearch className="text-white text-2xl" />
        </div>
        <SearchMenu
          showHover={showHover}
          showSearch={showSearch}
          handleMouseOver={handleMouseOver}
          handleMouseOut={handleMouseOut}
          handleBlur={handleBlur}
        />
      </div>

      {/* Accounts info, carts and notification icons */}
      <div className=" hidden md:flex flex-row  w-[100px] md:w-[280px] justify-evenly items-center">
        <div className="relative">
          <AiOutlineShoppingCart
            className=" text-darkBlue text-2xl cursor-pointer"
            onClick={() => toggleCart()}
          />
          {showCart ? (
            <div className="absolute top-[40px] left-[-250px] lg:left-[-80px] w-[340px] py-6 dashboard-card-shadow bg-[#FFFFFF]">
              <p className="text-darkBlue text-[17px] font-bold ml-4 mb-4">
                Cart
              </p>
              <div className="w-full ">
                {cartArr.map((el, index) => (
                  <div
                    key={index}
                    className="w-full border-b-[1px] border-[#FAFAFA] px-4 py-3 flex items-center gap-x-3 cursor-pointer "
                  >
                    <img
                      src={specialization.src}
                      className="w-[30px] h-[30px] rounded-full "
                    />
                    <div>
                      <p className="text-[13px] break-words">
                        Introduction to Hydroponics{" "}
                      </p>
                      <p className="text-[#808080] text-[11px]">
                        By Adam Peter
                      </p>
                    </div>
                    <p className="text-[12px]">$5,000</p>
                    <p
                      className="text-[11px] text-[#FF0000] cursor-pointer"
                      onClick={() => {}}
                    >
                      Remove
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-right px-4 font-bold text-[15px] mt-4">
                Total: $15,000
              </div>

              <div className="flex justify-center">
                <div
                  className="font-medium text-[14px] hover:bg-opacity-70 text-white px-3 py-2 bg-darkBlue mt-3 rounded-md cursor-pointer"
                  onClick={() => router.push("/students/cart")}
                >
                  Continue
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <IoNotificationsOutline className="text-darkBlue text-2xl" />
        <img src={imgUrl} className=" h-9 w-9 rounded-full" alt="user_image" />
        <div className="hidden sm:flex flex-col">
          <p className="text-sm">{user?.firstName}</p>
          <p className="text-xs">
            {user?.roles_id == 2
              ? "Student"
              : user?.roles_id == 4
              ? "Tutor"
              : user?.roles_id == 3
              ? "Mentor"
              : user?.roles_id == 5
              ? "Instituion Admin"
              : "User"}
          </p>
        </div>
      </div>

      {/* Sidebar toogle icons */}
      {!show ? (
        <div className="flex flex-row  w-[120px] justify-between items-center md:hidden">
          {/* Search Icon for small screens */}
          <BiSearchAlt size={20} color="#121F4C" className="block" />

          <div className="relative ">
            <AiOutlineShoppingCart size={20} className="text-darkBlue" />
          </div>

          <IoNotificationsOutline size={20} className="text-darkBlue " />

          <IoMenuOutline
            size={20}
            color="#121F4C"
            className="md:ml-[10px] hover:cursor-pointer md:hidden"
            onClick={() => {
              setShow(true);
              setSlideIn(true);
            }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Header;
