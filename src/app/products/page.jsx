"use client";

import GalleryItems from "@/components/UI/gallery/GalleryItems";
import { faConstants } from "../../../public/locales/fa/common";
import { faProductCollections } from "@/components/data";
import { Container } from "@/components/UI/container/Container";

import commonStyles from "../../components/styles/shared.module.css";

function ProductsPage() {
  return (
    <Container>
      <div className="py-8 pageWrapper">
        <h1>{faConstants.allCollectionsTitle}</h1>

        <div className={commonStyles.galleryList}>
          <GalleryItems
            title={faConstants.allCollectionsTitle}
            items={faProductCollections}
          />
        </div>
      </div>
    </Container>
  );
}

export default ProductsPage;
