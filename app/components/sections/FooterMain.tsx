import {faFacebook, faInstagram, faLinkedin, faXTwitter} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faLocation, faLocationDot, faX} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function FooterMain({}: Props) {
  return (
    <section id="footer" className="bg-foreground py-32 text-white">
      <div className="container">
        {/* SOCIAL ROW  */}
        <div>
          <div className="flex justify-center w-full border-b-2 p-4 mb-10">
            <FontAwesomeIcon icon={faFacebook} className="w-[30px] h-[30px] me-6" />
            <FontAwesomeIcon icon={faXTwitter} className="w-[30px] h-[30px] me-6" />
            <FontAwesomeIcon icon={faLinkedin} className="w-[30px] h-[30px] me-6" />
            <FontAwesomeIcon icon={faInstagram} className="w-[30px] h-[30px]" />
          </div>
          <div>
            <p className="text-center small">© 2025 Zeeguros </p>
          </div>
        </div>
      </div>
    </section>
  )
}
