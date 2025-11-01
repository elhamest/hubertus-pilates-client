import React from "react";
import { Container } from "@/components/UI/container";
import { faTestimonials } from "@/data/fa";
import { enTestimonials } from "@/data/en";

import TestimonialsItem from "./testimonialsItem";

export const Testimonials = ({ locale = "fa" }) => {
  const data = locale === "fa" ? faTestimonials : enTestimonials;
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        {data?.items?.map((item) => (
          <div className="lg:col-span-2 xl:col-auto" key={item?.id}>
            <TestimonialsItem data={item} />
          </div>
        ))}
      </div>
    </Container>
  );
};
