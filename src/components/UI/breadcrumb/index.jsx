"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./container";

import styles from "./Breadcrumb.module.css";

const Breadcrumb = ({ locale, pathToTitleMap }) => {
  const pathname = usePathname();

  // Filters the array to remove any empty strings
  // The filter keeps only truthy values (empty strings are falsy)
  const pathSegments = pathname?.split("/")?.filter((x) => x);

  return (
    <Container>
      {pathSegments?.length > 0 && (
        <nav className={styles.breadcrumb} aria-label="breadcrumb">
          <ol style={{ direction: locale === "fa" ? "rtl" : "ltr" }}>
            <li>
              <Link href="/">{pathToTitleMap[""]}</Link>
              {/* <Link href="/"> {locale === "fa" ? "صفحه اصلی" : "Home"}</Link> */}
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
                  <span>/</span>
                  {isLast ? (
                    <span>{displayName}</span>
                  ) : (
                    <Link href={`/${currentPath}`}>{displayName}</Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      )}
    </Container>
  );
};

export default Breadcrumb;
