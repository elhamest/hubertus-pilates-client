import React from "react";

import { faProductCollections } from "@/data/fa";
import { enProductCollections } from "@/data/en";

export default async function ProductPage({ params, locale = "fa" }) {
  const { productId } = await Promise.resolve(params);
  console.log("params in product:", params);

  return <div>Product Page: {productId}</div>;
}

export async function generateStaticParams({ locale = "fa" }) {
  const productCollections =
    locale === "fa" ? faProductCollections : enProductCollections;

  const collections = await getCollection();
  const products = await getProducts();

  const params = collections.map((collection) => {
    return products.map((product) => {
      return {
        collectionId: collection.id,
        productId: product.id,
      };
    });
  });
  return params.flat().map((param) => {
    return {
      collectionId: param.collectionId,
      productId: param.productId,
    };
  });
}
