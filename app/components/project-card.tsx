import clsx from "clsx";
import Image from "next/image";

export default function ProjectCard({
  heightClass,
  projectName,
  projectDescription,
  projectImage,
}: {
  heightClass: string;
  projectName: string;
  projectDescription: string;
  projectImage: string;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col border border-stroke-gray rounded-[24px] w-full",
        heightClass
      )}
    >
      <div className="relative h-full">
        <Image
          src={`/${projectImage}`}
          alt="Project Image"
          fill
          className="object-cover rounded-t-[24px]"
        />
      </div>
      <div className="flex flex-col text-left justify-center gap-[4px] px-[32px] py-[24px] w-full">
        <strong className="text-white text-[24px] font-bold">
          {projectName}
        </strong>
        <p className="text-textual-gray text-[20px]">{projectDescription}</p>
      </div>
    </div>
  );
}
