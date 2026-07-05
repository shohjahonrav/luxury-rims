import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const RimsDetailCarousel = () => {
  return (
    <div className="max-w-230 max-h-150 h-full">
      <Carousel className="w-full max-h-150 p-0!">
        <CarouselContent className="p-0! ">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="p-0! bg-transparent! flex items-center justify-center">
              <div className="">
                <Card className="p-0! bg-transparent">
                  <CardContent className="p-0! rounded-[30px] w-full">
                    <Image
                      src="/images/car1.avif"
                      width={895}
                      height={600}
                      className="object-cover h-150 rounded-[30px] w-full"
                      alt="Car"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default RimsDetailCarousel;
