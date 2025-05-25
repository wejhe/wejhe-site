import ServiceCard from "@/app/components/landing-page/service-offerings/service-card";
import { LargeButton } from "@/app/components/buttons";
import {
  serviceOfferingsTitle,
  serviceOfferings,
  serviceOfferingsButton,
} from "@/app/libs/ui-data";
import Link from "next/link";

export default function ServiceOfferings() {
  return (
    <div className="flex flex-col items-center justify-center lg:grid lg:grid-cols-3 gap-[40px] px-body-padding-mobile lg:px-body-padding-desktop w-full">
      <div className="flex flex-col items-start justify-between w-full h-full">
        <h2 className="text-white text-center lg:text-start font-bold text-[40px] w-full">
          {serviceOfferingsTitle}
        </h2>
        <Link
          key={serviceOfferingsButton.label}
          href={serviceOfferingsButton.href}
          className="hidden lg:block w-auto"
        >
          <LargeButton type={serviceOfferingsButton.type}>
            {serviceOfferingsButton.label}
          </LargeButton>
        </Link>
      </div>
      {serviceOfferings.map((service) => (
        <ServiceCard
          key={service.title}
          title={service.title}
          subtitle={service.subtitle}
          icon={service.icon}
        />
      ))}
      <Link
        key={serviceOfferingsButton.label}
        href={serviceOfferingsButton.href}
        className="lg:hidden block w-full"
      >
        <LargeButton type={serviceOfferingsButton.type}>
          {serviceOfferingsButton.label}
        </LargeButton>
      </Link>
    </div>
  );
}
