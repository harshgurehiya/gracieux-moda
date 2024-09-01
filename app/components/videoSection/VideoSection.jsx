"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import videoData from "./videos.json"; // Adjust path if needed

const VideoSection = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Set the imported video data
    setVideos(videoData);

    // Process Instagram embeds
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <section className="my-12 mx-10">
      <h2 className="text-2xl font-bold mb-6">
        Join the <span className="text-red-500">Tribe</span>
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="w-full"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div className="w-full max-w-xs h-[80vh] flex items-center justify-center">
              <blockquote
                className="instagram-media w-full h-full"
                data-instgrm-permalink={video.videoUrl}
                data-instgrm-version="14"
                style={{ width: "100%", height: "98%" }}
              >
                <a
                  href={video.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </blockquote>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default VideoSection;
