"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";

import Navbar from "./navbar";
import ThemeChanger from "../theme-changer/DarkSwitch";
import { faConstants } from "../../../../public/locales/fa/common";
import { faNavigations } from "../../../data/fa";
import logoImage from "../../../../public/img/logo.svg";

import styles from "./Header.module.css";

const Header = () => {
  const { resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.navbarWrapper} ${
        isScrolled ? styles.scrolled : ""
      } ${
        isScrolled && resolvedTheme === "light" ? styles.scrolledLight : ""
      } ${isScrolled && resolvedTheme === "dark" ? styles.scrolledDark : ""}`}
    >
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto lg:justify-between">
        {/* Logo  */}
        <Link href="/">
          <span
            className={`flex items-center text-2xl font-medium ${
              isScrolled ? styles.scrolledLogo : ""
            }`}
          >
            <span>
              <Image
                src={logoImage}
                alt={faConstants?.companyName}
                width={80}
                style={{ height: "auto" }}
              />
            </span>
            <span
              className={`text-primaryColor dark:text-pureWhiteColor ${styles.logoText}`}
            >
              {faConstants?.companyName}
            </span>
          </span>
        </Link>

        <div className="flex items-center lg:order-2">
          <div
            className={`gap-3 ml-5 lg:ml-0 lg:flex mr-auto lg:mr-0 lg:order-2 ${
              isScrolled ? styles.scrolledThemeChanger : ""
            }`}
          >
            <ThemeChanger />
          </div>

          {/* Mobile menu button */}
          <button
            aria-label="Toggle Menu"
            className="px-2 py-1 text-accentColorBlue rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-accentColorGary dark:focus:bg-trueGray-700"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6 fill-primaryColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div
            className={`flex flex-wrap w-full mt-5 lg:hidden ${styles.mobileMenu} ${styles.open}`}
          >
            <MobileNavbar navigations={faNavigations} setIsOpen={setIsOpen} />
          </div>
        )}

        {/* Desktop Menu */}
        <div
          className={`hidden lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:flex lg:items-center ${
            isScrolled ? styles.scrolledMenu : ""
          }`}
        >
          <Navbar navigations={faNavigations} resolvedTheme={resolvedTheme} />
        </div>
      </nav>
    </div>
  );
};

export default Header;
