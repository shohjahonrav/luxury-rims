import Footer from "@/widgets/Footer/Footer";
import Navbar from "@/widgets/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen h-full px-5 md:px-6.25 lg:px-10 w-full flex items-center justify-center">
        <div className="max-w-[1830px] w-full flex flex-col justify-center items-center">
          <div className="text-[90px] md:text-[140px] lg:text-[240px] flex">
            <span className="text-white font-bold">4</span>
            <Image
              width={260}
              height={260}
              className="object-contain aspect-260/260 max-w-25 md:max-w-40 lg:min-w-65 animate-[spin_15s_linear_infinite]"
              alt="404"
              src="/notfound2.png"
            />
            <span className="text-white font-bold">4</span>
          </div>
          <p className="max-w-137.5 text-gray-primary text-[16px] text-center">
            The page you requested cannot be found. It may have been removed,
            renamed, or is temporarily unavailable.
          </p>
           <Link href="/" className="bg-white h-12.25 flex items-center justify-center mt-5 font-medium rounded-[99px] px-5 relative text-[14px] group overflow-hidden hover:bg-white cursor-pointer text-navbar-text-dark">
            <span className="group-hover:-translate-y-12.5 duration-300">
              Back to Home
            </span>
            <span className="-translate-y-1/2 absolute top-[calc(50%+50px)] group-hover:top-1/2 duration-300">
              Back to Home
            </span>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
