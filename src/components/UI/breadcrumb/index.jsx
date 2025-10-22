"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { BreadCrumbContainer } from "./container";

import styles from "./Breadcrumb.module.css";

const Breadcrumb = ({ locale, pathToTitleMap }) => {
  const pathname = usePathname();

  // Filters the array to remove any empty strings
  // The filter keeps only truthy values (empty strings are falsy)
  const pathSegments = pathname?.split("/")?.filter((x) => x);

  if (!pathSegments || pathSegments.length === 0) {
    return null;
  }

  return (
    <BreadCrumbContainer>
      {pathSegments?.length > 0 && (
        <nav className={styles.breadcrumb} aria-label="breadcrumb">
          <ol style={{ direction: locale === "fa" ? "rtl" : "ltr" }}>
            <li>
              <Link href="/" className={styles.breadcrumbLink}>
                <HomeIcon /> <AngleLeftIcon />
              </Link>
            </li>

            {pathSegments?.map((segment, index) => {
              const currentPath = pathSegments?.slice(0, index + 1).join("/");
              const isLast = index === pathSegments?.length - 1;

              // Try to find matching path in our map
              let displayName =
                pathToTitleMap[currentPath] ||
                pathToTitleMap[segment] ||
                segment
                  .replace(/-/g, " ")
                  .replace(/\b\w/g, (l) => l.toUpperCase());

              return (
                <li key={segment}>
                  {isLast ? (
                    <span>{displayName}</span>
                  ) : (
                    <div className={styles.breadcrumbLink}>
                      <Link href={`/${currentPath}`}>{displayName}</Link>
                      <AngleLeftIcon />{" "}
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      )}
    </BreadCrumbContainer>
  );
};

export default Breadcrumb;

const HomeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      width={20}
      height={20}
    >
      <path
        fill="#a6a6a6"
        d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
      />
    </svg>
  );
};

const AngleRightIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      width={15}
      height={15}
    >
      <path
        fill="#a6a6a6"
        d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
      />
    </svg>
  );
};

const AngleLeftIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      width={15}
      height={15}
    >
      <path
        fill="#a6a6a6"
        d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
      />
    </svg>
  );
};
