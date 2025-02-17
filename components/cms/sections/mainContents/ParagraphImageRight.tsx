import React from 'react'

type Props = {
  section: any
}

export default function ParagraphImageRight({section}: Props) {
  return (
    <section className="container">
      <h3 className="text-3xl font-bold mb-8">{section.title}</h3>
      <div className="md:flex gap-10">
        <p className=" w-full md:w-9/12">{section.columnLeft}</p>
        <div
          className="w-full md:w-1/2 min-h-[200px] rounded-3xl shadow-lg bg-cover bg-center"
          style={{backgroundImage: `url(${section.image})`}}
        ></div>
      </div>
    </section>
  )
}
