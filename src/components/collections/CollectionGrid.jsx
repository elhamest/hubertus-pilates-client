import Image from "next/image";

export function CollectionGrid({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items?.map((item, index) => (
        <div key={index} className="group">
          <div className="relative w-full h-[300px] overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={`/${item?.image}`}
              alt={item?.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index < 6} // Load first 6 images immediately
            />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-900">
            {item?.title}
          </h3>
        </div>
      ))}
    </div>
  );
}
