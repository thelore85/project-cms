import React from 'react'
import {PortableText} from 'next-sanity'

type Props = {
  section: any
}

export default function ParagraphImageRight({section}: Props) {
  return (
    <section className="container">
      <div className="md:flex gap-10">
        <div className="w-full md:w-1/2">
          <PortableText value={section.content} />
        </div>
        <div className="w-full md:w-1/2 min-h-full rounded-3xl shadow-lg bg-cover bg-center" style={{backgroundImage: `url(${section.image})`}}></div>
      </div>
    </section>
  )
}
