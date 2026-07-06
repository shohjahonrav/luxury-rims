import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const NewsCard = () => {
  return (
    <div className="relative overflow-hidden rounded-[30px]">
      <Image
        src="/images/news1.avif"
        width={596}
        height={656}
        alt="News1"
        className="object-cover hover:scale-1.2 duration-400 h-164 rounded-[30px]"
      />
      <div className="absolute top-0 left-0 h-full flex flex-col justify-between p-5 w-full bg-linear-to-t from-black via-transparent to-transparent">
        <span className="text-white font-medium">August 1, 2025</span>
        <div className="flex flex-col gap-2.5">
          <span className="text-white text-[18px] font-medium max-w-90 flex ">
            Porsche 911 GT3 RS joins our premium supercar collection
          </span>
          <Link
            href="/news/1"
            className="bg-white flex items-center justify-center font-medium h-12.25 rounded-[99px] w-full px-5 relative text-[14px] group overflow-hidden hover:bg-white cursor-pointer text-navbar-text-dark"
          >
            <span className="group-hover:-translate-y-12.5 duration-300">
              Read more
            </span>
            <span className="-translate-y-1/2 absolute top-[calc(50%+50px)] group-hover:top-1/2 duration-300">
              Read more
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
