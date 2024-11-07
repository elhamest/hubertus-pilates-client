import React from "react";
import { SectionTitle } from "../UI/slider/section-title";
import { faConstants } from "../../../public/locales/fa/common";
import styles from "./Benefits.module.css";

function Benefits() {
  return (
    <SectionTitle
      preTitle={faConstants.benefits?.preTitle}
      title={faConstants.benefits?.title}
    >
      {faConstants.benefits?.items?.map((item, index) => (
        <div key={index} className={styles.benefitContainer}>
          <svg
            className={styles.checkSvgImage}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
          {item}
        </div>
      ))}
    </SectionTitle>
  );
}

export default Benefits;
