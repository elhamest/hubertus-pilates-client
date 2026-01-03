"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
// import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

import Logo from "@/components/UI/svg/Logo";
import MobileNavbar from "./mobile-navbar";
import ThemeChanger from "../theme-toggle/ThemeToggle";
import { faNavigations } from "../../../data/fa";
import { enNavigations } from "../../../data/en";

import styles from "./Header.module.css";
import { PathnameContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";

const Header = ({ locale = "fa" }) => {
  const pathname = usePathname();
  const navigations = locale === "fa" ? faNavigations : enNavigations;
  const filteredNavigations = navigations?.filter(
    (item) => item?.showOnHeader === true
  );

  // const { resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isHomePage = pathname === "/";

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

  //  ${
  //       isScrolled && resolvedTheme === "light" ? styles.scrolledLight : ""
  //     } ${isScrolled && resolvedTheme === "dark" ? styles.scrolledDark : ""}
  return (
    <header
      className={`${styles.headerWrapper}  ${isScrolled ? styles.scrolled : ""}
      `}
    >
      <nav className={styles.container}>
        <span className={styles.logoImage}>
          <Link href="/">
            {isScrolled || !isHomePage ? (
              <Logo color="#86508e" />
            ) : (
              <Logo color="#fff" />
            )}
          </Link>
        </span>

        {/* Theme Changer */}
        <div className={styles.themeChangerContainer}>
          {/* Desktop Menu */}
          <div className={styles.desktopMenu}>
            <ul
              className={`${styles.navList} ${
                !isHomePage ? styles.notHomePage : ""
              }`}
            >
              {filteredNavigations?.map((menu, index) => (
                <li key={index}>
                  <Link key={index} href={menu?.path}>
                    {menu?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.themeChangerWrapper}>
            <ThemeChanger />
          </div>

          {/* Mobile menu button */}
          <button
            aria-label="Toggle Menu"
            className={styles.mobileMenuButton}
            onClick={toggleMenu}
          >
            <svg
              className={`${styles.menuIcon} ${
                isScrolled ? styles.scrolled : ""
              }`}
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
            className={`${styles.mobileMenu} ${styles.lightShadow} ${styles.open}`}
          >
            <MobileNavbar
              navigations={filteredNavigations}
              setIsOpen={toggleMenu}
            />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
