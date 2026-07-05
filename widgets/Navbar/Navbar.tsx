import { Button } from "@/components/ui/button";
import { PhoneIcon } from "lucide-react";
import Link from "next/link";
import { PiInstagramLogoLight, PiTelegramLogoLight } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="h-21 w-full bg-linear-to-b flex items-center justify-center px-10 from-black-primary  via-transparent to-transparent fixed top-0 left-0 z-10">
      <div className="max-w-[1830px] relative w-full flex items-center justify-between">
        <Link href="/" className="text-white">Luxury Rims</Link>
        <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
          <ul className="flex gap-12.5">
            <li className="text-navbar-text-primary text-[16px]">
              <Link href="/rims">Rims</Link>
            </li>
            <li className="text-navbar-text-primary text-[16px]">
              <Link href="">Rental Terms</Link>
            </li>
            <li className="text-navbar-text-primary text-[16px]">
              <Link href="/news">News</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2.5">
            <Link href="">
              <PiInstagramLogoLight className="h-5! w-5! text-navbar-text-primary" />
            </Link>
            <Link href="">
              <PiTelegramLogoLight className="h-5! w-5! text-navbar-text-primary" />
            </Link>
            <Link href="">
              <PhoneIcon className="h-5! w-5! text-navbar-text-primary" />
            </Link>
          </div>
          <Button className="bg-white h-12.25 rounded-[99px] px-5 relative text-[14px] group overflow-hidden hover:bg-white cursor-pointer text-navbar-text-dark">
            <span className="group-hover:-translate-y-12.5 duration-300">
              Buy Now
            </span>
            <span className="-translate-y-1/2 absolute top-[calc(50%+50px)] group-hover:top-1/2 duration-300">
              Buy Now
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
