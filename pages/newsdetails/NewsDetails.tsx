"use client";
import { Button } from "@/components/ui/button";
import { NewsData } from "@/data/news/NewsData";
import { NewsCard } from "@/features/news/components/NewsCard";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NewsDetails = () => {
  const navigate = useRouter();
  const goBack = () => {
    navigate.back();
  };
  return (
    <div className="max-10 px-5 pt-25 lg:pt-37.5 pb-12.5 lg:pb-18.75 flex justify-center">
      <div className="max-w-[1830px] w-full flex flex-col gap-25 lg:gap-37.5">
        <div className="max-w-162.5 mx-auto w-full flex flex-col gap-3.75">
          <Button
            onClick={() => goBack()}
            className="flex gap-1.25 bg-transparent w-fit px-0 hover:bg-transparent text-gray-primary"
          >
            <ChevronLeft />
            <span>Back to Rims</span>
          </Button>
          <span className="text-[46px] md:text-[64px] lg:text-[68px] text-white font-medium leading-[52.9px] md:leading-none lg:leading-[78.2px]">
            Express 90-minute priority delivery service launched
          </span>
          <span className="text-[16px] text-gray-primary">July 20, 2025</span>
          <Image
            src="/news/news1.avif"
            width={650}
            height={400}
            alt="News 1"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 40vw"
            className=" object-cover w-full aspect-650/400 rounded-[30px]"
          />
          <div className="flex flex-col gap-3.75 mt-6.25">
            <p className="text-[18px] text-gray-primary">
              Luxerra is excited to introduce our new Express 90-Minute Delivery
              Service in Los Angeles. Now, you can have your chosen luxury or
              exotic car, from Ferrari to Rolls-Royce, delivered directly to
              your location within just 90 minutes.
            </p>
            <p className="text-[18px] text-gray-primary">
              This service is designed for clients who value time and
              convenience, offering a seamless and efficient experience without
              compromising on premium quality. Our professional team ensures
              each vehicle is prepared to the highest standards and delivered
              safely, allowing you to start your journey immediately.
            </p>
            <p className="text-[18px] text-gray-primary">
              Experience the ultimate in luxury, speed, and convenience with
              Luxerra’s Express Delivery. Book today and enjoy your dream car
              faster than ever, making every moment in Los Angeles
              extraordinary.
            </p>
          </div>
        </div>
        <div className="flex flex-col ">
          <div>
            <div className="flex md:items-center justify-between flex-col md:flex-row">
              <span className="text-[34px] lg:text-[54px] text-white font-medium">
                Recomended For You
              </span>
              <Link
                href="/news"
                className="bg-navbar-text-dark h-12.25 w-fit mt-5 rounded-[99px] flex items-center justify-center font-medium px-5 relative text-[14px] group overflow-hidden hover:bg-navbar-text-dark cursor-pointer text-white"
              >
                <span className="group-hover:-translate-y-12.5 duration-300">
                  Browse News
                </span>
                <span className="-translate-y-1/2 absolute top-[calc(50%+50px)] group-hover:top-1/2 duration-300">
                  Browse News
                </span>
              </Link>
            </div>
            <div className="mt-15 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.75">
              {NewsData.slice(0, 3).map((link, i) => (
                <NewsCard key={i} imgSrc={link} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
