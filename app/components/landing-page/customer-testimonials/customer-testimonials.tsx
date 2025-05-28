import { landingPage } from "@/app/libs/ui-data";
import SectionTitle from "@/app/components/landing-page/section-title";
import TestimonialCard from "@/app/components/landing-page/customer-testimonials/testimonial-card";

export default function CustomerTestimonials() {
  return (
    <div className="flex flex-col items-center gap-[64px] w-full px-body-padding-mobile lg:px-body-padding-desktop">
      <SectionTitle
        title={landingPage.testimonials.title}
        subtitle={landingPage.testimonials.subtitle}
      />
      <div className="flex items-stretch flex-col lg:flex-row items-center justify-center gap-[64px] lg:gap-[40px] w-full">
        {landingPage.testimonials.items.map((testimonial) => (
          <TestimonialCard
            key={testimonial.name}
            name={testimonial.name}
            role={testimonial.role}
            testimonial={testimonial.testimonial}
            image={testimonial.image}
          />
        ))}
      </div>
    </div>
  );
}
