import React from "react";
import { faConstants } from "../../../public/locales/fa/common";
import ProductList from "./ProductList";
import styles from "./Products.module.css";

export const Products = (props) => {
  const { data } = props;
  return (
    <>
      <div
        // id="products"
        className={`flex w-full flex-col mt-4 items-center justify-center text-center ${styles.sectionTitleContainer}`}
      >
        <div className="text-sm font-semibold tracking-wider text-vibrantPurple uppercase">
          {faConstants?.products}
        </div>
      </div>
      <ProductList data={data} />
    </>
  );
};
