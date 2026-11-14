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

// Make Persian text easy to compare: Arabic ي/ك become Persian ی/ک,
// half-spaces and extra spaces become one space, and case is ignored.
const normalize = (text) =>
  text
    .replace(/[يى]/g, "ی")
    .replace(/ك/g, "ک")
    .replace(/[\u200c\s]+/g, " ")
    .trim()
    .toLowerCase();

const FaqPage = ({ locale = "fa" }) => {
  const pathToTitleMap = generatePathToTitleMap(locale);
  const faqData = locale === "fa" ? faFaq : enFaq;

  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [searchValue, setSearchValue] = useState("");
  const [query, setQuery] = useState(""); // the text we searched for

  const isSearching = query !== "";

  const filteredFaqs = useMemo(() => {
    if (!isSearching) return [];
    return faqData.filter((item) =>
      normalize(`${item.question} ${item.answer}`).includes(query)
    );
  }, [query, isSearching, faqData]);

  const visibleFaqs = isSearching
    ? filteredFaqs
    : faqData.slice(0, visibleCount);

  const hasMore = !isSearching && visibleCount < faqData.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  // Runs on the search button and on the Enter key (form submit)
  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(normalize(searchValue));
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    if (!e.target.value.trim()) setQuery(""); // empty box shows all again
  };

  const handleClearSearch = () => {
    setSearchValue("");
    setQuery("");
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

          <form className={styles.searchWrapper} onSubmit={handleSearch}>
            <div className={styles.searchInputWrapper}>
              <input
                type="text"
                name="search"
                enterKeyHint="search"
                value={searchValue}
                placeholder={
                  locale === "fa" ? "جستجو در سوالات..." : "Search FAQs..."
                }
                onChange={handleChange}
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

            <button type="submit" className={styles.searchButton}>
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
          </form>

          {isSearching && filteredFaqs.length === 0 ? (
            <div className={styles.noFaq}>
              {locale === "fa" ? "سوالی پیدا نشد" : "No questions found"}
            </div>
          ) : (
            <FaqList key={query} faqData={visibleFaqs} locale={locale} />
          )}

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
