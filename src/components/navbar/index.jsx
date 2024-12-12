"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import ThemeChanger from "../UI/theme-changer/DarkSwitch";
import Image from "next/image";
// import NavLink from "../UI/nav-link/NavLink";
import { faConstants } from "../../../public/locales/fa/common";
import logoImage from "../../../public/img/logo.svg";
import styles from "./Navbar.module.css";

export function Navbar() {
  const navigations = faConstants.navigations;
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

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
      } ${isScrolled && theme === "light" ? styles.scrolledLight : ""} ${
        isScrolled && theme === "dark" ? styles.scrolledDark : ""
      }`}
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
                alt={faConstants.hubertus}
                width={80}
                height={80}
                style={{ height: "auto" }}
              />
            </span>
            <span
              className={`text-thirdColor dark:text-ligthGrayColor ${styles.logoText}`}
            >
              {faConstants.hubertus}
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
            className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6 fill-thirdColor"
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
          <div className="flex flex-wrap w-full mt-5 lg:hidden">
            {navigations?.map((item, index) => (
              <Link
                key={index}
                href={item?.path}
                className="w-full px-4 py-2 -ml-4 rounded-md text-primaryTextColor dark:text-pureWhiteColor hover:text-primaryColor hover:bg-pureWhiteColor dark:hover:text-primaryColor focus:text-primaryColor focus:outline-none hover:tracking-wide transition-all duration-300"
                onClick={() => setIsOpen(!open)}
              >
                {item?.title}
              </Link>
            ))}
          </div>
        )}

        {/* menu  */}
        <div
          className={`hidden text-center lg:flex lg:items-center ${
            isScrolled ? styles.scrolledMenu : ""
          }`}
        >
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigations?.map((menu, index) => (
              <li className={styles.navItem} key={index}>
                <Link
                  key={index}
                  href={menu?.path}
                  className="inline-block px-4 py-2 text-lg font-normal no-underline rounded-md text-primaryTextColor dark:text-pureWhiteColor hover:text-thirdColor dark:hover:text-thirdColor focus:text-thirdColor focus:outline-none transition-all duration-300 hover:tracking-wide"
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
