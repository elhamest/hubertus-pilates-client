// utils/pathMaps.js
import { enNavigations, enProductCollections } from "@/data/en";
import { faNavigations, faProductCollections } from "@/data/fa";

export const generatePathToTitleMap = (locale = "fa") => {
  const navigationData = locale === "fa" ? faNavigations : enNavigations;
  const productCollections =
    locale === "fa" ? faProductCollections : enProductCollections;

  const pathToTitleMap = {};

  // Add main navigation items
  navigationData.forEach((item) => {
    const cleanPath = item.path.replace(/^\/|\/$/g, "");
    pathToTitleMap[cleanPath] = item.title;
  });

  // Add product collections and their items
  productCollections.forEach((collection) => {
    const collectionPath = collection.path.replace(/^\/|\/$/g, "");
    pathToTitleMap[collectionPath] = collection.title;

    if (collection.items) {
      collection.items.forEach((item) => {
        const itemSlug = item?.slug?.replace(/^\/|\/$/g, "");
        const fullItemPath = `${collectionPath}/${itemSlug}`;
        pathToTitleMap[fullItemPath] = item.title;
        pathToTitleMap[itemSlug] = item.title;
      });
    }
  });

  // Special case for homepage
  pathToTitleMap[""] = locale === "fa" ? "صفحه اصلی" : "Home";

  return pathToTitleMap;
};
