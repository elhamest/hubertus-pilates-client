import Link from "next/link";
import Image from "next/image";
import styles from "./GalleryItems.module.css";

function GalleryItems({ items, customClass }) {
  return (
    <>
      {items?.map((item, index) => (
        <div
          className={`${styles.card} ${styles[customClass]}`}
          key={index}
          style={{ width: "100%" }} // Additional inline style for safety
        >
          <Link href={item?.path} style={{ display: "block", height: "100%" }}>
            <div className={styles.cardContent}>
              <div className={styles.imageContainer}>
                <Image
                  src={item?.image}
                  alt={item?.title ?? "Collection"}
                  className={styles.image}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 899px) 220px, 335px"
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <div className={styles.cardTitle}>{item?.title}</div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default GalleryItems;
