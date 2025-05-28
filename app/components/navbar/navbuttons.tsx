import Link from "next/link";
import { NavButton } from "@/app/components/buttons";
import { navbar } from "@/app/libs/ui-data";

export default function NavButtons() {
  return navbar.button.map((button) => (
    <Link key={button.label} href={button.href}>
      <NavButton type={button.type}>{button.label}</NavButton>
    </Link>
  ));
}
