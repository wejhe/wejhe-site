import Link from "next/link";
import clsx from "clsx";

const buttons = [
  { name: "Give Feedback", href: "/feedback", type: "secondary" },
  { name: "Get in Touch", href: "/consult", type: "primary" },
];

export default function NavButtons() {
  const getButtonClass = (type: string) =>
    clsx("py-1 px-3 rounded-[6px] text-[14px]", {
      "bg-white text-black font-semibold border border-white hover:bg-white-hover":
        type === "primary",
      "bg-block-gray text-white border border-stroke-gray hover:bg-block-gray-hover":
        type === "secondary",
    });

  return buttons.map((button) => (
    <Link
      key={button.name}
      href={button.href}
      className={getButtonClass(button.type)}
    >
      {button.name}
    </Link>
  ));
}
