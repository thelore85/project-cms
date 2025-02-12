import Image from 'next/image'
import React from 'react'

type Props = {
  section: any
}

type LogoProps = {
  image: string
}

export default function PartnersBanner({section}: Props) {
  return (
    <section className="bg-primary py-10">
      <div className="flex gap-10 justify-between overflow-x-scroll overflow-hidden py-10">
        {section.logos.map((logo: LogoProps, index: number) => (
          <Image key={index} className="inline-block m-4 rounded-full w-[90px] h-[90px]" src={logo.image} alt="partner" width="200" height="200" />
        ))}
      </div>
    </section>
  )
}
