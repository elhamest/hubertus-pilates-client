import React from "react";

import { faProductCollections } from "@/data/fa";
import { enProductCollections } from "@/data/en";
import { Container } from "@/components/UI/container";

export default async function ProductPage({ params, locale = "fa" }) {
  const { productId } = await Promise.resolve(params);
  console.log("params in product:", params);

  return (
    <Container>
      <div>Product Page: {productId}</div>
    </Container>
  );
}

export async function generateStaticParams({ locale = "fa" }) {
  const productCollections =
    locale === "fa" ? faProductCollections : enProductCollections;

  const params = productCollections?.map((collection) => {
    return collection?.items?.map((product) => {
      return {
        collectionId: collection?.slug,
        productId: product?.slug,
      };
    });
  });
  return params?.flat()?.map((param) => {
    return {
      collectionId: param?.collectionId,
      productId: param?.productId,
    };
  });
}
