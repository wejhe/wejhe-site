"use client";

import Link from "next/link";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const menus = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
];

export default function NavLinks() {
  const currentPath = usePathname();
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(currentPath);
  }, [currentPath]);

  const getMenuClass = (href: string) =>
    clsx(
      "text-[16px]",
      pathname === href
        ? "text-white hover:text-white"
        : "text-textual-gray hover:text-link-blue"
    );

  return (
    pathname &&
    menus.map((menu) => (
      <Link
        key={menu.name}
        href={menu.href}
        className={getMenuClass(menu.href)}
      >
        {menu.name}
      </Link>
    ))
  );
}
