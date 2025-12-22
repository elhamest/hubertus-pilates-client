"use client";

import { useState } from "react";
import { faFaq } from "@/data/fa";
import { enFaq } from "@/data/en";

import Breadcrumb from "@/components/UI/breadcrumb";
import { generatePathToTitleMap } from "@/utils/pathMaps";
import { Container } from "@/components/UI/container";

import styles from "./Faq.module.css";

const FaqPage = ({ locale = "fa" }) => {
  const pathToTitleMap = generatePathToTitleMap(locale);
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
    <div className={styles.faqPageWrapper}>
      <Container>
        {pathToTitleMap && (
          <Breadcrumb locale={locale} pathToTitleMap={pathToTitleMap} />
        )}

        <div className={`${styles.faqWrapper} pageHeight pageWrapper`}>
          <h1>{locale === "fa" ? "سوالات متداول" : "FAQ"}</h1>

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
        </div>
      </Container>
    </div>
  );
};

export default FaqPage;
