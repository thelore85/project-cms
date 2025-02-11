import useStore from '@/store/store'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  lang: string
}

export default function LogoBlackRetail({lang}: Props) {
  return (
    <Link href={`/${lang}/home`}>
      <Image className="w-auto h-[40px]" src="/img/components/navigation/logoBlack.png" alt="ZeeGuros" width={'240'} height={'60'} />
    </Link>
  )
}
