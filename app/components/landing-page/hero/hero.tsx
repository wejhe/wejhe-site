import { LargeTag } from "@/app/components/tags";
import { LargeButton } from "@/app/components/buttons";
import {
  heroStatuses,
  heroTitle,
  heroSubtitle,
  heroButtons,
} from "@/app/libs/ui-data";
import Link from "next/link";
import Image from "next/image";
import { SmallButton } from "@/app/components/buttons";

export default function Hero() {
  return (
    <div className="flex flex-col items-center gap-[64px] w-full px-body-padding-mobile lg:px-body-padding-desktop">
      <div className="flex flex-col items-center gap-[40px] w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-[16px] lg:gap-[24px] w-full">
          {heroStatuses.map((status) => (
            <LargeTag key={status.icon} icon={status.icon}>
              {status.label}
            </LargeTag>
          ))}
        </div>
        <div className="flex flex-col items-center gap-[24px] w-full">
          <h1 className="bg-gradient-to-b lg:bg-gradient-to-r from-white to-textual-gray bg-clip-text text-transparent text-center font-bold text-[64px] leading-[80px] lg:leading-normal">
            {heroTitle}
          </h1>
          <p className="text-textual-gray text-center leading-[36px] lg:leading-[40px] text-[20px] lg:text-[24px] w-full lg:w-[780px]">
            {heroSubtitle}
          </p>
        </div>
      </div>
      <div className="relative flex items-center justify-center w-full lg:w-[700px]">
        <input
          name="idea"
          type="text"
          placeholder="I want to build..."
          className="bg-block-gray border border-stroke-gray rounded-[8px] py-[16px] pl-[50px] pr-[180px] text-[16px] h-auto focus:border-white outline-none w-full"
        />
        <Image
          src="/idea.svg"
          width={24}
          height={24}
          alt="Idea Icon"
          className="absolute left-[16px] top-1/2 -translate-y-1/2"
        />
        <Link
          key="Consult Home"
          href="/consult"
          className="absolute right-[10px] top-1/2 -translate-y-1/2"
        >
          <SmallButton type="primary">Consult a Project</SmallButton>
        </Link>
      </div>
      {/* <div className="flex flex-col lg:flex-row items-center justify-center gap-[16px] lg:gap-[24px] w-full">
        {heroButtons.map((button) => (
          <Link
            key={button.label}
            href={button.href}
            className="w-full lg:w-auto"
          >
            <LargeButton type={button.type}>{button.label}</LargeButton>
          </Link>
        ))}
      </div> */}
    </div>
  );
}
