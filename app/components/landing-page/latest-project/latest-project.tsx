import { LargeButton } from "@/app/components/buttons";
import Link from "next/link";
import ProjectCard from "@/app/components/project-card";
import { latestProject } from "@/app/lib/ui-constraints";

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-white text-center lg:text-left font-bold text-[40px] w-full">
      {title}
    </h2>
  );
}

function ProjectLongDescription({ description }: { description: string }) {
  return (
    <p className="text-textual-gray text-center lg:text-justify leading-[36px] lg:leading-[40px] text-[20px] lg:text-[24px] w-full">
      {description}
    </p>
  );
}

export default function LatestProjects() {
  return (
    <>
      <div className="hidden lg:flex items-stretch gap-[80px] w-full px-body-padding-desktop">
        <div className="flex flex-col gap-[40px] items-start w-full">
          <SectionTitle title={latestProject.sectionTitle} />
          <ProjectLongDescription
            description={latestProject.projectLongDescription}
          />
          <Link
            key={latestProject.buttonLabel}
            href={latestProject.buttonHref}
            className="w-auto"
          >
            <LargeButton type="primary">
              {latestProject.buttonLabel}
            </LargeButton>
          </Link>
        </div>
        <ProjectCard
          heightClass="h-auto"
          projectName={latestProject.projectName}
          projectDescription={latestProject.projectDescription}
        />
      </div>

      <div className="lg:hidden flex flex-col gap-[40px] w-full px-body-padding-mobile">
        <SectionTitle title={latestProject.sectionTitle} />
        <ProjectCard
          heightClass="h-[400px]"
          projectName={latestProject.projectName}
          projectDescription={latestProject.projectDescription}
        />
        <ProjectLongDescription
          description={latestProject.projectLongDescription}
        />
        <Link
          key={latestProject.buttonLabel}
          href={latestProject.buttonHref}
          className="w-full"
        >
          <LargeButton type="primary">{latestProject.buttonLabel}</LargeButton>
        </Link>
      </div>
    </>
  );
}
