import {faBars} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import SideNav from './SideNavRetail'
import LogoBlack from './LogoBlackRetail'

type Props = {}

export default function MenuMobileRetail({}: Props) {
  return (
    <div className="container block lg:hidden ">
      <div className="flex items-center justify-between bg-white rounded-full border-2 border-black shadow-flat px-8 py-4 font-bold font-noticia">
        <LogoBlack />
        <SideNav />
      </div>
    </div>
  )
}
