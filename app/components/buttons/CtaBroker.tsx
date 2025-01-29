import Link from 'next/link'
import React from 'react'

type Props = {}

export default function CtaBroker({}: Props) {
  return (
    <Link href="#" className="px-6 py-1 rounded-full border-2 border-black hover:bg-primary text-center">
      <span className="font-bold">¿Eres broker?</span>
    </Link>
  )
}
