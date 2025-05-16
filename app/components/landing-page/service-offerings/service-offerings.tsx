import SectionTitle from "@/app/components/landing-page/section-title";
import ServiceCard from "@/app/components/landing-page/service-offerings/service-card";
import { LargeButton } from "@/app/components/buttons";
import { serviceOfferings } from "@/app/lib/ui-constraints";
import Link from "next/link";

export default function ServiceOfferings() {
  return (
    <div className="flex flex-col items-center gap-[64px] w-full px-body-padding-mobile lg:px-0">
      <div className="px-0 lg:px-body-padding-desktop">
        <SectionTitle
          title="Service Offerings"
          subtitle="Exploring, shaping, and delivering digital solutions tailored to your unique needs"
        />
      </div>
      <div className="flex flex-col lg:flex-row bg-block-gray rounded-[24px] lg:rounded-[0px] border lg:border-y border-stroke-gray items-center justify-center lg:items-start gap-[64px] lg:gap-[40px] w-full py-[40px] px-body-padding-mobile lg:px-body-padding-desktop">
        {serviceOfferings.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            subtitle={service.subtitle}
            icon={service.icon}
          />
        ))}
      </div>
      <Link
        key="Explore More Services"
        href="/services"
        className="w-full lg:w-auto"
      >
        <LargeButton type="primary">Explore More Services</LargeButton>
      </Link>
    </div>
  );
}
