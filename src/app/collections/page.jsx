"use client";

import GalleryItems from "@/components/UI/gallery/galleryItems";
import { faConstants } from "../../../public/locales/fa/common";
import { faProductCollections } from "@/data/fa";
import { Container } from "@/components/UI/container";
import { generatePathToTitleMap } from "@/utils/pathMaps";

import styles from "./Collections.module.css";
import Breadcrumb from "@/components/UI/breadcrumb";

function CollectionsPage({ locale = "fa" }) {
  const pathToTitleMap = generatePathToTitleMap(locale);

  return (
    <div className={styles.collectionsPageWrapper}>
      <Container>
        {pathToTitleMap && (
          <Breadcrumb locale={locale} pathToTitleMap={pathToTitleMap} />
        )}
        <div className="pageWrapper pageHeight">
          <h1>{faConstants.allCollectionsTitle}</h1>

          <div className={styles.galleryList}>
            <GalleryItems
              items={faProductCollections}
              customClass="cardProduct"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CollectionsPage;
