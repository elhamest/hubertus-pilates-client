"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import styles from "./HeroSlider.module.css";

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
        autoplay={{ delay: 5000 }}
        effect="fade" // Enable fade effect
        fadeEffect={{ crossFade: true }} // Optional: for better fade effect
        speed={1000} // Set transition duration to 1000ms (1 second)
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {imagePaths.map((path, index) => (
          <SwiperSlide key={index}>
            <img src={path} alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles["slider-controls"]}>
        <button onClick={() => swiperRef.current.swiper.slidePrev()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
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
            stroke="currentColor"
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
