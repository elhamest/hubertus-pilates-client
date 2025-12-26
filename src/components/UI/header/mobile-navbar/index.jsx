"use client";
import Link from "next/link";

import styles from "./MobileNavbar.module.css";

const MobileNavbar = ({ navigations, setIsOpen, isOpen }) => {
  const handleLinkClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.navContainer}>
      {navigations?.map((item, index) => (
        <Link
          key={index}
          href={item?.path}
          className={styles.navLink}
          onClick={handleLinkClick}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleLinkClick();
            }
          }}
          role="menuitem"
          tabIndex={0}
        >
          {item?.title}
        </Link>
      ))}
    </div>
  );
};

export default MobileNavbar;
