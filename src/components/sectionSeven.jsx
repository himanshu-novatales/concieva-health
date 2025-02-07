import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./swiper.css";

const SectionSeven = () => {
  return (
    <div className="w-full mt-32 px-4">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-custom">
          Happy families about us
        </h1>
        <p className="text-sm mt-5 mb-8 ">
          More than 250 five-star reviews on Google
        </p>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          loop={true}
          speed={1000}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true, el: ".swiper-paginationTesti" }}
          modules={[Pagination, Autoplay]}
          className="mySwiper w-full"
        >
          {[...Array(10)].map((_, index) => (
            <SwiperSlide key={index} className="flex justify-center mt-10">
              <div className="relative cursor-pointer p-5 border-[1px] border-[#EBE6DE] rounded-lg bg-[#FBF9F6] shadow-md mx-2">
                <h2 className="text-xl mb-2">⭐⭐⭐⭐⭐</h2>
                <p className="text-sm mb-2 px-2">
                  "This clinic is a true gem! From the warm welcome at the front
                  desk to the thorough care I received, everything was
                  excellent. The team genuinely cares about their patients, and
                  it shows. They also have state-of-the-art facilities, which
                  made my visit smooth and stress-free. Five stars!"
                </p>
                <p className="font-bold my-5">Happy Client</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-paginationTesti mt-4"></div>
        
      </div>
    </div>
  );
};

export default SectionSeven;
