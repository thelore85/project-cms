import React from 'react'

type Props = {
  section: {
    title: string
    description: string
  }
}

export default function PageTitle({section}: Props) {
  return (
    <section className="bg-gradient text-primary-foreground mb-16">
      <div className=" container py-20">
        <h1 className="text-6xl font-bold mb-4">{section.title}</h1>
        <p className="text-xl">{section.description}</p>
      </div>
    </section>
  )
}
