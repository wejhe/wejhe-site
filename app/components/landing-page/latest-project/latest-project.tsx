import { LargeButton } from "@/app/components/buttons";
import Link from "next/link";
import ProjectCard from "@/app/components/project-card";
import SectionTitle from "@/app/components/landing-page/latest-project/section-title"
import ProjectLongDescription from "@/app/components/landing-page/latest-project/project-long-description"
import { latestProject } from "@/app/lib/ui-constraints";

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
