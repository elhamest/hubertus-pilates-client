"use client";
import React from "react";
import Link from "next/link";

import { Container } from "@/components/UI/container";
import { enFaq } from "../../../data/en";
import { faFaq } from "../../../data/fa";
import { FaqList } from "@/components/faq-list";

import styles from "./Faq.module.css";

export const Faq = ({ locale = "fa" }) => {
  const faqData = locale === "fa" ? faFaq : enFaq;

  return (
    <div className={styles.faqWrapper}>
      <div className={styles.faqContainer}>
        <div className={styles.title}>
          {locale === "fa" ? "سوالات متداول" : "Frequently Asked Questions"}
        </div>

        <FaqList faqData={faqData.slice(0, 6)} locale={locale} />

        <div className={styles.viewAll}>
          <Link href="/faq" className="animateFadeInUp">
            {locale === "fa" ? "مشاهده همه" : "View All"}
          </Link>
        </div>
      </div>
    </div>
  );
};
