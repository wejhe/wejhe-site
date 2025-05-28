import { aboutPage } from "@/app/libs/ui-data";
import { LargeTag } from "@/app/components/tags";
import Link from "next/link";
import Image from "next/image";
import { LargeButton } from "@/app/components/buttons";

export default function Page() {
  return (
    <div className="flex flex-col lg:flex-row gap-[80px] items-center justify-center items-stretch w-full px-body-padding-mobile lg:px-body-padding-desktop">
      <div className="flex flex-col gap-[64px] items-center lg:items-start justify-center w-full">
        <div className="flex flex-col gap-[40px] items-center lg:items-start justify-center w-full">
          <div className="block lg:hidden relative w-full h-[240px] sm:h-[400px]">
            <Image
              src={`/${aboutPage.hero.imageMobile}`}
              alt="Avatar Image"
              fill
              className="object-cover rounded-[24px]"
              loading="eager"
            />
          </div>
          <LargeTag
            key={aboutPage.hero.tag.label}
            icon={aboutPage.hero.tag.icon}
          >
            {aboutPage.hero.tag.label}
          </LargeTag>
          <h1 className="text-textual-gray text-center lg:text-start font-bold text-[40px] lg:text-[64px] leading-[56px] lg:leading-[80px] w-[350px] lg:w-[560px]">
            {aboutPage.hero.title}
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-start gap-[16px] lg:gap-[24px] w-full">
          {aboutPage.hero.button.map((button) => (
            <Link
              key={button.label}
              href={button.href}
              className="w-full lg:w-auto"
              prefetch={button.href.endsWith(".pdf") ? false : true}
            >
              <LargeButton type={button.type}>{button.label}</LargeButton>
            </Link>
          ))}
        </div>
      </div>
      <div className="hidden lg:block relative w-full h-auto">
        <Image
          src={`/${aboutPage.hero.imageDesktop}`}
          alt="Avatar Image"
          fill
          className="object-cover rounded-[24px]"
          loading="eager"
        />
      </div>
    </div>
  );
}
