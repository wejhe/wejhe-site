import Link from "next/link";
import { copyright } from "@/app/libs/ui-data";

export default function Footer() {
  return (
    <nav className="bg-black w-full h-navbar-height border-t border-stroke-gray mt-auto">
      <div className="flex justify-between items-center w-full h-full px-body-padding-mobile lg:px-body-padding-desktop">
        <div className="flex gap-[4px] items-center justify-center">
          <p className="text-[16px] text-textual-gray hidden lg:block">
            Copyright
          </p>
          <span className="text-[24px] text-textual-gray font-extralight">
            ©
          </span>
          <p className="text-[16px] text-textual-gray">{copyright}</p>
        </div>
        <Link
          key="Privacy Policy"
          href="/privacy-policy"
          className="text-[16px] text-textual-gray hover:text-link-blue"
        >
          Privacy Policy
        </Link>
      </div>
    </nav>
  );
}
