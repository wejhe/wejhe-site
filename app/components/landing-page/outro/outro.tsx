"use client";

import SectionTitle from "@/app/components/landing-page/section-title";
import { LargeButton } from "@/app/components/buttons";
import Link from "next/link";
import { outroTitle, outroSubtitle, outroButtons } from "@/app/libs/ui-data";

export default function Outro() {
  return (
    <div className="bg-gradient-to-b from-block-gray to-black flex flex-col items-center justify-center rounded-t-[64px] lg:rounded-t-[120px] gap-[64px] py-[80px] px-body-padding-mobile lg:px-body-padding-desktop w-full">
      <SectionTitle title={outroTitle} subtitle={outroSubtitle} />
      <div className="flex flex-col lg:flex-row items-center justify-center gap-[16px] lg:gap-[24px] px-body-padding-mobile lg:px-body-padding-desktop  w-full">
        {outroButtons.map((button) =>
          button.href !== "none" ? (
            <Link
              key={button.label}
              href={button.href}
              className="w-full lg:w-auto"
            >
              <LargeButton type={button.type}>{button.label}</LargeButton>
            </Link>
          ) : (
            <div key={button.label} className="w-full lg:w-auto">
              <LargeButton onClick={button.onClick} type={button.type}>
                {button.label}
              </LargeButton>
            </div>
          )
        )}
      </div>
    </div>
  );
}
