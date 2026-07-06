import Image from "next/image";
import Link from "next/link";
import { IoDiamondOutline } from "react-icons/io5"; 

const Hero = () => {
  return (
    <div className="relative h-screen">
      <Image
        src="/hero/hero1.avif"
        fill
        sizes="100vw"
        priority
        alt="Diska Tuning"
        quality={80}
        className="object-cover"
      />
      <div className="absolute bg-linear-to-t from-black-primary via-transparent px-10 flex justify-center items-end h-screen to-transparent  w-full">
        <div className="max-w-[1830px]  pb-15 w-full flex flex-col gap-5">
          <div className="h-[41.5px] bg-navbar-text-dark px-3.75 flex items-center gap-2.25 rounded-[99px] w-fit">
            <IoDiamondOutline className="text-white w-5! h-5!" />
            <p className="text-[16px] text-white">
              Chosen by more than 250 clients
            </p>
          </div>
          <div className="flex flex-col gap-3.75">
            <span className="text-white leading-[72.2px] font-medium text-[68px] flex max-w-150">
              Premium Car Rims in Uzbekistan
            </span>
            <p className="text-[18px] text-navbar-text-primary">Experience unmatched comfort, style, and service — wherever the road takes you.</p>
            <Link href="/rims" className="bg-white flex items-center justify-center font-medium w-fit h-12.25 rounded-[99px] px-5 relative text-[14px] group overflow-hidden hover:bg-white cursor-pointer text-navbar-text-dark">
            <span className="group-hover:-translate-y-12.5 duration-300">
              Choose Your Rims
            </span>
            <span className="-translate-y-1/2 absolute top-[calc(50%+50px)] group-hover:top-1/2 duration-300">
              Choose Your Rims
            </span>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
