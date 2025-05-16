export default function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-white text-center lg:text-left font-bold text-[40px] w-full">
      {title}
    </h2>
  );
}
