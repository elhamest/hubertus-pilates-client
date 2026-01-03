"use client";
import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

import LightBoxGallery from "./LightBoxGallery";

import styles from "./ThumsGallery.module.css";

const ThumsGallery = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!data) {
    return;
  }

  // const handleCloseLightbox = () => {
  //   setLightboxOpen(false);
  // };
  const handlePrevImage = () => {
    setLightboxIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };
  const handleNextImage = () => {
    setLightboxIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.thumsGalleryWrapper}>
      {/* Main Swiper */}
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={{
          nextEl: `.${styles.swiperButtonNext}`,
          prevEl: `.${styles.swiperButtonPrev}`,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          el: `.${styles.pagination}`,
        }}
        className={`${styles.mainSwiper} mainSwiper`}
      >
        {data?.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setLightboxOpen(true);
              }}
              className={`${styles.mainSwiperSlide} ${
                item?.isHorizontal ? styles.horizontal : styles.vertical
              }`}
            >
              <Image alt="" src={item?.img} />
            </SwiperSlide>
          );
        })}
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
          <svg
            className={`icon icon-chevron-rigth ${styles.navigatorSvg}`}
            viewBox="0 0 24 24"
          >
            <path d="M10 6L16 12L10 18" fill="#905a98"></path>
          </svg>
        </button>
      </Swiper>

      {/* Pagination container - always in DOM but hidden on desktop */}
      <div className={styles.pagination}></div>

      {/* Thumbnail Swiper - always in DOM but hidden on mobile */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={`thumbSwiper ${styles.thumbSwiper}`}
      >
        {data?.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className={`${styles.thumbSwiperSlide} ${
                item?.isHorizontal ? styles.horizontal : styles.vertical
              }`}
            >
              <Image fill alt="" src={item?.img} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      {lightboxOpen && (
        <LightBoxGallery
          images={data}
          startIndex={activeIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
};

export default ThumsGallery;
