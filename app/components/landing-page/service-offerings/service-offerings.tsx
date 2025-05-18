import SectionTitle from "@/app/components/landing-page/section-title";
import ServiceCard from "@/app/components/landing-page/service-offerings/service-card";
import { LargeButton } from "@/app/components/buttons";
import {
  serviceOfferingsTitle,
  serviceOfferingsSubtitle,
  serviceOfferings,
  serviceOfferingsButton,
} from "@/app/libs/ui-data";
import Link from "next/link";

export default function ServiceOfferings() {
  return (
    <div className="flex flex-col items-center gap-[64px] w-full px-body-padding-mobile lg:px-0">
      <div className="px-0 lg:px-body-padding-desktop w-full">
        <SectionTitle
          title={serviceOfferingsTitle}
          subtitle={serviceOfferingsSubtitle}
        />
      </div>
      <div className="flex flex-col lg:flex-row bg-block-gray rounded-[24px] lg:rounded-[0px] border lg:border-x-0 border-stroke-gray items-center justify-center lg:items-start gap-[64px] lg:gap-[40px] w-full py-[40px] px-body-padding-mobile lg:px-body-padding-desktop">
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
        key={serviceOfferingsButton.label}
        href={serviceOfferingsButton.href}
        className="w-full lg:w-auto"
      >
        <LargeButton type={serviceOfferingsButton.type}>
          {serviceOfferingsButton.label}
        </LargeButton>
      </Link>
    </div>
  );
}
