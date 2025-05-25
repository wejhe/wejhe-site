import Image from "next/image";

export default function ServiceCard({
  title,
  subtitle,
  icon,
}: {
  title: string;
  subtitle: string;
  icon: string;
}) {
  return (
    <div className="bg-black border border-stroke-gray rounded-[24px] p-[24px] flex flex-col items-center lg:items-start justify-start gap-[24px] w-full lg:h-full">
      <Image src={`/${icon}`} width={40} height={40} alt={icon} />
      <div className="flex flex-col gap-[4px] text-center lg:text-start w-full">
        <strong className="text-white text-[24px] font-bold">{title}</strong>
        <p className="text-textual-gray text-[20px]">{subtitle}</p>
      </div>
    </div>
  );
}
