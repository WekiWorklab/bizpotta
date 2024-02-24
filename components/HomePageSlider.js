// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import Card from "./Card";

export default function HomePageSlider() {
  const slides = [
    {
      name: "Vocational Training",
      description:
        "Acquire hands-on in-demand skills and expand your capacity with apprenticeship opportunities designed to help you stand out in your field.",
      img: "/vc.png",
      comingSoon: false,
    },
    {
      name: "Masterclass",
      description:
        "Redefine your life and business with our established mentors from various sectors. Expand your knowledge and network with those blazing the trail.",
      img: "mc.png",
      comingSoon: false,
    },
    {
      name: "Specialization Programme",
      description:
        "Get Certified from our various Bizpotta Schools with resources that can guarantee you a place in the digital economy.",
      img: "/sp.png",
      comingSoon: true,
    },
    {
      name: "Upcoming Events",
      description:
        "Stay connected with all our upcoming events and be the first to benefit from all the opportunities on our platform.",
      img: "/event.png",
      comingSoon: true,
    },
  ];
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='mySwiper'>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <Card slide={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
