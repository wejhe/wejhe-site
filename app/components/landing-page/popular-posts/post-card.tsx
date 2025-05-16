import Image from "next/image";

export default function PostCard() {
  return (
    <div className="inline-block bg-black border border-stroke-gray rounded-[24px] p-[8px] mx-[20px] w-[400px] whitespace-normal">
      <div className="bg-gradient-to-b from-block-gray to-black flex flex-col items-center justify-center rounded-[16px] gap-[32px] p-[32px] w-full">
        <strong className="text-white text-center text-[24px] font-bold w-full">
          Understanding State Management in React
        </strong>
        <div className="flex gap-[12px] items-center justify-center w-full">
          <div className="flex items-center gap-[8px] py-[6px] pl-[10px] pr-[14px] rounded-[100px] bg-block-gray border border-stroke-gray text-white text-[14px]">
            <Image src="/author.svg" width={16} height={16} alt="Globe Icon" />
            <p className="text-center">Wahyu W</p>
          </div>
          <div className="flex items-center gap-[8px] py-[6px] pl-[10px] pr-[14px] rounded-[100px] bg-block-gray border border-stroke-gray text-white text-[14px]">
            <Image src="/time.svg" width={16} height={16} alt="Globe Icon" />
            <p className="text-center">5 min read</p>
          </div>
        </div>
        <div className="flex gap-[12px] items-center justify-center w-full">
          <Image src="/view.svg" width={24} height={24} alt="View Icon" />
          <p className="text-center text-textual-gray text-[20px]">
            5 min read
          </p>
        </div>
      </div>
    </div>
  );
}
