import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const ContactForm = () => {
  return (
    <div className="md:absolute flex flex-col gap-5 md:max-w-140 w-full bg-benefits z-5 p-5 md:p-10 rounded-[30px] left-1/2 md:-translate-x-1/2 top-1/2 md:-translate-y-1/2">
      <div className="flex flex-col gap-2.5">
        <label className="text-white text-[16px]" htmlFor="full-name">
          Full Name
        </label>
        <Input
          id="full-name"
          className="px-5 rounded-[99px] text-white h-[51.5px]! bg-navbar-text-dark border-none"
          placeholder="Your Full Name"
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <label className="text-white text-[16px]" htmlFor="phone">
          Phone Number
        </label>
        <Input
          id="phone"
          className="px-5 rounded-[99px] text-white h-[51.5px]! bg-navbar-text-dark border-none"
          placeholder="Your Phone Number"
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <label className="text-white text-[16px]" htmlFor="car">
          Car Model
        </label>
        <Input
          id="car"
          className="px-5 rounded-[99px] text-white h-[51.5px]! bg-navbar-text-dark border-none"
          placeholder="Your Car Model"
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <span className="text-white text-[16px]">Choose Your Rim</span>
        <Select>
          <SelectTrigger className="bg-navbar-text-dark w-full h-[51.5px]! px-5! gap-4 border-none text-white! [&_svg]:text-white rounded-[99px]">
            <SelectValue placeholder="Brand" />
          </SelectTrigger>
          <SelectContent
            align="end"
            position="popper"
            side="bottom"
            className="bg-navbar-text-dark rounded-[30px] text-white! p-2.5 px-5"
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
      <div className="grid grid-cols-2 gap-3.75">
        <div className="flex flex-col gap-2.5">
          <span className="text-white text-[16px]">Choose Rim Size</span>
          <Select>
            <SelectTrigger className="bg-navbar-text-dark w-full h-[51.5px]! px-5! gap-4 border-none text-white! [&_svg]:text-white rounded-[99px]">
              <SelectValue placeholder="Choose Rim Size" />
            </SelectTrigger>
            <SelectContent
              align="end"
              position="popper"
              side="bottom"
              className="bg-navbar-text-dark rounded-[30px] text-white! p-2.5 px-5"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <SelectItem
                  key={i}
                  className="bg-navbar-text-dark! hover:bg-white/5! text-white!"
                  value={`item-${i}`}
                >
                  <span className="text-white!">R {15 + i}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2.5">
          <span className="text-white text-[16px]">Bolt Pattern</span>
          <Select>
            <SelectTrigger className="bg-navbar-text-dark w-full h-[51.5px]! px-5! gap-4 border-none text-white! [&_svg]:text-white rounded-[99px]">
              <SelectValue placeholder="Choose Bolt Pattern" />
            </SelectTrigger>
            <SelectContent
              align="end"
              position="popper"
              side="bottom"
              className="bg-navbar-text-dark rounded-[30px] text-white! p-2.5 px-5"
            >
              <div className="pt-2.5 flex flex-col gap-2.5">
                <span className="text-[16px] font-medium border-b pb-1 border-white/10">
                  4-lug
                </span>
                <div>
                  <SelectItem
                    className="bg-navbar-text-dark! hover:bg-white/5! text-white!"
                    value="item-1"
                  >
                    <span className="text-white!">
                      pcd: 4x100, mm: 100, inches: 3.94
                    </span>
                  </SelectItem>
                </div>
              </div>
              <div className="pt-2.5 flex flex-col gap-2.5">
                <span className="text-[16px] font-medium border-b pb-1 border-white/10">
                  5-lug
                </span>
                <div>
                  <SelectItem
                    className="bg-navbar-text-dark! hover:bg-white/5! text-white!"
                    value="item-2"
                  >
                    <span className="text-white!">
                      pcd: "5x112", mm: 112, inches: 4.41
                    </span>
                  </SelectItem>
                </div>
              </div>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button className="bg-white h-12.25 w-full rounded-[99px] px-5 relative text-[14px] group overflow-hidden hover:bg-white cursor-pointer text-navbar-text-dark">
        <span className="group-hover:-translate-y-12.5 duration-300">
          Buy Now
        </span>
        <span className="-translate-y-1/2 absolute top-[calc(50%+50px)] group-hover:top-1/2 duration-300">
          Buy Now
        </span>
      </Button>
      <p className="text-[12px] text-gray-primary">
        By clicking “Buy Now”, you agree to our{" "}
        <Link href="" className="text-white">
          Privacy Policy
        </Link>
      </p>
    </div>
  );
};

export default ContactForm;
