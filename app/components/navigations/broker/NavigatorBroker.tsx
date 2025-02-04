import React from 'react'
import MenuDeskBroker from './MenuDeskBroker'
import MenuMobileBroker from './MenuMobileBroker'

type Props = {}

export default function NavigatorBroker({}: Props) {
  return (
    <div className="sticky top-0 z-50">
      <MenuDeskBroker />
      <MenuMobileBroker />
    </div>
  )
}
