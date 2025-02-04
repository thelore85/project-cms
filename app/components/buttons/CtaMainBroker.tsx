import Link from 'next/link'
import React from 'react'

type Props = {}

export default function CtaMainBroker({}: Props) {
  return (
    <Link href="#" className="inline-block px-6 py-1 rounded-full border-2 border-black shadow-flat bg-secondary hover:bg-secondary-light w-full">
      <div className="text-center text-secondary-foreground font-bold text-2xl font-noticia ">Abrir cuenta</div>
    </Link>
  )
}
