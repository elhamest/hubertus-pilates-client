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
import "swiper/css/pagination";

import styles from "./ThumsGallery.module.css";

const ThumsGallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={styles.swiperWrapper}>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        pagination={{
          type: "progressbar",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        className="mainSwiper"
      >
        <SwiperSlide>
          <Image
            fill
            alt=""
            src="https://swiperjs.com/demos/images/nature-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            fill
            alt=""
            src="https://swiperjs.com/demos/images/nature-2.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            fill
            alt=""
            src="https://swiperjs.com/demos/images/nature-3.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            fill
            alt=""
            src="https://swiperjs.com/demos/images/nature-4.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            fill
            alt=""
            src="https://swiperjs.com/demos/images/nature-5.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            fill
            alt=""
            src="https://swiperjs.com/demos/images/nature-6.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            fill
            alt=""
            src="https://swiperjs.com/demos/images/nature-7.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            fill
            alt=""
            src="https://swiperjs.com/demos/images/nature-8.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            fill
            alt=""
            src="https://swiperjs.com/demos/images/nature-9.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            fill
            alt=""
            src="https://swiperjs.com/demos/images/nature-10.jpg"
          />
        </SwiperSlide>
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
        <SwiperSlide>
          <Image
            fill
            alt=""
            src="https://swiperjs.com/demos/images/nature-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            fill
            alt=""
            src="https://swiperjs.com/demos/images/nature-2.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            fill
            alt=""
            src="https://swiperjs.com/demos/images/nature-3.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            fill
            alt=""
            src="https://swiperjs.com/demos/images/nature-4.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            fill
            alt=""
            src="https://swiperjs.com/demos/images/nature-5.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            fill
            alt=""
            src="https://swiperjs.com/demos/images/nature-6.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            fill
            alt=""
            src="https://swiperjs.com/demos/images/nature-7.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            fill
            alt=""
            src="https://swiperjs.com/demos/images/nature-8.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            fill
            alt=""
            src="https://swiperjs.com/demos/images/nature-9.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            fill
            alt=""
            src="https://swiperjs.com/demos/images/nature-10.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ThumsGallery;
