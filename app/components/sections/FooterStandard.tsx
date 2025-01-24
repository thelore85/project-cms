import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <section className="bg-gray-800">
      <div className="container py-28">
        <div className="flex justify-between gap-10">
          <div className="p-10 bg-slate-700 w-1/3">
            <Link href="/" className="block text-4xl font-bold">
              ZEEGUROS
            </Link>
          </div>
          <div className="p-10 bg-slate-700 w-1/3">
            <h3 className="font-bold">Sitemap</h3>
            <Link href="/" className="block">
              Homepage
            </Link>
            <Link href="/legal" className="block">
              Terms and Conditions
            </Link>
            <Link href="/blog" className="block">
              Blog
            </Link>
            <Link href="/admin" className="block">
              Admin
            </Link>
          </div>
          <div className="p-10 bg-slate-700 w-1/3">About</div>
        </div>
      </div>
    </section>
  )
}
