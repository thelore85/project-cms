import React from 'react'
import MenuDesk from './elements/MenuDesk'
import MenuMobileRetail from './elements/MenuMobile'

type Props = {
  lang: string
}

export default function NavigatorRetail({lang}: Props) {
  return (
    <div>
      <MenuDesk lang={lang} />
      <MenuMobileRetail lang={lang} />
    </div>
  )
}
