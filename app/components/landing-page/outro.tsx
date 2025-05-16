import SectionTitle from "@/app/components/landing-page/section-title";
import { LargeButton } from "@/app/components/buttons";
import Link from "next/link";
import {
  outroTitle,
  outroSubtitle,
  outroButton,
} from "@/app/lib/ui-constraints";

export default function Outro() {
  return (
    <div className="bg-gradient-to-b from-block-gray to-black flex flex-col items-center justify-center rounded-t-[64px] lg:rounded-t-[120px] gap-[64px] py-[80px] px-body-padding-mobile lg:px-body-padding-desktop w-full">
      <SectionTitle title={outroTitle} subtitle={outroSubtitle} />
      <Link
        key={outroButton.label}
        href={outroButton.href}
        className="w-full lg:w-auto"
      >
        <LargeButton type={outroButton.type}>{outroButton.label}</LargeButton>
      </Link>
    </div>
  );
}
