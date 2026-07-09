import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PhoneIcon } from "lucide-react";
import Link from "next/link";
import { PiInstagramLogoLight, PiTelegramLogoLight } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="p-5 md:p-6.25 lg:p-10 flex justify-center">
      <div className="max-w-[1830px] flex flex-col gap-5 w-full p-7.5 bg-benefits rounded-[30px]">
        <div className="flex items-center justify-between">
          <span className="text-white">Luxury Rims</span>
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
        </div>
        <div className="flex justify-between flex-wrap gap-y-7">
          <div className="flex flex-col gap-6.25">
            <div className="flex flex-col gap-2.5 ">
              <span className="text-gray-primary text-[14px]">
                Office Address (08 AM — 10 PM)
              </span>
              <p className="max-w-60 text-[18px] text-white font-medium">
                8500 Sunset Blvd Suite 210, Los Angeles, CA 90069 USA
              </p>
            </div>
            <div className="flex flex-col gap-6.25">
              <div className="flex flex-col gap-2.5">
                <span className="text-[14px] text-gray-primary">Phone</span>
                <Link
                  href="tel:998998888888"
                  className="text-[18px] text-white font-medium"
                >
                  +998 (99) 888-88-88
                </Link>
              </div>
              <div className="flex flex-col gap-2.5">
                <span className="text-[14px] text-gray-primary">Email</span>
                <Link
                  href="mail:info@luxuryrims.com"
                  className="text-[18px] text-white font-medium"
                >
                  info@luxuryrims.com
                </Link>
              </div>
            </div>
          </div>
          <div>
            <ul className="flex flex-col gap-1.5">
              <li className="text-navbar-text-primary text-[16px]">Company</li>
              <li>
                <Link href="" className="text-navbar-text-primary text-[16px]">
                  Rims
                </Link>
              </li>
              <li>
                <Link href="" className="text-navbar-text-primary text-[16px]">
                  Rental Terms
                </Link>
              </li>
              <li>
                <Link href="" className="text-navbar-text-primary text-[16px]">
                  How to Buy
                </Link>
              </li>
              <li>
                <Link href="" className="text-navbar-text-primary text-[16px]">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="" className="text-navbar-text-primary text-[16px]">
                  News
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-1.5">
              <li className="text-navbar-text-primary text-[16px]">Help</li>
              <li>
                <Link href="" className="text-navbar-text-primary text-[16px]">
                  Buy a Rim
                </Link>
              </li>
              <li>
                <Link href="" className="text-navbar-text-primary text-[16px]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="" className="text-navbar-text-primary text-[16px]">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="max-w-[320px] w-full flex flex-col gap-2.5">
            <p className="text-[14px] text-white">
              Join our mailing list and never miss an update!
            </p>
            <form className="relative">
              <Input
                placeholder="Your Email"
                className="h-[58.41px] pl-5 pr-25 text-white rounded-[99px] bg-input-bg border-transparent"
              />
              <Button className="absolute top-1/2 h-[46.41px] bg-white rounded-[99px] px-5 -translate-y-1/2 right-1.25 text-navbar-text-dark hover:bg-white">
                Submit
              </Button>
            </form>
            <p className="text-[13px] text-gray-primary">
              By subscribing to our newsletter, you agree to receive emails from
              us and accept our
              <Link href="" className="text-white ml-1">
                Privacy Policy.
              </Link>
            </p>
          </div>
        </div>
        <div className="mt-15 text-[13px] text-gray-primary">
          © 2026 Luxerra. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
