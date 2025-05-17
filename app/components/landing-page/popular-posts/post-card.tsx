import Image from "next/image";
import { SmallTag } from "@/app/components/tags";

export default function PostCard({
  title,
  author,
  timeToRead,
  views,
}: {
  title: string;
  author: string;
  timeToRead: number;
  views: number;
}) {
  return (
    <div className="inline-block bg-black border border-stroke-gray rounded-[24px] p-[8px] mx-[20px] w-[400px] whitespace-normal">
      <div className="bg-gradient-to-b from-block-gray to-black flex flex-col items-center justify-center rounded-[16px] gap-[32px] p-[32px] w-full">
        <strong className="text-white text-center text-[24px] font-bold w-full">
          {title}
        </strong>
        <div className="flex gap-[12px] items-center justify-center w-full">
          <SmallTag icon="author.svg">{author}</SmallTag>
          <SmallTag icon="time.svg">{timeToRead} min read</SmallTag>
        </div>
        <div className="flex gap-[8px] items-center justify-center w-full">
          <Image
            src="/view.svg"
            width={24}
            height={24}
            alt="Views Icon"
            loading="eager"
          />
          <p className="text-center text-textual-gray text-[20px]">
            {views} views
          </p>
        </div>
      </div>
    </div>
  );
}
