"use client";
import React from "react";
import Slider from "@/components/UI/slider";

function HomeSlider({ imagePaths }) {
  return (
    <>
      <Slider imagePaths={imagePaths} />
    </>
  );
}

export default HomeSlider;
