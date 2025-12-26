"use client";
import React, { useState } from "react";

import ChevronDown from "@/components/UI/svg/ChevronDown";
import styles from "./FaqList.module.css";

export const FaqList = ({ faqData = [], locale = "fa" }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className={styles.wrapper}>
      {faqData?.map((item, index) => (
        <div key={item.question} className={styles.faqItem}>
          <button
            onClick={() => toggleAccordion(index)}
            className={`${styles.faqButton} ${
              openIndex === index ? styles.faqButtonActive : ""
            }`}
          >
            <div className={styles.itemWrapper}>
              <div className={styles.question}>
                <div>{item.question}</div>
                <div
                  className={`${
                    openIndex === index ? styles.chevronRotated : ""
                  } ${styles.chevron}`}
                >
                  <ChevronDown color="#86508e" width={28} height={28} />
                </div>
              </div>
              <div
                className={`${styles.answerWrapper} ${
                  openIndex === index ? styles.answerVisible : ""
                }`}
              >
                <div className={styles.answer}>{item.answer}</div>
              </div>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};
