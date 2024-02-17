import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const LandingTestimonialCarousel = () => {
  const data = [
    {
      imageUrl: "/test1.webp",
      name: "Jane Ebong",
      note: "Hello, I’m Jane Ebong -Founder of ‘Tabitha Dor’ a faith-based fashion brand. My time at the Bizpotta Business Lounge helped to further open up my mind to the lean and strategic funding possibilities that are available when critical thinking is engaged at very defining moments in business growth. I believe I’m currently at such a time, and by God’s grace, I have been able to identify a way forward. All thanks to the Bizpotta experience!",
      location: "Nigeria",
    },
    {
      imageUrl: "/test2.webp",
      name: "Micheal Okechukwu",
      note: "My name is Micheal Okechukwu, I run an Agro-value chain known as Anotu Ventures. I had the opportunity to be part of the Bizpotta Business Lounge and it has helped impact my business decisions positively. Hearing the business journeys of seasoned business people in the Lounge helped me recognize and exploit hidden opportunities in my field. This has led to a leap in our business growth. (CEO, Anotu Ventures)",
      location: "Nigeria",
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
      className='mySwiper'
      style={{ display: "flex", justifyContent: "flex-start" }}>
      {data.map((el, index) => (
        <SwiperSlide
          key={index}
          style={{
            display: "flex",
            justifyContent: "start",
            backgroundColor: "transparent",
          }}>
          <TestimonialCard el={el} />
        </SwiperSlide>
      ))}

      <div className='h-48'></div>
    </Swiper>
  );
};

export default LandingTestimonialCarousel;

export const TestimonialCard = ({ el: { imageUrl, note, name, location } }) => {
  return (
    <div className='w-[250px] flex flex-col items-start bg-gray-50 '>
      <div
        className='w-full h-[200px] bg-no-repeat bg-cover bg-center rounded-md'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <p className='mt-4 text-[14px]  italic'>{name}</p>

      <p className='text-[13px] font-extralight italic mt-4'>{note}</p>

      <p className='text-[13px] font-extralight italic mt-4'>{location}</p>
    </div>
  );
};
