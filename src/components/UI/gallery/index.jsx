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
    <div className={styles.galleryWrapper}>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>{title}</h2>
      </div>

      <div className={styles.galleryContainer}>
        <button
          className={styles.rightButton}
          onClick={moveRight}
          aria-label="Next"
        >
          <svg className={styles.navigatorSvg} viewBox="0 0 24 24">
            <path d="M10 6L16 12L10 18" />
          </svg>
        </button>

        <div className={styles.gallerySliderWrapper}>
          <div className={styles.gallerySlider} ref={sliderRef}>
            <GalleryItems items={items} customClass={styles.cardSlider} />
          </div>
        </div>

        <button
          className={styles.leftButton}
          onClick={moveLeft}
          aria-label="Previous"
        >
          <svg className={styles.navigatorSvg} viewBox="0 0 24 24">
            <path d="M14 6L8 12L14 18" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Gallery;
