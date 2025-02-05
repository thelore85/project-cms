import Link from 'next/link'
import React from 'react'
import LogoBlackBroker from './LogoBlackBroker'

type Props = {
  lang: string
}

export default function MenuDeskBroker({lang}: Props) {
  return (
    <div className="container hidden lg:block">
      <nav className="flex items-center justify-between bg-white rounded-full border-2 border-black shadow-flat px-8 py-4 font-bold font-noticia">
        <div className="flex items-center w-3/5 justify-left gap-10">
          <LogoBlackBroker lang={lang} />
          <Link href={`/${lang}/broker/#valueProposition`} className="hover:text-primary">
            <span>Sobre Nosotros</span>
          </Link>
          <Link href={`/${lang}/broker/#testimonials`} className="hover:text-primary">
            <span>Opiniones</span>
          </Link>
          <Link href={`/${lang}/broker/#faq`} className="hover:text-primary">
            <span>Faq</span>
          </Link>
        </div>
        <div className="">
          <Link href={`/${lang}`} className=" me-6 text-primary hover:text-foreground">
            <span>¿Eres Particular?</span>
          </Link>
          <Link href={`/${lang}/broker`} className="px-6 py-1 rounded-full border-2 border-black hover:bg-secondary ">
            <span className="">Iniciar sesión</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}
