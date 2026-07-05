import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsDetails = () => {
  return (
    <div className="max-10 pt-37.5 pb-18.75 flex justify-center">
      <div className="max-w-[1830px] w-full flex flex-col gap-37.5">
        <div className="max-w-162.5 mx-auto w-full flex flex-col gap-3.75">
          <Link href="" className="flex gap-1.25 text-gray-primary">
            <ChevronLeft />
            <span>Back to Rims</span>
          </Link>
          <span className="text-[68px] text-white font-medium leading-[78.2px]">
            Express 90-minute priority delivery service launched
          </span>
          <span className="text-[16px] text-gray-primary">July 20, 2025</span>
          <Image
            src="/images/news1.avif"
            width={650}
            height={400}
            alt="News 1"
            className="h-100 object-cover rounded-[30px]"
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
            <div className="flex items-center justify-between">
              <span className="text-[54px] text-white font-medium">
                Recomended For You
              </span>
              <Button className="bg-navbar-text-dark h-12.25 w-fit mt-5 rounded-[99px] px-5 relative text-[14px] group overflow-hidden hover:bg-navbar-text-dark cursor-pointer text-white">
                <span className="group-hover:-translate-y-12.5 duration-300">
                  Browse News
                </span>
                <span className="-translate-y-1/2 absolute top-[calc(50%+50px)] group-hover:top-1/2 duration-300">
                  Browse News
                </span>
              </Button>
            </div>
            <div className="mt-20 grid grid-cols-3 gap-3.75">
              {Array.from({ length: 3 }).map((_, i) => (
                <Link
                  key={i}
                  href=""
                  className="relative overflow-hidden rounded-[30px]"
                >
                  <Image
                    src="/images/news1.avif"
                    width={596}
                    height={656}
                    alt="News1"
                    className="object-cover hover:scale-0 duration-400 h-164 rounded-[30px]"
                  />
                  <div className="absolute top-0 left-0 h-full flex flex-col justify-between p-5 w-full bg-linear-to-t from-black via-transparent to-transparent">
                    <span className="text-white font-medium">
                      August 1, 2025
                    </span>
                    <div className="flex flex-col gap-2.5">
                      <span className="text-white text-[18px] font-medium max-w-90 flex ">
                        Porsche 911 GT3 RS joins our premium supercar collection
                      </span>
                      <Button className="bg-white h-12.25 rounded-[99px] w-full px-5 relative text-[14px] group overflow-hidden hover:bg-white cursor-pointer text-navbar-text-dark">
                        <span className="group-hover:-translate-y-12.5 duration-300">
                          Buy Now
                        </span>
                        <span className="-translate-y-1/2 absolute top-[calc(50%+50px)] group-hover:top-1/2 duration-300">
                          Buy Now
                        </span>
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
