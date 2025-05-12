import Link from "next/link";
import Image from "next/image";

import styles from "./GalleryItems.module.css";

function GalleryItems({ items, customClass }) {
  // console.log("Gallery items, items:", items);
  return (
    <>
      {items?.map((item, index) => (
        <div className={`${styles.card} ${styles[customClass]}`} key={index}>
          <Link href={item?.path}>
            <div className={styles.imageContainer}>
              <Image
                src={item?.image}
                alt={item?.title ?? "Collection"}
                fill
                sizes="(max-width: 768px) 100vw, 33vw" // Optimize for different screen sizes
                style={{ objectFit: "cover" }} // Ensures the image covers the container
              />
            </div>
            <div className={styles.cardTitle}>{item?.title}</div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default GalleryItems;
