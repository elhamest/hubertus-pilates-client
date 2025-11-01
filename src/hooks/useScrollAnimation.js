"use client";

import { useEffect } from "react";

export function useScrollAnimation(selector, threshold = 0.1) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    if (!elements.length) return; // Exit if the element is not found

    // Function to animate the element
    function animateElement(element) {
      element.classList.add("animate");
    }

    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateElement(entry.target); // Trigger the animation for the intersecting element
          }
        });
      },
      {
        threshold, // Trigger when the specified percentage of the element is visible
      }
    );

    // Start observing the element
    elements.forEach((element) => observer.observe(element));

    // Cleanup the observer on component unmount
    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, [selector, threshold]); // Dependencies for the useEffect
}
