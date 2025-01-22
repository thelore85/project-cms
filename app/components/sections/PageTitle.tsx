import React from 'react'

type Props = {
  title: string
  description: string
}

export default function PageTitle({title, description}: Props) {
  return (
    <section className="bg-cover bg-center" style={{backgroundImage: `url('/img/components/hero/bg.jpg')`}}>
      <div className=" container text-gray-900 py-20">
        <div className="">
          <h1 className="text-6xl font-bold mb-4">{title || 'No title yet'}</h1>
          <p className="text-xl mb-6">{description || 'No description insert for this title page componet'}</p>
        </div>
      </div>
    </section>
  )
}
