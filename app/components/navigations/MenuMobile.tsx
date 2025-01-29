import {faBars} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import Hamburger from './Hamburger'

type Props = {}

export default function MenuMobile({}: Props) {
  return (
    <div className="container block lg:hidden">
      <div className="flex items-center justify-between bg-white rounded-full border-2 border-black shadow-flat px-8 py-4 font-bold font-noticia">
        <Image className="w-auto h-[30px]" src="/img/components/navigation/logoBlack.png" alt="ZeeGuros" width={'240'} height={'60'} />
        {/* <FontAwesomeIcon icon={faBars} className="w-[30px] h-[30px]" /> */}
        <Hamburger />
      </div>
    </div>
  )
}
