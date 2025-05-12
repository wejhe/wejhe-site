export default function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex flex-col items-center gap-[8px] w-full">
      <h2 className="text-white text-center font-bold text-[40px] w-full">
        {title}
      </h2>
      <p className="text-textual-gray text-center leading-[36px] lg:leading-[40px] text-[20px] lg:text-[24px] w-full">
        {subtitle}
      </p>
    </div>
  );
}
