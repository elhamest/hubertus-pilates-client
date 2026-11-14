# site-layout Specification

## Purpose
Shared frame of every page: language and direction, header, footer, breadcrumb, and scroll animation.
Code: `src/app/layout.js`, `src/components/UI/header`, `src/components/UI/footer`, `src/components/UI/breadcrumb`, `src/utils/pathMaps.js`, `src/hooks/useScrollAnimation.js`.

## Requirements

### Requirement: Persian right-to-left document
The site SHALL render every page as Persian (`lang="fa"`) with right-to-left direction (`dir="rtl"`) using the Vazirmatn font, and SHALL use `faConstants.pageTitle` as the page title and `faConstants.companyDescription` as the meta description.

#### Scenario: Any page is opened
- **WHEN** a visitor opens any page
- **THEN** the `<html>` element has `lang="fa"` and `dir="rtl"`
- **AND** the title is "هوبرتوس پیلاتس"

### Requirement: Header navigation
The header SHALL show the logo (link to `/`), the links from `faNavigations` where `showOnHeader` is true, and the theme toggle. On small screens it SHALL show a menu button that opens and closes a mobile menu; clicking a link in the mobile menu SHALL close it.

#### Scenario: Header style on home page
- **WHEN** the visitor is on `/` and has not scrolled
- **THEN** the header is transparent and the logo is white
- **WHEN** the visitor scrolls down or is on another page
- **THEN** the header gets a background and the logo is purple (#86508e)

### Requirement: Footer with contacts
The footer SHALL have `id="contact-us"` and SHALL show the logo, the company slogan (`faConstants.footerSlug`), links from `faNavigations` where `showOnFooter` is true, Instagram and WhatsApp links, two phone numbers as `tel:` links, and a copyright line with the current year.

#### Scenario: Contact link in header
- **WHEN** the visitor clicks "تماس با ما" (`#contact-us`)
- **THEN** the page scrolls to the footer contacts

### Requirement: Breadcrumb
Every page except home SHALL show a breadcrumb built from the URL segments. Each segment title SHALL come from `generatePathToTitleMap()` (navigation, collection and product titles); unknown segments SHALL show the segment with dashes turned into spaces. The last segment SHALL be plain text, others SHALL be links.

#### Scenario: Product page breadcrumb
- **WHEN** the visitor opens `/collections/reformers/classic-reformer`
- **THEN** the breadcrumb shows Home icon › محصولات › ریفورمرها › ریفورمر کلاسیک

### Requirement: Scroll fade-in animation
On the home page, elements with class `animateFadeInUp` SHALL get class `animate` when at least 10% of the element is visible.

#### Scenario: Element enters the view
- **WHEN** a hero or benefit item scrolls into view
- **THEN** it gets class `animate` and fades in
