import React from 'react'
import MenuDeskBroker from './MenuDeskBroker'
import MenuMobileBroker from './MenuMobileBroker'

type Props = {
  lang: string
}

export default function NavigatorBroker({lang}: Props) {
  return (
    <div className="sticky top-0 z-50">
      <MenuDeskBroker lang={lang} />
      <MenuMobileBroker lang={lang} />
    </div>
  )
}
