import clsx from "clsx";
import { ButtonType } from "@/app/lib/definitions";

export function LargeButton({
  type,
  children,
}: {
  type: ButtonType;
  children: React.ReactNode;
}) {
  const getButtonClass = (type: string) =>
    clsx(
      "flex items-center gap-[8px] py-[8px] px-[20px] rounded-[8px] cursor-pointer",
      {
        "bg-white border border-white text-black text-[20px] font-semibold hover:bg-white-hover active:bg-white-hover":
          type === "primary",
        "bg-block-gray border border-stroke-gray text-white text-[20px] hover:bg-block-gray-hover active:bg-block-gray-hover":
          type === "secondary",
      }
    );

  return <button className={getButtonClass(type)}>{children}</button>;
}

export function NavButton({
  type,
  children,
}: {
  type: ButtonType;
  children: React.ReactNode;
}) {
  const getButtonClass = (type: string) =>
    clsx("hidden lg:block py-1 px-3 rounded-[6px] text-[14px] cursor-pointer", {
      "bg-white text-black font-semibold border border-white hover:bg-white-hover active:bg-white-hover":
        type === "primary",
      "bg-block-gray text-white border border-stroke-gray hover:bg-block-gray-hover active:bg-block-gray-hover":
        type === "secondary",
    });

  return <button className={getButtonClass(type)}>{children}</button>;
}

export function NavButtonMobile({
  type,
  children,
}: {
  type: ButtonType;
  children: React.ReactNode;
}) {
  const getButtonClass = (type: string) =>
    clsx("py-2 rounded-[6px] text-[14px] cursor-pointer w-full", {
      "bg-white text-black font-semibold border border-white hover:bg-white-hover active:bg-white-hover":
        type === "primary",
      "bg-block-gray text-white border border-stroke-gray hover:bg-block-gray-hover active:bg-block-gray-hover":
        type === "secondary",
    });

  return <button className={getButtonClass(type)}>{children}</button>;
}
