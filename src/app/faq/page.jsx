"use client";
import { useState } from "react";
import { Container } from "@/components/UI/container";
import Breadcrumb from "@/components/UI/breadcrumb";
import { generatePathToTitleMap } from "@/utils/pathMaps";
import { enFaq } from "@/data/en";
import { faFaq } from "@/data/fa";
import { FaqList } from "@/components/faq-list";

import styles from "./FaqPage.module.css";

const ITEMS_PER_PAGE = 8;

const FaqPage = ({ locale = "fa" }) => {
  const pathToTitleMap = generatePathToTitleMap(locale);
  const faqData = locale === "fa" ? faFaq : enFaq;

  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const visibleFaqs = faqData.slice(0, visibleCount);
  const hasMore = visibleCount < faqData.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

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

          <FaqList faqData={visibleFaqs} locale={locale} />

          {hasMore && (
            <div className={styles.loadMoreWrapper}>
              <button onClick={handleLoadMore} className={styles.loadMore}>
                {locale === "fa" ? "نمایش بیشتر" : "Load more"}
              </button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default FaqPage;
