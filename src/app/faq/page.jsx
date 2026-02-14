"use client";
import { useState, useMemo } from "react";

import { Container } from "@/components/UI/container";
// import Breadcrumb from "@/components/UI/breadcrumb";
import FaqBanner from "@/components/UI/svg/FaqBanner";
import { generatePathToTitleMap } from "@/utils/pathMaps";
import { enFaq } from "@/data/en";
import { faFaq } from "@/data/fa";
import { FaqList } from "@/components/faq-list";

import styles from "./FaqPage.module.css";

const ITEMS_PER_PAGE = 8;

const FaqPage = ({ locale = "fa" }) => {
  // const pathToTitleMap = generatePathToTitleMap(locale);
  const faqData = locale === "fa" ? faFaq : enFaq;

  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [searchValue, setSearchValue] = useState("");

  const isSearching = !!searchValue.trim();

  const filteredFaqs = useMemo(() => {
    if (!searchValue.trim()) return [];

    const keyword = searchValue.toLowerCase();
    return faqData.filter(
      (item) =>
        item.question.toLowerCase().includes(keyword) ||
        item.answer.toLowerCase().includes(keyword),
    );
  }, [searchValue, faqData]);

  const visibleFaqs = isSearching
    ? filteredFaqs.slice(0, visibleCount)
    : faqData.slice(0, visibleCount);

  const hasMore =
    (!isSearching && visibleCount < faqData?.length) ||
    (isSearching && visibleCount < filteredFaqs?.length);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  const handleClearSearch = () => {
    setSearchValue("");
    setVisibleCount(ITEMS_PER_PAGE);
  };

  return (
    <div className={styles.faqPageWrapper}>
      <div className={styles.bannerWrapper}>
        {/* {pathToTitleMap && (
            <Breadcrumb locale={locale} pathToTitleMap={pathToTitleMap} />
          )} */}
        <div className={styles.faqBannerBackground}>
          <FaqBanner />
        </div>
        <div className={styles.bannerContent}>
          <div className={styles.title}>
            {locale === "fa" ? "سوالات متداول" : "Frequently Asked Questions"}
          </div>

          {/* search section */}
          <div className={styles.searchWrapper}>
            <div className={styles.searchInputWrapper}>
              <input
                type="text"
                name="search"
                value={searchValue}
                placeholder={
                  locale === "fa" ? "جستجو در سوالات..." : "Search FAQs..."
                }
                onChange={(e) => {
                  setSearchValue(e.target.value);
                  setVisibleCount(ITEMS_PER_PAGE);
                }}
                className={styles.searchInput}
              />

              {searchValue && (
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className={styles.clearButton}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <Container> */}
      {/* <div className={`pageHeight pageWrapper`}> */}
      {isSearching && filteredFaqs?.length === 0 && (
        <div className={styles.noResults}>
          {locale === "fa" ? "نتیجه‌ای یافت نشد" : "No results found"}
        </div>
      )}

      <FaqList faqData={visibleFaqs} locale={locale} />

      {hasMore && (
        <div className={styles.loadMoreWrapper}>
          <button onClick={handleLoadMore} className={styles.loadMore}>
            {locale === "fa" ? "نمایش بیشتر" : "Load more"}
          </button>
        </div>
      )}
      {/* </div> */}
      {/* </Container> */}
    </div>
  );
};

export default FaqPage;
