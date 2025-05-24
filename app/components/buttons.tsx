import clsx from "clsx";
import { ButtonType } from "@/app/libs/definitions";

export function LargeButton({
  type,
  onClick,
  children,
}: {
  type: ButtonType;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  const getButtonClass = (type: string) =>
    clsx(
      "flex items-center justify-center text-[20px] gap-[8px] py-[8px] px-[20px] rounded-[8px] cursor-pointer w-full lg:w-auto",
      {
        "bg-white border border-white text-black font-semibold hover:bg-white-hover active:bg-white-hover":
          type === "primary",
        "bg-block-gray border border-stroke-gray text-white hover:bg-block-gray-hover active:bg-block-gray-hover":
          type === "secondary",
      }
    );

  return (
    <button onClick={onClick} className={getButtonClass(type)}>
      {children}
    </button>
  );
}

export function SmallButton({
  type,
  onClick,
  children,
}: {
  type: ButtonType;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  const getButtonClass = (type: string) =>
    clsx("py-[6px] px-[16px] rounded-[6px] text-[16px] cursor-pointer", {
      "bg-white text-black font-semibold border border-white hover:bg-white-hover active:bg-white-hover":
        type === "primary",
      "bg-block-gray text-white border border-stroke-gray hover:bg-block-gray-hover active:bg-block-gray-hover":
        type === "secondary",
    });

  return (
    <button onClick={onClick} className={getButtonClass(type)}>
      {children}
    </button>
  );
}

export function NavButton({
  type,
  onClick,
  children,
}: {
  type: ButtonType;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  const getButtonClass = (type: string) =>
    clsx("hidden lg:block py-1 px-3 rounded-[6px] text-[14px] cursor-pointer", {
      "bg-white text-black font-semibold border border-white hover:bg-white-hover active:bg-white-hover":
        type === "primary",
      "bg-block-gray text-white border border-stroke-gray hover:bg-block-gray-hover active:bg-block-gray-hover":
        type === "secondary",
    });

  return (
    <button onClick={onClick} className={getButtonClass(type)}>
      {children}
    </button>
  );
}

export function NavButtonMobile({
  type,
  onClick,
  children,
}: {
  type: ButtonType;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  const getButtonClass = (type: string) =>
    clsx("py-2 rounded-[6px] text-[14px] cursor-pointer w-full", {
      "bg-white text-black font-semibold border border-white hover:bg-white-hover active:bg-white-hover":
        type === "primary",
      "bg-block-gray text-white border border-stroke-gray hover:bg-block-gray-hover active:bg-block-gray-hover":
        type === "secondary",
    });

  return (
    <button onClick={onClick} className={getButtonClass(type)}>
      {children}
    </button>
  );
}
