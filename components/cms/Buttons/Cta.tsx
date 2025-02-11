import Link from 'next/link'
import React from 'react'

type Props = {
  urlPath: string
  text: string
}

export default function Cta({urlPath, text}: Props) {
  return (
    <Link id="ctaMain" href={`${urlPath}`} className="inline-block px-6 py-1 rounded-full border-2 border-black shadow-flat bg-secondary hover:bg-secondary-light w-full">
      <div className="text-center text-secondary-foreground font-bold text-2xl font-noticia ">{text}</div>
    </Link>
  )
}
