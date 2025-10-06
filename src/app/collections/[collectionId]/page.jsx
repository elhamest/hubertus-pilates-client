import { faProductCollections } from "@/data/fa";
import { enProductCollections } from "@/data/en";
import { Container } from "@/components/UI/container";
import { Collection } from "@/components/collections/collection";

export default async function CollectionPage({ params, locale = "fa" }) {
  // Ensure params is properly awaited
  const { collectionId } = await Promise.resolve(params);

  const productCollections =
    locale === "fa" ? faProductCollections : enProductCollections;

  const selectedCollection = productCollections.find(
    (item) => item?.path === `collections/${collectionId}`
  );

  if (!selectedCollection) {
    return (
      <Container>
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
      <div className="pageWrapper pageHeight">
        <h1 className="dark:text-offWhiteColor">{selectedCollection?.title}</h1>
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
