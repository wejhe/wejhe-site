import { aboutButtons } from "@/app/libs/ui-data";
import { LargeTag } from "@/app/components/tags";
import Link from "next/link";
import { LargeButton } from "@/app/components/buttons";

export default function Page() {
  return (
    <div className="flex gap-[80px] items-center justify-center items-stretch w-full px-body-padding-desktop">
      <div className="flex flex-col gap-[64px] items-start justify-center w-full">
        <div className="flex flex-col gap-[40px] items-start justify-center w-full">
          <LargeTag key="Get to Know Me" icon="arrow-right.svg">
            Get to Know Me
          </LargeTag>
          <h1 className="text-textual-gray font-bold text-[64px] leading-[80px] w-[560px]">
            My name is Wahyu Wijiyanto, call me{" "}
            <span className="text-white">Wejhe!</span>
          </h1>
        </div>
        <div className="flex items-center justify-start gap-[24px] w-full">
          {aboutButtons.map((button) => (
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
      <div
        className="w-full h-auto rounded-[24px] bg-cover bg-center"
        style={{ backgroundImage: `url(avatar.png)` }}
      ></div>
    </div>
  );
}
