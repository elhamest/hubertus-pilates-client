# about-us Specification

## Purpose
Company page `/about-us`. Data: `faAboutUs`, `faPersons` in `src/data/fa/index.js`. Code: `src/app/about-us/page.jsx`.

## Requirements

### Requirement: Company text and founders
`/about-us` SHALL show the title and three paragraphs from `faAboutUs`, and one card per person in `faPersons` with photo, name, education, and a list of descriptions.

#### Scenario: Open about us
- **WHEN** the visitor opens `/about-us`
- **THEN** they see "درباره هوبرتوس", three paragraphs, and two founder cards
