import Image from "next/image";

export function LargeTag({
  icon,
  children,
}: {
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-[12px] py-[8px] pl-[12px] pr-[18px] rounded-[100px] bg-block-gray border border-stroke-gray text-white text-[14px]">
      <Image src={`/${icon}`} width={24} height={24} alt={icon} />
      <p className="text-center">{children}</p>
    </div>
  );
}

export function SmallTag({
  icon,
  children,
}: {
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-[8px] py-[6px] pl-[10px] pr-[14px] rounded-[100px] bg-block-gray border border-stroke-gray text-white text-[14px]">
      <Image
        src={`/${icon}`}
        width={16}
        height={16}
        alt={icon}
        loading="eager"
      />
      <p className="text-center">{children}</p>
    </div>
  );
}
