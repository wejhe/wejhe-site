import { LargeButton } from "@/app/components/buttons";
import Link from "next/link";
import ProjectCard from "@/app/components/project-card";
import SectionTitle from "@/app/components/landing-page/latest-project/section-title";
import ProjectLongDescription from "@/app/components/landing-page/latest-project/project-long-description";
import { landingPage } from "@/app/libs/ui-data";

export default function LatestProjects() {
  return (
    <>
      <div className="hidden lg:flex items-stretch gap-[80px] w-full px-body-padding-desktop">
        <div className="flex flex-col gap-[40px] items-start w-full">
          <SectionTitle title={landingPage.latestProject.title} />
          <ProjectLongDescription
            description={landingPage.latestProject.projectLongDescription}
          />
          <Link
            key={landingPage.latestProject.button.label}
            href={landingPage.latestProject.button.href}
            className="w-auto"
          >
            <LargeButton type={landingPage.latestProject.button.type}>
              {landingPage.latestProject.button.label}
            </LargeButton>
          </Link>
        </div>
        <ProjectCard
          heightClass="h-auto"
          projectName={landingPage.latestProject.projectName}
          projectDescription={landingPage.latestProject.projectDescription}
          projectImage={landingPage.latestProject.image}
        />
      </div>

      <div className="lg:hidden flex flex-col gap-[40px] w-full px-body-padding-mobile">
        <SectionTitle title={landingPage.latestProject.title} />
        <ProjectCard
          heightClass="h-[400px]"
          projectName={landingPage.latestProject.projectName}
          projectDescription={landingPage.latestProject.projectDescription}
          projectImage={landingPage.latestProject.image}
        />
        <ProjectLongDescription
          description={landingPage.latestProject.projectLongDescription}
        />
        <Link
          key={landingPage.latestProject.button.label}
          href={landingPage.latestProject.button.href}
          className="w-full"
        >
          <LargeButton type={landingPage.latestProject.button.type}>
            {landingPage.latestProject.button.label}
          </LargeButton>
        </Link>
      </div>
    </>
  );
}
