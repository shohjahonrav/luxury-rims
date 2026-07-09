import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { FaqData } from '@/data/faq/FaqData'
import React from 'react'

const FAQ = () => {
  return (
    <div className='px-6.25 md:px-10 py-12.5 md:py-18.75 flex justify-center'>
      <div className='max-w-[1830px] w-full grid md:grid-cols-2 gap-5 md:gap-3.75'>
        <div>
          <span className='text-[34px] md:text-[54px] text-white font-medium'>Frequently Asked Questions</span>
        </div>
        <div>
           <Accordion
            type="single"
            collapsible
            defaultValue="shipping"
            className='gap-5'
          >
            {
              FaqData.map((item, i) => (
                <AccordionItem key={i} className='border-b border-white/20' value={`item-${i}`}>
                  <AccordionTrigger className='text-white text-[18px] font-medium'>{item.question}</AccordionTrigger>
                  <AccordionContent className='text-white'>
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))
            }
            </Accordion>
        </div>
      </div>
    </div>
  )
}

export default FAQ