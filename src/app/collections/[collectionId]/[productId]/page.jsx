import React from "react";
import { faProductCollections } from "@/data/fa";
import { enProductCollections } from "@/data/en";
import { Container } from "@/components/UI/container";
import Image from "next/image";
import style from "./Product.module.css";

export default async function ProductPage({ params, locale = "fa" }) {
  const { productId } = await Promise.resolve(params);

  const productCollections =
    locale === "fa" ? faProductCollections : enProductCollections;

  function findItemBySlug(selectedSlug) {
    for (const collection of productCollections) {
      const foundItem = collection.items?.find(
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
        <div className={style.notFoundContainer}>
          <h1 className={style.notFoundText}>محصول یافت نشد.</h1>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="pageWrapper pageHeight">
        <div className={`${style.productWrapper} pageInnerWrapper`}>
          <div className={style.imageContainer}>
            <Image
              src={founded.item?.image}
              alt={founded.item?.title}
              width={500}
              height={500}
              className={style.imageStyle}
              priority
            />
          </div>

          <div className={style.textContainer}>
            <h1>{founded?.item?.title}</h1>

            {founded?.item?.desc && (
              <p className={style.productDescription}>
                {founded?.item?.detail?.desc}
              </p>
            )}

            <div className={style.featureBox}>
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
