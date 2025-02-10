"use client";

import GalleryItems from "@/components/UI/gallery/GalleryItems";
import { faConstants } from "../../../public/locales/fa/common";
import { faProductCollections } from "@/components/data";
import { Container } from "@/components/UI/container/Container";

import styles from "./Products.module.css";

function ProductsPage() {
  return (
    <Container>
      <div className="py-8 pageWrapper">
        <h1>{faConstants.allCollectionsTitle}</h1>

        <div className={styles.galleryList}>
          <GalleryItems items={faProductCollections} className="cardProduct" />
        </div>
      </div>
    </Container>
  );
}

export default ProductsPage;
