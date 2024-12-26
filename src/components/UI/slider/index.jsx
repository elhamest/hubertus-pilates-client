"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import styles from "./Slider.module.css";
import Image from "next/image";

const HeroSlider = ({ imagePaths }) => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;
    swiperInstance.on("slideChange", () => {
      setActiveIndex(swiperInstance.activeIndex);
    });
  }, []);

  return (
    <div className={styles["hero-slider"]}>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        effect="fade"
        fadeEffect={{ crossFade: true }} // Optional: for better fade effect
        speed={4000} // transition duration
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {imagePaths.map((path, index) => (
          <SwiperSlide key={index}>
            <Image
              src={path}
              alt={`Slide ${index}`}
              width={700} // for test
              height={500} // for test
              className="w-full"
              // className="w-full h-full object-cover"
              style={{ height: "auto", maxHeight: "500px" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles["slider-controls"]}>
        <button onClick={() => swiperRef.current.swiper.slidePrev()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ff0000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button onClick={() => swiperRef.current.swiper.slideNext()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ff0000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
      <div className={styles["slider-pagination"]}>
        {imagePaths.map((_, index) => (
          <div
            key={index}
            className={`pagination-dot ${
              index === activeIndex ? "active" : ""
            }`}
            onClick={() => swiperRef.current.swiper.slideTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
