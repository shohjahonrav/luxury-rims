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
import { NewsCard } from "@/features/news/components/NewsCard";

const MainNews = () => {
  return (
    <div className="px-10 pb-18.75 pt-37.5 flex justify-center">
      <div className="max-w-[1830px]">
        <div className="flex justify-center flex-col items-center gap-10">
          <span className="text-white text-[68px] font-medium">News</span>
        </div>
        <div className="grid grid-cols-3 gap-3.75 mt-20">
          {Array.from({ length: 6 }).map((_, i) => (
            <NewsCard key={i} />
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
