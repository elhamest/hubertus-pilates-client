import React from "react";

export function Container(props) {
  return (
    // xl:px-0
    <div
      className={`container p-8 mx-auto ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}