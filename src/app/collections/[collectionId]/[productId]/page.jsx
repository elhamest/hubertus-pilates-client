import React from "react";
import Image from "next/image";

import { faProductCollections } from "@/data/fa";
import { enProductCollections } from "@/data/en";
import { Container } from "@/components/UI/container";
import ThumsGallery from "@/components/UI/thums-gallery";

import styles from "./Product.module.css";
import Breadcrumb from "@/components/UI/breadcrumb";
import { generatePathToTitleMap } from "@/utils/pathMaps";

export default async function ProductPage({ params, locale = "fa" }) {
  const { productId } = await Promise.resolve(params);
  const pathToTitleMap = generatePathToTitleMap(locale);

  const productCollections =
    locale === "fa" ? faProductCollections : enProductCollections;

  function findItemBySlug(selectedSlug) {
    for (const collection of productCollections) {
      const foundItem = collection?.items?.find(
        (item) => item?.slug === selectedSlug
      );
      if (foundItem) return { collection, item: foundItem };
    }
    return null;
  }

  const founded = findItemBySlug(productId);

  if (!founded) {
    return (
      <Container>
        {pathToTitleMap && (
          <Breadcrumb locale={locale} pathToTitleMap={pathToTitleMap} />
        )}
        <div className={styles.notFoundContainer}>
          <h1 className={styles.notFoundText}>محصول یافت نشد.</h1>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      {pathToTitleMap && (
        <Breadcrumb locale={locale} pathToTitleMap={pathToTitleMap} />
      )}
      <div className="pageWrapper pageHeight">
        <div className={styles.productWrapper}>
          <ThumsGallery data={founded?.item?.images} />

          <div className={styles.textContainer}>
            <h1>{founded?.item?.title}</h1>

            {founded?.item?.desc && (
              <p className={styles.productDescription}>
                {founded?.item?.detail?.desc}
              </p>
            )}

            <div className={styles.featureBox}>
              <ul>
                {founded?.item?.detail?.bullets?.map((f, index) => {
                  return (
                    <li key={index}>
                      <span>{f?.desc}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
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
