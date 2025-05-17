import Link from "next/link";
import { NavButton } from "@/app/components/buttons";
import { navbuttons } from "@/app/libs/ui-data";

export default function NavButtons() {
  return navbuttons.map((button) => (
    <Link key={button.label} href={button.href}>
      <NavButton type={button.type}>{button.label}</NavButton>
    </Link>
  ));
}
