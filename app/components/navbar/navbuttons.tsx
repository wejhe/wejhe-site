import Link from "next/link";
import { NavButton } from "@/app/components/buttons";
import { ButtonConfig } from "@/app/lib/definitions";

const buttons: ButtonConfig[] = [
  { href: "/feedback", type: "secondary", label: "Give Feedback" },
  { href: "/consult", type: "primary", label: "Get in Touch" },
];

export default function NavButtons() {
  return buttons.map((button) => (
    <Link key={button.label} href={button.href}>
      <NavButton type={button.type}>{button.label}</NavButton>
    </Link>
  ));
}
