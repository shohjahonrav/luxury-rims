import { Button } from "@/components/ui/button";
import { NewsData } from "@/data/news/NewsData";
import { NewsCard } from "@/features/news/components/NewsCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const News = () => {
  return (
    <div className="mx-10 py-18.75 flex justify-center">
      <div className="max-w-[1830px] w-full flex flex-col gap-20">
        <div className="flex items-center justify-between">
          <span className="text-[54px] text-white font-medium">
            Our Latest News and Stories
          </span>
          <Button className="bg-navbar-text-dark h-12.25 rounded-[99px] px-5 relative text-[14px] group overflow-hidden hover:bg-navbar-text-dark cursor-pointer text-white">
            <span className="group-hover:-translate-y-12.5 duration-300">
              Explore News
            </span>
            <span className="-translate-y-1/2 absolute top-[calc(50%+50px)] group-hover:top-1/2 duration-300">
              Explore News
            </span>
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-3.75">
          {NewsData.slice(0, 3).map((link, i) => (
            <NewsCard key={i} imgSrc={link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
