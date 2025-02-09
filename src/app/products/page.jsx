"use client";

import GalleryItems from "@/components/UI/gallery/GalleryItems";
import { faConstants } from "../../../public/locales/fa/common";
import { faProductCollections } from "@/components/data";
import { Container } from "@/components/UI/container/Container";

import commonStyles from "../../components/styles/shared.module.css";

function Products() {
  return (
    <Container>
      <div div className={commonStyles.slider}>
        <GalleryItems
          title={faConstants.allCollectionsTitle}
          items={faProductCollections}
        />
      </div>
    </Container>
  );
}

export default Products;
