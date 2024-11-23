import { Container } from "@/components/UI/container/Container";
import { Hero } from "@/components/home/Hero";
// import { SectionTitle } from "@/components/UI/slider/section-title";
import { Products } from "@/components/products/Products";
// import { Video } from "@/components/Video";
// import { Testimonials } from "@/components/Testimonials";
// import { Faq } from "@/components/Faq";
// import { Cta } from "@/components/Cta";

// import { productOne, productTwo } from "@/components/data";
import { faProducts } from "@/components/data";
import HomeSlider from "@/components/home/HomeSlider";
// import { faConstants } from "../../public/locales/fa/common";
import Benefits from "@/components/home/Benefits";
// import Logo from "@/components/Logo";

export default function Home() {
  // const imagePaths = [
  //   "/img/slider/s1.webp",
  //   "/img/slider/s2.webp",
  //   "/img/slider/s3.webp",
  //   "/img/slider/s4.webp",
  //   "/img/slider/s5.webp",
  //   "/img/slider/s6.webp",
  //   "/img/slider/s7.webp",
  //   "/img/slider/s8.webp",
  // ];

  const imagePaths = [
    "../../img/slider2/s1.jpg",
    "../../img/slider2/s2.jpg",
    "../../img/slider2/s3.jpg",
    "../../img/slider2/s4.jpg",
    "../../img/slider2/s5.jpg",
    // "/img/slider2/s1.jpg",
    // "/img/slider2/s2.jpg",
    // "/img/slider2/s3.jpg",
    // "/img/slider2/s4.jpg",
    // "/img/slider2/s5.jpg",
  ];

  return (
    <>
      <Hero />
      <HomeSlider imagePaths={imagePaths} />

      <Container>
        <Benefits />

        <Products data={faProducts} />
        {/* <Products data={productOne} />
        <Products imgPos="right" data={productTwo} /> */}

        {/* <SectionTitle
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

        <Faq /> */}

        {/* <Cta /> */}
      </Container>
    </>
  );
}
