import {faFacebook, faInstagram, faLinkedin, faXTwitter} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faLocation, faLocationDot, faX} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import LangSelector from '@/components/utility/LangSelector'

type Props = {
  lang: string
}

export default function FooterRetail({lang}: Props) {
  return (
    <section id="footer" className="bg-foreground py-32 text-white">
      <div className="container">
        {/* ROW 1 */}
        <div className="md:flex justify-between gap-10 mb-24">
          <div className="p-10  w-1/3">
            <Link href={`/${lang}/home`} className="block text-4xl font-bold">
              Zeeguros
            </Link>
            <LangSelector />
          </div>
          <div className="p-10 w-1/3">
            <p className="font-bold text-xl mb-10">Contacts</p>
            <Link href={`/${lang}`} className="block mb-5">
              <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 inline-block me-3" />
              info@zeeguros.com
            </Link>
            <Link href={`/${lang}`} className="block mb-5">
              <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 inline-block me-3" />
              workwithus@zeeguros.com
            </Link>
            <Link href={`/${lang}`} className="block mb-5">
              <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 inline-block me-3" />
              marketing@zeeguros.com
            </Link>
            <span className="block mb-5 small">
              <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5 inline-block me-3" />
              Calle Valencia 1 - Valencia
            </span>
          </div>
          <div className="p-10 w-1/3">
            <p className="font-bold text-xl mb-10">Pages</p>
            <Link href={`/${lang}/home`} className="block mb-5">
              Homepage
            </Link>
            <Link href="/es/legal" className="block mb-5">
              Terms and Conditions
            </Link>
            <Link href="/es/blog" className="block mb-5">
              Blog
            </Link>
            <Link href="/admin" target="_blank" className="block mb-5">
              Admin
            </Link>
          </div>
        </div>
        {/* ROW 2  */}
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
