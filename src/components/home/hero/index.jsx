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
        <div className={styles.descriptionWrapper}>
          <div className={styles.descriptionContainer}>
            <h1 className={`lg:leading-tight xl:leading-tight`}>
              {faConstants.engineeringDepartment}
              <span>{` ${faConstants.companyName}`}</span>
            </h1>
            <h2 className="dark:text-pureWhiteColor">
              {faConstants.companyDescription}
            </h2>
            <p className="text-pureWhiteColor">{faConstants.companyProud}</p>

            <div className={styles.viewProducts}>
              <Link href="/collections">{faConstants.viewProducts}</Link>
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
    </>
  );
};
