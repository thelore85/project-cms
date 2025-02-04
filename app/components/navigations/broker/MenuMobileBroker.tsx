import React from 'react'
import SideNav from './SideNavBroker'
import LogoBlack from './LogoBlackBroker'

type Props = {}

export default function MenuMobileBroker({}: Props) {
  return (
    <div className="container block lg:hidden ">
      <div className="flex items-center justify-between bg-white rounded-full border-2 border-black shadow-flat px-8 py-4 font-bold font-noticia">
        <LogoBlack />
        <SideNav />
      </div>
    </div>
  )
}
