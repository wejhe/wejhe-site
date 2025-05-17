import Hero from "@/app/components/landing-page/hero/hero";
import TechStack from "@/app/components/landing-page/tech-stack/tech-stack";
import ServiceOfferings from "@/app/components/landing-page/service-offerings/service-offerings";
import LatestProjects from "@/app/components/landing-page/latest-project/latest-project";
import PopularPosts from "@/app/components/landing-page/popular-posts/popular-posts";
import CustomerTestimonials from "@/app/components/landing-page/customer-testimonials/customer-testimonials";
import Outro from "@/app/components/landing-page/outro/outro";

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-lp-section-padding py-lp-y-padding-mobile lg:py-lp-y-padding-desktop w-full">
      <Hero />
      <TechStack />
      <ServiceOfferings />
      <LatestProjects />
      <PopularPosts />
      <CustomerTestimonials />
      <Outro />
    </div>
  );
}
