export default function ProjectLongDescription({ description }: { description: string }) {
  return (
    <p className="text-textual-gray text-center lg:text-justify leading-[36px] lg:leading-[40px] text-[20px] lg:text-[24px] w-full">
      {description}
    </p>
  );
}
