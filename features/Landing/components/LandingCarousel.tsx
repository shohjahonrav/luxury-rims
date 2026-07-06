"use client"

import * as React from "react"
import { Star } from "lucide-react" // or your choice of star icon
import { type CarouselApi } from "@/components/ui/carousel"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "Michael Thompson",
    role: "Client",
    avatar: "/avatars/michael.jpg",
    content: "The selection of high-end cars was impressive, and the booking process was effortless. I felt safe and confident behind the wheel. A perfect choice for anyone wanting to experience true luxury on the road."
  },
  {
    name: "Emily Roberts",
    role: "Client",
    avatar: "/avatars/emily.jpg",
    content: "Renting a luxury car here made my business trip so much better. The car was elegant and comfortable, and the service was fast and friendly. I appreciated how hassle-free everything was."
  },
  {
    name: "Andrew Collins",
    role: "Client",
    avatar: "/avatars/andrew.jpg",
    content: "I wanted a premium ride for a weekend getaway, and this company delivered perfectly. The car handled beautifully, and the whole experience felt personalized and professional."
  },
   {
    name: "Michael Thompson",
    role: "Client",
    avatar: "/avatars/michael.jpg",
    content: "The selection of high-end cars was impressive, and the booking process was effortless. I felt safe and confident behind the wheel. A perfect choice for anyone wanting to experience true luxury on the road."
  },
  {
    name: "Emily Roberts",
    role: "Client",
    avatar: "/avatars/emily.jpg",
    content: "Renting a luxury car here made my business trip so much better. The car was elegant and comfortable, and the service was fast and friendly. I appreciated how hassle-free everything was."
  },
  {
    name: "Andrew Collins",
    role: "Client",
    avatar: "/avatars/andrew.jpg",
    content: "I wanted a premium ride for a weekend getaway, and this company delivered perfectly. The car handled beautifully, and the whole experience felt personalized and professional."
  },
]

export function TestimonialCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="w-full mt-20 text-white">
      <div className="mx-auto max-w-[1830px]">
        <Carousel 
          setApi={setApi} 
          opts={{
            align: "start",
            loop: true,
          }} 
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/3">
                <Card className="bg-[#0D0D0D] border-neutral-900 h-full">
                  <CardContent className="flex flex-col justify-between p-6 h-full min-h-62.5">
                    <div>
                      <div className="flex gap-1 mb-4 text-white">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current stroke-none" />
                        ))}
                      </div>
                      <p className="text-neutral-400 text-[16px] leading-relaxed mb-6 font-light">
                        {testimonial.content}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 border border-neutral-800">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-sm font-medium text-white">{testimonial.name}</h4>
                        <p className="text-xs text-neutral-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-2 w-2 rounded-full transition-all duration-200",
                current === index ? "bg-white scale-125" : "bg-neutral-600 hover:bg-neutral-400"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}