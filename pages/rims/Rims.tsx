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
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Rims = () => {
  return (
    <div className="px-10 pb-18.75 pt-37.5 flex justify-center">
      <div className="max-w-[1830px]">
        <div className="flex justify-center flex-col items-center gap-10">
          <span className="text-white text-[68px] font-medium">Rims</span>
          <div>
            <div className="flex items-center gap-5">
              <Select>
                <SelectTrigger className="bg-navbar-text-dark h-[51.5px]! px-5! gap-4 border-none text-white! [&_svg]:text-white rounded-[99px]">
                  <SelectValue placeholder="Brand" />
                </SelectTrigger>
                <SelectContent
                  align="end"
                  position="popper"
                  side="bottom"
                  className="bg-navbar-text-dark rounded-[99px] text-white! p-2.5"
                >
                  <SelectItem
                    className="bg-navbar-text-dark! text-white!"
                    value="item-1"
                  >
                    <span className="text-white!">Something</span>
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="bg-navbar-text-dark h-[51.5px]! px-5! gap-4 border-none text-white! [&_svg]:text-white rounded-[99px]">
                  <SelectValue placeholder="Size" />
                </SelectTrigger>
                <SelectContent
                  align="end"
                  position="popper"
                  side="bottom"
                  className="bg-navbar-text-dark rounded-[99px] text-white! p-2.5"
                >
                  <SelectItem
                    className="bg-navbar-text-dark! text-white!"
                    value="item-1"
                  >
                    <span className="text-white!">Something</span>
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="bg-navbar-text-dark h-[51.5px]! px-5! gap-4 border-none text-white! [&_svg]:text-white rounded-[99px]">
                  <SelectValue placeholder="Rim Type" />
                </SelectTrigger>
                <SelectContent
                  align="end"
                  position="popper"
                  side="bottom"
                  className="bg-navbar-text-dark rounded-[99px] text-white! p-2.5"
                >
                  <SelectItem
                    className="bg-navbar-text-dark! text-white!"
                    value="item-1"
                  >
                    <span className="text-white!">Something</span>
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="bg-navbar-text-dark h-[51.5px]! px-5! gap-4 border-none text-white! [&_svg]:text-white rounded-[99px]">
                  <SelectValue placeholder="Most Relevant" />
                </SelectTrigger>
                <SelectContent
                  align="end"
                  position="popper"
                  side="bottom"
                  className="bg-navbar-text-dark rounded-[99px] text-white! p-2.5"
                >
                  <SelectItem
                    className="bg-navbar-text-dark! text-white!"
                    value="item-1"
                  >
                    <span className="text-white!">Something</span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3.75 mt-20">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex flex-col">
              <Link
                className="relative overflow-hidden h-149.25 rounded-[30px]"
                href="/rims/1"
              >
                <Image
                  alt="Car"
                  src="/images/car1.avif"
                  height={597}
                  placeholder="blur"
                  blurDataURL="/images/car1.avif"
                  width={600}
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
                  <Link href="/rims/1" className="flex items-center gap-1">
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
        <div className="mt-7">
          <Pagination>
            <PaginationContent className="gap-2.5">
              <PaginationItem className="h-10.5 w-10.5 rounded-[12px] bg-navbar-text-dark text-white flex items-center justify-center">
                <PaginationLink className="text-[18px]" href="#">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="h-10.5 w-10.5 rounded-[12px] bg-white  text-white flex items-center justify-center">
                <PaginationLink className="text-[18px] border-none text-navbar-text-dark" href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="h-10.5 w-10.5 rounded-[12px] bg-navbar-text-dark text-white flex items-center justify-center">
                <PaginationLink className="text-[18px]" href="#">
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default Rims;
