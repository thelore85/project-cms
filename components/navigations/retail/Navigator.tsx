import React from 'react'
import MenuDesk from './MenuDeskRetail'
import MenuMobile from './MenuMobileRetail'
import MenuMobileRetail from './MenuMobileRetail'

type Props = {
  lang: string
}

export default function Navigator({lang}: Props) {
  return (
    <div>
      {/* <div className="sticky top-0 z-50"> */}
      <MenuDesk lang={lang} />
      <MenuMobileRetail lang={lang} />
    </div>
  )
}
