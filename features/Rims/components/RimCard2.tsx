import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const RimCardSecondary = ({
  imgSrc,
  imgSizes,
}: {
  imgSrc: string;
  className?: string;
  imgSizes: string;
}) => {
  return (
    <div className="flex flex-col aspect-598/469">
      <Link
        className="relative overflow-hidden h-full rounded-[30px]"
        href="/rims/1"
      >
        <Image
          alt="Car"
          src={imgSrc}
          fill
          sizes={imgSizes}
          placeholder="blur"
          blurDataURL={imgSrc}
          className="object-cover hover:scale-105 duration-500 rounded-[30px]"
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
      <div className="px-2.5 pt-3.75 flex flex-col gap-1.5">
        <div className="flex justify-between">
          <span className="text-white text-[18px] font-medium">BBS Tires</span>
          <Link href="/rims/1" className="flex items-center gap-1">
            <span className="text-learn-more text-[16px]">Learn More</span>
            <ChevronRight className="text-learn-more w-5! h-5!" />
          </Link>
        </div>
        <span className="text-learn-more">price: $1,100</span>
      </div>
    </div>
  );
};
