import React from "react";
import styles from "./Container.module.css";

export function Container(props) {
  return (
    <div
      className={`container ${styles.container} mx-auto ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
}
