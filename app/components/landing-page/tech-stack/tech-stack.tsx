import {
  techStackTitle,
  techStackSubtitle,
  techStack,
} from "@/app/libs/ui-data";
import SectionTitle from "@/app/components/landing-page/section-title";
import TechCard from "@/app/components/landing-page/tech-stack/tech-card";

export default function TechStack() {
  return (
    <div className="flex flex-col items-center gap-[64px] w-full px-body-padding-mobile lg:px-body-padding-desktop">
      <SectionTitle title={techStackTitle} subtitle={techStackSubtitle} />
      <div className="flex flex-col items-center justify-center lg:grid lg:grid-cols-3 gap-[40px] w-full">
        {techStack.map((stack) => (
          <TechCard
            key={stack.title}
            title={stack.title}
            subtitle={stack.subtitle}
            firstImage={stack.firstImage}
            secondImage={stack.secondImage}
          />
        ))}
      </div>
    </div>
  );
}
