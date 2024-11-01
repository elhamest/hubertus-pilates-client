import React from "react";
import Slider from "@/components/UI/slider";

function HomeSlider({ imagePaths }) {
  return (
    <div className="mt-4">
      <Slider imagePaths={imagePaths} />
    </div>
  );
}

export default HomeSlider;
