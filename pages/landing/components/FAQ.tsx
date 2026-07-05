import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'

const FAQ = () => {
  return (
    <div className='px-10 py-18.75 flex justify-center'>
      <div className='max-w-[1830px] w-full grid grid-cols-2 gap-3.75'>
        <div>
          <span className='text-[54px] text-white font-medium'>Frequently Asked Questions</span>
        </div>
        <div>
           <Accordion
            type="single"
            collapsible
            defaultValue="shipping"
            className='gap-5'
          >
              <AccordionItem value="shipping">
                <AccordionTrigger className='text-white text-[18px] font-medium'>What are your shipping options?</AccordionTrigger>
                <AccordionContent className='text-white'>
                  We offer standard (5-7 days), express (2-3 days), and overnight
                  shipping. Free shipping on international orders.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="returns">
                <AccordionTrigger className='text-white text-[18px] font-medium'>What is your return policy?</AccordionTrigger>
                <AccordionContent className='text-white'>
                  Returns accepted within 30 days. Items must be unused and in original
                  packaging. Refunds processed within 5-7 business days.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="support">
                <AccordionTrigger className='text-white text-[18px] font-medium'>How can I contact customer support?</AccordionTrigger>
                <AccordionContent className='text-white'>
                  Reach us via email, live chat, or phone. We respond within 24 hours
                  during business days.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="2">
                <AccordionTrigger className='text-white text-[18px] font-medium'>How can I contact customer support?</AccordionTrigger>
                <AccordionContent className='text-white'>
                  Reach us via email, live chat, or phone. We respond within 24 hours
                  during business days.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="3">
                <AccordionTrigger className='text-white text-[18px] font-medium'>How can I contact customer support?</AccordionTrigger>
                <AccordionContent className='text-white'>
                  Reach us via email, live chat, or phone. We respond within 24 hours
                  during business days.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
        </div>
      </div>
    </div>
  )
}

export default FAQ