import React from "react";
import Image from "next/image";

import { SectionTitle } from "../../UI/section-title";
import { faBenefits } from "../../../data/fa";

import featureImage from "../../../../public/img/feature-600.webp";
import styles from "./Benefits.module.css";

function Benefits() {
  return (
    <section className={styles.benefitsWrapper}>
      <div className={styles.contentWrapper}>
        {/* <h2>تمایز ما در یک نگاه</h2> */}
        <h2>هنر پیلاتس، مهندسی‌شده توسط ما</h2>
        {/* <h3>
          از مواد اولیه درجه یک تا طراحی کاربرمحور، هر جزئیاتی برای ارتقای تجربه
          پیلاتس شما طراحی شده است.
        </h3> */}
        {faBenefits?.items?.map((item, index) => (
          <div key={index} className={styles.benefitItem}>
            {item}
          </div>
        ))}
      </div>
      <div className={styles.imageWrapper}>
        <Image src={featureImage} alt="features" />
      </div>
    </section>
  );
}

export default Benefits;

// <SectionTitle preTitle={faBenefits?.preTitle} title={faBenefits?.title}>
//   {faBenefits?.items?.map((item, index) => (
//     <div key={index} className={styles.benefitContainer}>
//       <svg
//         className={styles.checkSvgImage}
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M20 6L9 17l-5-5" />
//       </svg>
//       {item}
//     </div>
//   ))}
// </SectionTitle>
