import { TestimonialCarousel } from '@/features/Landing/components/LandingCarousel'
import React from 'react'
import { IoDiamondOutline } from 'react-icons/io5'

const Testimonials = () => {
  return (
    <div className='w-full px-5 md:px-6.25 lg:px-10 py-18.75 flex justify-center'>
      <div className='max-w-[1830px] w-full'>
        <div className='flex md:items-center justify-center flex-col gap-5 md:gap-7.5'>
          <div className="h-[41.5px] bg-navbar-text-dark px-3.75 flex items-center gap-2.25 rounded-[99px] w-fit">
            <IoDiamondOutline className="text-white w-5! h-5!" />
            <p className="text-[16px] text-white">
              Chosen by more than 250 clients
            </p>
          </div>
          <span className='md:text-center flex max-w-140 md:leading-[70.2px] text-[34px] md:text-[54px] text-white font-medium'>Read Testimonials, Ride with confidence</span>
        </div>
        <TestimonialCarousel />
      </div>
    </div>
  )
}

export default Testimonials