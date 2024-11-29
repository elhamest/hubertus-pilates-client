import React from "react";
import styles from "./Container.module.css";

export function Container(props) {
  return (
    // xl:px-0
    <div
      className={`container mx-auto ${styles.containerWrapper} ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
}
