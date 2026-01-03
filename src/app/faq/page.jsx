"use client";
import Image from "next/image";
import { useState, useMemo } from "react";

import { Container } from "@/components/UI/container";
import Breadcrumb from "@/components/UI/breadcrumb";
import { generatePathToTitleMap } from "@/utils/pathMaps";
import { enFaq } from "@/data/en";
import { faFaq } from "@/data/fa";
import { FaqList } from "@/components/faq-list";

import searchIcon from "../../../public/img/icons/search-gray.svg";
import styles from "./FaqPage.module.css";

const ITEMS_PER_PAGE = 8;

const FaqPage = ({ locale = "fa" }) => {
  const pathToTitleMap = generatePathToTitleMap(locale);
  const faqData = locale === "fa" ? faFaq : enFaq;

  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [searchValue, setSearchValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const filteredFaqs = useMemo(() => {
    if (!searchValue.trim()) return [];

    const keyword = searchValue.toLowerCase();

    return faqData.filter(
      (item) =>
        item.question.toLowerCase().includes(keyword) ||
        item.answer.toLowerCase().includes(keyword)
    );
  }, [searchValue, faqData]);

  const visibleFaqs = isSearching
    ? filteredFaqs
    : faqData.slice(0, visibleCount);

  const hasMore = !isSearching && visibleCount < faqData.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  const handleSearch = () => {
    setIsSearching(!!searchValue.trim());
  };

  const handleClearSearch = () => {
    setSearchValue("");
    setIsSearching(false);
    setVisibleCount(ITEMS_PER_PAGE);
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

          <div className={styles.searchWrapper}>
            <div className={styles.searchInputWrapper}>
              <input
                type="text"
                name="search"
                value={searchValue}
                placeholder={
                  locale === "fa" ? "جستجو در سوالات..." : "Search FAQs..."
                }
                onChange={(e) => setSearchValue(e.target.value)}
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

            <button onClick={handleSearch} className={styles.searchButton}>
              <span className={styles.desktopSearch}>
                {locale === "fa" ? "جستجو" : "Search"}
              </span>
              <span className={styles.mobileSearch}>
                <Image
                  src={searchIcon}
                  alt="search icon"
                  width={30}
                  height={30}
                />
              </span>
            </button>
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
