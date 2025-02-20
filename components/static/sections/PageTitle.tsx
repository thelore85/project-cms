import React from 'react'

type Props = {
  title: string
  description: string
}

export default function PageTitle({title, description}: Props) {
  return (
    <section className="bg-gradient text-primary-foreground mb-16">
      <div className=" container py-20">
        <h1 className="text-6xl font-bold mb-4">{title || 'No title yet'}</h1>
        <p className="text-xl">{description || 'No description insert for this title page componet'}</p>
      </div>
    </section>
  )
}
