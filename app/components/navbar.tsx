"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const menus = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
];

const buttons = [
  { name: "Give Feedback", href: "/feedback", type: "secondary" },
  { name: "Get in Touch", href: "/consult", type: "primary" },
];

export default function Navbar() {
  const pathname = usePathname();

  const getMenuClass = (href: string) =>
    clsx(
      "text-[16px]",
      pathname === href
        ? "text-white hover:text-white"
        : "text-textual-gray hover:text-link-blue"
    );

  const getButtonClass = (type: string) =>
    clsx("py-1 px-3 rounded-[6px] text-[14px]", {
      "bg-white text-black font-semibold border border-white":
        type === "primary",
      "bg-block-gray text-white border border-stroke-gray":
        type === "secondary",
    });

  return (
    <nav className="w-full h-16 border-b border-stroke-gray">
      <div className="flex justify-between items-center w-full h-full px-[80px]">
        <div className="flex gap-[64px] w-fit">
          <Link href="/">
            <Image src="/logo.svg" width={40} height={24} alt="Logo of Wejhe" />
          </Link>
          {menus.map((menu) => (
            <Link
              key={menu.name}
              href={menu.href}
              className={getMenuClass(menu.href)}
            >
              {menu.name}
            </Link>
          ))}
        </div>
        <div className="flex gap-[16px] w-fit">
          {buttons.map((button) => (
            <Link
              key={button.name}
              href={button.href}
              className={getButtonClass(button.type)}
            >
              {button.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
