import Image from "next/image";

export default function TestimonialCard({
  name,
  role,
  testimonial,
  image,
}: {
  name: string;
  role: string;
  testimonial: string;
  image: string;
}) {
  return (
    <div className="h-auto flex flex-col items-center justify-center gap-[16px] lg:gap-[8px] w-full">
      <div className="flex flex-col h-full items-center lg:items-start">
        <p className="bg-block-gray h-full text-center lg:text-justify text-textual-gray text-[20px] px-[24px] pt-[16px] pb-[20px] rounded-[24px] lg:rounded-bl-[0px] w-full">
          {testimonial}
        </p>
        <div className="hidden lg:block w-0 h-0 border-t-[24px] border-r-[24px] border-t-block-gray border-r-transparent" />
        <div className="lg:hidden flex">
          <div className="w-0 h-0 border-b-[24px] border-r-[24px] border-b-transparent border-r-block-gray" />
          <div className="w-0 h-0 border-t-[24px] border-r-[24px] border-t-block-gray border-r-transparent" />
        </div>
      </div>
      <div className="flex gap-[20px] items-center justify-center w-full">
        <Image src={`/${image}`} width={64} height={64} alt={name} />
        <div className="flex flex-col items-start justify-center gap-[4px] lg:w-full">
          <strong className="text-white text-[24px] font-bold">{name}</strong>
          <p className="text-textual-gray text-[20px]">{role}</p>
        </div>
      </div>
    </div>
  );
}
