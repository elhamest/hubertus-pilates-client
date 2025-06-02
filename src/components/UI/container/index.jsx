import React from "react";
import styles from "./Container.module.css";

export function Container(props) {
  const extraPadding = props?.extraPadding;

  return (
    <div
      className={`${styles.container} mx-auto ${
        props.className ? props.className : ""
      } ${extraPadding ? styles.extraPadding : ""}`}
    >
      {props.children}
    </div>
  );
}
