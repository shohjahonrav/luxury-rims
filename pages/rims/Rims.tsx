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
import { RimCard } from "@/features/Rims/components/RimCard";
import { RimsData } from "@/data/rims/RimsData";

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
        <div className="grid grid-cols-3 gap-x-3.75 gap-y-5 mt-20">
          {RimsData.map((link, i) => (
            <RimCard imgHeight={697} imgWidth={600} imgSrc={link} key={i} imgSizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 45vw" />
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
