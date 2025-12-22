"use client";
import React from "react";
import { useTheme } from "../../theme-provider/ThemeProvider";
import styles from "./ThemeToggle.module.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  // Add debug logging
  const handleToggle = () => {
    console.log("Before toggle - Current theme:", theme);
    console.log("Before toggle - localStorage:", localStorage.getItem("theme"));
    toggleTheme();
    // Check after a short delay
    setTimeout(() => {
      console.log(
        "After toggle - localStorage:",
        localStorage.getItem("theme")
      );
      console.log("HTML class:", document.documentElement.className);
    }, 100);
  };

  return (
    <div className={styles.themeChanger}>
      <button
        onClick={handleToggle}
        className={`${styles.button} ${
          theme === "dark" ? styles.lightButton : styles.darkButton
        }`}
        aria-label={
          theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
        }
      >
        <span className={styles.srOnly}>
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </span>

        {theme === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.icon}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.icon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
