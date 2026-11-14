# home-page Specification

## Purpose
Landing page at `/`. Code: `src/app/page.js`, `src/components/home/*`, `src/components/UI/gallery`.

## Requirements

### Requirement: Home sections in order
The home page SHALL show, in this order: Hero, Benefits, the collections slider, and the FAQ preview.

#### Scenario: Visitor opens home
- **WHEN** a visitor opens `/`
- **THEN** they see the hero, then benefits, then the collections slider, then the FAQ preview

### Requirement: Hero
The hero SHALL show the company description, the title "گروه مهندسی هوبرتوس", a big image, and a "مشاهده محصولات" button that links to `/collections`.

#### Scenario: Click view products
- **WHEN** the visitor clicks "مشاهده محصولات"
- **THEN** they go to `/collections`

### Requirement: Benefits
The benefits section SHALL show the heading "تمایز ما در یک نگاه" and each item of `faBenefits.items`, with two feature images.

#### Scenario: Benefits list
- **WHEN** the home page loads
- **THEN** all items in `faBenefits.items` are shown

### Requirement: Collections slider
The home page SHALL show a horizontal slider with one card per collection in `faProductCollections` (cover image and title, linking to the collection page), with next/previous buttons that scroll by 320px.

#### Scenario: Click a collection card
- **WHEN** the visitor clicks the "ریفورمرها" card
- **THEN** they go to `/collections/reformers`

### Requirement: FAQ preview
The home page SHALL show the first 6 items of `faFaq` as an accordion and a "مشاهده همه" link to `/faq`.

#### Scenario: More than 6 questions exist
- **WHEN** `faFaq` has more than 6 items
- **THEN** only the first 6 are shown on home
