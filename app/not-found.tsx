import SectionTitle from "@/app/components/landing-page/section-title";
import { LargeButton } from "@/app/components/buttons";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center gap-[40px] px-body-padding-mobile lg:px-body-padding-desktop"
      style={{
        height:
          "calc(100dvh - var(--spacing-navbar-height) - var(--spacing-navbar-height) - var(--spacing-y-padding) - var(--spacing-y-padding))",
      }}
    >
      <div className="flex flex-col items-center justify-center gap-[20px]">
        <Image
          src="/404.svg"
          width={240}
          height={200}
          alt="Not Found"
          priority
        />
        <SectionTitle
          title="404 - Not Found"
          subtitle="We're sorry to let you know that the page you are looking for doesn't exist"
        />
      </div>
      <Link key="Back to Home" href="/" className="w-full lg:w-auto">
        <LargeButton type="primary">Back to Home</LargeButton>
      </Link>
    </div>
  );
}
