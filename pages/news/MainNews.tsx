"use client"
import { Button } from "@/components/ui/button";
import { NewsData } from "@/data/news/NewsData";
import { NewsCard } from "@/features/news/components/NewsCard";
import { useState } from "react";

const MainNews = () => {
  const [showedImage, setShowedImage] = useState<number>(6)
  console.log(showedImage)
  return (
    <div className="px-5 md:px-6.25 lg:px-10 pb-12.5 lg:pb-18.75 pt-25 lg:pt-37.5 flex justify-center">
      <div className="max-w-[1830px] w-full">
        <div className="flex justify-center flex-col items-center gap-10">
          <span className="text-white text-[54px] lg:text-[68px] font-medium">News</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.75 mt-10 lg:mt-20">
          {NewsData.slice(0, showedImage).map((link, i) => (
            <NewsCard key={i} imgSrc={link} />
          ))}
        </div>
        <div className="mt-7 flex justify-center">
          <Button onClick={() => setShowedImage(showedImage + 6)} className="bg-navbar-text-dark w-fit h-12.25 rounded-[99px] px-5 relative text-[14px] group overflow-hidden hover:bg-navbar-text-dark cursor-pointer text-white">
            <span className="group-hover:-translate-y-12.5 duration-300">
              Shore More News
            </span>
            <span className="-translate-y-1/2 absolute top-[calc(50%+50px)] group-hover:top-1/2 duration-300">
              Shore More News
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainNews;
