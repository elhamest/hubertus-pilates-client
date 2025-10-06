"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { faConstants } from "../../../../public/locales/fa/common";

import styles from "./Collection.module.css";

export function Collection({ items }) {
  const currentPath = usePathname();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items?.map((item, index) => {
        return (
          <div key={index} className={`group ${styles.collectionWrapper}`}>
            <Link href={`${currentPath}/${item?.slug}`}>
              <div
                className={`relative overflow-hidden rounded-tl-lg rounded-tr-lg bg-gray-100 p-4 ${styles.imageWrapper}`}
              >
                <Image
                  src={item?.images?.at(0)}
                  alt={item?.title}
                  fill
                  // style={{ objectFit: "cover", width: "100%", height: "auto" }}
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 6} // Load first 6 images immediately
                />
              </div>
              <div className={styles.contentWrapper}>
                <h3 className={styles.boxTitle}>{item?.title}</h3>
                <p>{item?.desc}</p>
              </div>
              {/* <Link
                className={styles.viewMore}
                href={`${currentPath}/${item?.slug}`}
              > */}
              <span className={styles.viewMore}>
                <span>{faConstants?.viewMore}</span>
              </span>
              {/* </Link> */}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
