import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const ClassCards = () => {
  const router = useRouter();
  const [pathName, setPathName] = useState("");

  useEffect(() => {
    setPathName(router.asPath);
    // console.log("router " + router.asPath)
  });

  return (
    <div className='hidden md:grid md:grid-cols-2 lg:grid-cols-3 flex-row items-center flex-wrap w-full xl:w-[80%] justify-between pl-0 mt-4'>
      <div
        className={`w-[260px] ${
          pathName === "/students/courses/vocational"
            ? "bg-[#5FFC54]"
            : "bg-[#2ABB1A]"
        }  h-[125px] rounded-lg flex items-center text-sm pl-5 mb-8 cursor-pointer`}
        onClick={() => router.push("/students/courses/vocational")}>
        VOCATIONAL EDUCATION
        <svg viewBox='-37 55 110 150' xmlns='http://www.w3.org/2000/svg'>
          <path
            fill='#FDBC64'
            d='M41,-35.9C47.5,-24.6,43.1,-7.9,41.7,13.9C40.2,35.7,41.6,62.6,28.8,74.2C16.1,85.9,-10.9,82.3,-33.7,70.9C-56.4,59.6,-74.9,40.4,-71.1,25.3C-67.3,10.1,-41.4,-1.1,-25.8,-14.4C-10.3,-27.7,-5.1,-43.2,6.1,-48C17.3,-52.9,34.6,-47.1,41,-35.9Z'
            transform='translate(100 100)'
          />
        </svg>
      </div>
      <div className='w-[260px] bg-[#2ABB1A] h-[125px] rounded-lg flex items-center text-sm pl-5 mb-8'>
        CERTIFICATE PROGRAMME
        <svg viewBox='-13 39 139 139' xmlns='http://www.w3.org/2000/svg'>
          <path
            fill='#AE5050'
            d='M33.4,-39C41.9,-32.6,46.7,-20.8,45.5,-10.5C44.4,-0.2,37.4,8.7,30.8,15.8C24.3,22.8,18.2,28.2,7.7,40.4C-2.9,52.7,-18.1,72,-21.2,67C-24.3,62,-15.3,32.8,-15.6,16.6C-15.9,0.4,-25.4,-2.9,-29.4,-9.5C-33.3,-16.1,-31.7,-26,-25.9,-32.8C-20.1,-39.7,-10,-43.4,1.2,-44.8C12.4,-46.2,24.8,-45.3,33.4,-39Z'
            transform='translate(100 100) rotate(-36)'
          />
        </svg>
      </div>
      <div className='w-full md:col-span-2 lg:col-span-1 flex justify-center lg:justify-start'>
        <div
          className={`w-[260px] ${
            pathName === "/students/courses/masterclass"
              ? "bg-[#5FFC54]"
              : "bg-[#2ABB1A]"
          }  h-[125px] rounded-lg flex items-center text-sm pl-5 mb-8 cursor-pointer`}
          onClick={() => router.push("/students/courses/masterclass")}>
          MASTER CLASS
        </div>
      </div>
    </div>
  );
};

export default ClassCards;

