import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { BiSupport } from "react-icons/bi";
import { FiAward } from "react-icons/fi";
import { GiCarWheel } from "react-icons/gi";
import { LuCalendarClock } from "react-icons/lu";

const Benefits = () => {
  return (
    <div className="px-10 w-full py-18.75 flex justify-center">
      <div className="max-w-[1830px] w-full bg-benefits rounded-[30px] grid grid-cols-2 p-15">
        <div className="flex flex-col gap-5 justify-center">
          <div>
            <span className="text-white flex max-w-120 leading-17.5 text-[54px] font-medium">
              Premium Service Benefits
            </span>
            <p className="text-[18px] text-gray-primary max-w-85">
              We’re here for you — ready to help find the perfect car that matches
              your needs.
            </p>
          </div>
          <div className="flex  gap-2.5 ">
            <Avatar className="h-12.5 w-12.5">
              <AvatarImage
                src="/images/car1.avif"
                alt="@shadcn"
                className="grayscale"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-white text-[16px] font-medium">Micheal Carter</span>
              <span className="text-[16px] text-gray-primary">Your Personal Wheel Consultant</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3.75">
          <div className="bg-navbar-text-dark flex flex-col justify-between h-[171.5px] p-6.25 rounded-[20px]">
            <div className="bg-small-card h-11 w-11 rounded-[10px] flex items-center justify-center">
              <GiCarWheel className="text-white w-5! h-5!" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[18px] text-white">500+</span>
              <span className="text-[16px] text-gray-primary">Rim Designs</span>
            </div>
          </div>
          <div className="bg-navbar-text-dark flex flex-col justify-between h-[171.5px] p-6.25 rounded-[20px]">
            <div className="bg-small-card h-11 w-11 rounded-[10px] flex items-center justify-center">
              <FiAward className="text-white w-5! h-5!" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[18px] text-white">1 Year</span>
              <span className="text-[16px] text-gray-primary">Warranty</span>
            </div>
          </div>
          <div className="bg-navbar-text-dark flex flex-col justify-between h-[171.5px] p-6.25 rounded-[20px]">
            <div className="bg-small-card h-11 w-11 rounded-[10px] flex items-center justify-center">
              <LuCalendarClock className="text-white w-5! h-5!" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[18px] text-white">5+</span>
              <span className="text-[16px] text-gray-primary">Industry Experience</span>
            </div>
          </div>
          <div className="bg-navbar-text-dark flex flex-col justify-between h-[171.5px] p-6.25 rounded-[20px]">
            <div className="bg-small-card h-11 w-11 rounded-[10px] flex items-center justify-center">
              <BiSupport className="text-white w-5! h-5!" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[18px] text-white">24/7</span>
              <span className="text-[16px] text-gray-primary">Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
