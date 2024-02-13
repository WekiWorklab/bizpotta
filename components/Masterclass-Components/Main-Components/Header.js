import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { logo } from "../../../public";

import { AiOutlineDown } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";

const Header = ({ show, setShow, slideIn, setSlideIn }) => {
  const router = useRouter();
  const [url, setUrl] = useState();
  const [programDrop, setProgramDrop] = useState(false);

  useEffect(() => {
    setUrl(router.asPath);
  }, [router]);

  // console.log(router.asPath)

  return (
    <div className='relative w-full h-[130px] flex flex-row items-center justify-between px-4 xl:px-16'>
      {/* Logo Section */}
      <div
        className='flex items-center cursor-pointer'
        onClick={() => router.push("/")}>
        <img src={logo.src} className=' max-w-[200px] mr-1' alt='' />
        <AiOutlineDown />
      </div>

      {/* <div> */}
      {!show && (
        <BiMenu
          color='#121F4C'
          className='block lg:hidden text-3xl md:text-4xl'
          onClick={() => {
            setShow(true);
            setSlideIn(true);
          }}
        />
      )}
      {/* </div> */}

      <div className='hidden lg:flex flex-row items-center gap-x-6'>
        <div className='flex flex-row items-center gap-x-1 text-darkBlue'>
          <p className='text-darkBlue font-medium text-[16px] lg:text-[18px]'>
            Programs
          </p>
          <AiOutlineDown
            color='#B1B1B1'
            onClick={() => {
              setProgramDrop((prev) => !prev);
            }}
          />
          {programDrop && (
            <div className=' absolute top-20 min-w-[220px] max-w-[250px] px-5 py-8 bg-[#FEFEFE] rounded-lg flex flex-col text-[14px] gap-y-5'>
              {url !== "/masterclass" && (
                <p
                  className='cursor-pointer hover:text-bizpotta-green-500 hover:font-bold'
                  onClick={() => router.push("/masterclass")}>
                  Masterclass Program
                </p>
              )}
              {url !== "/specialization" && (
                <p className='cursor-pointer hover:text-bizpotta-green-500 hover:font-bold'>
                  Specialization Program
                </p>
              )}
              {url !== "/" && (
                <p
                  className='cursor-pointer hover:text-bizpotta-green-500 hover:font-bold'
                  onClick={() => router.push("/")}>
                  Vocational Education Program
                </p>
              )}
            </div>
          )}
        </div>
        <Link href='/become-a-partner'>
          <div className='text-darkBlue font-medium text-[16px] lg:text-[18px] cursor-pointer'>
            Become a Partner
          </div>
        </Link>
        {/* <Link href='/become-a-tutor'>
          <div className='text-darkBlue font-medium text-[16px] lg:text-[18px] cursor-pointer'>
            Become a Tutor
          </div>
        </Link> */}
        <div className='border h-[35px] w-[0.5px]'></div>
        <Link href='/auth/login'>
          <a className='text-darkBlue font-medium text-[16px] lg:text-[18px]'>
            Login
          </a>
        </Link>
        <Link href='/auth/register'>
          <a className='w-[160px] h-[50px] rounded-md  bg-darkBlue centerFlex text-white font-medium text-[16px] lg:text-[18px]'>
            Join for free
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;

const CategoryDropdown = () => {
  const categories = [
    { tag: "arts", title: "Arts & Entertainment" },
    { tag: "usiness", title: "Business" },
    { tag: "community", title: "Community & Government" },
    { tag: "design", title: "Design and Style" },
    { tag: "food", title: "Food" },
    { tag: "home", title: "Home & Lifestyle" },
    { tag: "music", title: "Music" },
    { tag: "tech", title: "Science and Technology" },
    { tag: "sports", title: "Sports and Gaming" },
    { tag: "fitness", title: "Wellness and Fitness" },
    { tag: "writing", title: "Writing" },
  ];

  return (
    <div className='w-[250px] py-4 px-4 bg-white shadow-lg absolute top-8 left-0 z-10 font-normal rounded-md'>
      {categories.map((el, index) => (
        <p
          key={index}
          className='w-full h-[40px] text-[15px] font-semibold flex items-center'>
          {el.title}
        </p>
      ))}
    </div>
  );
};

const SearchDropdown = () => {
  return (
    <div className='absolute top-8 left-0 w-[250px] bg-gray-300 flex-col py-2 px-3 rounded-md z-20'>
      <p className='text-[11px] text-gray-700 '>
        Search course, instructor, category
      </p>
      <div className='flex flex-row items-center justify-between '>
        <input className='outline-none w-[200px] bg-transparent h-[30px] text-[13px]' />
        <FiSearch className='ml-1' size={10} />
      </div>
    </div>
  );
};
