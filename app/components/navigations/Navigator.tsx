import React from 'react'
import MenuDesk from './MenuDesk'
import MenuMobile from './MenuMobile'

type Props = {}

export default function Navigator({}: Props) {
  return (
    <div className="sticky top-0 z-50">
      <MenuDesk />
      <MenuMobile />
    </div>
  )
}
