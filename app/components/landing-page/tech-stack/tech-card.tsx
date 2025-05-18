import Image from "next/image";

export default function TechCard({
  title,
  subtitle,
  firstImage,
  secondImage,
}: {
  title: string;
  subtitle: string;
  firstImage: string;
  secondImage: string;
}) {
  return (
    <div className="bg-black border border-stroke-gray rounded-[24px] p-[8px] w-full">
      <div className="relative bg-gradient-to-b from-block-gray to-black flex flex-col items-center justify-center rounded-[16px] gap-[40px] py-[40px] w-full">
        <div className="flex flex-col text-center items-center justify-center gap-[4px] w-full z-2">
          <strong className="text-white text-[24px] font-bold">{title}</strong>
          <p className="text-textual-gray text-[20px]">{subtitle}</p>
        </div>
        <div className="flex flex-col text-center items-center justify-center w-full z-2">
          <Image
            src={`/${firstImage}`}
            width={240}
            height={80}
            alt={firstImage}
          />
          <Image
            src={`/${secondImage}`}
            width={240}
            height={80}
            alt={secondImage}
          />
        </div>
        <Image
          src="/bg-globe.png"
          width={360}
          height={360}
          alt="Globe Background"
          className="absolute bottom-[-8px] z-1"
        />
      </div>
    </div>
  );
}
