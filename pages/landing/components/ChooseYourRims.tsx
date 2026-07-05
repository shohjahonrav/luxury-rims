import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ChooseYourRims = () => {
  return (
    <div className="w-full px-10 flex justify-center">
      <div className="pt-37.5 flex flex-col pb-18.75 gap-20 max-w-[1830px] w-full mx-auto">
        <span className="text-center flex items-center justify-center text-[54px] font-medium text-white">
          Choose Your Rims
        </span>
        <div className="grid grid-cols-2 gap-3.75">
          <div className="flex flex-col">
            <Link className="relative overflow-hidden h-149.25 rounded-[30px]" href="">
              <Image alt="Car" src="/images/car1.avif" height={597} placeholder="blur" blurDataURL="/images/car1.avif" width={902} className="object-cover hover:scale-105 duration-500 h-149.25 rounded-[30px]" />
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
                <span className="text-white text-[18px] font-medium">BBS Tires</span>
                <Link href="" className="flex items-center gap-1">
                  <span className="text-learn-more text-[16px]">Learn More</span>
                  <ChevronRight className="text-learn-more w-5! h-5!" />
                </Link>
              </div>
              <span className="text-learn-more">price: $1,100</span>
            </div>
          </div>
          <div className="flex flex-col">
            <Link className="relative overflow-hidden h-149.25 rounded-[30px]" href="">
              <Image alt="Car" src="/images/car2.avif" height={597} placeholder="blur" blurDataURL="/images/car1.avif" width={902} className="object-cover hover:scale-105 duration-500 h-149.25 rounded-[30px]" />
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
                <span className="text-white text-[18px] font-medium">BBS Tires</span>
                <Link href="" className="flex items-center gap-1">
                  <span className="text-learn-more text-[16px]">Learn More</span>
                  <ChevronRight className="text-learn-more w-5! h-5!" />
                </Link>
              </div>
              <span className="text-learn-more">price: $1,100</span>
            </div>
          </div>
          <div className="flex flex-col">
            <Link className="relative overflow-hidden h-149.25 rounded-[30px]" href="">
              <Image alt="Car" src="/images/car1.avif" height={597} placeholder="blur" blurDataURL="/images/car1.avif" width={902} className="object-cover hover:scale-105 duration-500 h-149.25 rounded-[30px]" />
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
                <span className="text-white text-[18px] font-medium">BBS Tires</span>
                <Link href="" className="flex items-center gap-1">
                  <span className="text-learn-more text-[16px]">Learn More</span>
                  <ChevronRight className="text-learn-more w-5! h-5!" />
                </Link>
              </div>
              <span className="text-learn-more">price: $1,100</span>
            </div>
          </div>
          <div className="flex flex-col">
            <Link className="relative overflow-hidden h-149.25 rounded-[30px]" href="">
              <Image alt="Car" src="/images/car1.avif" height={597} placeholder="blur" blurDataURL="/images/car1.avif" width={902} className="object-cover hover:scale-105 duration-500 h-149.25 rounded-[30px]" />
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
                <span className="text-white text-[18px] font-medium">BBS Tires</span>
                <Link href="" className="flex items-center gap-1">
                  <span className="text-learn-more text-[16px]">Learn More</span>
                  <ChevronRight className="text-learn-more w-5! h-5!" />
                </Link>
              </div>
              <span className="text-learn-more">price: $1,100</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseYourRims;
