"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { faConstants } from "../../../../public/locales/fa/common";

import styles from "./Collection.module.css";

export function Collection({ items }) {
  const currentPath = usePathname();

  return (
    <div className={styles.collections}>
      {items?.map((item, index) => {
        return (
          <div key={index} className={styles.collection}>
            <Link href={`${currentPath}/${item?.slug}`}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item?.images?.at(0)?.img}
                  alt={item?.title}
                  priority={index < 6} // Load first 6 images immediately
                />
              </div>
              <div className={styles.contentWrapper}>
                <h3 className={styles.boxTitle}>{item?.title}</h3>
                <p>{item?.desc}</p>

                <span className={styles.viewMore}>
                  <span>{faConstants?.viewMore}</span>
                </span>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
