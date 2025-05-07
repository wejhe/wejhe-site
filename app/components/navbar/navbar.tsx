import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import NavLinks from "./navlinks";
import NavButtons from "./navbuttons";

export default function Navbar() {
  return (
    <nav className="w-full h-16 border-b border-stroke-gray">
      <div className="flex justify-between items-center w-full h-full px-[80px]">
        <div className="flex gap-[64px] w-fit">
          <Link href="/">
            <Image src="/logo.svg" width={40} height={24} alt="Logo of Wejhe" />
          </Link>
          <NavLinks />
        </div>
        <div className="flex gap-[16px] w-fit">
          <NavButtons />
        </div>
      </div>
    </nav>
  );
}
