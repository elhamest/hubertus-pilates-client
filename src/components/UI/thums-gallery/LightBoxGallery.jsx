"use client";
import { useEffect } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./LightboxGallery.module.css";

const LightboxGallery = ({ images, startIndex = 0, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.lightbox} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        <Swiper
          initialSlide={startIndex}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className={styles.swiper}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className={styles.imageWrapper}>
                <Image src={img.img} alt="" fill className={styles.image} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LightboxGallery;
