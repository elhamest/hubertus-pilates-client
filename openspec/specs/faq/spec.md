# faq Specification

## Purpose
Frequently asked questions page `/faq`. Data: `faFaq` in `src/data/fa/index.js`. Code: `src/app/faq/page.jsx`, `src/components/faq-list`.

## Requirements

### Requirement: Accordion list
Questions SHALL be shown as an accordion: clicking a question opens its answer; only one answer is open at a time; clicking the open question closes it.

#### Scenario: Open a second question
- **WHEN** question 1 is open and the visitor clicks question 2
- **THEN** question 2 opens and question 1 closes

### Requirement: Paging with load more
`/faq` SHALL first show 8 questions and a "نمایش بیشتر" button that shows 8 more each click. The button SHALL hide when all questions are shown.

#### Scenario: 18 questions
- **WHEN** `faFaq` has 18 items and the visitor clicks "نمایش بیشتر" twice
- **THEN** all 18 are shown and the button is hidden

### Requirement: Search
The page SHALL have a search box. When the visitor clicks the search button with non-empty text, it SHALL show only questions whose question or answer contains the text (case-insensitive), with no paging. A clear (✕) button SHALL empty the box and return to the normal paged list.

#### Scenario: Search for warranty
- **WHEN** the visitor types "گارانتی" and clicks search
- **THEN** only questions with "گارانتی" in the question or answer are shown

#### Scenario: Clear search
- **WHEN** the visitor clicks ✕
- **THEN** the box is empty and the first 8 questions are shown
