import React from 'react'
import SideNavBroker from './SideNavBroker'
import LogoBlackBroker from './LogoBlackBroker'

type Props = {
  lang: string
}

export default function MenuMobileBroker({lang}: Props) {
  return (
    <div className="container block lg:hidden ">
      <div className="flex items-center justify-between bg-white rounded-full border-2 border-black shadow-flat px-8 py-4 font-bold font-noticia">
        <LogoBlackBroker lang={lang} />
        <SideNavBroker lang={lang} />
      </div>
    </div>
  )
}
