import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

import { useSwiper } from "swiper/react";

const LandingTestimonialCarousel = () => {
  const data = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Maxwell John",
      note: "Hi, I am Tolu Oluyemi, I am a Project Management  with over 15+ years of experience. I have helped over 5,000 student get started in tech.",
      location: "Cape Town, S.A",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      name: "Maxwell John",
      note: "Hi, I am Tolu Oluyemi, I am a Project Management  with over 15+ years of experience. I have helped over 5,000 student get started in tech.",
      location: "Cape Town, S.A",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Maxwell John",
      note: "Hi, I am Tolu Oluyemi, I am a Project Management  with over 15+ years of experience. I have helped over 5,000 student get started in tech.",
      location: "Cape Town, S.A",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      name: "Maxwell John",
      note: "Hi, I am Tolu Oluyemi, I am a Project Management  with over 15+ years of experience. I have helped over 5,000 student get started in tech.",
      location: "Cape Town, S.A",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      name: "Maxwell John",
      note: "Hi, I am Tolu Oluyemi, I am a Project Management  with over 15+ years of experience. I have helped over 5,000 student get started in tech.",
      location: "Cape Town, S.A",
    },
  ];

  return (
    <Swiper
      slidesPerView={1.4}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination]}
      className="mySwiper"
      style={{display: "flex", justifyContent: "flex-start", border: "1px solid red" }}
    >
      {data.map((el, index) => (
        <SwiperSlide key={index}  style={{
          display: "flex",
          justifyContent: "start",
          backgroundColor: "transparent",
        }}>
          <TestimonialCard el={el} />
        </SwiperSlide>
      ))}

      <div className="h-48"></div>
    </Swiper>
  );
};

export default LandingTestimonialCarousel;

export const TestimonialCard = ({ el: { imageUrl, note, name, location } }) => {
  return (
    <div className="w-[250px] flex flex-col items-start redBorder bg-gray-50 ">
      <div
        className="w-full h-[200px] bg-no-repeat bg-cover bg-center rounded-md"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <p className="mt-4 text-[14px]  italic">{name}</p>

      <p className="text-[13px] font-extralight italic mt-4">
        {note}
      </p>

      <p className="text-[13px] font-extralight italic mt-4">
        {location}
      </p>
    </div>
  );
};

