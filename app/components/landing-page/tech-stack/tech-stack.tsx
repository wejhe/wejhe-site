import { techStack } from "@/app/lib/ui-constraints";
import SectionTitle from "@/app/components/landing-page/section-title";
import TechCard from "@/app/components/landing-page/tech-stack/tech-card";

export default function TechStack() {
  return (
    <div className="flex flex-col items-center gap-[64px] w-full px-body-padding-mobile lg:px-body-padding-desktop">
      <SectionTitle
        title="Technology Stack"
        subtitle="My go-to tools for building production-ready web applications"
      />
      <div className="flex flex-col lg:flex-row items-center justify-center gap-[40px] w-full">
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
