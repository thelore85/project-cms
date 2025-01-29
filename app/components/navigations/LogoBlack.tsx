import Image from 'next/image'
import React from 'react'

type Props = {}

export default function LogoBlack({}: Props) {
  return (
    <div>
      <Image className="w-auto h-[40px]" src="/img/components/navigation/logoBlack.png" alt="ZeeGuros" width={'240'} height={'60'} />
    </div>
  )
}
