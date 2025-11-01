import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = ({ navigations, resolvedTheme }) => {
  const textGradientClass =
    resolvedTheme === "dark"
      ? "textGradientEffectForDarkMode"
      : "textGradientEffectForLightMode";

  return (
    <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
      {navigations?.map((menu, index) => (
        <li className={styles.navItem} key={index}>
          <Link
            key={index}
            href={menu?.path}
            className={`inline-block px-4 py-2 text-lg font-normal no-underline rounded-md dark:text-pureWhiteColor hover:text-primaryColor dark:hover:text-primaryColor focus:text-primaryColor transition-all duration-300 hover:tracking-wide ${textGradientClass}`}
          >
            {menu?.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
