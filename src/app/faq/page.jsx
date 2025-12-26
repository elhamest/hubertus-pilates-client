"use client";
import React from "react";

import { Container } from "@/components/UI/container";
import Breadcrumb from "@/components/UI/breadcrumb";
import { generatePathToTitleMap } from "@/utils/pathMaps";
import { enFaq } from "@/data/en";
import { faFaq } from "@/data/fa";
import { FaqList } from "@/components/faq-list";

import styles from "./FaqPage.module.css";

const FaqPage = ({ locale = "fa" }) => {
  const pathToTitleMap = generatePathToTitleMap(locale);
  const faqData = locale === "fa" ? faFaq : enFaq;

  return (
    <div className={styles.faqPageWrapper}>
      <Container>
        {pathToTitleMap && (
          <Breadcrumb locale={locale} pathToTitleMap={pathToTitleMap} />
        )}

        <div className={`${styles.faqWrapper} pageHeight pageWrapper`}>
          <div className={styles.title}>
            {locale === "fa" ? "سوالات متداول" : "Frequently Asked Questions"}
          </div>

          {/* <Container className={styles.container}> */}
          <FaqList faqData={faqData} locale={locale} />
          {/* </Container> */}
        </div>
      </Container>
    </div>
  );
};

export default FaqPage;