export const ClassCardsMobile = () => {
  const router = useRouter();
  const [pathName, setPathName] = useState("");

  useEffect(() => {
    setPathName(router.asPath);
  });

  return (
    <Swiper
      slidesPerView={1.2}
      spaceBetween={3}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='swiperClass'>
      <SwiperSlide
        style={{
          display: "flex",
          justifyContent: "start",
          backgroundColor: "transparent",
        }}>
        <div
          className={`w-[260px] ${
            pathName === "/students/courses/vocational"
              ? "bg-[#5FFC54]"
              : "bg-[#2ABB1A]"
          } h-[125px] relative rounded-lg overflow-hidden flex items-center text-sm pl-5 mb-10`}
          onClick={() => router.push("/students/courses/vocational")}>
          VOCATIONAL EDUCATION
          <svg viewBox='-15 45 130 130' xmlns='http://www.w3.org/2000/svg'>
            <path
              fill='#FDBC64'
              d='M41,-35.9C47.5,-24.6,43.1,-7.9,41.7,13.9C40.2,35.7,41.6,62.6,28.8,74.2C16.1,85.9,-10.9,82.3,-33.7,70.9C-56.4,59.6,-74.9,40.4,-71.1,25.3C-67.3,10.1,-41.4,-1.1,-25.8,-14.4C-10.3,-27.7,-5.1,-43.2,6.1,-48C17.3,-52.9,34.6,-47.1,41,-35.9Z'
              transform='translate(100 100)'
            />
          </svg>
          {/* Use this svg as the blueprint for the rest in this programcarousel component and the content component for the main screen */}
        </div>
      </SwiperSlide>
      <SwiperSlide
        style={{
          display: "flex",
          justifyContent: "start",
          backgroundColor: "transparent",
        }}>
        <div className='w-[260px] bg-[#2ABB1A] h-[125px] rounded-lg flex items-center text-sm pl-5 mb-10 cursor-not-allowed'>
          CERTIFICATE PROGRAMME
          <svg viewBox='-13 39 139 139' xmlns='http://www.w3.org/2000/svg'>
            <path
              fill='#AE5050'
              d='M33.4,-39C41.9,-32.6,46.7,-20.8,45.5,-10.5C44.4,-0.2,37.4,8.7,30.8,15.8C24.3,22.8,18.2,28.2,7.7,40.4C-2.9,52.7,-18.1,72,-21.2,67C-24.3,62,-15.3,32.8,-15.6,16.6C-15.9,0.4,-25.4,-2.9,-29.4,-9.5C-33.3,-16.1,-31.7,-26,-25.9,-32.8C-20.1,-39.7,-10,-43.4,1.2,-44.8C12.4,-46.2,24.8,-45.3,33.4,-39Z'
              transform='translate(100 100) rotate(-36)'
            />
          </svg>
        </div>
      </SwiperSlide>
      <SwiperSlide
        style={{
          display: "flex",
          justifyContent: "start",
          backgroundColor: "transparent",
        }}>
        <div
          className={`w-[260px] ${
            pathName === "/students/courses/masterclass"
              ? "bg-[#5FFC54]"
              : "bg-[#2ABB1A]"
          }  h-[125px] rounded-lg flex items-center text-sm pl-5 mb-10 cursor-pointer`}
          onClick={() => router.push("/students/courses/masterclass")}>
          MASTER CLASS
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

// <div className='w-[260px] bg-[#2ABB1A] h-[125px] rounded-lg flex items-center text-sm pl-5 mb-10'>MASTER CLASS</div>

/**
 * export const ClassCardsMobile = () => {
  const router = useRouter();
  const [pathName, setPathName] = useState("");

  useEffect(() => {
    setPathName(router.asPath);
  });

  return (
    <Swiper
      slidesPerView={1.2}
      spaceBetween={0}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="swiperClass"
    >
      <SwiperSlide style={{ backgroundColor: "transparent" }}>
        <div
          className="w-[260px] bg-[#2ABB1A] h-[125px] relative rounded-lg flex items-center text-sm pl-5 mb-10"
          onClick={() => router.push("/students/courses")}
        >
          VOCATIONAL EDUCATION
          <svg viewBox="-30 48 140 140" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FDBC64"
              d="M41,-35.9C47.5,-24.6,43.1,-7.9,41.7,13.9C40.2,35.7,41.6,62.6,28.8,74.2C16.1,85.9,-10.9,82.3,-33.7,70.9C-56.4,59.6,-74.9,40.4,-71.1,25.3C-67.3,10.1,-41.4,-1.1,-25.8,-14.4C-10.3,-27.7,-5.1,-43.2,6.1,-48C17.3,-52.9,34.6,-47.1,41,-35.9Z"
              transform="translate(100 100)"
            />
          </svg>
          </div>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundColor: "transparent" }}>
            <div className="w-[260px] bg-[#2ABB1A] h-[125px] rounded-lg flex items-center text-sm pl-5 mb-10">
              CERTIFICATE PROGRAMME
              <svg viewBox="-13 39 139 139" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#AE5050"
                  d="M33.4,-39C41.9,-32.6,46.7,-20.8,45.5,-10.5C44.4,-0.2,37.4,8.7,30.8,15.8C24.3,22.8,18.2,28.2,7.7,40.4C-2.9,52.7,-18.1,72,-21.2,67C-24.3,62,-15.3,32.8,-15.6,16.6C-15.9,0.4,-25.4,-2.9,-29.4,-9.5C-33.3,-16.1,-31.7,-26,-25.9,-32.8C-20.1,-39.7,-10,-43.4,1.2,-44.8C12.4,-46.2,24.8,-45.3,33.4,-39Z"
                  transform="translate(100 100) rotate(-36)"
                />
              </svg>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundColor: "transparent" }}>
            <div
              className={`w-[260px] ${
                pathName === "/students/courses/masterclass"
                  ? "bg-[#5FFC54]"
                  : "bg-[#2ABB1A]"
              }  h-[125px] rounded-lg flex items-center text-sm pl-5 mb-10 cursor-pointer`}
              onClick={() => router.push("/students/courses/masterclass")}
            >
              MASTER CLASS
            </div>
          </SwiperSlide>
        </Swiper>
      );
    };
 */
