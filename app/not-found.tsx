import SectionTitle from "@/app/components/landing-page/section-title";
import { LargeButton } from "@/app/components/buttons";
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center gap-[64px] px-body-padding-mobile lg:px-body-padding-desktop"
      style={{
        height:
          "calc(100dvh - var(--spacing-navbar-height) - var(--spacing-navbar-height) - var(--spacing-y-padding) - var(--spacing-y-padding))",
      }}
    >
      <SectionTitle
        title="404 - Not Found"
        subtitle="We're sorry to let you know that the page you are looking for doesn't exist"
      />
      <Link key="Back to Home" href="/" className="w-full lg:w-auto">
        <LargeButton type="primary">Back to Home</LargeButton>
      </Link>
    </div>
  );
}
