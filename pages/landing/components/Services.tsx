import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="px-10 py-18.75 flex justify-center">
      <div className="max-w-[1830px] w-full flex flex-col gap-20">
        <span className="text-[54px] text-white flex justify-center">
          Premium service, zero hassle
        </span>
        <div className="grid grid-cols-2 gap-3.75">
          <div className="relative">
            <Image
              width={902}
              height={539}
              src="/images/service1.avif"
              className="rounded-[30px] object-cover h-134.75"
              alt="Service 1"
            />
            <div className="absolute bottom-0 left-0 px-6.25 pb-6.25 bg-linear-to-t from-benefits to-transparent w-full rounded-b-[30px]">
              <span className="text-[18px] text-white font-medium">
                Fully insured, no surprises
              </span>
              <p className="leading-6.25 text-[16px] text-gray-primary max-w-75">
                Your rental includes full coverage, so you can drive with
                complete peace of mind.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              width={902}
              height={539}
              src="/images/service2.avif"
              className="rounded-[30px] object-cover h-134.75"
              alt="Service 1"
            />
            <div className="absolute bottom-0 left-0 px-6.25 pb-6.25 bg-linear-to-t from-benefits to-transparent w-full rounded-b-[30px]">
              <span className="text-[18px] text-white font-medium">
                Clear pricing, no hidden fees
              </span>
              <p className="leading-6.25 text-[16px] text-gray-primary max-w-75">
                What you see is what you pay. No unexpected charges after your
                trip.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              width={902}
              height={539}
              src="/images/service3.avif"
              className="rounded-[30px] object-cover h-134.75"
              alt="Service 1"
            />
            <div className="absolute bottom-0 left-0 px-6.25 pb-6.25 bg-linear-to-t from-benefits to-transparent w-full rounded-b-[30px]">
              <span className="text-[18px] text-white font-medium">
                Car to your door in 90 minutes
              </span>
              <p className="leading-6.25 text-[16px] text-gray-primary max-w-75">
                Skip the trip to the rental office and we’ll bring the car
                straight to you.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              width={902}
              height={539}
              src="/images/service4.avif"
              className="rounded-[30px] object-cover h-134.75"
              alt="Service 1"
            />
            <div className="absolute bottom-0 left-0 px-6.25 pb-6.25 bg-linear-to-t from-benefits to-transparent w-full rounded-b-[30px]">
              <span className="text-[18px] text-white font-medium">
                24/7 customer support
              </span>
              <p className="leading-6.25 text-[16px] text-gray-primary max-w-75">
                Whatever happens on the road, we’re here to help at any time,
                day or night.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
