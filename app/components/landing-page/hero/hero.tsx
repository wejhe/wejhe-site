import HeroStatus from "@/app/components/landing-page/hero/hero-status";
import { LargeButton } from "@/app/components/buttons";
import { ButtonConfig } from "@/app/lib/definitions";
import Link from "next/link";

export default function Hero() {
  const statuses = [
    { icon: "globe.svg", label: "Jakarta, Indonesia" },
    { icon: "aperture.svg", label: "Available for Projects" },
  ];

  const buttons: ButtonConfig[] = [
    { href: "/consult", type: "primary", label: "Consult a Project" },
    { href: "/blog", type: "secondary", label: "Read Blog Posts" },
  ];

  const description = (
    <>
      Crafting reliable, intuitive, and seamless{" "}
      <strong className="text-white font-semibold">web experiences</strong> for
      everyone with the power of cutting-edge technologies and human-centric
      design
    </>
  );

  return (
    <div className="flex flex-col items-center gap-[64px]">
      <div className="flex flex-col items-center gap-[40px]">
        <div className="flex items-center gap-[24px]">
          {statuses.map((status) => (
            <HeroStatus key={status.icon} icon={status.icon}>
              {status.label}
            </HeroStatus>
          ))}
        </div>
        <div className="flex flex-col items-center gap-[24px]">
          <h1 className="text-white text-center font-bold text-[64px]">
            I&apos;m a Software Developer
          </h1>
          <p className="text-textual-gray text-center leading-[40px] text-[24px] w-[780px]">
            {description}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-[24px]">
        {buttons.map((button) => (
          <Link key={button.label} href={button.href}>
            <LargeButton type={button.type}>{button.label}</LargeButton>
          </Link>
        ))}
      </div>
    </div>
  );
}
