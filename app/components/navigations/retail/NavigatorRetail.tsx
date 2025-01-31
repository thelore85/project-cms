import React from 'react'

import MenuDesk from './MenuDeskRetail'
import MenuMobile from './MenuMobileRetail'

type Props = {}

export default function NavigatorRetail({}: Props) {
  return (
    <div className="sticky top-0 z-50">
      <MenuDesk />
      <MenuMobile />
    </div>
  )
}
