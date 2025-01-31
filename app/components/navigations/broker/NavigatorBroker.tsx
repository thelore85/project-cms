import React from 'react'
import MenuDeskBroker from './MenuDeskBroker'
import MenuMobileBroker from './MenuMobileBroker'

type Props = {}

export default function NavigatorBroker({}: Props) {
  return (
    <div>
      <MenuDeskBroker />
      <MenuMobileBroker />
    </div>
  )
}
