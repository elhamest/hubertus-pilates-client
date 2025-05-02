"use client";

import GalleryItems from "@/components/UI/gallery/galleryItems/GalleryItems";
import { faConstants } from "../../../public/locales/fa/common";
import { faProductCollections } from "@/data/fa";
import { Container } from "@/components/UI/container";

import styles from "./Collections.module.css";

function CollectionsPage() {
  return (
    <Container>
      <div className="pageWrapper pageHeight">
        <h1 className="dark:text-neutralWhiteColor">
          {faConstants.allCollectionsTitle}
        </h1>

        <div className={styles.galleryList}>
          <GalleryItems
            items={faProductCollections}
            customClass="cardProduct"
          />
        </div>
      </div>
    </Container>
  );
}

export default CollectionsPage;
