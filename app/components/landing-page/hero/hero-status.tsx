import Image from "next/image";

export default function HeroStatus({
  icon,
  children,
}: {
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-[12px] py-[8px] pl-[12px] pr-[20px] rounded-[100px] bg-block-gray border border-stroke-gray text-white text-[14px]">
      <Image src={`/${icon}`} width={24} height={24} alt={icon} />
      <p className="text-center">{children}</p>
    </div>
  );
}
