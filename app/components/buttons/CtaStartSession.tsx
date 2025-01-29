import Link from 'next/link'
import React from 'react'

type Props = {}

export default function CtaStartSession({}: Props) {
  return (
    <Link href="#" className="px-6 py-1 rounded-full border-2 border-black hover:bg-secondary text-center">
      <span className="">Iniciar sesión</span>
    </Link>
  )
}
