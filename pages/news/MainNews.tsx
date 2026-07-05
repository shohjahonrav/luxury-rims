import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const MainNews = () => {
  return (
    <div className="px-10 pb-18.75 pt-37.5 flex justify-center">
      <div className="max-w-[1830px]">
        <div className="flex justify-center flex-col items-center gap-10">
          <span className="text-white text-[68px] font-medium">News</span>
        </div>
        <div className="grid grid-cols-3 gap-3.75 mt-20">
          {Array.from({ length: 6 }).map((_, i) => (
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
                <span className="text-white font-medium">August 1, 2025</span>
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
        <div className="mt-7 flex justify-center">
          <Button className="bg-navbar-text-dark w-fit h-12.25 rounded-[99px] px-5 relative text-[14px] group overflow-hidden hover:bg-navbar-text-dark cursor-pointer text-white">
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
