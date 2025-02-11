import {faHome, faPhone} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function CtaGroup({}: Props) {
  return (
    <div className="">
      <Link href="#" className="px-6 py-3 bg-primary text-white rounded-lg">
        <FontAwesomeIcon icon={faPhone} className="w-4 h-4 inline-block me-3" />
        Learn More
      </Link>
      <Link href="#" className="px-6 py-3 bg-secondary text-white rounded-lg">
        <FontAwesomeIcon icon={faHome} className="w-4 h-4 inline-block me-3" />
        Buy now
      </Link>
    </div>
  )
}
