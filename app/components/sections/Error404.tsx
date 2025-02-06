import LogoBlackRetail from '@/app/components/navigations/retail/LogoBlackRetail'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Error404({}: Props) {
  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="text-center bg-white rounded-3xl px-10 py-24 shadow-flat">
        <div className="flex justify-center mb-5">
          <LogoBlackRetail lang="es" />
        </div>
        <h1 className="text-6xl">No content available</h1>
        <div className="">
          <h2 className="text-2xl text-primary">404 error</h2>
          <p>
            Go back to <Link href="/es/">Home Page</Link>
          </p>
        </div>
      </div>
    </section>
  )
}
