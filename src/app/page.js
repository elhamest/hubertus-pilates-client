"use client";
import { Container } from "@/components/UI/container";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Hero } from "@/components/home/hero";
import { SectionTitle } from "@/components/UI/section-title";
import { Video } from "@/components/home/video";
import { Testimonials } from "@/components/home/testimonials";
import { Faq } from "@/components/home/faq";
import { Cta } from "@/components/Cta";

import { faProductCollections } from "@/data/fa";
import HomeSlider from "@/components/home/home-slider";
import Benefits from "@/components/home/benefits";
import Gallery from "@/components/UI/gallery";
import { faConstants } from "../../public/locales/fa/common";
//  import { faConstants } from "../../out/locales/fa/common";

import styles from "./HomePage.module.css";

const imagePaths = [
  "/img/slider/s1.webp",
  "/img/slider/s2.webp",
  "/img/slider/s3.webp",
  "/img/slider/s4.webp",
  "/img/slider/s5.webp",
  "/img/slider/s6.webp",
  "/img/slider/s7.webp",
  "/img/slider/s8.webp",
];

export default function Home({ locale = "fa" }) {
  // Use the custom hook for scroll animation
  useScrollAnimation(".animateFadeInUp", 0.1); // Trigger when 10% of the element is visible

  return (
    <div className={styles.homeWrapper}>
      <Hero />

      <Container>
        <Benefits />
      </Container>

      <Gallery
        title={faConstants.collectionGalleryTitle}
        items={faProductCollections}
      />
      {/* <SectionTitle
            preTitle={locale === "fa" ? "یک ویدیو تماشا کنید" : "Watch a video"}
            title={
              locale === "fa"
                ? "یاد بگیرید که چگونه نیازهای خود را برآورده کنید"
                : "Learn how to fullfil your needs"
            }
          >
            {locale === "fa"
              ? `این بخش برای برجسته کردن یک ویدیوی تبلیغاتی یا نمایشی از محصول شماست.
تحلیلگران می‌گویند یک صفحه فرود با ویدیو ۳٪ نرخ تبدیل بیشتری دارد.

پس فراموش نکنید که یکی اضافه کنید. درست مثل این.`
              : `This section is to highlight a promo or demo video of your product.
            Analysts says a landing page with video has 3% more conversion rate.
            So, don&apos;t forget to add one. Just like this.`}
          </SectionTitle>
          <Video videoId="fZ0D0cnR88E" /> */}

      {/* ------------------------------------ */}
      {/* <SectionTitle
            preTitle={locale === "fa" ? "نظرات مشتریان" : "Testimonials"}
            title={
              locale === "fa"
                ? "این چیزی است که مشتریان ما گفتند"
                : "Here's what our customers said"
            }
          >
            {locale === "fa"
              ? "نظرات مشتریان راهی عالی برای افزایش اعتماد و آگاهی از برند است. از این بخش برای برجسته کردن مشتریان محبوب خود استفاده کنید."
              : `Testimonials is a great way to increase the brand trust and
            awareness. Use this section to highlight your popular customers.`}
          </SectionTitle>
          <Testimonials /> */}
      {/* ------------------------------------ */}

      <Faq locale={locale} />

      {/* <Cta /> */}
      {/* <HomeSlider imagePaths={imagePaths} /> */}
    </div>
  );
}
