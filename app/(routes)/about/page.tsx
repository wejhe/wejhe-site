import { aboutPage } from "@/app/libs/ui-data";
import { LargeTag } from "@/app/components/tags";
import Link from "next/link";
import Image from "next/image";
import { LargeButton } from "@/app/components/buttons";

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-lp-section-padding w-full">
      <div className="flex flex-col lg:flex-row gap-[40px] items-center justify-center items-stretch w-full px-body-padding-mobile lg:px-body-padding-desktop">
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

      <div className="flex gap-[40px] items-center justify-center w-full px-body-padding-mobile lg:px-body-padding-desktop">
        <div className="flex flex-col gap-[40px] items-center justify-center w-full">
          <div className="bg-black border border-stroke-gray flex px-[40px] py-[32px] rounded-[24px] w-full h-[800px]"></div>
          <div className="relative bg-gradient-to-r from-gradient-purple-start to-gradient-purple-end border border-stroke-gray flex flex-col items-start justify-between px-[40px] py-[32px] rounded-[24px] w-full h-[240px]">
            <strong className="text-white text-start text-[32px] font-bold">
              Bank Syariah Indonesia
            </strong>
            <p className="text-white text-start text-[24px]">
              Junior Programmer
              <br />
              IT Development Group
            </p>
            <Image
              src="/work.png"
              width={103}
              height={240}
              alt="Work"
              className="absolute top-0 right-0"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[40px] items-center justify-center w-full">
          <div className="relative bg-block-gray border border-stroke-gray flex flex-col items-end justify-between px-[40px] py-[32px] rounded-[24px] w-full h-[240px]">
            <strong className="text-white text-end text-[32px] font-bold">
              Universitas Gadjah Mada
            </strong>
            <p className="text-textual-gray text-end text-[24px] w-[240px]">
              Bachelor's Degree in Computer Science
            </p>
            <Image
              src="/toga.png"
              width={245}
              height={240}
              alt="Toga"
              className="absolute top-0 left-0"
            />
          </div>
          <div className="bg-black border border-stroke-gray flex px-[40px] py-[32px] rounded-[24px] w-full h-[800px]"></div>
        </div>
      </div>
    </div>
  );
}
