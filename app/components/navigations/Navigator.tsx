import React from 'react'
import MenuDesk from './MenuDesk'
import MenuMobile from './MenuMobile'

type Props = {}

export default function Navigator({}: Props) {
  return (
    <div>
      <MenuDesk />
      <MenuMobile />
    </div>
  )
}
