import Link from 'next/link'
import React from 'react'

type Props = {}

export default function CtaMain({}: Props) {
  return (
    <Link id="ctaMain" href="#" className="inline-block px-6 py-1 rounded-full border-2 border-black shadow-flat bg-primary hover:bg-secondary-light w-full text-primary-foreground hover:text-black ">
      <div className="text-center font-bold text-2xl font-noticia ">mejorar tu seguro</div>
    </Link>
  )
}
