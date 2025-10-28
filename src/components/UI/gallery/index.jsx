import { useRef } from "react";

import GalleryItems from "./galleryItems";

import styles from "./Gallery.module.css";

const Gallery = ({ title, items }) => {
  const sliderRef = useRef(null);

  const moveLeft = () => {
    sliderRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const moveRight = () => {
    sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>{title}</h2>
        <div className={`flex gap-4 ltr ${styles.headerIndicators}`}>
          <button
            className={styles.circleButton}
            onClick={moveLeft}
            aria-label="Previous"
          >
            <svg
              className={`icon icon-chevron-left ${styles.navigatorSvg}`}
              viewBox="0 0 24 24"
            >
              <path d="M14 6L8 12L14 18" fill="#905a98"></path>
            </svg>
          </button>
          <button
            className={styles.circleButton}
            onClick={moveRight}
            aria-label="Next"
          >
            <svg
              className={`icon icon-chevron-rigth ${styles.navigatorSvg}`}
              viewBox="0 0 24 24"
            >
              <path d="M10 6L16 12L10 18" fill="#905a98"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.gallerySlider} ref={sliderRef}>
        <GalleryItems items={items} customClass="cardSlider" />
      </div>
    </div>
  );
};

export default Gallery;
