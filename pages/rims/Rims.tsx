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

import { RimsData } from "@/data/rims/RimsData";
import { RimCardSecondary } from "@/features/Rims/components/RimCard2";

const Rims = () => {
  return (
    <div className="px-5 md:px-6.25 lg:px-10 pb-12.5 md:pb-18.75 pt-25 lg:pt-37.5 flex justify-center">
      <div className="max-w-[1830px] w-full">
        <div className="flex justify-center flex-col items-center gap-10">
          <span className="text-white text-[54px] md:text-[64px] lg:text-[68px] font-medium">Rims</span>
          <div>
            <div className="flex items-center flex-wrap gap-3.75 lg:gap-5 justify-center">
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
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3.75 gap-y-5 mt-10 lg:mt-20">
          {RimsData.map((link, i) => (  
            <RimCardSecondary
              imgSrc={link}
              key={i}
              imgSizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 45vw"
            />
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
                <PaginationLink
                  className="text-[18px] border-none text-navbar-text-dark"
                  href="#"
                  isActive
                >
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
