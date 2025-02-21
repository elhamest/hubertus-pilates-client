"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import ThemeChanger from "../UI/theme-changer/DarkSwitch";
import Image from "next/image";
import { faConstants } from "../../../public/locales/fa/common";
import logoImage from "../../../public/img/logo.svg";

import styles from "./Navbar.module.css";
import { faNavigations } from "../../data/fa";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const textGradientClass =
    resolvedTheme === "dark"
      ? "textGradientEffectForDarkMode"
      : "textGradientEffectForLightMode";

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
                // src="/img/logo.svg"
                src={logoImage}
                alt={faConstants.companyName}
                width={80}
                style={{ height: "auto" }}
              />
            </span>
            <span
              className={`text-primaryColor dark:text-pureWhiteColor ${styles.logoText}`}
            >
              {faConstants.companyName}
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
            {faNavigations?.map((item, index) => (
              <Link
                key={index}
                href={item?.path}
                className="w-full px-4 py-2 -ml-4 rounded-md dark:text-pureWhiteColor hover:text-primaryColor hover:bg-pureWhiteColor dark:hover:text-primaryColor focus:text-primaryColor focus:outline-none hover:tracking-wide transition-all duration-300"
                onClick={() => setIsOpen(!isOpen)}
              >
                {item?.title}
              </Link>
            ))}
          </div>
        )}

        {/* Desktop Menu */}
        <div
          className={`hidden lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:flex lg:items-center ${
            isScrolled ? styles.scrolledMenu : ""
          }`}
        >
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {faNavigations?.map((menu, index) => (
              <li className={styles.navItem} key={index}>
                <Link
                  key={index}
                  href={menu?.path}
                  className={`inline-block px-4 py-2 text-lg font-normal no-underline rounded-md dark:text-pureWhiteColor hover:text-primaryColor dark:hover:text-primaryColor focus:text-primaryColor transition-all duration-300 hover:tracking-wide ${textGradientClass}`}
                >
                  {menu?.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
