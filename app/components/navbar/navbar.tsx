import Image from "next/image";
import Link from "next/link";
import NavMenus from "@/app/components/navbar/navmenus";
import NavButtons from "@/app/components/navbar/navbuttons";
import NavMenusMobile from "@/app/components/navbar/navmenus-mobile";

export default function Navbar() {
  return (
    <nav className="bg-black w-full h-navbar-height border-b border-stroke-gray sticky top-0">
      <div className="flex justify-between items-center w-full h-full px-body-padding-mobile lg:px-body-padding-desktop">
        <div className="flex items-center gap-[64px] w-fit">
          <Link href="/">
            <Image src="/logo.svg" width={40} height={24} alt="Logo of Wejhe" />
          </Link>
          <NavMenus />
        </div>
        <div className="flex gap-[16px] w-fit">
          <NavButtons />
          <NavMenusMobile />
        </div>
      </div>
    </nav>
  );
}
