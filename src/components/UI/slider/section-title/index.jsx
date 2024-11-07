import React from "react";
import { Container } from "@/components/Container";
import styles from "./SectionTitle.module.css";
import Logo from "@/components/Logo";

export const SectionTitle = (props) => {
  return (
    <Container
      className={`flex w-full flex-col mt-4 ${styles.sectionTitleContainer} ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {props.preTitle && (
        // <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
        <Logo text={props.preTitle} />
        // </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          {props.title}
        </h2>
      )}

      {props.children && (
        <div className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          {props.children}
        </div>
      )}
    </Container>
  );
};
