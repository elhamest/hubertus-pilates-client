import { faProductCollections } from "@/data/fa";
import { Container } from "@/components/UI/container/Container";
import { CollectionGrid } from "@/components/collections/CollectionGrid";

export default async function CollectionPage({ params }) {
  // Ensure params is properly awaited
  const { link } = await Promise.resolve(params);

  const collection = faProductCollections.find(
    (item) => item?.link === `collections/${link}`
  );

  if (!collection) {
    return (
      <Container>
        <div className="min-h-[400px] flex items-center justify-center">
          <h1 className="text-2xl font-semibold text-gray-800">
            Collection not found
          </h1>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="py-8 pageWrapper">
        <h1 className="dark:text-neutralWhiteColor">{collection?.title}</h1>
        <CollectionGrid items={collection?.items} />
      </div>
    </Container>
  );
}

export function generateStaticParams() {
  return faProductCollections?.filter(Boolean)?.map((item) => ({
    link: item?.link?.split("/")[1],
  }));
}
