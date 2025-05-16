import clsx from "clsx";

export default function ProjectCard({
  heightClass,
  projectName,
  projectDescription,
}: {
  heightClass: string;
  projectName: string;
  projectDescription: string;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col border border-stroke-gray rounded-[24px] w-full",
        heightClass
      )}
    >
      <div className="h-full rounded-t-[24px] bg-[url('/walled.png')] bg-cover bg-center"></div>
      <div className="flex flex-col text-left justify-center gap-[4px] px-[32px] py-[24px] w-full">
        <strong className="text-white text-[24px] font-bold">
          {projectName}
        </strong>
        <p className="text-textual-gray text-[20px]">{projectDescription}</p>
      </div>
    </div>
  );
}
