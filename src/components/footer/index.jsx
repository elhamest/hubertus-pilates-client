import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/UI/container/Container";
import { faConstants } from "../../../public/locales/fa/common";
import styles from "./Footer.module.css";

export function Footer() {
  const navigations = faConstants.navigations;
  const legal = ["Terms", "Privacy", "Legal"];
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-300 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-medium text-thirdColor dark:text-gray-100"
              >
                <Image
                  src="/img/logo.svg"
                  alt={faConstants.hubertus}
                  width={80}
                  height={80}
                  style={{ height: "auto" }}
                />
                <span>{faConstants.hubertus}</span>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400 text-justify">
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

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigations?.map((item, index) => (
                <Link
                  key={index}
                  href={item?.path}
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 dark:hover:text-thirdColor  hover:text-thirdColor hover:tracking-wide transition-all duration-300 focus:text-thirdColor focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item?.title}
                </Link>
              ))}
            </div>
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
            <div className="mt-5 text-gray-500 dark:text-gray-500">
              <a
                href="https://instagram.com/hubertus_pilatesmachine" //?igshid=134r9w3ht4adu
                target="_blank"
                rel="noopener"
                className={`flex items-center ${styles.fillSvgAnimattion}`}
              >
                <span className="sr-only">Instagram</span>
                <Instagram />
                <span className="mx-2 hover:text-gray-600 transition-all duration-400 focus:text-thirdColor">
                  {faConstants.followUs}
                </span>
              </a>
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
          </a>{" "}
          Designed by{" "}
          <a
            href="https://github.com/elhamest/"
            target="_blank"
            rel="noopener"
            className="hover:text-thirdColor transition-all duration-300 focus:text-thirdColor"
          >
            Elham Estedlali
          </a>
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
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19.4 4.2c-2.5-2.5-6.6-2.5-9.1 0l-9.1 9.1c-2.5 2.5-2.5 6.6 0 9.1 2.5 2.5 6.6 2.5 9.1 0l9.1-9.1c2.5-2.5 2.5-6.6 0-9.1zm-1.4 7.7c-.1.3-.3.6-.6.8l-1.4 1.4c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7l1.4-1.4c.2-.2.4-.3.7-.3.3 0 .5.1.7.3.2.2.3.4.3.7zm-2.8-2.8c-.1.3-.3.6-.6.8l-1.4 1.4c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7l1.4-1.4c.2-.2.4-.3.7-.3.3 0 .5.1.7.3.2.2.3.4.3.7zm-2.8-2.8c-.1.3-.3.6-.6.8l-1.4 1.4c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7l1.4-1.4c.2-.2.4-.3.7-.3.3 0 .5.1.7.3.2.2.3.4.3.7z" />
  </svg>
);

// https://wa.me/+989149191831
