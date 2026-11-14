"use client";

import { createContext, useContext, useState, useEffect } from "react";

// The theme is a class on <html>: "dark" or "light".
// THEME_SCRIPT runs in <head> before the page is shown, so there is no flash
// of the wrong theme. React only reads that class and changes it on toggle.
// localStorage "theme" keeps the user's choice. With no choice, the system theme is used.
export const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem("theme");if(t!=="dark"&&t!=="light"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}var c=document.documentElement.classList;c.remove("dark","light");c.add(t)}catch(e){}})()`;

const ThemeContext = createContext({ theme: "light", toggleTheme: () => {} });

function applyTheme(theme) {
  const classes = document.documentElement.classList;
  classes.remove("dark", "light");
  classes.add(theme);
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Read the theme that THEME_SCRIPT already set.
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");

    // Follow the system theme only while the user has not picked one.
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = (e) => {
      if (localStorage.getItem("theme")) return;
      const systemTheme = e.matches ? "dark" : "light";
      applyTheme(systemTheme);
      setTheme(systemTheme);
    };
    media.addEventListener("change", onSystemChange);
    return () => media.removeEventListener("change", onSystemChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
