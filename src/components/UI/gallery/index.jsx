import React, { useRef } from "react";

import styles from "./Gallery.module.css";
import { NavButton } from "../nav-button/NavButton";
import Link from "next/link";

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
              <img src={item.image} alt={item.title} width={200} height={200} />
              <span className={styles.cardTitle}>{item.title}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
