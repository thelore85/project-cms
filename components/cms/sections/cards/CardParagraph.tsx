import React from 'react'

import {PortableText} from 'next-sanity'

type Props = {
  section: any
}

export default function CardParagraph({section}: Props) {
  return (
    <section className="">
      <div className="bg-white m-auto max-w-[800px] px-10 py-20 rounded-3xl mb-20">
        <PortableText value={section.content} />
      </div>
    </section>
  )
}
