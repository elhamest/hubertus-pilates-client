import React from "react";
import styles from "./Container.module.css";

export function BreadCrumbContainer(props) {
  return (
    <div
      className={`mx-auto ${styles.containerStyle} ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
}
