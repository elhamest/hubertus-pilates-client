import Breadcrumb from "../breadcrumb";
import { generatePathToTitleMap } from "@/utils/pathMaps";

const Layout = ({ children, locale = "fa" }) => {
  const pathToTitleMap = generatePathToTitleMap(locale);

  return (
    <div>
      <Breadcrumb locale={locale} pathToTitleMap={pathToTitleMap} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
