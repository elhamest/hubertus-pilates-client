import React from "react";
import styles from "./Container.module.css";

export function Container(props) {
  // const extraPadding = props?.extraPadding;
  //  ${extraPadding ? styles.extraPadding : ""}
  return (
    <div
      className={`${styles.container} mx-auto ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
}
