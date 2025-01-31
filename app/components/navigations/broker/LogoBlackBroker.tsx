import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function LogoBlackBroker({}: Props) {
  return (
    <Link href="/broker">
      <Image className="w-auto h-[40px]" src="/img/components/navigation/logoBlack.png" alt="ZeeGuros" width={'240'} height={'60'} />
    </Link>
  )
}
