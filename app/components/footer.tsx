import Link from "next/link";
import { footer } from "@/app/libs/ui-data";

export default function Footer() {
  return (
    <footer className="bg-black w-full h-navbar-height border-t border-stroke-gray mt-auto">
      <div className="flex justify-between items-center w-full h-full px-body-padding-mobile lg:px-body-padding-desktop">
        <div className="flex gap-[4px] items-center justify-center">
          <p className="text-[16px] text-textual-gray hidden lg:block">
            Copyright
          </p>
          <span className="text-[24px] text-textual-gray font-extralight">
            ©
          </span>
          <p className="text-[16px] text-textual-gray">{footer.copyright}</p>
        </div>
        <Link
          key={footer.menu.name}
          href={footer.menu.href}
          className="text-[16px] text-textual-gray hover:text-link-blue"
        >
          {footer.menu.name}
        </Link>
      </div>
    </footer>
  );
}
