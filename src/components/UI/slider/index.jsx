"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import ChevronLeft from "@/components/UI/svg/ChevronLeft";
import ChevronRight from "@/components/UI/svg/ChevronRight";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import styles from "./Slider.module.css";

const Slider = ({ imagePaths }) => {
  const dataLength = imagePaths?.length || 0;

  const [swiperRef, setSwiperRef] = useState(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const slideHandler = (index) => {
    swiperRef.slideTo(index, 0);
    setActiveIndex(index);
  };

  return (
    <div className={styles.mainSliderWrapper}>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        grabCursor={false}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (navigationPrevRef.current && navigationNextRef.current) {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
        pagination={{
          el: `.${styles.mainSliderPagination}`,
          clickable: true,
        }}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        effect="fade"
        fadeEffect={{ crossFade: true }} // Optional: for better fade effect
        speed={4000} // transition duration
        onSwiper={setSwiperRef}
      >
        {imagePaths?.map((path, index) => (
          <SwiperSlide key={index}>
            <Image
              src={path}
              alt={`Slide ${index}`}
              width={700} // for test
              height={500} // for test
              className="w-full"
              style={{ height: "auto", maxHeight: "500px" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.sliderControls}>
        <button
          className={`${activeIndex === 0 ? styles.navDisable : ""}`}
          ref={navigationPrevRef}
          onClick={
            activeIndex - 1 >= 0 ? () => slideHandler(activeIndex - 1) : null
          }
        >
          <svg className={"icon icon-chevron-left"} viewBox="0 0 24 24">
            <path d="M14 6L8 12L14 18"></path>
          </svg>
        </button>
        <button
          className={`${
            activeIndex === dataLength - 1 ? styles.navDisable : ""
          }`}
          ref={navigationNextRef}
          onClick={
            activeIndex + 1 < dataLength
              ? () => slideHandler(activeIndex + 1)
              : null
          }
        >
          <svg className={"icon icon-chevron-rigth"} viewBox="0 0 24 24">
            <path d="M10 6L16 12L10 18"></path>
          </svg>
        </button>
      </div>
      <div className={styles.mainSliderPagination} />
    </div>
  );
};

export default Slider;
