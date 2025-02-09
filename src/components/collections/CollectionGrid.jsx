import Image from "next/image";

import styles from "./CollectionGrid.module.css";

export function CollectionGrid({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items?.map((item, index) => (
        <div key={index} className="group bg-white rounded-lg shadow-md">
          <div
            className={`relative overflow-hidden rounded-lg bg-gray-100 p-4 ${styles.imageWrapper}`}
          >
            {/* w-full h-[300px] */}
            <Image
              src={item?.image} //{`/${item?.image}`}
              alt={item?.title}
              // fill
              // width={430}
              style={{ objectFit: "cover", width: "100%", height: "auto" }}
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index < 6} // Load first 6 images immediately
            />
          </div>
          <div className="p-4">
            <h3 className={`${styles.boxTitle}  text-darkGrayColor`}>
              {item?.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
