import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import FAQ from "@/pages/landing/components/FAQ";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./components/Form";

const boltPatterns = [
  {
    "4-lug": [
      { pcd: "4x100", mm: 100, inches: 3.94 },
      { pcd: "4x108", mm: 108, inches: 4.25 },
    ],
  },
  {
    "5-lug": [
      { pcd: "5x112", mm: 112, inches: 4.41 },
      { pcd: "5x114.3", mm: 114.3, inches: 4.5 },
      { pcd: "5x120", mm: 120, inches: 4.72 },
    ],
  },
  { "6-lug": [{ pcd: "6x139.7", mm: 139.7, inches: 5.5 }] },
];

const Contact = () => {
  return (
    <div className="px-5 md:px-6.25 lg:px-10 pb-12.5 lg:pb-18.75 pt-25 lg:pt-37.5 flex justify-center">
      <div className="max-w-[1830px] w-full">
        <div className="flex justify-center flex-col items-center gap-10">
          <span className="text-white text-[34px] md:text-[54px] md:text-center max-w-180 lg:text-[68px] font-medium">
            Upgrade Your Ride with Premium Rims
          </span>
          <div className="flex  gap-2.5 flex-col items-center">
            <Avatar className="h-12.5 w-12.5">
              <AvatarImage
                src="/images/car1.avif"
                alt="@shadcn"
                className="grayscale"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-center">
              <span className="text-white text-[16px] font-medium">
                Micheal Carter
              </span>
              <span className="text-[16px] text-gray-primary">
                Your Personal Wheel Consultant
              </span>
            </div>
            <Link
              href="tel:998999999999"
              className="bg-white h-12.25 mt-4 flex items-center justify-center font-medium rounded-[99px] px-5 relative text-[14px] group overflow-hidden hover:bg-white cursor-pointer text-navbar-text-dark"
            >
              <span className="group-hover:-translate-y-12.5 duration-300">
                Call Us Now
              </span>
              <span className="-translate-y-1/2 absolute top-[calc(50%+50px)] group-hover:top-1/2 duration-300">
                Call Us Now
              </span>
            </Link>
          </div>
        </div>
        <div className="mt-20 relative ">
          <Image
            src="/images/contact.avif"
            width={1820}
            height={778}
            className="object-cover hidden md:block h-194.5 rounded-[30px]"
            alt="Contact"
          />
          <ContactForm />
        </div>
        <FAQ />
      </div>
    </div>
  );
};

export default Contact;
