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
    <div className="flex flex-col items-center justify-center gap-[24px] w-full">
      <Image src={`/${icon}`} width={64} height={64} alt={icon} />
      <div className="flex flex-col text-center items-center justify-center gap-[4px] w-full">
        <strong className="text-white text-[24px] font-bold">{title}</strong>
        <p className="text-textual-gray text-[20px]">{subtitle}</p>
      </div>
    </div>
  );
}
