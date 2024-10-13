"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Image from "next/legacy/image";

const Carousel = () => {
  return (
    <div className="w-full py-8">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="w-64 h-64">
          <Image
            src="/images/slide1.jpg"
            alt="Image 1"
            layout="fill"
            className="object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide className="w-64 h-64">
          <Image
            src="/images/slide2.jpg"
            alt="Image 2"
            layout="fill"
            className="object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide className="w-64 h-64">
          <Image
            src="/images/slide3.jpg"
            alt="Image 3"
            layout="fill"
            className="object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide className="w-64 h-64">
          <Image
            src="/images/slide4.jpg"
            alt="Image 4"
            layout="fill"
            className="object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide className="w-64 h-64">
          <Image
            src="/images/slide5.jpg"
            alt="Image 5"
            layout="fill"
            className="object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide className="w-64 h-64">
          <Image
            src="/images/slide6.jpg"
            alt="Image 6"
            layout="fill"
            className="object-cover rounded-lg"
          />
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
    </div>
  );
};

export default Carousel;
