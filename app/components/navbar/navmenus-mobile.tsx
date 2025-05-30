"use client";

import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NavButtonMobile } from "@/app/components/buttons";
import { navbar } from "@/app/libs/ui-data";
import { motion, AnimatePresence } from "framer-motion";
import { useNavStore } from "@/app/stores/nav-store";

export default function NavMenusMobile() {
  const currentPath = usePathname();
  const [pathname, setPathname] = useState("");
  const { isOpen, toggle, navHeight } = useNavStore();

  useEffect(() => {
    setPathname(currentPath);
  }, [currentPath]);

  const handleHamburgerClick = () => {
    toggle();
  };

  const getMenuClass = (href: string) =>
    clsx(
      "lg:hidden text-[16px]",
      pathname === href
        ? "text-white hover:text-white"
        : "text-textual-gray hover:text-link-blue"
    );

  return (
    <>
      <div
        className="lg:hidden flex items-center justify-center bg-block-gray border border-stroke-gray p-[6px] rounded-[8px] cursor-pointer hover:bg-block-gray-hover active:bg-block-gray-hover"
        onClick={handleHamburgerClick}
      >
        <Image
          src="/hamburger.svg"
          width={24}
          height={24}
          alt="Hamburger Menu Icon"
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              height: `calc(100dvh - ${navHeight}px)`,
              top: navHeight,
            }}
            className="lg:hidden bg-black fixed right-0 w-[320px] px-body-padding-mobile py-body-padding-mobile border-l border-stroke-gray z-50"
          >
            <div className="h-full flex flex-col justify-between">
              <div className="flex flex-col gap-[24px] items-center">
                {pathname &&
                  navbar.menus.map((menu) => (
                    <Link
                      key={menu.name}
                      href={menu.href}
                      onClick={() => toggle()}
                      className={getMenuClass(menu.href)}
                    >
                      {menu.name}
                    </Link>
                  ))}
              </div>
              <div className="flex flex-col gap-[16px] items-center w-full">
                {navbar.button.map((button) => (
                  <Link
                    key={button.label}
                    href={button.href}
                    onClick={() => toggle()}
                    className="w-full"
                  >
                    <NavButtonMobile type={button.type}>
                      {button.label}
                    </NavButtonMobile>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
