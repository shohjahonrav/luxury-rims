import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { PhoneIcon } from "lucide-react";
import Link from "next/link";
import { PiInstagramLogoLight, PiTelegramLogoLight } from "react-icons/pi";

const NavbarItems = [
  {
    text: "Rims",
    link: "/rims",
  },
  {
    text: "Service",
    link: "/#service",
  },
  {
    text: "News",
    link: "/news",
  },
];

const MobileNavbar = () => {
  return (
    <Accordion
      type="multiple"
      className="fixed top-5 left-1/2 -translate-x-1/2 bg-benefits h-fit pb-0 rounded-[30px] border border-white/5 px-5 z-10 w-[calc(100%-40px)]"
    >
      <AccordionItem value="mobilenavbar">
        <AccordionTrigger className="h-15.5 flex items-center">
          <Link href="/" className="text-white text-[16px] no-underline">Luxury Rims</Link>
        </AccordionTrigger>
        <AccordionContent className="h-full pb-5">
          <div>
            <div className="flex flex-col gap-3.75">
              {NavbarItems.map((item, i) => (
                <Link
                  key={i}
                  href={item.link}
                  className="text-[16px] no-underline! hover:text-gray-100! text-navbar-text-primary"
                >
                  {item.text}
                </Link>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-5">
              <Button className="bg-white h-12.25 rounded-[99px] px-5 relative text-[14px] group overflow-hidden hover:bg-white cursor-pointer text-navbar-text-dark">
                <span className="group-hover:-translate-y-12.5 duration-300">
                  Buy Now
                </span>
                <span className="-translate-y-1/2 absolute top-[calc(50%+50px)] group-hover:top-1/2 duration-300">
                  Buy Now
                </span>
              </Button>
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
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default MobileNavbar;
