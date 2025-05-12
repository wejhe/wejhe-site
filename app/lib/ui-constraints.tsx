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
