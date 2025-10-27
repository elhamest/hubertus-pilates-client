"use client";
import React, { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import styles from "./ThumsGallery.module.css";

const ThumsGallery = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  if (!data) {
    return;
  }

  return (
    <div className={styles.swiperWrapper}>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={{
          nextEl: `.${styles.swiperButtonNext}`,
          prevEl: `.${styles.swiperButtonPrev}`,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mainSwiper"
      >
        {data?.map((item, index) => {
          return (
            <SwiperSlide key={index} className={styles.mainWrapper}>
              <Image fill alt="" src={item} />
            </SwiperSlide>
          );
        })}

        {/* Custom Navigation Buttons */}

        <button
          className={`${styles.circleButton} ${styles.swiperButtonPrev}`}
          aria-label="Next"
        >
          <svg
            className={`icon icon-chevron-left ${styles.navigatorSvg}`}
            viewBox="0 0 24 24"
          >
            <path d="M14 6L8 12L14 18" fill="#905a98"></path>
          </svg>
        </button>
        <button
          className={`${styles.circleButton} ${styles.swiperButtonNext}`}
          aria-label="Previous"
        >
          {" "}
          <svg
            className={`icon icon-chevron-rigth ${styles.navigatorSvg}`}
            viewBox="0 0 24 24"
          >
            <path d="M10 6L16 12L10 18" fill="#905a98"></path>
          </svg>
        </button>
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbSwiper"
      >
        {data?.map((item, index) => {
          return (
            <SwiperSlide key={index} className={styles.thumbWrapper}>
              <Image fill alt="" src={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ThumsGallery;
