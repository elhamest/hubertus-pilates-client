import Link from "next/link";
import { useRouter } from "next/router";

const Breadcrumbs = () => {
  const router = useRouter();
  const pathnames = router.asPath.split("/").filter((x) => x);

  return (
    <div className="breadcrumbs">
      <Link href="/">Home</Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <span key={name}> / {name}</span>
        ) : (
          <span key={name}>
            {" "}
            / <Link href={routeTo}>{name}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;

// If you have dynamic routes (e.g., pages/blog/[slug].js), you can customize the breadcrumb name by fetching the dynamic data. For example:
const Breadcrumbs2 = () => {
  const router = useRouter();
  const pathnames = router.asPath.split("/").filter((x) => x);

  // Customize breadcrumb names for dynamic routes
  const getBreadcrumbName = (name) => {
    if (name === "[slug]") {
      return "Blog Post"; // Replace with actual post title if available
    }
    return name;
  };

  return (
    <div className="breadcrumbs">
      <Link href="/">Home</Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <span key={name}> / {getBreadcrumbName(name)}</span>
        ) : (
          <span key={name}>
            {" "}
            / <Link href={routeTo}>{getBreadcrumbName(name)}</Link>
          </span>
        );
      })}
    </div>
  );
};
