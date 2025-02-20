import React from 'react'
import {PortableText} from 'next-sanity'

type Props = {
  section: any
}

export default function Paragraph({section}: Props) {
  return (
    <section className="container">
      <PortableText value={section.content} />
    </section>
  )
}
