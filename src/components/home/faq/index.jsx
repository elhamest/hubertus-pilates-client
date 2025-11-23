"use client";
import React, { useState } from "react";
import { Container } from "@/components/UI/container";
// import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { enFaq } from "../../../data/en";
import { faFaq } from "../../../data/fa";

import styles from "./Faq.module.css";

export const Faq = ({ locale = "fa" }) => {
  const faqData = locale === "fa" ? faFaq : enFaq;

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className={styles.faqWrapper}>
      <div className={styles.description}>
        {locale === "fa"
          ? "به سوالات احتمالی مشتریان خود در اینجا پاسخ دهید، این کار نرخ تبدیل و همچنین درخواست‌های پشتیبانی یا چت را افزایش می‌دهد."
          : `Answer your customers possible questions here, it will increase the
            conversion rate as well as support or chat requests.`}
      </div>

      <Container className={styles.container}>
        <div className={styles.wrapper}>
          {faqData?.map((item, index) => (
            <div key={item.question} className={styles.faqItem}>
              <button
                onClick={() => toggleAccordion(index)}
                className={`${styles.faqButton} ${
                  openIndex === index ? styles.faqButtonActive : ""
                }`}
              >
                <span className={styles.question}>{item.question}</span>

                {/* <ChevronUpIcon
                className={`${
                  openIndex === index ? styles.chevronRotated : ""
                } ${styles.chevron}`}
              /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`fa-solid fa-chevron-up ${
                    openIndex === index ? styles.chevronRotated : ""
                  } ${styles.chevron}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className={styles.answer}>{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
