import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Benefits from "../landing/components/Benefits";
import Steps from "../landing/components/4Steps";
import FAQ from "../landing/components/FAQ";
import { RimCard } from "@/features/Rims/components/RimCard";
import { RimsData } from "@/data/rims/RimsData";

const RimsDetails = () => {
  return (
    <div className="pt-25 lg:pt-37.5 pb-12.5 lg:pb-18.75 flex justify-center">
      <div className="max-w-[1830px] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-3.75 px-5 md:px-6.25 lg:px-10">
          <div>
            <div className="flex flex-col justify-center h-full gap-2.5">
              <Link href="" className="flex gap-1.25 text-gray-primary">
                <ChevronLeft />
                <span>Back to Rims</span>
              </Link>
              <span className="text-[46px] md:text-54px lg:text-[68px] font-medium text-white max-w-140 flex leading-[52.9px] md:leading-none lg:leading-[78.2px]">
                Rent Porsche 911 GT3 RS in LA
              </span>
              <p className="text-[18px] text-gray-primary max-w-119.5">
                Unleash the thrill of precision engineering with the Porsche 911
                GT3 RS in Los Angeles. With 520 horsepower, lightning-fast
                acceleration, and a top speed of 320 km/h, this track-inspired
                icon delivers an adrenaline rush like no other.
              </p>
              <Link href="/contact" className="bg-white h-12.25 w-fit mt-5 flex items-center justify-center font-medium rounded-[99px] px-5 relative text-[14px] group overflow-hidden hover:bg-white cursor-pointer text-navbar-text-dark">
                <span className="group-hover:-translate-y-12.5 duration-300">
                  Buy Now
                </span>
                <span className="-translate-y-1/2 absolute top-[calc(50%+50px)] group-hover:top-1/2 duration-300">
                  Buy Now
                </span>
              </Link>
            </div>
          </div>
          <div className="aspect-920/600">
            <Image
              src="/rims/rim6.avif"
              width={920}
              height={600}
              className="object-cover aspect-920/600 rounded-[30px]"
              alt="Car"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-25 lg:mt-37.5 mb-12.5 lg:mb-18.75 gap-10 lg:gap-3.75 px-5 md:px-6.25 lg:px-10">
          <div>
            <span className="text-[34px] lg:text-[54px] text-white font-medium">
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
        <div className="py-12.5 lg:py-18.75 flex flex-col gap-10 lg:gap-20 px-5 md:px-6.25 lg:px-10">
          <div className="flex items-center justify-between">
            <p className="text-[34px] lg:text-[54px] flex text-white font-medium">
              Explore More Rims
            </p>
            <Button className="bg-navbar-text-dark h-12.25 w-fit mt-5 rounded-[99px] px-5 relative text-[14px] group overflow-hidden hover:bg-navbar-text-dark cursor-pointer text-white">
              <span className="group-hover:-translate-y-12.5 duration-300">
                Browse Rims
              </span>
              <span className="-translate-y-1/2 absolute top-[calc(50%+50px)] group-hover:top-1/2 duration-300">
                Browse Rims
              </span>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3.75 gap-y-5">
            {RimsData.slice(0, 4).map((link, i) => (
              <RimCard
                imgSrc={link}
                key={i}
                imgSizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 45vw"
              />
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
