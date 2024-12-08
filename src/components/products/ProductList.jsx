import React from "react";
import Image from "next/image";
import { Container } from "@/components/UI/container/Container";
import styles from "./ProductList.module.css";

function ProductList({ data }) {
  return (
    <>
      {data?.map((product, index) => {
        const imgPos = index % 2 === 0 ? "right" : "left";
        return (
          <Container
            key={index}
            className="flex flex-wrap mb-5 lg:gap-10 lg:flex-nowrap "
          >
            <div
              className={`flex items-center justify-center w-full lg:w-1/2 ${
                imgPos === "right" ? "lg:order-1" : ""
              }`}
            >
              <div>
                <Image
                  src={product.image}
                  width={521}
                  height={400}
                  alt="Products"
                  className={"object-cover"}
                  // placeholder="blur"
                  // blurDataURL={product.image.src}
                  style={{ maxHeight: "450px", objectFit: "contain" }}
                />
              </div>
            </div>

            <div
              className={`flex flex-wrap items-center w-full lg:w-1/2 ${
                imgPos === "right" ? "lg:justify-end" : ""
              } ${styles.productDescriptin}`}
            >
              <div>
                <div className="flex flex-col w-full mt-4">
                  <h3 className="max-w-2xl mt-3 text-2xl font-medium leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                    {product.title}
                  </h3>

                  <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300 text-justify">
                    {product.desc}
                  </p>
                </div>

                <div className="w-full mt-5">
                  {product?.bullets?.map((item, index) => (
                    <Product key={index} icon={item.icon}>
                      {/* title={item.title} */}
                      {item.desc}
                    </Product>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        );
      })}
    </>
  );
}

function Product(props) {
  return (
    <div className="flex items-start gap-2 mt-1 space-x-3">
      <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-8 h-8 ">
        {React.cloneElement(props.icon, {
          className: "w-5 h-5 text-indigo-50",
        })}
      </div>
      <div>
        {/* <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
            {props.title}
          </h4> */}
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          {props.children}
        </p>
      </div>
    </div>
  );
}

export default ProductList;
