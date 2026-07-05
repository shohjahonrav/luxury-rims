import Image from "next/image";
import React from "react";

const Steps = () => {
  return (
    <div className="px-10 py-18.75 w-full flex justify-center">
      <div className="max-w-[1830px] w-full grid grid-cols-2 gap-3.75">
        <Image
          src="/images/rims.avif"
          width={902}
          height={551}
          className="object-cover rounded-[30px]"
          alt="Rims"
        />
        <div className="grid grid-cols-2 gap-3.75">
          <div className="bg-benefits rounded-[20px] px-5 flex items-center justify-center flex-col gap-5">
            <div className="bg-small-card h-11 w-11 rounded-[10px] text-white text-[16px] font-medium flex items-center justify-center">
              01
            </div>
            <div className="flex flex-col gap-1 items-center ">
              <span className="text-white text-[18px] font-medium">Discover your style</span>
              <p className="text-gray-primary max-w-70 text-center">Explore our curated collection of luxury rims and find the perfect match for your vehicle.</p>
            </div>
          </div>
          <div className="bg-benefits rounded-[20px] px-5 flex items-center justify-center flex-col gap-5">
            <div className="bg-small-card h-11 w-11 rounded-[10px] text-white text-[16px] font-medium flex items-center justify-center">
              02
            </div>
            <div className="flex flex-col gap-1 items-center ">
              <span className="text-white text-[18px] font-medium">Get Expert Advice</span>
              <p className="text-gray-primary max-w-70 text-center">Receive personalized recommendations on size, fitment, finish, and design.</p>
            </div>
          </div>
          <div className="bg-benefits rounded-[20px] px-5 flex items-center justify-center flex-col gap-5">
            <div className="bg-small-card h-11 w-11 rounded-[10px] text-white text-[16px] font-medium flex items-center justify-center">
              03
            </div>
            <div className="flex flex-col gap-1 items-center ">
              <span className="text-white text-[18px] font-medium">Confirm & Customize</span>
              <p className="text-gray-primary max-w-55 text-center">Select your preferred rims, accessories, and installation options.</p>
            </div>
          </div>
          <div className="bg-benefits rounded-[20px] px-5 flex items-center justify-center flex-col gap-5">
            <div className="bg-small-card h-11 w-11 rounded-[10px] text-white text-[16px] font-medium flex items-center justify-center">
              04
            </div>
            <div className="flex flex-col gap-1 items-center ">
              <span className="text-white text-[18px] font-medium">Install & Transform</span>
              <p className="text-gray-primary max-w-75 text-center">Have your wheels professionally installed and drive away with a completely new look.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
