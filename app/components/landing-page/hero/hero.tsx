import HeroStatus from "@/app/components/landing-page/hero/hero-status";
import LargeButton from "@/app/components/buttons";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col items-center gap-[64px]">
      <div className="flex flex-col items-center gap-[40px]">
        <div className="flex items-center gap-[24px]">
          <HeroStatus icon="globe.svg">Jakarta, Indonesia</HeroStatus>
          <HeroStatus icon="aperture.svg">Available for Projects</HeroStatus>
        </div>
        <div className="flex flex-col items-center gap-[24px]">
          <h1 className="text-white text-center font-bold text-[64px]">
            I&apos;m a Software Developer
          </h1>
          <p className="text-textual-gray text-center leading-[40px] text-[24px] w-[780px]">
            Crafting reliable, intuitive, and seamless{" "}
            <strong className="text-white font-semibold">
              web experiences
            </strong>{" "}
            for everyone with the power of cutting-edge technologies and
            human-centric design
          </p>
        </div>
      </div>
      <div className="flex items-center gap-[24px]">
        <Link href="/consult">
          <LargeButton type="primary">Consult a Project</LargeButton>
        </Link>
        <Link href="/blog">
          <LargeButton type="secondary">Read Blog Posts</LargeButton>
        </Link>
      </div>
    </div>
  );
}
