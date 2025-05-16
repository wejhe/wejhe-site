import SectionTitle from "@/app/components/landing-page/section-title";
import { LargeButton } from "@/app/components/buttons";
import PostCard from "@/app/components/landing-page/popular-posts/post-card";
import {
  popularPostsTitle,
  popularPostsSubtitle,
  popularPostsButtons,
} from "@/app/lib/ui-constraints";
import Link from "next/link";

export default function PopularPosts() {
  return (
    <div className="flex flex-col items-center gap-[64px] w-full">
      <div className="px-body-padding-mobile lg:px-body-padding-desktop w-full">
        <SectionTitle
          title={popularPostsTitle}
          subtitle={popularPostsSubtitle}
        />
      </div>
      <div className="relative overflow-x-hidden w-full">
        <div className="animate-marquee inline-block whitespace-nowrap">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
        <div className="absolute top-0 animate-marquee-duplicate inline-block whitespace-nowrap">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-[16px] lg:gap-[24px] px-body-padding-mobile lg:px-body-padding-desktop  w-full">
        {popularPostsButtons.map((button) => (
          <Link
            key={button.label}
            href={button.href}
            className="w-full lg:w-auto"
          >
            <LargeButton type={button.type}>{button.label}</LargeButton>
          </Link>
        ))}
      </div>
    </div>
  );
}
