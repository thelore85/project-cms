import React from 'react'

type Props = {
  section: any
}

export default function Paragraph({section}: Props) {
  return (
    <section className="container">
      <h3 className="text-3xl font-bold mb-8">{section.title}</h3>
      <p>{section.content}</p>
    </section>
  )
}
