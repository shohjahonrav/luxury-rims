import { Button } from "@/components/ui/button";
import { NewsData } from "@/data/news/NewsData";
import { NewsCard } from "@/features/news/components/NewsCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const News = () => {
  return (
    <div className="mx-5 md:mx-6.25 lg:mx-10 py-12.5 md:py-18.75 flex justify-center">
      <div className="max-w-[1830px] w-full flex flex-col gap-10 md:gap-20">
        <div className="flex md:items-center justify-between flex-col md:flex-row gap-3.75 md:gap-0">
          <span className="text-[34px] md:text-[54px] text-white font-medium">
            Our Latest News and Stories
          </span>
          <Button className="bg-navbar-text-dark h-12.25 rounded-[99px] px-5 w-fit relative text-[14px] group overflow-hidden hover:bg-navbar-text-dark cursor-pointer text-white">
            <span className="group-hover:-translate-y-12.5 duration-300">
              Explore News
            </span>
            <span className="-translate-y-1/2 absolute top-[calc(50%+50px)] group-hover:top-1/2 duration-300">
              Explore News
            </span>
          </Button>
        </div>
        <div className="grid lg:grid-cols-3 gap-3.75">
          {NewsData.slice(0, 3).map((link, i) => (
            <NewsCard key={i} imgSrc={link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
