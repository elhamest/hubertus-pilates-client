import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/UI/container/Container";
import { faConstants } from "../../../public/locales/fa/common";
import logoImage from "../../../public/img/logo.svg";
import styles from "./Footer.module.css";

export function Footer() {
  const navigations = faConstants.navigations;
  const legal = ["Terms", "Privacy", "Legal"];
  return (
    <div className="relative" id="contact-us">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-300 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-medium text-thirdColor dark:text-gray-200"
              >
                <Image
                  // src="/img/logo.svg"
                  src={logoImage}
                  alt={faConstants.hubertus}
                  width={80}
                  height={80}
                  style={{ height: "auto" }}
                />
                <span>{faConstants.hubertus}</span>
              </Link>
            </div>

            <div className="max-w-md mt-6 text-gray-500 dark:text-gray-400 text-justify leading-7 pl-2">
              {faConstants.footerSlug}
            </div>

            {/* <div className="mt-5">
              <a
                href="https://vercel.com/?utm_source=web3templates&utm_campaign=oss"
                target="_blank"
                rel="noopener"
                className="relative block w-44"
              >
                <Image
                  src="/img/vercel.svg"
                  alt="Powered by Vercel"
                  width="212"
                  height="44"
                />
              </a>
            </div> */}
          </div>

          <div className="flex flex-wrap w-full mt-2 lg:ml-0">
            {navigations?.map((item, index) => (
              <Link
                key={index}
                href={item?.path}
                className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-400 dark:hover:text-thirdColor hover:text-thirdColor hover:tracking-wide transition-all duration-300 focus:text-thirdColor focus:bg-text-thirdColor focus:outline-none dark:focus:bg-trueGray-700"
              >
                {item?.title}
              </Link>
            ))}
          </div>

          <div>
            {/* <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 dark:hover:text-thirdColor hover:text-thirdColor hover:tracking-wide transition-all duration-300 focus:text-thirdColor focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item}
                </Link>
              ))}
            </div> */}
          </div>

          <div>
            <div className="text-gray-500 dark:text-gray-500 flex gap-5 flex-col">
              <div className="hover:text-gray-600 transition-all duration-400">
                {faConstants.followUs}
              </div>
              <div className={styles.socialLinks}>
                <a
                  href="https://instagram.com/hubertus_pilatesmachine" //?igshid=134r9w3ht4adu
                  target="_blank"
                  rel="noopener"
                >
                  <Instagram />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://wa.me/+989149191831"
                  target="_blank"
                  rel="noopener"
                >
                  <WhatsApp />
                  <span className="sr-only">WhatsApp</span>
                </a>
              </div>
              <div className="text-gray-500 hover:text-gray-600 transition-all duration-400 flex gap-2 flex-col">
                {faConstants.contactUs}
                <div className="text-right" style={{ direction: "ltr" }}>
                  +989149191831
                </div>
                <div className="text-right" style={{ direction: "ltr" }}>
                  +989149191832
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 mb-2 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Made with ♥ by{" "}
          <a
            href="http://hubertuspilates.com/"
            target="_blank"
            rel="noopener"
            className="hover:text-thirdColor transition-all duration-300 focus:text-thirdColor"
          >
            Hubertus Pilates.
          </a>
          {/* Designed by{" "}
          <a
            href="https://github.com/elhamest/"
            target="_blank"
            rel="noopener"
            className="hover:text-thirdColor transition-all duration-300 focus:text-thirdColor"
          >
            Elham Estedlali
          </a> */}
        </div>
      </Container>
    </div>
  );
}

const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);

const WhatsApp = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 464 488"
    fill="currentColor"
  >
    <path d="M462 228q0 93-66 159t-160 66q-56 0-109-28L2 464l40-120q-32-54-32-116q0-93 66-158.5T236 4t160 65.5T462 228zM236 39q-79 0-134.5 55.5T46 228q0 62 36 111l-24 70l74-23q49 31 104 31q79 0 134.5-55.5T426 228T370.5 94.5T236 39zm114 241q-1-1-10-7q-3-1-19-8.5t-19-8.5q-9-3-13 2q-1 3-4.5 7.5t-7.5 9t-5 5.5q-4 6-12 1q-34-17-45-27q-7-7-13.5-15t-12-15t-5.5-8q-3-7 3-11q4-6 8-10l6-9q2-5-1-10q-4-13-17-41q-3-9-12-9h-11q-9 0-15 7q-19 19-19 45q0 24 22 57l2 3q2 3 4.5 6.5t7 9t9 10.5t10.5 11.5t13 12.5t14.5 11.5t16.5 10t18 8.5q16 6 27.5 10t18 5t9.5 1t7-1t5-1q9-1 21.5-9t15.5-17q8-21 3-26z"></path>
  </svg>
);
