import { faProductCollections } from "@/data/fa";
import { enProductCollections } from "@/data/en";
import { Collection } from "@/components/collections/collection";

import styles from "./CollectionPage.module.css";
import { Container } from "@/components/UI/container";
import { generatePathToTitleMap } from "@/utils/pathMaps";
import Breadcrumb from "@/components/UI/breadcrumb";

export default async function CollectionPage({ params, locale = "fa" }) {
  // Ensure params is properly awaited
  const { collectionId } = await Promise.resolve(params);

  const productCollections =
    locale === "fa" ? faProductCollections : enProductCollections;

  const selectedCollection = productCollections.find(
    (item) => item?.path === `collections/${collectionId}`
  );

  const pathToTitleMap = generatePathToTitleMap(locale);

  if (!selectedCollection) {
    return (
      <Container>
        {pathToTitleMap && (
          <Breadcrumb locale={locale} pathToTitleMap={pathToTitleMap} />
        )}
        <div className="min-h-[400px] flex items-center justify-center">
          <h1 className="text-2xl font-semibold text-gray-800">
            مجموعه ای یافت نشد.
          </h1>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      {pathToTitleMap && (
        <Breadcrumb locale={locale} pathToTitleMap={pathToTitleMap} />
      )}
      <div className={`${styles.collectionPageWrapper} pageWrapper pageHeight`}>
        <h1>{selectedCollection?.title}</h1>
        <Collection items={selectedCollection?.items} />
      </div>
    </Container>
  );
}

export function generateStaticParams({ locale = "fa" }) {
  const productCollections =
    locale === "fa" ? faProductCollections : enProductCollections;

  return productCollections?.filter(Boolean)?.map((item) => ({
    collectionId: item?.path?.split("/")[1],
  }));
}
