"use client";
import React from "react";
import Slider from "@/components/UI/slider";

const HomeSlider = ({ imagePaths }) => {
  return (
    <>
      <Slider imagePaths={imagePaths} />
    </>
  );
};

export default HomeSlider;
