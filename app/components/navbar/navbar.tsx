"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import NavMenus from "@/app/components/navbar/navmenus";
import NavButtons from "@/app/components/navbar/navbuttons";
import NavMenusMobile from "@/app/components/navbar/navmenus-mobile";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MdNotificationsActive } from "react-icons/md";

export default function Navbar() {
  const currentPath = usePathname();
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(currentPath);
  }, [currentPath]);

  const announcementBarClass = () =>
    clsx(
      "bg-gradient-to-r from-gradient-purple-start to-gradient-purple-end flex gap-[10px] px-body-padding-mobile items-center justify-center text-white text-[14px] lg:text-[16px] w-full h-announcement-bar-height sticky top-0 z-49",
      pathname === "/" ? "block" : "hidden"
    );

  return (
    <>
      <div className={announcementBarClass()}>
        <MdNotificationsActive className="w-[18px] lg:w-[20px] h-auto flex-shrink-0" />
        <div className="relative overflow-x-hidden w-full lg:w-auto">
          <div className="animate-announcement-marquee animate-stop inline-block whitespace-nowrap">
            <p className="mx-[80px] lg:mx-0"> { /* Important Notes : minimal panjang kalimatnya segini, biar langsung jalan animasinya di under-lg */ }
              This website is currently under development and I sincerely value
              all your feedback to help improve this website further
            </p>
          </div>
          <div className="lg:hidden absolute top-0 animate-announcement-marquee-duplicate animate-stop inline-block whitespace-nowrap">
            <p className="mx-[80px] lg:mx-0">
              This website is currently under development and I sincerely value
              all your feedback to help improve this website further
            </p>
          </div>
        </div>
      </div>
      <nav className="bg-black w-full h-navbar-height border-b border-stroke-gray sticky top-0 z-50">
        <div className="flex justify-between items-center w-full h-full px-body-padding-mobile lg:px-body-padding-desktop">
          <div className="flex items-center gap-[64px] w-fit">
            <Link href="/">
              <Image
                src="/logo.svg"
                width={40}
                height={24}
                alt="Logo of Wejhe"
              />
            </Link>
            <NavMenus />
          </div>
          <div className="flex gap-[16px] w-fit">
            <NavButtons />
            <NavMenusMobile />
          </div>
        </div>
      </nav>
    </>
  );
}
