import React, { useRef } from "react";
import { NavButton } from "../nav-button/NavButton";

import styles from "./Gallery.module.css";
import commonStyles from "../../styles/shared.module.css";
import GalleryItems from "./GalleryItems";

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
        <h2
          className={`${styles.headerTitle} text-accentColorBlueDark dark:text-pureWhiteColor`}
        >
          {title}
        </h2>
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
      <div className={commonStyles.slider} ref={sliderRef}>
        <GalleryItems items={items} />
      </div>
    </div>
  );
};

export default Gallery;
