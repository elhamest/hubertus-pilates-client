"use client";
import Link from "next/link";
import ThemeChanger from "../DarkSwitch";
import Image from "next/image";
import { useState } from "react";

import { faConstants } from "../../../public/locales/fa/common";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const navigations = faConstants.navigations;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.navbarWrapper}>
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto lg:justify-between">
        {/* Logo  */}
        <Link href="/">
          <span className="flex items-center text-2xl font-medium">
            <span className="ml-2">
              <Image
                src="/img/logo-fa.jpg"
                alt={faConstants.hubertus}
                width="32"
                height="32"
              />
            </span>
            <span className="text-primaryColor dark:text-darkPrimaryColor">
              {faConstants.hubertus}
            </span>
          </span>
        </Link>

        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <ThemeChanger />
        </div>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle Menu"
          className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6 fill-secondaryColor"
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

        {/* Mobile menu */}
        {isOpen && (
          <div className="flex flex-wrap w-full mt-5 lg:hidden">
            {navigations?.map((item, index) => (
              <Link
                key={index}
                href={item?.path}
                className="w-full px-4 py-2 -ml-4 rounded-md text-primaryTextColor dark:text-pureWhiteColor hover:text-primaryColor hover:bg-pureWhiteColor dark:hover:text-primaryColor focus:text-primaryColor focus:outline-none"
              >
                {item?.title}
              </Link>
            ))}
          </div>
        )}

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigations?.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href={menu?.path}
                  className="inline-block px-4 py-2 text-lg font-normal no-underline rounded-md text-primaryTextColor dark:text-pureWhiteColor hover:text-primaryColor dark:hover:text-primaryColor focus:text-primaryColor focus:outline-none"
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
};
