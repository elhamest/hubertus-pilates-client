import React from "react";
import Image from "next/image";

import { SectionTitle } from "../../UI/section-title";
import { faBenefits } from "../../../data/fa";

import bigFeatureImage from "../../../../public/img/feature-600.webp";
import smallFeatureImage from "../../../../public/img/feature2.webp";
import dotsImage from "../../../../public/img/dots/6dots.svg";
import styles from "./Benefits.module.css";

function Benefits() {
  return (
    <section className={styles.benefitsWrapper}>
      <div className={styles.contentWrapper}>
        <h2>تمایز ما در یک نگاه</h2>
        {/* <h2 className="animateFadeInUp">هنر پیلاتس</h2>
        <h2 className="animateFadeInUp">مهندسی‌شده توسط ما</h2> */}
        {/* <h3>
          از مواد اولیه درجه یک تا طراحی کاربرمحور، هر جزئیاتی برای ارتقای تجربه
          پیلاتس شما طراحی شده است.
        </h3> */}
        <div>
          {faBenefits?.items?.map((item, index) => (
            <div
              key={index}
              className={`${styles.benefitItem} animateFadeInUp`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <div className={styles.bigImageContainer}>
          <Image src={bigFeatureImage} alt="Features 2" />
        </div>
        <div className={styles.dots}>
          <Image src={dotsImage} alt="Dots" />
        </div>
        <div className={styles.smallImageContainer}>
          <Image src={smallFeatureImage} alt="Features 1" />
        </div>
      </div>
    </section>
  );
}

export default Benefits;
