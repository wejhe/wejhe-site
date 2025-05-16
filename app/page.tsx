import Hero from "@/app/components/landing-page/hero/hero";
import TechStack from "@/app/components/landing-page/tech-stack/tech-stack";
import LatestProjects from "@/app/components/landing-page/latest-project/latest-project";
import Outro from "@/app/components/landing-page/outro";

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-lp-section-padding py-lp-y-padding-mobile lg:py-lp-y-padding-desktop w-full">
      <Hero />
      <TechStack />
      <LatestProjects />
      <Outro />
    </div>
  );
}
