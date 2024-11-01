import { Container } from "@/components/Container";
import { Hero } from "@/components/home/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
import HomeSlider from "@/components/home/HomeSlider";

export default function Home() {
  // const imagePaths = [
  //   "/img/hero/hero1.webp",
  //   "/img/hero/hero2.webp",
  //   "/img/hero/hero3.webp",
  //   "/img/hero/hero4.webp",
  //   "/img/hero/hero5.webp",
  //   "/img/hero/hero6.webp",
  //   "/img/hero/hero7.webp",
  //   "/img/hero/hero8.webp",
  // ];

  const imagePaths = [
    "/img/hero2/hero1.jpg",
    "/img/hero2/hero2.jpg",
    "/img/hero2/hero3.jpg",
    "/img/hero2/hero4.jpg",
    "/img/hero2/hero5.jpg",
  ];

  return (
    <>
      <Hero />
      <HomeSlider imagePaths={imagePaths} />

      <Container>
        <SectionTitle
          preTitle="Nextly Benefits"
          title=" Why should you use this landing page"
        >
          Nextly is a free landing page & marketing website template for
          startups and indie projects. Its built with Next.js & TailwindCSS. And
          its completely open-source.
        </SectionTitle>

        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />

        <SectionTitle
          preTitle="Watch a video"
          title="Learn how to fullfil your needs"
        >
          This section is to highlight a promo or demo video of your product.
          Analysts says a landing page with video has 3% more conversion rate.
          So, don&apos;t forget to add one. Just like this.
        </SectionTitle>

        <Video videoId="fZ0D0cnR88E" />

        <SectionTitle
          preTitle="Testimonials"
          title="Here's what our customers said"
        >
          Testimonials is a great way to increase the brand trust and awareness.
          Use this section to highlight your popular customers.
        </SectionTitle>

        <Testimonials />

        <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
          Answer your customers possible questions here, it will increase the
          conversion rate as well as support or chat requests.
        </SectionTitle>

        <Faq />
        <Cta />
      </Container>
    </>
  );
}
