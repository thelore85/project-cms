import Image from 'next/image'
import React from 'react'

type Props = {
  section: any
}

export default function Testimonial({section}: Props) {
  return (
    <section id="testimonials" className="bg-background">
      <div className=" my-20">
        <div className="mb-10">
          <h2 className="text-center w-2/3 m-auto font-bold text-6xl">{section.title}</h2>
        </div>
        <div className="flex overflow-x-scroll overflow-hidden py-10">
          {section.cards.map((card: any, index: number) => (
            <div key={index} className="md:flex gap-2 bg-white border-2 border-black p-3 rounded-xl shadow-flat md:min-w-[550px] min-w-[280px] mx-4">
              <Image src={card.image} alt="Testimonial" className="w-[250px] h-[250px] mb-4 md:mb-0 rounded-md border-2 border-black" width={250} height={250} />
              <div className="rounded-lg p-4 text-white bg-primary border-2 border-black">
                <span className="">{card.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
