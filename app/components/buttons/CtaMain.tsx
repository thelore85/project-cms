import Link from 'next/link'
import React from 'react'

type Props = {}

export default function CtaMain({}: Props) {
  return (
    <Link href="#" className="inline-block px-6 py-1 rounded-full border-2 border-black shadow-flat bg-secondary hover:bg-secondary-light text-secondary-foreground font-bold text-2xl font-noticia w-full md:w-auto text-center">
      <div className="">mejorar tu seguro</div>
    </Link>
  )
}
