import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/app/components/ui/accordion'
import React from 'react'

type Props = {
  section: any
}

export default function Faq({section}: Props) {
  return (
    <section id="faq" className="bg-background py-10 ">
      <div className="container">
        <h2 className="font-bold text-center  text-6xl">{section.title}</h2>
        <div className="text-center my-28">
          {section.cards.map((card: any) => (
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-2xl">{card.title}</AccordionTrigger>
                <AccordionContent className="text-lg">{card.content}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
        <div className="w-full lg:w-1/3 lg:m-auto">{/* <CtaMain /> */}</div>
      </div>
    </section>
  )
}
