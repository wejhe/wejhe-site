import SectionTitle from "@/app/components/landing-page/section-title";
import { LargeButton } from "@/app/components/buttons";
import Link from "next/link";

export default function Outro() {
  return (
    <div className="bg-gradient-to-b from-block-gray to-black flex flex-col items-center justify-center rounded-t-[64px] lg:rounded-t-[120px] gap-[64px] py-[80px] px-body-padding-mobile lg:px-body-padding-desktop w-full">
      <SectionTitle
        title="Transforming Possibility, Shaping Reality"
        subtitle="Have an idea in mind? Let’s bring it to life now!"
      />
      <Link
        key="Consult a Project"
        href="/consult"
        className="w-full lg:w-auto"
      >
        <LargeButton type="primary">Consult a Project</LargeButton>
      </Link>
    </div>
  );
}
