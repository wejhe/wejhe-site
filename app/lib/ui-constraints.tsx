import { ButtonConfig } from "@/app/lib/definitions";

export const navmenus = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
];

export const navbuttons: ButtonConfig[] = [
  { href: "/feedback", type: "secondary", label: "Give Feedback" },
  { href: "/consult", type: "primary", label: "Get in Touch" },
];

export const heroStatuses = [
  { icon: "globe.svg", label: "Jakarta, Indonesia" },
  { icon: "aperture.svg", label: "Available for Projects" },
];

export const heroTitle = "I'm a Software Developer";

export const heroSubtitle = (
  <>
    Crafting reliable, intuitive, and seamless{" "}
    <strong className="text-white font-semibold">web experiences</strong> for
    everyone with the power of cutting-edge technologies and human-centric
    design
  </>
);

export const heroButtons: ButtonConfig[] = [
  { href: "/consult", type: "primary", label: "Consult a Project" },
  { href: "/blog", type: "secondary", label: "Read Blog Posts" },
];

export const techStackTitle = "Technology Stack";

export const techStackSubtitle =
  "My go-to tools for building production-ready web applications";

export const techStack = [
  {
    title: "Frontend",
    subtitle: "Crafting beautiful UI",
    firstImage: "nextjs.png",
    secondImage: "vuejs.png",
  },
  {
    title: "Backend",
    subtitle: "Doing the business logic",
    firstImage: "springboot.png",
    secondImage: "expressjs.png",
  },
  {
    title: "Database",
    subtitle: "Safely store the data",
    firstImage: "mongodb.png",
    secondImage: "postgres.png",
  },
];

export const latestProject = {
  sectionTitle: "Latest Project",
  projectName: "BSI Walled",
  projectDescription: "Financial Transaction Web App",
  projectLongDescription:
    "BSI Walled is a wallet application that supports fund transfers and wallet top-ups, and is integrated with financial transaction tracking features that enable users to monitor income and expense summaries in real time across weekly, monthly, and quarterly periods",
  buttonLabel: "See More Projects",
  buttonHref: "/projects",
  image: "/walled.png",
};

export const serviceOfferingsTitle = "Service Offerings";

export const serviceOfferingsSubtitle =
  "Exploring, shaping, and delivering digital solutions tailored to your unique needs";

export const serviceOfferings = [
  {
    title: "Full Scale Web App",
    subtitle:
      "Build a fully functional mid-to-large scale web app natively or using OutSystems",
    icon: "fullweb.svg",
  },
  {
    title: "Simple Website",
    subtitle:
      "Build a simple website (e.g. Landing Page, Invitation) natively or using Framer",
    icon: "simpleweb.svg",
  },
  {
    title: "UI UX Design",
    subtitle:
      "Build an intuitive user interface design for web and mobile applications using Figma",
    icon: "uiuxdesign.svg",
  },
  {
    title: "RESTful API",
    subtitle:
      "Build a well documented RESTful API using Spring Boot Java or Express.js",
    icon: "restfulapi.svg",
  },
];

export const serviceOfferingsButton: ButtonConfig = {
  href: "/services",
  type: "primary",
  label: "Explore All Services",
};

export const outroTitle = "Transforming Possibility, Shaping Reality";

export const outroSubtitle = "Have an idea in mind? Bring it to life!";

export const outroButton: ButtonConfig = {
  href: "/consult",
  type: "primary",
  label: "Consult a Project",
};

export const testimonialsTitle = "Customer Testimonials";

export const testimonialsSubtitle =
  "Hear what clients say about the results and experiences we've built together";

export const testimonials = [
  {
    name: "Wahyu Wijiyanto",
    role: "Bank Daya Guna",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus enim eget nulla auctor volutpat. Habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    image: "testi-1.png",
  },
  {
    name: "Wahyu Wijigedang",
    role: "Bank Daya Guna",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus enim eget nulla auctor volutpat. Habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque finibus enim eget nulla auctor volutpat, consec adipiscing nurman lador elit.",
    image: "testi-1.png",
  },
  {
    name: "Wahyu Wijidaya",
    role: "Bank Daya Guna",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus enim eget nulla auctor volutpat. Habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    image: "testi-1.png",
  },
];

export const copyright = "2025 Wahyu Wijiyanto";
