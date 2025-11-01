"use client";
import React, { useState } from "react";
import { Container } from "@/components/UI/container";
// import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { enFaq } from "../../../data/en";
import { faFaq } from "../../../data/fa";

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
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqData?.map((item, index) => (
          <div key={item.question} className="mb-5">
            <button
              onClick={() => toggleAccordion(index)}
              className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-accentColorBlue rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-richBlack-800 dark:text-silverChalice"
            >
              <span>{item.question}</span>

              {/* <ChevronUpIcon
                className={`${
                  openIndex === index ? "transform rotate-180" : ""
                } w-5 h-5 text-indigo-500`}
              /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`fa-solid fa-chevron-up ${
                  openIndex === index ? "transform rotate-180" : ""
                } w-5 h-5 text-indigo-500`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-4 pt-4 pb-2 text-accentColorBlue dark:text-silverChalice">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
};
