/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import { logo } from "../public";
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

  const router = useRouter();

  const handleBlur = () => {
    setShowSearch(false);
    setShowHover(false);
  };

  const imgUrl = user?.image || `https://ui-avatars.com/api/?name=${user?.firstName + " " + user?.lastName}&background=${"121F4C"}&color=${"ffffff"}`;

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

    // setShowSearch(false)
  };

  const handleMouseOut = () => {
    setShowHover(false);
    // setShowSearch(false)
  };

  /*
    Be sure to change onFocus with an onChange event when onChange is implemented
     */

  return (
    <div className='fixed w-full z-20 h-[90px] md:h-[120px] bg-white flex flex-row justify-between items-center px-4 lg:px-8'>
      {/* Logo */}
      <div className='flex flex-row justify-start items-center '>
        <div className='h-8 w-[120px] sm:w-[200px] sm:h-10 flex flex-row justify-center items-center cursor-pointer' onClick={() => router.push("/")}>
          <img src={logo.src} alt='' className='object-cover' />
        </div>

        <BsChevronDown className='hidden md:block text-sm text-[#999999] font-light ml-2' />
      </div>

      {/* Large Screen Search */}
      <div className='hidden md:flex flex-row h-[40px] justify-start '>
        <input
          className='w-[160px] ml-2 sm:w-[200px] md:w-[350px] outline-none md:pl-6 text-xs sm:text-sm md:text-[14px] border-2 rounded-l-md border-r-0'
          placeholder='What do you want to learn'
          onBlur={handleBlur}
          onFocus={handleFocus}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />

        <div className=' w-[55px] h-full border  rounded-r-md bg-gradient-to-r from-[#121F4C] via-[#0E4858]  to-[#0B6C64] flex justify-center items-center'>
          <FiSearch className='text-white text-2xl' />
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
      <div className=' hidden md:flex flex-row  w-[100px] md:w-[280px] justify-evenly items-center'>
        <AiOutlineShoppingCart className=' text-darkBlue text-2xl' />
        <IoNotificationsOutline className='text-darkBlue text-2xl' />
        <img src={imgUrl} className=' h-9 w-9 rounded-full' alt='user_image' />
        <div className='hidden sm:flex flex-col'>
          <p className='text-sm'>{user?.firstName}</p>
          <p className='text-xs'>
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
        <div className='flex flex-row  w-[120px] justify-between items-center md:hidden'>
          {/* Search Icon for small screens */}
          <BiSearchAlt size={20} color='#121F4C' className='block' />

          <AiOutlineShoppingCart size={20} className='text-darkBlue' />

          <IoNotificationsOutline size={20} className='text-darkBlue ' />

          <IoMenuOutline
            size={20}
            color='#121F4C'
            className='md:ml-[10px] hover:cursor-pointer md:hidden'
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
