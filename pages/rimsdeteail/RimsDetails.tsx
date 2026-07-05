import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Benefits from "../landing/components/Benefits";
import Steps from "../landing/components/4Steps";
import FAQ from "../landing/components/FAQ";

const RimsDetails = () => {
  return (
    <div className="px-10 pt-37.5 pb-18.75 flex justify-center">
      <div className="max-w-[1830px] w-full">
        <div className="grid grid-cols-2">
          <div>
            <div className="flex flex-col justify-center h-full gap-2.5">
              <Link href="" className="flex gap-1.25 text-gray-primary">
                <ChevronLeft />
                <span>Back to Rims</span>
              </Link>
              <span className="text-[68px] font-medium text-white max-w-140 flex leading-[78.2px]">
                Rent Porsche 911 GT3 RS in LA
              </span>
              <p className="text-[18px] text-gray-primary max-w-119.5">
                Unleash the thrill of precision engineering with the Porsche 911
                GT3 RS in Los Angeles. With 520 horsepower, lightning-fast
                acceleration, and a top speed of 320 km/h, this track-inspired
                icon delivers an adrenaline rush like no other.
              </p>
              <Button className="bg-white h-12.25 w-fit mt-5 rounded-[99px] px-5 relative text-[14px] group overflow-hidden hover:bg-white cursor-pointer text-navbar-text-dark">
                <span className="group-hover:-translate-y-12.5 duration-300">
                  Buy Now
                </span>
                <span className="-translate-y-1/2 absolute top-[calc(50%+50px)] group-hover:top-1/2 duration-300">
                  Buy Now
                </span>
              </Button>
            </div>
          </div>
          <Image
            src="/images/car1.avif"
            width={920}
            height={600}
            className="object-cover h-150 rounded-[30px]"
            alt="Car"
          />
        </div>
        <div className="grid grid-cols-2 mt-37.5 mb-18.75">
          <div>
            <span className="text-[54px] text-white font-medium">
              Characteristics
            </span>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex justify-between">
              <span className="text-[18px] text-gray-primary font-medium">
                Size
              </span>
              <span className="text-[18px] text-white font-medium">R20</span>
            </div>
            <hr className="border-white/20" />
            <div className="flex justify-between">
              <span className="text-[18px] text-gray-primary font-medium">
                Colour
              </span>
              <span className="text-[18px] text-white font-medium">
                Midngith Black
              </span>
            </div>
            <hr className="border-white/20" />
            <div className="flex justify-between">
              <span className="text-[18px] text-gray-primary font-medium">
                Width
              </span>
              <span className="text-[18px] text-white font-medium">205</span>
            </div>
            <hr className="border-white/20" />
            <div className="flex justify-between">
              <span className="text-[18px] text-gray-primary font-medium">
                Height
              </span>
              <span className="text-[18px] text-white font-medium">45</span>
            </div>
            <hr className="border-white/20" />
            <div className="flex justify-between">
              <span className="text-[18px] text-gray-primary font-medium">
                Price
              </span>
              <span className="text-[18px] text-white font-medium">1950$</span>
            </div>
            <hr className="border-white/20" />
          </div>
        </div>
        <div>
          <Benefits />
        </div>
        <div>
          <Steps />
        </div>
        <div className="py-18.75 flex flex-col gap-20">
          <div className="flex items-center justify-between">
            <span className="text-[54px] text-white font-medium">
              Explore More Rims
            </span>
            <Button className="bg-navbar-text-dark h-12.25 w-fit mt-5 rounded-[99px] px-5 relative text-[14px] group overflow-hidden hover:bg-navbar-text-dark cursor-pointer text-white">
              <span className="group-hover:-translate-y-12.5 duration-300">
                Browse Rims
              </span>
              <span className="-translate-y-1/2 absolute top-[calc(50%+50px)] group-hover:top-1/2 duration-300">
                Browse Rims
              </span>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-3.75">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex flex-col">
                <Link
                  className="relative overflow-hidden h-149.25 rounded-[30px]"
                  href=""
                >
                  <Image
                    alt="Car"
                    src="/images/car1.avif"
                    height={597}
                    placeholder="blur"
                    blurDataURL="/images/car1.avif"
                    width={902}
                    className="object-cover hover:scale-105 duration-500 h-149.25 rounded-[30px]"
                  />
                  <div className="absolute top-2.5 flex items-center gap-4 left-2.5 w-full">
                    <div className="h-9.25 px-3 rounded-[99px] bg-navbar-text-dark flex items-center justify-center w-fit text-[12px] text-white">
                      195/65
                    </div>
                    <div className="h-9.25 px-3 rounded-[99px] bg-navbar-text-dark flex items-center justify-center w-fit text-[12px] text-white">
                      R15
                    </div>
                  </div>
                </Link>
                <div className="px-2.5 pt-6.25 flex flex-col gap-1.5">
                  <div className="flex justify-between">
                    <span className="text-white text-[18px] font-medium">
                      BBS Tires
                    </span>
                    <Link href="" className="flex items-center gap-1">
                      <span className="text-learn-more text-[16px]">
                        Learn More
                      </span>
                      <ChevronRight className="text-learn-more w-5! h-5!" />
                    </Link>
                  </div>
                  <span className="text-learn-more">price: $1,100</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <FAQ />
        </div>
      </div>
    </div>
  );
};

export default RimsDetails;
