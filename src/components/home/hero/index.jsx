"use client";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../../../public/img/hero1.jpg";
import { faConstants } from "../../../../public/locales/fa/common";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <>
      <div className={`container ${styles.heroWrapper}`}>
        {/* description */}
        <div
          className={`flex items-center flex-grow-1 flex-shrink-1 flex-auto bg-transparent relative z-10 ${styles["ml-negative-10"]} ${styles.descriptionWrapper}`}
        >
          <div className={styles.descriptionContainer}>
            <h1
              className={`leading-snug tracking-tight text-neutralWhiteColor dark:text-neutralWhiteColor lg:leading-tight xl:leading-tight ${styles.fancy}`}
            >
              {faConstants.engineeringDepartment}
              <span>{` ${faConstants.companyName}`}</span>
            </h1>
            <h2 className="py-5 text-pureWhiteColor dark:text-pureWhiteColor">
              {faConstants.companyDescription}
            </h2>
            <p className="py-5 text-pureWhiteColor">
              {faConstants.companyProud}
            </p>

            <div className="flex items-start sm:items-center">
              <div className={`${styles.viewProducts}`}>
                <Link href="/collections">{faConstants.viewProducts}</Link>
              </div>
            </div>
          </div>
        </div>

        {/* photo */}
        <div
          className={`flex items-center justify-center flex-grow-1 flex-shrink-1 flex-auto h-full ${styles.imageWrapper}`}
        >
          <div className={styles.imageContainer}>
            <Image
              src={heroImg}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" height="0" width="0">
        <defs>
          <clipPath id="pology-clip-left" clipPathUnits="objectBoundingBox">
            <path d="M1,0 L0.1,0 C1 0, 0.04 0, 0.04 0 C-0.1 0.5, 0.22 0.5, 0.04 1 C0.04 1, 1 1, 1 1 z"></path>
          </clipPath>
        </defs>
      </svg>
    </>
  );
};
