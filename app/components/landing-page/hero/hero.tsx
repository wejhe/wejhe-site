import { LargeTag } from "@/app/components/tags";
import {
  heroStatuses,
  heroTitle,
  heroSubtitle,
  heroButton,
} from "@/app/libs/ui-data";
import Link from "next/link";
import Image from "next/image";
import { SmallButton } from "@/app/components/buttons";
import { AiFillPlayCircle } from "react-icons/ai";

export default function Hero() {
  return (
    <div className="flex flex-col items-center gap-[64px] w-full bg-[url('/bg-hero.svg')] bg-top bg-no-repeat bg-size-[100%_auto] px-body-padding-mobile lg:px-body-padding-desktop">
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
          <p className="text-textual-gray text-center leading-[36px] lg:leading-[40px] text-[20px] lg:text-[24px] w-full lg:w-[800px]">
            {heroSubtitle}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[16px] items-center justify-center w-full lg:w-[640px]">
        <div className="relative flex items-center justify-center w-full">
          <input
            name="idea"
            type="text"
            placeholder="I want to build..."
            className="no-webkit-appearance bg-black placeholder-textual-gray focus:text-white border border-stroke-gray rounded-[8px] py-[16px] pl-[50px] pr-[116px] text-[16px] h-auto hover:border-stroke-gray-hover focus:border-stroke-gray-hover focus:shadow-[0_0_0_3px_var(--color-stroke-gray)] outline-none w-full"
          />
          <Image
            src="/idea.svg"
            width={24}
            height={24}
            alt="Idea Icon"
            className="absolute left-[16px] top-1/2 -translate-y-1/2"
          />
          <Link
            key={heroButton.label}
            href={heroButton.href}
            className="absolute right-[10px] top-1/2 -translate-y-1/2"
          >
            <SmallButton type={heroButton.type}>{heroButton.label}</SmallButton>
          </Link>
        </div>
        <div className="flex items-center justify-center gap-[6px] text-textual-gray text-[16px]">
          <AiFillPlayCircle size={16} />
          <p>Consult your idea to get started</p>
        </div>
      </div>
    </div>
  );
}
