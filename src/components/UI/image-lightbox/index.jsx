"use client";
import { useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./ImageLightbox.module.css";

const ImageLightbox = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        onPrev();
      } else if (e.key === "ArrowRight") {
        onNext();
      }
    },
    [onClose, onPrev, onNext]
  );

  // Handle click outside to close
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    // Prevent body scrolling when lightbox is open
    document.body.style.overflow = "hidden";

    // Add keyboard event listener
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div
      className={styles.lightboxBackdrop}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      {/* Close button */}
      <button
        className={styles.closeButton}
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <svg
          className={styles.closeIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Navigation buttons */}
      <button
        className={styles.navButtonPrev}
        onClick={onPrev}
        aria-label="Previous image"
      >
        <svg
          className={styles.navIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        className={styles.navButtonNext}
        onClick={onNext}
        aria-label="Next image"
      >
        <svg
          className={styles.navIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Image container */}
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <Image
            src={images[currentIndex].img}
            alt={`Product image ${currentIndex + 1}`}
            fill
            className={styles.lightboxImage}
            sizes="90vw"
            priority
          />
        </div>

        {/* Image counter */}
        <div className={styles.imageCounter}>
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails strip */}
      <div className={styles.thumbnailStrip}>
        {images.map((image, index) => (
          <button
            key={index}
            className={`${styles.thumbnailButton} ${
              index === currentIndex ? styles.activeThumbnail : ""
            }`}
            onClick={() => {
              // You could add navigation to specific image here
              // For simplicity, we'll just close the lightbox
              // or you could implement direct navigation
            }}
            aria-label={`View image ${index + 1}`}
          >
            <div className={styles.thumbnailImage}>
              <Image src={image.img} alt="" fill sizes="80px" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageLightbox;
