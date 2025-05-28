import { ButtonConfig } from "@/app/libs/definitions";

export const navmenus = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
];

export const navbuttons: ButtonConfig[] = [
  { href: "/feedback", type: "secondary", label: "Give Feedback" },
  { href: "/login", type: "primary", label: "Login" },
];

export const heroStatuses = [
  { icon: "globe.svg", label: "Jakarta, Indonesia" },
  { icon: "aperture.svg", label: "Available for Projects" },
];

export const heroTitle = "I'm a Software Developer";

export const heroSubtitle = (
  <>
    Crafting reliable, intuitive, and seamless{" "}
    <strong className="text-white font-semibold">digital experiences</strong>{" "}
    for everyone with the power of cutting-edge technologies and human-centric
    design
  </>
);

export const heroButton: ButtonConfig = {
  href: "/consult",
  type: "primary",
  label: "Consult",
};

export const techStackTitle = "Technology Stack";

export const techStackSubtitle =
  "My go-to tools for building production-ready digital solutions";

export const techStack = [
  {
    title: "Web Frontend",
    subtitle: "Bringing UI to life",
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
  {
    title: "Mobile App",
    subtitle: "Creating mobile magic",
    firstImage: "reactnative.png",
    secondImage: "flutter.png",
  },
  {
    title: "Low-Code",
    subtitle: "Fast-track development",
    firstImage: "outsystems.png",
    secondImage: "framer.png",
  },
  {
    title: "Design",
    subtitle: "Visualizing the ideas",
    firstImage: "figma.png",
    secondImage: "photoshop.png",
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

export const serviceOfferings = [
  {
    title: "Full Scale Web App",
    subtitle: "Build a mid-to-large scale web app natively or using OutSystems",
    icon: "fullweb.svg",
  },
  {
    title: "Simple Website",
    subtitle:
      "Build a simple personal and commercial website natively or using Framer",
    icon: "simpleweb.svg",
  },
  {
    title: "Mobile App",
    subtitle:
      "Build a high-performance mobile app using React Native or Flutter",
    icon: "mobile.svg",
  },
  {
    title: "UI UX Design",
    subtitle:
      "Build an intuitive interface design for web and mobile app using Figma",
    icon: "uiuxdesign.svg",
  },
  {
    title: "RESTful API",
    subtitle:
      "Build a well-documented RESTful API using Spring Boot or Express.js",
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

export const outroButtons: ButtonConfig[] = [
  {
    href: "/consult",
    type: "primary",
    label: "Consult a Project",
  },
  {
    href: "none",
    onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    type: "secondary",
    label: "Back to Top",
  },
];

export const popularPostsTitle = "Popular Blog Posts";

export const popularPostsSubtitle =
  "High quality articles discussing innovations and issues in the world of technology";

export const popularPostsButtons: ButtonConfig[] = [
  { href: "/blog", type: "primary", label: "Open Blog Page" },
  { href: "/contribute", type: "secondary", label: "Write and Contribute" },
];

export const popularPosts = [
  {
    title: "Understanding State Management in React",
    author: "Wahyu W",
    timeToRead: 5,
    views: 783,
  },
  {
    title: "Building Reusable Components in Next.js",
    author: "Wahyu W",
    timeToRead: 7,
    views: 654,
  },
  {
    title: "A Guide to React Hooks: useEffect and useState",
    author: "Wahyu W",
    timeToRead: 6,
    views: 912,
  },
  {
    title: "How to Optimize Performance in React Apps",
    author: "Wahyu W",
    timeToRead: 8,
    views: 1032,
  },
  {
    title: "CSS Modules vs Tailwind CSS in-Depth-Review",
    author: "Wahyu W",
    timeToRead: 5,
    views: 788,
  },
  {
    title: "Deploying a Next.js App Easily on Vercel",
    author: "Wahyu W",
    timeToRead: 4,
    views: 521,
  },
  {
    title: "Getting Started with TypeScript in React",
    author: "Wahyu W",
    timeToRead: 6,
    views: 689,
  },
  {
    title: "Managing Your App's Global State with Zustand",
    author: "Wahyu W",
    timeToRead: 5,
    views: 742,
  },
  {
    title: "Dark Mode in Next.js Using Tailwind and Context",
    author: "Wahyu W",
    timeToRead: 6,
    views: 837,
  },
  {
    title: "Handling Forms Input in React the Easy Way",
    author: "Wahyu W",
    timeToRead: 5,
    views: 910,
  },
];

export const testimonialsTitle = "Customer Testimonials";

export const testimonialsSubtitle =
  "Hear what clients say about the results and experiences we've built together";

export const testimonials = [
  {
    name: "Satriyo Bagus P",
    role: "Bank Syariah Indonesia",
    testimonial:
      "Wejhe is a very reliable professional with exceptional adaptability. He consistently completes assigned tasks promptly and accurately. Working alongside him has been a truly enjoyable experience.",
    image: "testi-1.png",
  },
  {
    name: "Vernika Silviana",
    role: "Ganesha Operation",
    testimonial:
      "Just trust me, Wejhe is super quick to respond, which makes the whole process smooth and easy. What I really appreciate is how well he understands what I’m looking for. He always takes the time to get what I need, and the results always go beyond what I had in mind.",
    image: "testi-2.png",
  },
  {
    name: "Muhammad Imron",
    role: "Bank Central Asia",
    testimonial:
      "Wejhe is a highly skilled and professional developer. He is able to think of a solution that others might not have considered. He is also a trustworthy person who can be relied upon to complete specific tasks on time and with high quality.",
    image: "testi-3.png",
  },
];

export const copyright = "2025 Wahyu Wijiyanto";
