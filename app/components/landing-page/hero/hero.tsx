import HeroStatus from "@/app/components/landing-page/hero/hero-status";
import { LargeButton } from "@/app/components/buttons";
import {
  heroStatuses,
  heroTitle,
  heroSubtitle,
  heroButtons,
} from "@/app/lib/ui-constraints";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col items-center gap-[64px] w-full px-body-padding-mobile lg:px-body-padding-desktop">
      <div className="flex flex-col items-center gap-[40px] w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-[16px] lg:gap-[24px] w-full">
          {heroStatuses.map((status) => (
            <HeroStatus key={status.icon} icon={status.icon}>
              {status.label}
            </HeroStatus>
          ))}
        </div>
        <div className="flex flex-col items-center gap-[24px] w-full">
          <h1 className="text-white text-center font-bold text-[64px] leading-[80px] lg:leading-normal w-full">
            {heroTitle}
          </h1>
          <p className="text-textual-gray text-center leading-[36px] lg:leading-[40px] text-[20px] lg:text-[24px] w-full lg:w-[780px]">
            {heroSubtitle}
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-[16px] lg:gap-[24px] w-full">
        {heroButtons.map((button) => (
          <Link
            key={button.label}
            href={button.href}
            className="w-full lg:w-auto"
          >
            <LargeButton type={button.type}>{button.label}</LargeButton>
          </Link>
        ))}
      </div>
    </div>
  );
}
