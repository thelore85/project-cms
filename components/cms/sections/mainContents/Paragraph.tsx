import React from 'react'

type Props = {
  section: any
}

export default function Paragraph({section}: Props) {
  console.log('j//////////// paragraph debug:', section)
  return (
    <section className="container">
      <h3 className="text-2xl font-bold">{section.title}</h3>
      <p>{section.content}</p>
    </section>
  )
}
