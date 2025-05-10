import clsx from "clsx";

export default function LargeButton({
  type,
  children,
}: {
  type: "primary" | "secondary";
  children: React.ReactNode;
}) {
  const getButtonClass = (type: string) =>
    clsx(
      "flex items-center gap-[8px] py-[8px] px-[20px] rounded-[8px] cursor-pointer",
      {
        "bg-white border border-white text-black text-[20px] font-semibold hover:bg-white-hover":
          type === "primary",
        "bg-block-gray border border-stroke-gray text-white text-[20px] hover:bg-block-gray-hover":
          type === "secondary",
      }
    );

  return <button className={getButtonClass(type)}>{children}</button>;
}
