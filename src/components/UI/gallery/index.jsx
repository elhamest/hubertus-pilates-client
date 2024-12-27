import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavButton } from "../nav-button/NavButton";

import styles from "./Gallery.module.css";

const Gallery = ({ title, items }) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>{title}</h2>
        <div className={`flex gap-4 ltr ${styles.headerIndicators}`}>
          <NavButton onClick={scrollLeft} label="Previous">
            <svg
              className={`icon icon-chevron-left ${styles.navigatorSvg}`}
              viewBox="0 0 24 24"
            >
              <path d="M14 6L8 12L14 18"></path>
            </svg>
          </NavButton>
          <NavButton onClick={scrollRight} label="Next">
            <svg
              className={`icon icon-chevron-rigth ${styles.navigatorSvg}`}
              viewBox="0 0 24 24"
            >
              <path d="M10 6L16 12L10 18"></path>
            </svg>
          </NavButton>
        </div>
      </div>

      <div className={styles.slider} ref={sliderRef}>
        {items.map((item, index) => (
          <div className={styles.card} key={index}>
            <Link href={item.link}>
              <div className={styles.imageContainer}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw" // Optimize for different screen sizes
                  style={{ objectFit: "cover" }} // Ensures the image covers the container
                />
              </div>
              <div className={styles.cardTitle}>{item.title}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
