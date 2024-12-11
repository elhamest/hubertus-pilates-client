"use client";

import { useEffect } from "react";

export function useScrollAnimation(selector, threshold = 0.1) {
  useEffect(() => {
    const element = document.querySelector(selector);

    if (!element) return; // Exit if the element is not found

    // Function to animate the element
    function animateElement() {
      element.classList.add("animate");
    }

    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateElement(); // Trigger the animation when the element is in the viewport
          }
        });
      },
      {
        threshold, // Trigger when the specified percentage of the element is visible
      }
    );

    // Start observing the element
    observer.observe(element);

    // Cleanup the observer on component unmount
    return () => {
      observer.unobserve(element);
    };
  }, [selector, threshold]); // Dependencies for the useEffect
}
