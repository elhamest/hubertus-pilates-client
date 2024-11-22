"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

function NavLink({ href, children, className, keyIndex }) {
  const path = usePathname();
  console.log("path:", path);
  console.log("href:", href);

  return (
    <Link
      key={keyIndex}
      href={href}
      className={path === href ? `active ${className}` : className}
    >
      {children}
    </Link>
  );
}

export default NavLink;
