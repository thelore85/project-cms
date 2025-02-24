'use client'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import LogoBlack from './LogoBlackRetail'
import {faBars, faX} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import {useEffect, useState} from 'react'
import CtaMain from '@/components/static/buttons/CtaMain'
import CtaBroker from '@/components/static/buttons/CtaBroker'

type Props = {
  lang: string
}

export default function SideNavRetail({lang}: Props) {
  const [open, setOpen] = useState(false)

  // Blocca lo scroll del body quando il menu è aperto
  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => document.body.classList.remove('overflow-hidden') // Pulizia all'unmount
  }, [open])

  return (
    <>
      {/* Bottone per aprire il menu */}
      <button onClick={() => setOpen(true)} className="">
        <FontAwesomeIcon icon={faBars} className="text-primary w-[30px] h-[30px]" />
      </button>

      {/* Menu visibile solo se `open` è true */}
      {open && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white p-5 z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center">
            <LogoBlack lang={lang} />
            <FontAwesomeIcon icon={faX} className="w-5 h-5 text-primary cursor-pointer" onClick={() => setOpen(false)} />
          </div>

          {/* Contenuto centrale */}
          <div className="py-20 flex-grow flex flex-col">
            <ul className="list-none text-3xl font-bold text-primary">
              {[
                {href: `/${lang}/home/#howTo`, label: 'Sobre Nosotros'},
                {href: `/${lang}/home/#faq`, label: 'FAQ'},
                {href: `/${lang}/home/#footer`, label: 'Contactos'},
                {href: `/${lang}/blog`, label: 'Blog'},
              ].map(({href, label}) => (
                <li key={href} className="mb-5">
                  <Link href={href} className="hover:text-primary" onClick={() => setOpen(false)}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer spostato in basso */}
          <div className="pb-5 text-gray-500">
            <div className="mb-5">{/* <CtaMain /> */}</div>
            <CtaBroker />
          </div>
        </div>
      )}
    </>
  )
}
