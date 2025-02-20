import Link from 'next/link'
import React from 'react'

type Props = {}

export default function CtaMainBroker({}: Props) {
  return (
    <Link href="#" className="inline-block px-6 py-1 rounded-full border-2 border-black shadow-flat bg-primary text-primary-foreground hover:bg-secondary-light hover:text-black w-full md:max-w-96">
      <div className="text-center font-bold text-2xl font-noticia ">mejorar tu seguro</div>
    </Link>
  )
}
