# product-catalog Specification

## Purpose
Product collections and product pages. Data: `faProductCollections` in `src/data/fa/index.js`. Code: `src/app/collections/**`, `src/components/collections/collection`, `src/components/UI/gallery/galleryItems`, `src/components/UI/thums-gallery`.

## Requirements

### Requirement: Static pages from data
At build time the site SHALL create one page per collection (`/collections/<collection slug>/`) and one page per product (`/collections/<collection slug>/<product slug>/`) from `faProductCollections`, using `generateStaticParams`.

#### Scenario: New product added to data
- **WHEN** a product with slug `my-product` is added to the `reformers` collection and the site is built
- **THEN** the page `/collections/reformers/my-product` exists

### Requirement: All collections page
`/collections` SHALL show the title "همه تجهیزات" and one card per collection (cover image + title) linking to its page.

#### Scenario: Open all collections
- **WHEN** the visitor opens `/collections`
- **THEN** they see 4 cards: ریفورمرها, تاورها و تراپز بارها, صندلی ها و کمان ها, and تجهیزات اضافی پیلاتس

### Requirement: Collection page
A collection page SHALL show the collection title and one card per product with the product's first image, title, short `desc`, and "مشاهده بیشتر", linking to the product page. If the collection is not found it SHALL show "مجموعه ای یافت نشد.".

#### Scenario: Open reformers
- **WHEN** the visitor opens `/collections/reformers`
- **THEN** they see cards for classic-reformer, reformer-with-tower and reformer-combo

### Requirement: Product page
A product page SHALL find the product by `slug` across all collections and show: an image slider with thumbnails (thumbnails on desktop, dots on mobile), the product title, the long description `detail.desc` (or the short `desc` when there is no `detail.desc`; no empty box), and the list `detail.bullets`. If not found it SHALL show "محصول یافت نشد.".

#### Scenario: Product with details
- **WHEN** the visitor opens `/collections/reformers/classic-reformer`
- **THEN** they see the image slider, the title "ریفورمر کلاسیک", the long text and 9 feature bullets

#### Scenario: Product without details
- **WHEN** the product has `desc` but `detail: null`
- **THEN** the images, the title and the short `desc` are shown

### Requirement: Image lightbox
Clicking a main slider image SHALL open a full-screen lightbox at that image, with next/previous and dots. It SHALL close on the close button, a click outside the image, or the Escape key, and SHALL block page scroll while open.

#### Scenario: Close with Escape
- **WHEN** the lightbox is open and the visitor presses Escape
- **THEN** the lightbox closes and page scroll works again
