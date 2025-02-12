import Image from 'next/image'
import React from 'react'

type Props = {
  title: string
}

export default function HowToCardsTitleLeft({title}: Props) {
  return (
    <div className="mb-16 w-auto lg:max-w-[500px] lg:mb-0">
      <h2 className="text-center w-auto font-bold text-5xl">{title}</h2>
    </div>
  )
}
