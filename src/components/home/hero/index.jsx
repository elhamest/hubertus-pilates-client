"use client";
import Image from "next/image";
import Link from "next/link";

import heroImg from "../../../../public/img/hero1.jpg";
import { faConstants } from "../../../../public/locales/fa/common";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <>
      <div className={styles.heroWrapper}>
        <div className={styles.heroContainer}>
          <div className={styles.textContainer}>
            <h3>
              {faConstants.companyDescription}
              <span className={styles.smallDots}></span>
            </h3>
            <h1>
              <span className="animateFadeInUp">{`${faConstants.engineeringDepartment} ${faConstants.companyName}`}</span>
            </h1>

            <div className={styles.viewButton}>
              <Link href="/collections" className="animateFadeInUp">
                {faConstants.viewProducts}
              </Link>
              <button className="animateFadeInUp">تست</button>
            </div>
          </div>
          <span className={styles.spanDots} alt="dots" />
        </div>

        {/* photo */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <Image src={heroImg} alt="Hero Illustration" loading="eager" />
          </div>
        </div>
      </div>
    </>
  );
};
