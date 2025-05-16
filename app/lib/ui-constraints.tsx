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

export const heroButtons: ButtonConfig[] = [
  { href: "/consult", type: "primary", label: "Consult a Project" },
  { href: "/blog", type: "secondary", label: "Read Blog Posts" },
];

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
  projectDescription: "Daily Financial Transaction Web App",
  projectLongDescription:
    "BSI Walled is a wallet application that supports fund transfers and wallet top-ups, and is integrated with financial transaction tracking features that enable users to monitor income and expense summaries in real time across weekly, monthly, and quarterly periods",
  buttonLabel: "See More Projects",
  buttonHref: "/projects",
};
