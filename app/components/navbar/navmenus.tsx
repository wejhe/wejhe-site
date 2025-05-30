"use client";

import Link from "next/link";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navbar } from "@/app/libs/ui-data";

export default function NavMenus() {
  const currentPath = usePathname();
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(currentPath);
  }, [currentPath]);

  const getMenuClass = (href: string) =>
    clsx(
      "hidden lg:block text-[16px]",
      pathname === href
        ? "text-white hover:text-white"
        : "text-textual-gray hover:text-link-blue"
    );

  return (
    pathname &&
    navbar.menus.map((menu) => (
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
