import { useRef } from "react";
import GalleryItems from "./galleryItems";
import styles from "./Gallery.module.css";
import ChevronRight from "../svg/ChevronRight";
import ChevronLeft from "../svg/ChevronLeft";

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
          <ChevronRight color="#86508e" width={28} height={28} />
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
          <ChevronLeft color="#86508e" width={28} height={28} />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
