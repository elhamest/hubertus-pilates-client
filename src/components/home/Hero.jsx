"use client";
import Image from "next/image";
import { Container } from "@/components/UI/container/Container";
import heroImg from "../../../public/img/main-hero-fa.jpg";
import { faConstants } from "../../../public/locales/fa/common";
import styles from "./Hero.module.css";
import Link from "next/link";

export const Hero = () => {
  return (
    <>
      <div className={`container ${styles.heroWrapper}`}>
        {/* description */}
        <div
          className={`flex items-center flex-grow-1 flex-shrink-1 flex-auto bg-transparent relative z-10 ${styles["ml-negative-10"]} ${styles.descriptionWrapper}`}
        >
          <div className={styles.descriptionContainer}>
            <h1 className="leading-snug tracking-tight text-pureWhiteColor dark:text-pureWhiteColor lg:leading-tight xl:leading-tight">
              {faConstants.engineeringDepartment}
              <span>{` ${faConstants.companyName}`}</span>
            </h1>
            <h2 className="py-5 text-pureWhiteColor dark:text-pureWhiteColor">
              {faConstants.companyDescription}
            </h2>
            <p className="py-5 text-pureWhiteColor">
              {faConstants.companyProud}
            </p>

            <div className="flex items-start mt-2 sm:items-center">
              <div className={styles.viewProducts}>
                <Link href="#products" target="_self">
                  {faConstants.viewProducts}
                </Link>
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
